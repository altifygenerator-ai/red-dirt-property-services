import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locationPages, type LocationPageData } from "@/data/seoPages";

const basePage = locationPages["amity-ar"];

const page: LocationPageData = {
  ...basePage,
  related: [
    {
      label: "Amity Dirt Work",
      href: "/amity-dirt-work",
      text: "Mini excavator work, driveways, drainage, culverts, washouts, rough grading, and small excavation right around Amity."
    },
    ...basePage.related,
  ],
};

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/amity-ar",
  },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: `/${page.slug}`,
    images: [page.heroImage],
  },
};

export default function AmityArPage() {
  return <LocationLandingPage page={page} />;
}
