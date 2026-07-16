import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["arkadelphia-cleanouts"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/arkadelphia-cleanouts" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/arkadelphia-cleanouts",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function ArkadelphiaCleanoutsPage() {
  return <ServiceLandingPage page={page} />;
}
