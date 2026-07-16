import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locationPages } from "@/data/seoPages";

const page = locationPages["kirby-ar"];


export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/kirby-ar",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function KirbyArPage() {
  return <LocationLandingPage page={page} />;
}
