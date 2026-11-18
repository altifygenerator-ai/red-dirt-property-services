"use client";

import { LYN_SERVICE_CHECKLIST } from "@/lib/officeBrands";

export type OfficeLine = { id: string; description: string; quantity: number; price: number };
const money = (amount: number) => new Intl.NumberFormat("en-US", {style:"currency",currency:"USD"}).format(amount||0);
const id = () => typeof crypto!=="undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2);

export default function LynEstimateServices({ lines, onChange }:{ lines: OfficeLine[]; onChange: (lines: OfficeLine[])=>void }) {
  const selected = LYN_SERVICE_CHECKLIST.filter(name=>lines.some(line=>line.description===name));
  return <section className="rdo-lyn-services" aria-label="Lyn and Lili's service checklist">
    <div className="rdo-section-title">
      <h3>Select the cleaning services</h3>
      <span>{selected.length} selected</span>
    </div>
    <p className="rdo-service-help">Check what the customer needs and enter your price for each service. Prices start blank and are set separately for every job.</p>
    <div className="rdo-service-list">{LYN_SERVICE_CHECKLIST.map(name=>{
      const item=lines.find(line=>line.description===name);
      const checked=Boolean(item);
      return <div className={"rdo-service-row"+(checked?" selected":"")} key={name}>
        <label className="rdo-service-check"><input type="checkbox" checked={checked}
          onChange={event=>{
            if(event.target.checked)onChange([...lines.filter(line=>line.description.trim()),{id:id(),description:name,quantity:1,price:0}]);
            else onChange(lines.filter(line=>line.description!==name));
          }}/>
          <span>{name}</span>
        </label>
        {item?<div className="rdo-service-price">
          <label>Qty<input aria-label={name+" quantity"} type="number" min="0.1" step="0.5" value={item.quantity}
            onChange={event=>onChange(lines.map(line=>line.id===item.id?{...line,quantity:Number(event.target.value)}:line))}/></label>
          <label>Job price ($)<input aria-label={name+" price"} type="number" min="0" step="0.01" placeholder="Enter price"
            value={item.price===0?"":item.price}
            onChange={event=>onChange(lines.map(line=>line.id===item.id?{...line,price:Number(event.target.value)}:line))}/></label>
          <strong>{money(item.price*item.quantity)}</strong>
        </div>:null}
      </div>;
    })}</div>
    {selected.length===0?<p className="rdo-service-hint">Start by checking one or more services above. You can add a custom service below.</p>:null}
  </section>;
}
