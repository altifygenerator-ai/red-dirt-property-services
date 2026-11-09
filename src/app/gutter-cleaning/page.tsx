import type { Metadata } from "next";
import ExteriorCleaningPage from "@/components/ExteriorCleaningPage";
export const metadata: Metadata = {
  title: "Gutter Cleaning in Glenwood & Hot Springs, AR",
  description: "Residential gutter cleaning in Glenwood, Amity, and Hot Springs, Arkansas. Gutter debris removal and accessible downspout clearing. From $125 for qualifying smaller single-story homes.",
  alternates: { canonical: "/gutter-cleaning" },
  openGraph: { title: "Gutter Cleaning | Red Dirt Property Services LLC", description: "Local gutter cleaning around Glenwood, Amity, and Hot Springs. Starting at $125 on qualifying single-story homes.", url: "/gutter-cleaning", images: ["/images/cover.png"] },
};
export default function GutterCleaningPage() { return <ExteriorCleaningPage kind="gutters" />; }
