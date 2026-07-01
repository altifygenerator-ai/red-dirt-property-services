"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/data/site";

const serviceOptions = [
  "Property cleanup",
  "Bush hogging / brush cutting",
  "Junk removal / hauling",
  "Cleanout",
  "Dirt work / driveway / drainage",
  "Tree work / limb cleanup",
  "Stump grinding",
  "Shed removal / light demolition",
  "Storm cleanup",
  "Not sure yet",
];

type SubmitState = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("sourcePage", window.location.href);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "The quote form could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Got it. Your quote request was sent to Red Dirt. They can follow up by call, text, or email."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending the quote request."
      );
    }
  }

  return (
    <div
      id="quote-form"
      className="scroll-mt-28 rounded-[1.75rem] border border-white/14 bg-[#171717]/82 p-5 shadow-[0_26px_80px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-6 lg:p-7"
    >
      <div className="mb-5 border-b border-white/10 pb-5">
        <p className="eyebrow mb-3">Free Quote Request</p>
        <h2 className="text-4xl font-bold leading-[0.9] text-white sm:text-5xl">
          Tell us what needs cleaned up.
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/62">
          Send the basics here. For photos, you can still text them to{" "}
          <a className="font-bold text-[#d8c2a5]" href={`tel:${siteData.phoneHref}`}>
            {siteData.phone}
          </a>{" "}
          after the form goes through.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="hidden" aria-hidden="true">
          Leave this field blank
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="quote-field">
            <span>Name *</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>

          <label className="quote-field">
            <span>Phone *</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="quote-field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" />
          </label>

          <label className="quote-field">
            <span>Town / property area *</span>
            <input
              name="location"
              type="text"
              placeholder="Amity, Glenwood, Hot Springs..."
              required
            />
          </label>
        </div>

        <label className="quote-field">
          <span>Type of work *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Choose the closest fit
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="quote-field">
          <span>What needs done? *</span>
          <textarea
            name="details"
            rows={5}
            placeholder="Tell us what needs cut, cleaned out, hauled off, torn down, fixed, or looked at. Include access issues, rough size, and anything heavy or hazardous."
            required
          />
        </label>

        <button className="btn btn-primary w-full" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Quote Request"}
        </button>

        {message ? (
          <p
            className={
              status === "success"
                ? "rounded-xl border border-green-400/25 bg-green-400/10 px-4 py-3 text-sm font-bold leading-6 text-green-100"
                : "rounded-xl border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm font-bold leading-6 text-red-100"
            }
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
