"use client";

import { FormEvent, useEffect, useState } from "react";
import OfficeApp from "./OfficeApp";
import OfficeCaptcha from "./OfficeCaptcha";
import { getOfficeIdentity, OfficeIdentity, RED_DIRT_ALLOWED_EMAIL, signInToOffice, signOutOfOffice, signUpToOffice } from "@/lib/redDirtCloud";

const KEY_STORAGE = "red-dirt-office-turnstile-site-key";
const PROJECT_USERS = "https://supabase.com/dashboard/project/cuobtsfjppfvofqdihuo/auth/users";

export default function OfficeGate() {
  const [checking,setChecking] = useState(true);
  const [user,setUser] = useState<OfficeIdentity|null>(null);
  const [password,setPassword] = useState("");
  const [mode,setMode] = useState<"signin"|"signup">("signin");
  const [message,setMessage] = useState("");
  const [working,setWorking] = useState(false);
  const [siteKey,setSiteKey] = useState(process.env.NEXT_PUBLIC_RED_DIRT_TURNSTILE_SITE_KEY||"");
  const [siteKeyDraft,setSiteKeyDraft] = useState("");
  const [showSetup,setShowSetup] = useState(false);
  const [captchaToken,setCaptchaToken] = useState("");
  const [challenge,setChallenge] = useState(0);

  useEffect(() => {
    let mounted=true;
    const stored=localStorage.getItem(KEY_STORAGE)||"";
    if(stored&&!process.env.NEXT_PUBLIC_RED_DIRT_TURNSTILE_SITE_KEY) {
      setSiteKey(stored);
      setSiteKeyDraft(stored);
    }
    getOfficeIdentity()
      .then(identity=>{if(mounted)setUser(identity);})
      .catch(()=>{if(mounted)setUser(null);})
      .finally(()=>{if(mounted)setChecking(false);});
    return ()=>{mounted=false;};
  }, []);

  function applySiteKey() {
    const key=siteKeyDraft.trim();
    if(!key||!/^\w[\w-]{8,}$/.test(key)) {setMessage("Enter your existing Cloudflare Turnstile public site key.");return;}
    localStorage.setItem(KEY_STORAGE,key);
    setSiteKey(key);
    setCaptchaToken("");
    setChallenge(v=>v+1);
    setShowSetup(false);
    setMessage("CAPTCHA key saved on this device. Complete the security check and try again.");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if(password.length<8) {setMessage("Use a password at least 8 characters long.");return;}
    if(!siteKey) {setShowSetup(true);setMessage("This shared Supabase project requires CAPTCHA. Add its existing Turnstile public site key below.");return;}
    if(!captchaToken) {setMessage("Finish the security check before continuing.");return;}
    setWorking(true);setMessage("");
    try {
      if(mode==="signup") {
        const hasSession=await signUpToOffice(password,captchaToken);
        if(!hasSession) setMessage("Account request submitted. Check the Red Dirt email for a confirmation link. After confirming, return to this page and sign in.");
        else setUser(await getOfficeIdentity());
      } else {
        await signInToOffice(password,captchaToken);
        const identity=await getOfficeIdentity();
        if(!identity) throw new Error("Sign-in was not authorized for Red Dirt Office.");
        setUser(identity);setPassword("");
      }
    } catch(e) {
      const detail=e instanceof Error?e.message:"Could not sign in.";
      setMessage(/captcha/i.test(detail)?"CAPTCHA was rejected. Make sure you're using the same Turnstile site key as the shared Supabase project and that the Red Dirt domain is allowed. "+detail:detail);
    } finally {
      setWorking(false);
      setCaptchaToken("");
      setChallenge(c=>c+1);
    }
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
      {siteKey?<OfficeCaptcha key={siteKey+"-"+challenge} siteKey={siteKey} onToken={setCaptchaToken} onError={setMessage}/>:<div className="rdo-auth-warning"><strong>Security check needs setup.</strong><p>This site shares Supabase's CAPTCHA protection with Find A Place Booking. Add the existing CAPTCHA public site key; do not turn off protection.</p></div>}
      <button className="rdo-btn rdo-btn-primary" disabled={working||!captchaToken} type="submit">{working?"Please wait…":mode==="signup"?"Create office login":"Sign in"}</button>
      {message?<p className="rdo-auth-message" role="status">{message}</p>:null}
      <button type="button" className="rdo-auth-toggle" onClick={()=>{setMode(mode==="signin"?"signup":"signin");setMessage("");setCaptchaToken("");setChallenge(c=>c+1);}}>{mode==="signin"?"First time here? Create office login":"Already set up? Sign in instead"}</button>
      <button type="button" className="rdo-auth-toggle" onClick={()=>{setShowSetup(!showSetup);setMessage("");}}>{showSetup?"Hide CAPTCHA setup":"Configure CAPTCHA site key"}</button>
      {showSetup?<div className="rdo-auth-setup">
        <p>Find the <strong>public site key</strong> of the Turnstile widget already used with your shared Supabase project in Cloudflare. Make sure <code>www.reddirtpropertyservicesar.com</code> is allowed for that widget. Never enter the secret key here.</p>
        <label className="rdo-field"><span>Cloudflare Turnstile site key</span><input type="text" value={siteKeyDraft} onChange={e=>setSiteKeyDraft(e.target.value)} placeholder="0x4AAAA..." autoCapitalize="off" autoCorrect="off" /></label>
        <button type="button" className="rdo-btn rdo-btn-outline" onClick={applySiteKey}>Save public site key</button>
        <p>For an admin-only account, you can alternatively create the authorized user under <a href={PROJECT_USERS} target="_blank" rel="noreferrer">Supabase Auth → Users</a>. You'll still need CAPTCHA for password sign-in.</p>
      </div>:null}
    </form>
    <p className="rdo-auth-foot">Red Dirt Property Services LLC · <a href="/">Return to main website</a></p>
  </div></div>;
}
