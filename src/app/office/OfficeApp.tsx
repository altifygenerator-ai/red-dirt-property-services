"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

type Kind = "estimate" | "invoice";
type Status = "draft" | "sent" | "approved" | "declined" | "unpaid" | "partial" | "paid";
type Line = { id: string; description: string; quantity: number; price: number };
type Payment = { id: string; amount: number; date: string; method: string };
type Document = {
  id: string; number: string; kind: Kind; status: Status;
  customer: string; phone: string; email: string; address: string;
  title: string; jobAddress: string; poNumber: string;
  issueDate: string; dueDate: string; notes: string; terms: string;
  lines: Line[]; taxRate: number; payments: Payment[];
  sourceEstimate?: string; updatedAt: string;
};
type View = "dashboard" | "documents" | "editor";
const STORE = "red-dirt-office-v1";
const currency = (amount: number) => new Intl.NumberFormat("en-US", {style:"currency",currency:"USD"}).format(amount || 0);
const today = () => {
  const d = new Date();
  return [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"), String(d.getDate()).padStart(2,"0")].join("-");
};
const plusDays = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate()+days);
  return [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"), String(d.getDate()).padStart(2,"0")].join("-");
};
const uuid = () => typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2);
const totals = (d: Document) => {
  const subtotal = d.lines.reduce((sum,line)=>sum+Math.max(0,Number(line.quantity)||0)*Math.max(0,Number(line.price)||0),0);
  const tax = subtotal*Math.max(0,Number(d.taxRate)||0)/100;
  const total = Math.round((subtotal+tax)*100)/100;
  const paid = d.payments.reduce((sum,p)=>sum+Number(p.amount||0),0);
  return { subtotal, tax, total, paid, balance: Math.max(0,total-paid) };
};
function blank(kind: Kind): Document {
  return {
    id:"",number:"",kind,status:kind==="estimate"?"draft":"unpaid",
    customer:"",phone:"",email:"",address:"",title:"",jobAddress:"",poNumber:"",
    issueDate:today(),dueDate:kind==="invoice"?plusDays(14):plusDays(14),
    notes:"",terms:kind==="estimate"?"Estimate based on the scope described above. Any additional work will be discussed and approved before proceeding.":"Payment is due by the date shown. Please reference the invoice number with your payment.",
    lines:[{id:uuid(),description:"",quantity:1,price:0}],taxRate:0,payments:[],updatedAt:new Date().toISOString()
  };
}
function summary(d: Document): string {
  const t=totals(d);
  return [
    "Red Dirt Property Services LLC", d.kind==="estimate"?"ESTIMATE "+d.number:"INVOICE "+d.number,
    d.title, "For: "+d.customer, "Job: "+(d.jobAddress||d.address||"Not specified"),
    ...d.lines.map(line=>line.description+" • "+line.quantity+" x "+currency(line.price)+" = "+currency(Number(line.quantity)*Number(line.price))),
    "Subtotal: "+currency(t.subtotal), ...(d.taxRate>0?["Tax: "+currency(t.tax)]:[]),
    "Total: "+currency(t.total), ...(d.kind==="invoice"?["Balance due: "+currency(t.balance),"Due: "+d.dueDate]:[]),
    d.notes, d.terms, "Questions? Call or text 870-828-2562", "reddirtpropertyservicesar.com"
  ].filter(Boolean).join("\n");
}
function normalizeDocs(input: unknown): Document[] {
  if (!Array.isArray(input) || input.length>5000) throw new Error("Invalid backup file.");
  return input.map((d: unknown) => {
    if (!d || typeof d!=="object") throw new Error("Invalid document.");
    const v=d as Partial<Document>;
    if (typeof v.id!=="string"||typeof v.number!=="string"||!["estimate","invoice"].includes(v.kind||"")||!Array.isArray(v.lines)||!Array.isArray(v.payments)) throw new Error("Invalid document data.");
    return v as Document;
  });
}

