import { NextResponse } from "next/server";
import { RED_DIRT_ALLOWED_EMAIL, RED_DIRT_PUBLISHABLE_KEY, RED_DIRT_SUPABASE_URL } from "@/lib/redDirtCloud";
import { OFFICE_BRANDS, businessOf, type OfficeBusiness } from "@/lib/officeBrands";

export const runtime = "nodejs";
const apiHeaders = (token: string) => ({
  apikey: RED_DIRT_PUBLISHABLE_KEY,
  Authorization: "Bearer " + token,
});
const escape = (str: unknown) => String(str??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
const money = (n: number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);

type Item = { description?:string; quantity?:number; price?:number };
type Invoice = {
  id: string; number:string; kind:string; status:string; customer:string; email:string; businessKey?:OfficeBusiness;
  title:string; address?:string; jobAddress?:string; phone?:string; issueDate?:string;
  dueDate?:string; poNumber?:string; terms?:string; notes?:string; taxRate:number;
  sourceInvoice?:string; receiptDate?:string; receiptMethod?:string; receiptReference?:string; receiptBalance?:number;
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
      return NextResponse.json({message:"Invalid document ID."},{status:400});
    }
    const url=RED_DIRT_SUPABASE_URL+"/rest/v1/red_dirt_office_documents?id=eq."+encodeURIComponent(body.id)+"&owner_id=eq."+encodeURIComponent(user.id)+"&select=id,document,emailed_at";
    const read=await fetch(url,{headers:apiHeaders(token),cache:"no-store"});
    if(!read.ok) return NextResponse.json({message:"Could not retrieve document."},{status:502});
    const rows=await read.json() as {id:string;document:Invoice;emailed_at:string|null}[];
    const row=rows[0];
    if(!row||!["estimate","invoice","receipt"].includes(row.document.kind)) return NextResponse.json({message:"Document not found."},{status:404});
    if(row.emailed_at && Date.now()-new Date(row.emailed_at).getTime()<60_000) {
      return NextResponse.json({message:"This document was already emailed recently. Please wait before sending it again."},{status:429});
    }
    const d=row.document;
    const isReceipt=d.kind==="receipt";
    const isEstimate=d.kind==="estimate";
    const label=isReceipt?"Receipt":isEstimate?"Estimate":"Invoice";
    const selectedBusiness=businessOf(d);
    const brand=OFFICE_BRANDS[selectedBusiness];
    const accent=selectedBusiness==="lyn_lilis"?"#b75b78":"#9f3a2a";
    const headerBackground=selectedBusiness==="lyn_lilis"?"#49283c":"#211d1b";
    const headerSubtitle=selectedBusiness==="lyn_lilis"?"#ffe1eb":"#d8c2a5";
    const email=String(d.email||"").trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254) {
      return NextResponse.json({message:"Add a valid customer email first."},{status:400});
    }
    if(!Array.isArray(d.lines)||!d.lines.length||d.lines.length>100) {
      return NextResponse.json({message:"Document needs line items."},{status:400});
    }
    if(!process.env.RESEND_API_KEY) return NextResponse.json({message:"Email service is not configured."},{status:503});
    const subtotal=d.lines.reduce((sum,item)=>sum+Math.max(0,Number(item.quantity)||0)*Math.max(0,Number(item.price)||0),0);
    const tax=subtotal*Math.max(0,Math.min(100,Number(d.taxRate)||0))/100;
    const total=Math.round((subtotal+tax)*100)/100;
    if(isReceipt && (total<=0 || !/^\d{4}-\d{2}-\d{2}$/.test(d.receiptDate||"") || !d.receiptMethod?.trim())) {
      return NextResponse.json({message:"Receipt needs a positive amount, payment date and method."},{status:400});
    }
    const paid=Array.isArray(d.payments)?d.payments.reduce((sum,p)=>sum+Number(p.amount||0),0):0;
    const balance=Math.max(0,total-paid);
    const rowHtml=d.lines.map(item=>'<tr><td style="padding:12px 8px;border-bottom:1px solid #eadfd4">'+escape(item.description)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+escape(item.quantity)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+money(Number(item.price)||0)+'</td><td style="padding:12px 8px;border-bottom:1px solid #eadfd4;text-align:right">'+money((Number(item.quantity)||0)*(Number(item.price)||0))+'</td></tr>').join("");
    const html='<div style="max-width:690px;margin:0 auto;font-family:Arial,sans-serif;color:#29231f;line-height:1.5">'+
      '<div style="padding:22px;background:'+headerBackground+';color:white"><h1 style="margin:0;font-size:25px">'+escape(brand.label)+'</h1><div style="color:'+headerSubtitle+';letter-spacing:1px;font-size:12px;font-weight:700">'+escape(brand.subLabel)+'</div></div>'+
      '<div style="padding:25px;border:1px solid #eadfd4"><h2 style="margin:0">'+label+' '+escape(d.number)+'</h2>'+
      '<p style="color:#6d5e51">Date: '+escape(d.issueDate)+(isReceipt?' · Paid on: '+escape(d.receiptDate):isEstimate?' · Estimate valid until: '+escape(d.dueDate):' · Due: '+escape(d.dueDate))+'</p>'+
      '<p><strong>'+(isReceipt?'Received from':'Bill to')+':</strong> '+escape(d.customer)+(d.address?'<br>'+escape(d.address):'')+'</p>'+
      (d.jobAddress?'<p><strong>Job location:</strong> '+escape(d.jobAddress)+'</p>':'')+
      (d.poNumber?'<p><strong>PO / Unit:</strong> '+escape(d.poNumber)+'</p>':'')+
      (isReceipt?'<p><strong>Payment method:</strong> '+escape(d.receiptMethod)+'</p>':'')+
      (isReceipt&&d.receiptReference?'<p><strong>Payment reference:</strong> '+escape(d.receiptReference)+'</p>':'')+
      (isReceipt&&d.sourceInvoice?'<p><strong>For invoice:</strong> '+escape(d.sourceInvoice)+'</p>':'')+
      '<h3>'+escape(d.title)+'</h3>'+
      '<table style="border-collapse:collapse;width:100%;font-size:13px"><thead><tr style="background:#f7f1ec"><th style="text-align:left;padding:10px 8px">Work / Service</th><th style="text-align:right">Qty</th><th style="text-align:right">Rate</th><th style="text-align:right">Amount</th></tr></thead><tbody>'+rowHtml+'</tbody></table>'+
      '<div style="margin:20px 0 0 auto;max-width:260px;text-align:right">'+
      '<p>Subtotal: <strong>'+money(subtotal)+'</strong></p>'+(tax>0?'<p>Sales tax: <strong>'+money(tax)+'</strong></p>':'')+
      '<h2 style="border-top:2px solid '+accent+';padding-top:12px">'+(isReceipt?'Amount received: ':isEstimate?'Estimated total: ':'Total: ')+money(total)+'</h2>'+
      (!isReceipt&&!isEstimate&&paid>0?'<p>Paid: '+money(paid)+'</p>':'')+
      (isReceipt?(typeof d.receiptBalance==='number'?'<p>Invoice balance after payment: '+money(d.receiptBalance)+'</p>':''):isEstimate?'<p>This is an estimate, not a payment request.</p>':'<h2 style="color:'+accent+'">Balance due: '+money(balance)+'</h2>')+'</div>'+
      (d.notes?'<p><strong>Notes:</strong><br>'+escape(d.notes).replaceAll("\n","<br>")+'</p>':'')+
      (d.terms?'<p><strong>Terms:</strong><br>'+escape(d.terms).replaceAll("\n","<br>")+'</p>':'')+
      '<hr style="border:0;border-top:1px solid #eadfd4"><p>Questions? Call or text <a href="tel:'+escape(brand.phoneHref)+'">'+escape(brand.phone)+'</a>'+(brand.secondaryPhone?' or '+escape(brand.secondaryPhone):'')+' or reply to this email.</p>'+
      '<p>Thank you for your business!<br><a href="'+escape(brand.website)+'">'+escape(brand.websiteLabel)+'</a></p></div></div>';
    const from=selectedBusiness==="lyn_lilis"
      ?(process.env.LYN_LILIS_OFFICE_FROM_EMAIL||"Lyn & Lili's Tidy House <quotes@hometownwebservicesar.cc>")
      :(process.env.QUOTE_FROM_EMAIL||"Red Dirt Property Services LLC <quotes@hometownwebservicesar.cc>");
    const sent=await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{Authorization:"Bearer "+process.env.RESEND_API_KEY,"Content-Type":"application/json"},
      body:JSON.stringify({
        from, to:[email], reply_to:brand.email,
        subject:label+" "+d.number+" from "+brand.name,
        html,
        text:label+" "+d.number+"\n"+brand.name+"\n"+d.title+"\n"+(isReceipt?"Amount received: "+money(total)+"\nPaid on: "+d.receiptDate+"\nMethod: "+d.receiptMethod+(d.sourceInvoice?"\nInvoice: "+d.sourceInvoice:""):isEstimate?"Estimated total: "+money(total)+"\nValid until: "+d.dueDate:"Total: "+money(total)+"\nBalance due: "+money(balance)+"\nDue: "+d.dueDate)+"\n\nQuestions? "+brand.phone+(brand.secondaryPhone?" / "+brand.secondaryPhone:"")+"\n"+brand.website,
      })
    });
    if(!sent.ok) {
      console.error("Red Dirt office email send error",sent.status,await sent.text());
      return NextResponse.json({message:"Email could not be sent. Check the sender configuration and try again."},{status:502});
    }
    const nextStatus=isReceipt||d.status==="paid"?"paid":"sent";
    const updated={...d,status:nextStatus,updatedAt:new Date().toISOString()};
    const patch=await fetch(RED_DIRT_SUPABASE_URL+"/rest/v1/red_dirt_office_documents?id=eq."+encodeURIComponent(row.id),{
      method:"PATCH",
      headers:{...apiHeaders(token),"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify({document:updated,emailed_at:new Date().toISOString(),updated_at:updated.updatedAt})
    });
    if(!patch.ok) console.error("Office document emailed but sending status could not be saved",patch.status);
    return NextResponse.json({ok:true,emailed:true,statusRecorded:patch.ok});
  } catch(err) {
    console.error("Red Dirt office delivery error",err);
    return NextResponse.json({message:"Could not send office email."},{status:500});
  }
}
