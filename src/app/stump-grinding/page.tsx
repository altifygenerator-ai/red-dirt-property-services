import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["stump-grinding"];


export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/stump-grinding",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function StumpGrindingPage() {
  return <ServiceLandingPage page={page} />;
}
