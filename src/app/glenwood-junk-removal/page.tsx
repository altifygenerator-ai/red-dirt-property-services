import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["glenwood-junk-removal"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/glenwood-junk-removal" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/glenwood-junk-removal",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function GlenwoodJunkRemovalPage() {
  return <ServiceLandingPage page={page} />;
}
