import type { Metadata } from "next";
import ExteriorCleaningPage from "@/components/ExteriorCleaningPage";
export const metadata: Metadata = {
  title: "Exterior Window Cleaning in Glenwood & Hot Springs, AR",
  description: "Exterior-only residential window cleaning in Glenwood, Amity, and Hot Springs, Arkansas. Starting at $99 for qualifying small homes. Gutter and window packages from $225.",
  alternates: { canonical: "/exterior-window-cleaning" },
  openGraph: { title: "Exterior Window Cleaning | Red Dirt Property Services LLC", description: "Outside residential window washing around Glenwood, Amity, and Hot Springs. Starting at $99 for qualifying small homes.", url: "/exterior-window-cleaning", images: ["/images/cover.png"] },
};
export default function ExteriorWindowCleaningPage() { return <ExteriorCleaningPage kind="windows" />; }
