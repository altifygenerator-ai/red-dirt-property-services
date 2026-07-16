import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["glenwood-property-cleanup"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/glenwood-property-cleanup" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/glenwood-property-cleanup",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function GlenwoodPropertyCleanupPage() {
  return <ServiceLandingPage page={page} />;
}
