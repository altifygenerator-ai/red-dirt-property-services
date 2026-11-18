"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getAccessToken, RED_DIRT_PUBLISHABLE_KEY, RED_DIRT_SUPABASE_URL } from "@/lib/redDirtCloud";

type Business = "red_dirt" | "lyn_lilis";
type Status = "new" | "contacted" | "quoted" | "booked" | "closed";
type Lead = {
 id:string; business_key:Business;name:string;phone:string;email:string;service:string;
 location:string;details:string;source_page:string;referrer:string;utm_source:string;
 utm_medium:string;utm_campaign:string;channel:string;extra:Record<string,unknown>;
 status:Status;staff_notes:string;created_at:string;updated_at:string;
};
type Event = {id:string;business_key:Business;event_type:string;channel:string;created_at:string};
const names:Record<Business,string>={red_dirt:"Red Dirt",lyn_lilis:"Lyn & Lili's"};
const statuses:Status[]=["new","contacted","quoted","booked","closed"];
const format=(iso:string)=>new Date(iso).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"});
async function request<T>(path:string,options?:RequestInit):Promise<T> {
 const token=await getAccessToken();
 const response=await fetch(RED_DIRT_SUPABASE_URL+"/rest/v1/"+path,{
  ...options,cache:"no-store",
  headers:{
   apikey:RED_DIRT_PUBLISHABLE_KEY,Authorization:"Bearer "+token,
   "Content-Type":"application/json",...(options?.headers||{}),
  },
 });
 if(!response.ok)throw new Error("Lead inbox request failed ("+response.status+").");
 if(response.status===204)return null as T;
 return response.json() as Promise<T>;
}
export default function LeadInbox({business}:{business:Business}) {
 const [leads,setLeads]=useState<Lead[]>([]);
 const [events,setEvents]=useState<Event[]>([]);

 const [query,setQuery]=useState("");
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");
 const [saving,setSaving]=useState<string|null>(null);
 const [drafts,setDrafts]=useState<Record<string,string>>({});
 const [message,setMessage]=useState("");
 const refresh=useCallback(async()=>{
  setLoading(true);setError("");
  try{
   const [items,clicks]=await Promise.all([
    request<Lead[]>("local_service_leads?select=id,business_key,name,phone,email,service,location,details,source_page,referrer,utm_source,utm_medium,utm_campaign,channel,extra,status,staff_notes,created_at,updated_at&order=created_at.desc&limit=500"),
    request<Event[]>("local_service_events?select=id,business_key,event_type,channel,created_at&order=created_at.desc&limit=1000"),
   ]);
   setLeads(items);setEvents(clicks);
   setDrafts(Object.fromEntries(items.map(l=>[l.id,l.staff_notes||""])));
  }catch(e){setError(e instanceof Error?e.message:"Could not load leads.");}
  finally{setLoading(false);}
 },[]);
 useEffect(()=>{void refresh();},[refresh]);
 const visible=useMemo(()=>leads.filter(l=>l.business_key===business&&
   [l.name,l.service,l.location,l.phone,l.email,l.channel].join(" ").toLowerCase().includes(query.toLowerCase())),[business,leads,query]);
 const relevantEvents=events.filter(e=>e.business_key===business);
 const newCount=visible.filter(l=>l.status==="new").length;
 const bookedCount=visible.filter(l=>l.status==="booked").length;
 async function patch(lead:Lead,updates:Partial<Pick<Lead,"status"|"staff_notes">>) {
  setSaving(lead.id);setMessage("");
  try {
   const update={...updates,updated_at:new Date().toISOString()};
   await request<null>("local_service_leads?id=eq."+encodeURIComponent(lead.id),{method:"PATCH",headers:{Prefer:"return=minimal"},body:JSON.stringify(update)});
   setLeads(prev=>prev.map(l=>l.id===lead.id?{...l,...update}:l));
   setMessage("Lead updated.");
  } catch(e){setError(e instanceof Error?e.message:"Could not save lead.");}
  finally{setSaving(null);}
 }
 return <section className="rdo-panel rdo-leads">
  <div className="rdo-panel-head"><div><h2>Customer inquiries</h2><p className="rdo-sub">Quotes received through your websites. Contact clicks are counted separately; they are not confirmed leads.</p></div><button className="rdo-btn rdo-btn-outline" disabled={loading} onClick={()=>void refresh()}>Refresh</button></div>
  {error?<div className="rdo-error" role="alert">{error}</div>:null}
  {message?<div className="rdo-notice" role="status">{message}</div>:null}
  <div className="rdo-filters"><span className="rdo-leads-business-name">{names[business]} inquiries</span><input type="search" placeholder="Search leads..." aria-label="Search leads" value={query} onChange={e=>setQuery(e.target.value)}/></div>
  <div className="rdo-lead-summary"><div><strong>{visible.length}</strong><span>Stored inquiries</span></div><div><strong>{newCount}</strong><span>New</span></div><div><strong>{bookedCount}</strong><span>Booked</span></div><div><strong>{relevantEvents.filter(e=>e.event_type==="call_click").length}</strong><span>Call-button clicks*</span></div><div><strong>{relevantEvents.filter(e=>e.event_type==="text_click").length}</strong><span>Text-button clicks*</span></div></div>
  <p className="rdo-lead-hint">*Click counts are from the most recent 1,000 recorded interactions, not verified calls or texts. Sources marked “AI search” are based on detectable referrals, not guaranteed AI citations.</p>
  {loading?<div className="rdo-loading">Loading secure lead records…</div>:visible.length===0?<div className="rdo-empty"><h3>No matching inquiries yet</h3><p>New website quote requests will appear here after the updated sites are deployed.</p></div>:visible.map(lead=><article className="rdo-lead-card" key={lead.id}>
   <div className="rdo-lead-head"><div><strong>{lead.name}</strong><span className="rdo-kind">{names[lead.business_key]}</span><small>{format(lead.created_at)}</small></div><label className="rdo-field"><span>Status</span><select disabled={saving===lead.id} value={lead.status} onChange={e=>void patch(lead,{status:e.target.value as Status})}>{statuses.map(s=><option key={s} value={s}>{s[0].toUpperCase()+s.slice(1)}</option>)}</select></label></div>
   <p><strong>Job:</strong> {lead.service} · {lead.location||"Location not supplied"}</p>
   {lead.details?<p className="rdo-lead-details">{lead.details}</p>:null}
   <div className="rdo-lead-contact"><a href={"tel:"+lead.phone}>Call {lead.phone}</a>{lead.phone?<a href={"sms:"+lead.phone}>Text customer</a>:null}{lead.email?<a href={"mailto:"+lead.email}>Email customer</a>:null}</div>
   <p className="rdo-lead-source"><strong>Source:</strong> {lead.channel.replaceAll("_"," ")}{lead.utm_source?" · "+lead.utm_source:""}{lead.utm_campaign?" · "+lead.utm_campaign:""}</p>
   {lead.source_page?<p className="rdo-lead-source">Page: <a href={lead.source_page} target="_blank" rel="noreferrer">{lead.source_page}</a></p>:null}
   {lead.referrer?<p className="rdo-lead-source">Referrer: {lead.referrer}</p>:null}
   <label className="rdo-field"><span>Private follow-up notes</span><textarea rows={2} value={drafts[lead.id]??""} onChange={e=>setDrafts(p=>({...p,[lead.id]:e.target.value}))} placeholder="Followed up, estimated price, next action…"/></label>
   <button className="rdo-btn rdo-btn-outline" disabled={saving===lead.id} onClick={()=>void patch(lead,{staff_notes:(drafts[lead.id]||"").slice(0,5000)})}>{saving===lead.id?"Saving…":"Save notes"}</button>
  </article>)}
 </section>;
}
