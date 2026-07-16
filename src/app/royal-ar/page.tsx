import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locationPages } from "@/data/seoPages";

const page = locationPages["royal-ar"];


export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/royal-ar",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [
      {
        url: page.heroImage,
        alt: page.heroAlt,
      },
    ],
  },
  twitter: {
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function Page() {
  return <LocationLandingPage page={page} />;
}
