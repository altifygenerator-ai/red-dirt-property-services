"use client";
import { FormEvent, useEffect, useState } from "react";
import OfficeApp from "./OfficeApp";
import { getOfficeIdentity, OfficeIdentity, RED_DIRT_ALLOWED_EMAIL, signInToOffice, signOutOfOffice, signUpToOffice } from "@/lib/redDirtCloud";

export default function OfficeGate() {
  const [checking,setChecking] = useState(true);
  const [user,setUser] = useState<OfficeIdentity|null>(null);
  const [password,setPassword] = useState("");
  const [mode,setMode] = useState<"signin"|"signup">("signin");
  const [message,setMessage] = useState("");
  const [working,setWorking] = useState(false);

  useEffect(() => {
    let mounted=true;
    getOfficeIdentity()
      .then(identity=>{if(mounted)setUser(identity);})
      .catch(()=>{if(mounted)setUser(null);})
      .finally(()=>{if(mounted)setChecking(false);});
    return ()=>{mounted=false;};
  }, []);
  async function submit(event: FormEvent) {
    event.preventDefault();
    if(password.length<8) {setMessage("Use a password at least 8 characters long.");return;}
    setWorking(true);setMessage("");
    try {
      if(mode==="signup") {
        const hasSession=await signUpToOffice(password);
        if(!hasSession) setMessage("Check the Red Dirt email inbox for the confirmation email. After confirming, come back here and sign in. If the link opens another site, just return to this page.");
        else setUser(await getOfficeIdentity());
      } else {
        await signInToOffice(password);
        const identity=await getOfficeIdentity();
        if(!identity) throw new Error("Sign-in was not authorized for Red Dirt Office.");
        setUser(identity);setPassword("");
      }
    } catch(e) {
      setMessage(e instanceof Error?e.message:"Could not sign in.");
    } finally {setWorking(false);}
  }
  if(checking) return <div className="rd-office"><div className="rdo-loading">Checking secure Red Dirt Office login…</div></div>;
  if(user) return <OfficeApp userId={user.id} onSignOut={async()=>{await signOutOfOffice();setUser(null);}}/>;
  return <div className="rd-office"><div className="rdo-auth-wrap">
    <div className="rdo-auth-brand"><img src="/images/logo2.png" alt="Red Dirt Property Services" width="80" height="80"/><h1>RED DIRT OFFICE</h1><p>Private estimates & invoices</p></div>
    <form className="rdo-auth-card" onSubmit={submit}>
      <h2>{mode==="signin"?"Welcome back":"Set up your office login"}</h2>
      <p>Only the authorized Red Dirt business email can access customer and invoice records.</p>
      <label className="rdo-field"><span>Authorized email</span><input value={RED_DIRT_ALLOWED_EMAIL} type="email" disabled /></label>
      <label className="rdo-field"><span>Password</span><input type="password" autoComplete={mode==="signup"?"new-password":"current-password"} value={password} onChange={e=>setPassword(e.target.value)} required minLength={8}/></label>
      <button className="rdo-btn rdo-btn-primary" disabled={working} type="submit">{working?"Please wait…":mode==="signup"?"Create office login":"Sign in"}</button>
      {message?<p className="rdo-auth-message" role="status">{message}</p>:null}
      <button type="button" className="rdo-auth-toggle" onClick={()=>{setMode(mode==="signin"?"signup":"signin");setMessage("");}}>{mode==="signin"?"First time here? Create office login":"Already set up? Sign in instead"}</button>
    </form>
    <p className="rdo-auth-foot">Red Dirt Property Services LLC · <a href="/">Return to main website</a></p>
  </div></div>;
}
