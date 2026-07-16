import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locationPages } from "@/data/seoPages";

const page = locationPages["norman-ar"];


export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/norman-ar",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function NormanArPage() {
  return <LocationLandingPage page={page} />;
}
