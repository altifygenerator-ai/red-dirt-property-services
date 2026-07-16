import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["amity-property-cleanup"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/amity-property-cleanup" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/amity-property-cleanup",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function AmityPropertyCleanupPage() {
  return <ServiceLandingPage page={page} />;
}
