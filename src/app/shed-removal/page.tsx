import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["shed-removal"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/shed-removal",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function ShedRemovalPage() {
  return <ServiceLandingPage page={page} />;
}
