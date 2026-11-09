import type { Metadata } from "next";
import OfficeGate from "./OfficeGate";
import "./office.css";

export const metadata: Metadata = {
  title: "Red Dirt Office",
  description: "Private estimates, invoices and payment tracking for Red Dirt Property Services LLC.",
  robots: { index: false, follow: false },
  manifest: "/office.webmanifest",
  appleWebApp: { capable: true, title: "Red Dirt Office", statusBarStyle: "black-translucent" },
};

export default function OfficePage() {
  return <OfficeGate />;
}
