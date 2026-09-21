import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { dirtWorkLocalPages } from "@/data/dirtWorkLocalPages";

const page = dirtWorkLocalPages["amity-dirt-work"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: "/amity-dirt-work",
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
  return <ServiceLandingPage page={page} />;
}
