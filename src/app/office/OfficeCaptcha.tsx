"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        "expired-callback": () => void;
        "error-callback": () => void;
        theme: "auto" | "light" | "dark";
      }) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export default function OfficeCaptcha({
  siteKey,
  onToken,
  onError,
}: {
  siteKey: string;
  onToken: (value: string) => void;
  onError: (message: string) => void;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const tokenCallback = useRef(onToken);
  const errorCallback = useRef(onError);
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{tokenCallback.current=onToken;errorCallback.current=onError;},[onToken,onError]);

  useEffect(()=>{
    if(!siteKey)return;
    let active=true;
    let widgetId:string|undefined;
    const container=mount.current;
    if(!container)return;
    tokenCallback.current("");
    setLoaded(false);

    function render() {
      if(!active||!container||!window.turnstile||widgetId)return;
      try {
        widgetId=window.turnstile.render(container,{
          sitekey:siteKey,
          theme:"light",
          callback:(token)=>{if(active)tokenCallback.current(token);},
          "expired-callback":()=>{if(active)tokenCallback.current("");},
          "error-callback":()=>{if(active){tokenCallback.current("");errorCallback.current("CAPTCHA could not load. Check that this domain is allowed for the Turnstile site key.");}}
        });
        setLoaded(true);
      }catch{
        errorCallback.current("CAPTCHA setup failed. Check the site key and try again.");
      }
    }

    if(window.turnstile) render();
    else {
      const existing=document.querySelector<HTMLScriptElement>("script[data-red-dirt-turnstile]");
      if(existing) {
        existing.addEventListener("load",render);
      } else {
        const script=document.createElement("script");
        script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async=true;
        script.defer=true;
        script.dataset.redDirtTurnstile="true";
        script.addEventListener("load",render);
        script.addEventListener("error",()=>{if(active)errorCallback.current("CAPTCHA script was blocked. Disable blockers for this page and reload.");});
        document.head.appendChild(script);
      }
    }
    return ()=>{
      active=false;
      tokenCallback.current("");
      if(widgetId&&window.turnstile){try{window.turnstile.remove(widgetId);}catch{}}
      const old=document.querySelector<HTMLScriptElement>("script[data-red-dirt-turnstile]");
      if(old)old.removeEventListener("load",render);
    };
  },[siteKey]);

  if(!siteKey)return null;
  return <div className="rdo-captcha-box" aria-label="Security verification">
    <span>Security check</span>
    <div ref={mount} />
    {!loaded?<p>Loading verification…</p>:null}
  </div>;
}
