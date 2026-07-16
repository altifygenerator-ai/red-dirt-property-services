import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["storm-cleanup"];


export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/storm-cleanup",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function StormCleanupPage() {
  return <ServiceLandingPage page={page} />;
}
