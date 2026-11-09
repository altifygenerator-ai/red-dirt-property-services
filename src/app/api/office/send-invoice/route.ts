import { NextResponse } from "next/server";
import { RED_DIRT_ALLOWED_EMAIL, RED_DIRT_PUBLISHABLE_KEY, RED_DIRT_SUPABASE_URL } from "@/lib/redDirtCloud";
import { siteData } from "@/data/site";

export const runtime = "nodejs";
const apiHeaders = (token: string) => ({
  apikey: RED_DIRT_PUBLISHABLE_KEY,
  Authorization: "Bearer " + token,
});
const escape = (str: unknown) => String(str??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
const money = (n: number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);

type Item = { description?:string; quantity?:number; price?:number };
type Invoice = {
  id: string; number:string; kind:string; status:string; customer:string; email:string;
  title:string; address?:string; jobAddress?:string; phone?:string; issueDate?:string;
  dueDate?:string; poNumber?:string; terms?:string; notes?:string; taxRate:number;
  lines:Item[]; payments:{amount:number}[]; updatedAt:string;
};

export async function POST(request: Request) {
  try {
    const bearer=request.headers.get("authorization") || "";
    if(!/^Bearer\s+[^\s]+$/.test(bearer)) return NextResponse.json({message:"Please sign in."},{status:401});
    const token=bearer.slice(7);
    const userResponse=await fetch(RED_DIRT_SUPABASE_URL+"/auth/v1/user",{
      headers:apiHeaders(token),cache:"no-store",
    });
    if(!userResponse.ok) return NextResponse.json({message:"Session expired. Please sign in again."},{status:401});
    const user=await userResponse.json() as {email?:string;id?:string;email_confirmed_at?:string};
    if(!user.id||user.email?.toLowerCase()!==RED_DIRT_ALLOWED_EMAIL||!user.email_confirmed_at) {
      return NextResponse.json({message:"Not authorized."},{status:403});
    }
    const body=await request.json().catch(()=>({})) as {id?:string};
    if(!body.id||!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/.test(body.id)) {
      return NextResponse.json({message:"Invalid invoice ID."},{status:400});
    }
    const url=RED_DIRT_SUPABASE_URL+"/rest/v1/red_dirt_office_documents?id=eq."+encodeURIComponent(body.id)+"&owner_id=eq."+encodeURIComponent(user.id)+"&select=id,document,emailed_at";
    const read=await fetch(url,{headers:apiHeaders(token),cache:"no-store"});
    if(!read.ok) return NextResponse.json({message:"Could not retrieve invoice."},{status:502});
    const rows=await read.json() as {id:string;document:Invoice;emailed_at:string|null}[];
    const row=rows[0];
    if(!row||row.document.kind!=="invoice") return NextResponse.json({message:"Invoice not found."},{status:404});
    if(row.emailed_at && Date.now()-new Date(row.emailed_at).getTime()<60_000) {
      return NextResponse.json({message:"This invoice was already emailed recently. Please wait before sending it again."},{status:429});
    }
    const d=row.document;
    const email=String(d.email||"").trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254) {
      return NextResponse.json({message:"Add a valid customer email to the invoice first."},{status:400});
    }
    if(!Array.isArray(d.lines)||!d.lines.length||d.lines.length>100) {
      return NextResponse.json({message:"Invoice needs line items."},{status:400});
    }
    if(!process.env.RESEND_API_KEY) return NextResponse.json({message:"Email service is not configured."},{status:503});
    const subtotal=d.lines.reduce((sum,item)=>sum+Math.max(0,Number(item.quantity)||0)*Math.max(0,Number(item.price)||0),0);
    const tax=subtotal*Math.max(0,Math.min(100,Number(d.taxRate)||0))/100;
    const total=Math.round((subtotal+tax)*100)/100;
    const paid=Array.isArray(d.payments)?d.payments.reduce((sum,p)=>sum+Number(p.amount||0),0):0;
    const balance=Math.max(0,total-paid);
    const rowHtml=d.lines.map(item=>'<tr><td style="padding:12px 8px;border-bottom:1px solid #eadfd4">'+escape(item.description)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+escape(item.quantity)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+money(Number(item.price)||0)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+money((Number(item.quantity)||0)*(Number(item.price)||0))+'</td></tr>').join("");
    const html='<div style="max-width:690px;margin:0 auto;font-family:Arial,sans-serif;color:#29231f;line-height:1.5">'+
      '<div style="padding:22px;background:#211d1b;color:white"><h1 style="margin:0;font-size:25px">RED DIRT</h1><div style="color:#d8c2a5;letter-spacing:2px;font-size:12px;font-weight:700">PROPERTY SERVICES LLC</div></div>'+
      '<div style="padding:25px;border:1px solid #eadfd4"><h2 style="margin:0">Invoice '+escape(d.number)+'</h2>'+
      '<p style="color:#6d5e51">Date: '+escape(d.issueDate)+' · Due: '+escape(d.dueDate)+'</p>'+
      '<p><strong>Bill to:</strong> '+escape(d.customer)+(d.address?'<br>'+escape(d.address):'')+'</p>'+
      (d.jobAddress?'<p><strong>Job location:</strong> '+escape(d.jobAddress)+'</p>':'')+
      (d.poNumber?'<p><strong>PO / Unit:</strong> '+escape(d.poNumber)+'</p>':'')+
      '<h3>'+escape(d.title)+'</h3>'+
      '<table style="border-collapse:collapse;width:100%;font-size:13px"><thead><tr style="background:#f7f1ec"><th style="text-align:left;padding:10px 8px">Work / Service</th><th style="text-align:right">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Amount</th></tr></thead><tbody>'+rowHtml+'</tbody></table>'+
      '<div style="margin:20px 0 0 auto;max-width:260px;text-align:right">'+
      '<p>Subtotal: <strong>'+money(subtotal)+'</strong></p>'+(tax>0?'<p>Sales tax: <strong>'+money(tax)+'</strong></p>':'')+
      '<h2 style="border-top:2px solid #9f3a2a;padding-top:12px">Total: '+money(total)+'</h2>'+
      (paid>0?'<p>Paid: '+money(paid)+'</p>':'')+
      '<h2 style="color:#9f3a2a">Balance due: '+money(balance)+'</h2></div>'+
      (d.notes?'<p><strong>Notes:</strong><br>'+escape(d.notes).replaceAll("\n","<br>")+'</p>':'')+
      (d.terms?'<p><strong>Terms:</strong><br>'+escape(d.terms).replaceAll("\n","<br>")+'</p>':'')+
      '<hr style="border:0;border-top:1px solid #eadfd4"><p>Questions? Call or text <a href="tel:8708282562">870-828-2562</a> or reply to this email.</p>'+
      '<p>Thank you for your business!<br><a href="https://www.reddirtpropertyservicesar.com">reddirtpropertyservicesar.com</a></p></div></div>';
    const from=process.env.QUOTE_FROM_EMAIL||"Red Dirt Property Services LLC <quotes@hometownwebservicesar.cc>";
    const sent=await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{Authorization:"Bearer "+process.env.RESEND_API_KEY,"Content-Type":"application/json"},
      body:JSON.stringify({
        from, to:[email], reply_to:siteData.email,
        subject:"Invoice "+d.number+" from Red Dirt Property Services",
        html,
        text:"Invoice "+d.number+"\n"+d.title+"\nTotal: "+money(total)+"\nBalance due: "+money(balance)+"\nDue: "+d.dueDate+"\n\nQuestions? "+siteData.phone+"\n"+siteData.siteUrl,
      })
    });
    if(!sent.ok) {
      console.error("Red Dirt invoice email send error",sent.status,await sent.text());
      return NextResponse.json({message:"Email could not be sent. Check the sender configuration and try again."},{status:502});
    }
    const nextStatus=d.status==="paid"?"paid":"sent";
    const updated={...d,status:nextStatus,updatedAt:new Date().toISOString()};
    const patch=await fetch(RED_DIRT_SUPABASE_URL+"/rest/v1/red_dirt_office_documents?id=eq."+encodeURIComponent(row.id),{
      method:"PATCH",
      headers:{...apiHeaders(token),"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify({document:updated,emailed_at:new Date().toISOString(),updated_at:updated.updatedAt})
    });
    if(!patch.ok) console.error("Invoice emailed but sending status could not be saved",patch.status);
    return NextResponse.json({ok:true,emailed:true,statusRecorded:patch.ok});
  } catch(err) {
    console.error("Red Dirt invoice delivery error",err);
    return NextResponse.json({message:"Could not send invoice email."},{status:500});
  }
}