export default function OfficeApp() {
  const [docs,setDocs] = useState<Document[]>([]);
  const [ready,setReady] = useState(false);
  const [view,setView] = useState<View>("dashboard");
  const [editor,setEditor] = useState<Document|null>(null);
  const [printDoc,setPrintDoc] = useState<Document|null>(null);
  const [query,setQuery] = useState("");
  const [filter,setFilter] = useState<"all"|"estimate"|"invoice">("all");
  const [alert,setAlert] = useState("");
  const [paymentAmount,setPaymentAmount] = useState("");
  const [paymentMethod,setPaymentMethod] = useState("Cash");
  const [storageError,setStorageError] = useState("");

  useEffect(()=>{
    try {
      const saved=localStorage.getItem(STORE);
      if(saved){
        const parsed=JSON.parse(saved) as {documents?:unknown};
        setDocs(normalizeDocs(parsed.documents||[]));
      }
    } catch { setStorageError("Saved data could not be opened. Do not clear your browser data. You may need to restore a backup."); }
    setReady(true);
    if("serviceWorker" in navigator) navigator.serviceWorker.register("/office-sw.js",{scope:"/office"}).catch(()=>{});
  },[]);
  useEffect(()=>{
    if(!ready || storageError) return;
    try { localStorage.setItem(STORE,JSON.stringify({version:1,documents:docs})); }
    catch { setStorageError("Could not save to this device. Export a backup now and check available browser storage."); }
  },[docs,ready,storageError]);

  const sorted=useMemo(()=>[...docs].sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt)),[docs]);
  const shown=useMemo(()=>sorted.filter(d=>(filter==="all"||d.kind===filter) && [d.number,d.customer,d.title,d.jobAddress,d.poNumber].join(" ").toLowerCase().includes(query.toLowerCase())),[sorted,query,filter]);
  const estimates=docs.filter(d=>d.kind==="estimate"&&["draft","sent"].includes(d.status));
  const invoices=docs.filter(d=>d.kind==="invoice"&&totals(d).balance>0.009);
  const outstanding=invoices.reduce((sum,d)=>sum+totals(d).balance,0);
  const paid=docs.filter(d=>d.kind==="invoice").reduce((sum,d)=>sum+totals(d).paid,0);

  function openNew(kind: Kind) {setEditor(blank(kind));setView("editor");setAlert("");}
  function openEdit(d: Document) {setEditor(JSON.parse(JSON.stringify(d)) as Document);setView("editor");setAlert("");}
  function update<K extends keyof Document>(key:K,value:Document[K]) {setEditor(prev=>prev?{...prev,[key]:value}:null);}
  function saveDocument() {
    if(!editor) return;
    if(!editor.customer.trim() || !editor.title.trim() || !editor.lines.some(l=>l.description.trim())) {
      setAlert("Add the customer's name, job title, and at least one line item.");return;
    }
    const maxNum=docs.reduce((m,d)=>Math.max(m,Number(d.number.match(/\d+$/)?.[0]||0)),0);
    const incoming={...editor,id:editor.id||uuid(),number:editor.number||("RD-"+(editor.kind==="estimate"?"EST":"INV")+"-"+String(maxNum+1).padStart(4,"0")),updatedAt:new Date().toISOString(),lines:editor.lines.filter(l=>l.description.trim()).map(l=>({...l,quantity:Math.max(0,Number(l.quantity)||0),price:Math.max(0,Number(l.price)||0)})),taxRate:Math.max(0,Math.min(100,Number(editor.taxRate)||0))};
    setDocs(prev=>[incoming,...prev.filter(d=>d.id!==incoming.id)]);
    setEditor(null);setView("documents");setAlert("Saved on this device.");
  }
  function changeStatus(d: Document,status:Status) {
    setDocs(prev=>prev.map(item=>item.id===d.id?{...item,status,updatedAt:new Date().toISOString()}:item));
  }
  function convert(d: Document) {
    const copy=JSON.parse(JSON.stringify(d)) as Document;
    setEditor({...copy,id:"",number:"",kind:"invoice",status:"unpaid",sourceEstimate:d.number,payments:[],issueDate:today(),dueDate:plusDays(14),terms:"Payment due by the date shown. Please reference the invoice number with payment.",updatedAt:new Date().toISOString()});
    setView("editor");setAlert("Review the invoice details, then save.");
  }
  function addPayment(d: Document) {
    const amount=Number(paymentAmount);
    if(!Number.isFinite(amount)||amount<=0||amount>totals(d).balance+0.01) {setAlert("Enter a payment amount greater than $0 and no more than the remaining balance.");return;}
    const payments=[...d.payments,{id:uuid(),amount:Math.round(amount*100)/100,date:today(),method:paymentMethod}];
    const updated={...d,payments,status:(totals({...d,payments}).balance<0.01?"paid":"partial") as Status,updatedAt:new Date().toISOString()};
    setDocs(prev=>prev.map(v=>v.id===d.id?updated:v));
    setPaymentAmount("");setAlert("Payment recorded.");
  }
  function deleteDoc(d: Document) {
    if(!window.confirm("Delete "+d.number+" from this device? This cannot be undone without a backup.")) return;
    setDocs(prev=>prev.filter(item=>item.id!==d.id));
    setAlert("Document deleted.");
  }
  function print(d: Document) {setPrintDoc(d);setTimeout(()=>window.print(),180);}
  function exportData() {
    const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),documents:docs},null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a");
    a.href=url; a.download="red-dirt-office-backup-"+today()+".json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    setAlert("Backup downloaded. Save it somewhere safe.");
  }
  async function importData(event:ChangeEvent<HTMLInputElement>) {
    const f=event.target.files?.[0];event.target.value="";if(!f)return;
    try {
      if(f.size>8_000_000)throw new Error("Backup is too large.");
      const parsed=JSON.parse(await f.text()) as {documents?:unknown};
      const incoming=normalizeDocs(parsed.documents);
      if(!window.confirm("Replace all "+docs.length+" current documents with "+incoming.length+" documents from the backup?"))return;
      setStorageError("");setDocs(incoming);setView("documents");setAlert("Backup restored.");
    } catch(e) {setAlert(e instanceof Error?e.message:"Could not import backup.");}
  }
  async function copySummary(d:Document) {
    try {await navigator.clipboard.writeText(summary(d));setAlert("Document summary copied. You can paste it into a text or email.");}
    catch {setAlert("Clipboard unavailable. Use Print / Save PDF instead.");}
  }
  function emailSummary(d:Document) {
    const subject=encodeURIComponent((d.kind==="estimate"?"Estimate ":"Invoice ")+d.number+" — Red Dirt Property Services");
    const body=encodeURIComponent(summary(d));
    window.location.href="mailto:"+encodeURIComponent(d.email||"")+"?subject="+subject+"&body="+body;
  }
  const input=(key:keyof Document,label:string,opts?:{type?:string;placeholder?:string;required?:boolean})=>(
    <label className="rdo-field" key={key}><span>{label}</span><input type={opts?.type||"text"} value={String(editor?.[key]??"")} onChange={e=>update(key,e.target.value as never)} placeholder={opts?.placeholder||""} required={opts?.required}/></label>
  );

  if(!ready) return <div className="rd-office"><div className="rdo-loading">Opening Red Dirt Office…</div></div>;
  return <div className="rd-office">
    <div className="rdo-top"><div className="rdo-top-inner">
      <a href="/" className="rdo-brand" aria-label="Return to Red Dirt website"><img src="/images/logo2.png" alt="" width="44" height="44"/><span>RED DIRT <small>OFFICE</small></span></a>
      <span className="rdo-top-sub">ESTIMATES & INVOICES</span>
      <a href="/" className="rdo-site">Main website ↗</a>
    </div></div>
    <main className="rdo-wrap">
      <div className="rdo-heading"><div><p className="rdo-kicker">Red Dirt Property Services LLC</p><h1>{view==="editor"?(editor?.number||("New "+editor?.kind)) : view==="documents"?"Documents":"Your office"}</h1><p className="rdo-sub">Simple estimates, invoices and payment tracking, built for jobs on the go.</p></div><div className="rdo-quick"><button className="rdo-btn rdo-btn-outline" onClick={()=>openNew("estimate")}>+ Estimate</button><button className="rdo-btn rdo-btn-primary" onClick={()=>openNew("invoice")}>+ Invoice</button></div></div>
      <div className="rdo-device-note"><strong>Device-only records.</strong> This version saves to this browser, not a shared online account. It does not sync between your phone and computer. Use Export Backup regularly, especially before changing phones or clearing browser data.</div>
      {storageError?<div className="rdo-error" role="alert">{storageError}</div>:null}
      {alert?<div className="rdo-notice" role="status">{alert}<button aria-label="Dismiss" onClick={()=>setAlert("")}>×</button></div>:null}
      <nav className="rdo-nav" aria-label="Office navigation"><button className={view==="dashboard"?"active":""} onClick={()=>{setView("dashboard");setEditor(null);}}>Overview</button><button className={view==="documents"?"active":""} onClick={()=>{setView("documents");setEditor(null);}}>All documents</button><button className={view==="editor"?"active":""} onClick={()=>{if(!editor)setEditor(blank("estimate"));setView("editor");}}>Editor</button></nav>
      {view==="dashboard"&&<><section className="rdo-stats"><div className="rdo-stat"><span>Open estimates</span><strong>{estimates.length}</strong><small>Draft or waiting on a decision</small></div><div className="rdo-stat"><span>Unpaid invoices</span><strong>{invoices.length}</strong><small>{currency(outstanding)} outstanding</small></div><div className="rdo-stat"><span>Payments recorded</span><strong>{currency(paid)}</strong><small>Across saved invoices</small></div></section><div className="rdo-panel"><div className="rdo-panel-head"><h2>Recent work</h2><button className="rdo-text-btn" onClick={()=>setView("documents")}>See all →</button></div>{sorted.length?sorted.slice(0,6).map(d=>renderRow(d)):<div className="rdo-empty"><h3>Ready for your first estimate?</h3><p>Create a quote, add line items, then print or save a professional PDF for the customer.</p><button className="rdo-btn rdo-btn-primary" onClick={()=>openNew("estimate")}>Create estimate</button></div>}</div></>}
      {view==="documents"&&<section className="rdo-panel"><div className="rdo-panel-head"><h2>Estimates & invoices</h2><span>{shown.length} found</span></div><div className="rdo-filters"><input type="search" aria-label="Search documents" placeholder="Search customer, job, or number…" value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="Filter document type" value={filter} onChange={e=>setFilter(e.target.value as typeof filter)}><option value="all">All documents</option><option value="estimate">Estimates</option><option value="invoice">Invoices</option></select></div>{shown.length?shown.map(d=>renderRow(d)):<div className="rdo-empty"><p>No documents match yet.</p></div>}</section>}
      {view==="editor"&&editor&&<section className="rdo-editor"><div className="rdo-panel-head"><h2>{editor.number||"New "+editor.kind}</h2><button className="rdo-text-btn" onClick={()=>{setEditor(null);setView("documents");}}>Cancel</button></div><div className="rdo-form-grid">
        {input("customer","Customer / Company *",{required:true,placeholder:"Customer name or apartment manager"})}
        {input("title","Job title *",{required:true,placeholder:"Property cleanup, driveway work..."})}
        {input("phone","Customer phone",{type:"tel"})}
        {input("email","Customer email",{type:"email"})}
        {input("address","Billing address",{placeholder:"Street, city, state, ZIP"})}
        {input("jobAddress","Job / property address",{placeholder:"Where the work will be done"})}
        {input("poNumber","PO / unit number",{placeholder:"Optional for property managers"})}
        {input("issueDate","Document date",{type:"date"})}
        {input("dueDate",editor.kind==="invoice"?"Payment due date":"Estimate valid until",{type:"date"})}
      </div><div className="rdo-lines"><div className="rdo-section-title"><h3>Work and pricing</h3><button className="rdo-text-btn" onClick={()=>update("lines",[...editor.lines,{id:uuid(),description:"",quantity:1,price:0}])}>+ Add item</button></div>{editor.lines.map((line,index)=><div className="rdo-line" key={line.id}><label className="rdo-field rdo-line-desc"><span>Work / service *</span><input value={line.description} placeholder="Hauling, disposal, labor, gravel..." onChange={e=>update("lines",editor.lines.map(v=>v.id===line.id?{...v,description:e.target.value}:v))}/></label><label className="rdo-field rdo-small"><span>Qty</span><input type="number" min="0" step="0.1" value={line.quantity} onChange={e=>update("lines",editor.lines.map(v=>v.id===line.id?{...v,quantity:Number(e.target.value)}:v))}/></label><label className="rdo-field rdo-small"><span>Unit price ($)</span><input type="number" min="0" step="0.01" value={line.price} onChange={e=>update("lines",editor.lines.map(v=>v.id===line.id?{...v,price:Number(e.target.value)}:v))}/></label><strong className="rdo-line-total">{currency(Number(line.price)*Number(line.quantity))}</strong><button className="rdo-icon-btn" title="Remove item" aria-label={"Remove line "+(index+1)} disabled={editor.lines.length===1} onClick={()=>update("lines",editor.lines.filter(v=>v.id!==line.id))}>×</button></div>)}</div>
      <div className="rdo-form-bottom"><div><label className="rdo-field"><span>Notes / scope of work</span><textarea rows={4} value={editor.notes} placeholder="What's included, access details, materials, disposal…" onChange={e=>update("notes",e.target.value)}/></label><label className="rdo-field"><span>Terms</span><textarea rows={3} value={editor.terms} onChange={e=>update("terms",e.target.value)}/></label></div><div className="rdo-totalbox"><label className="rdo-field"><span>Sales tax % (only when applicable)</span><input type="number" min="0" max="100" step="0.01" value={editor.taxRate} onChange={e=>update("taxRate",Number(e.target.value))}/></label><div><span>Subtotal</span><strong>{currency(totals(editor).subtotal)}</strong></div><div><span>Tax</span><strong>{currency(totals(editor).tax)}</strong></div><div className="rdo-grand"><span>Total</span><strong>{currency(totals(editor).total)}</strong></div><p>Tax defaults to 0%. Check whether tax applies to this job before sending.</p></div></div><div className="rdo-editor-actions"><button className="rdo-btn rdo-btn-outline" onClick={()=>{setEditor(null);setView("documents");}}>Cancel</button><button className="rdo-btn rdo-btn-primary" onClick={saveDocument}>Save {editor.kind}</button></div></section>}
      <section className="rdo-tools"><div><h2>Backup your records</h2><p>Keep a copy in Files, Google Drive, or email. Importing replaces documents on this device.</p></div><div className="rdo-tool-actions"><button className="rdo-btn rdo-btn-outline" onClick={exportData}>Export backup</button><label className="rdo-btn rdo-btn-outline rdo-file">Import backup<input type="file" accept=".json,application/json" onChange={importData}/></label></div></section>
      <footer className="rdo-footer">Red Dirt Property Services LLC · 870-828-2562 · <a href="/">Main website</a><p>To install on your phone: open this page in Safari or Chrome and choose Add to Home Screen / Install App.</p></footer>
    </main>
    {printDoc&&<div className="rdo-print"><header><img src="/images/logo2.png" alt="Red Dirt Property Services LLC" width="88" height="88"/><div><h1>RED DIRT</h1><p>PROPERTY SERVICES LLC</p><small>870-828-2562 · reddirtpropertyservicesar.com<br/>Amity, Arkansas · reddirtpropertyservicesar@gmail.com</small></div></header><div className="rdo-print-title"><h2>{printDoc.kind.toUpperCase()}</h2><strong>{printDoc.number}</strong></div><div className="rdo-print-grid"><div><b>BILL TO</b><p>{printDoc.customer}</p>{printDoc.address?<p>{printDoc.address}</p>:null}{printDoc.phone?<p>{printDoc.phone}</p>:null}{printDoc.email?<p>{printDoc.email}</p>:null}</div><div><b>DOCUMENT DETAILS</b><p>Date: {printDoc.issueDate}</p><p>{printDoc.kind==="estimate"?"Valid until":"Due"}: {printDoc.dueDate}</p>{printDoc.poNumber?<p>PO / Unit: {printDoc.poNumber}</p>:null}{printDoc.sourceEstimate?<p>From estimate: {printDoc.sourceEstimate}</p>:null}</div></div><div className="rdo-print-job"><strong>{printDoc.title}</strong>{printDoc.jobAddress?<p>Job location: {printDoc.jobAddress}</p>:null}</div><table><thead><tr><th>DESCRIPTION</th><th>QTY</th><th>RATE</th><th>AMOUNT</th></tr></thead><tbody>{printDoc.lines.map(line=><tr key={line.id}><td>{line.description}</td><td>{line.quantity}</td><td>{currency(line.price)}</td><td>{currency(Number(line.price)*Number(line.quantity))}</td></tr>)}</tbody></table><div className="rdo-print-totals"><p><span>Subtotal</span><strong>{currency(totals(printDoc).subtotal)}</strong></p>{printDoc.taxRate>0?<p><span>Tax ({printDoc.taxRate}%)</span><strong>{currency(totals(printDoc).tax)}</strong></p>:null}<p className="rdo-print-grand"><span>Total</span><strong>{currency(totals(printDoc).total)}</strong></p>{printDoc.kind==="invoice"&&<><p><span>Paid</span><strong>{currency(totals(printDoc).paid)}</strong></p><p className="rdo-print-grand"><span>Balance due</span><strong>{currency(totals(printDoc).balance)}</strong></p></>}</div>{printDoc.notes?<div className="rdo-print-note"><b>SCOPE / NOTES</b><p>{printDoc.notes}</p></div>:null}{printDoc.terms?<div className="rdo-print-note"><b>TERMS</b><p>{printDoc.terms}</p></div>:null}<div className="rdo-print-thanks">Thank you for giving Red Dirt Property Services the opportunity to earn your business.</div></div>}
  </div>;

  function renderRow(d: Document) {
    const t=totals(d);
    return <article key={d.id} className="rdo-doc"><div className="rdo-doc-main"><div className="rdo-doc-top"><strong>{d.title||"Untitled job"}</strong><span className={"rdo-pill rdo-"+d.status}>{d.status}</span></div><div className="rdo-doc-meta">{d.customer} · {d.number} · {d.issueDate}{d.poNumber?" · PO "+d.poNumber:""}</div><div className="rdo-doc-value">{currency(t.total)}{d.kind==="invoice"&&t.balance>0.009?<span> · {currency(t.balance)} due</span>:null}</div></div><div className="rdo-doc-actions"><button onClick={()=>openEdit(d)}>Edit</button><button onClick={()=>print(d)}>Print / PDF</button><button onClick={()=>emailSummary(d)}>Email text</button><button onClick={()=>copySummary(d)}>Copy text</button>{d.kind==="estimate"&&<><button onClick={()=>convert(d)}>Make invoice</button>{d.status!=="approved"&&<button onClick={()=>changeStatus(d,"approved")}>Mark approved</button>}{d.status==="draft"&&<button onClick={()=>changeStatus(d,"sent")}>Mark sent</button>}</>}{d.kind==="invoice"&&t.balance>0.009&&<details className="rdo-payment"><summary>Record payment</summary><div><input aria-label="Payment amount" type="number" min="0.01" max={t.balance} step="0.01" placeholder={"Up to "+currency(t.balance)} value={paymentAmount} onChange={e=>setPaymentAmount(e.target.value)}/><select aria-label="Payment method" value={paymentMethod} onChange={e=>setPaymentMethod(e.target.value)}><option>Cash</option><option>Check</option><option>Card</option><option>Bank transfer</option><option>Other</option></select><button onClick={()=>addPayment(d)}>Save payment</button></div></details>}<button className="rdo-danger" onClick={()=>deleteDoc(d)}>Delete</button></div></article>;
  }
}
