import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["hot-springs-stump-grinding"];

const seoKeywords = [
  page.schemaName,
  ...page.serviceType,
  ...page.areaServed.flatMap((area) => [
    `${page.schemaName} ${area}`,
    `${page.serviceType[0]} ${area}`,
    `${page.serviceType[0]} near ${area}`,
  ]),
  `${page.schemaName} near me`,
  "Red Dirt Property Services",
];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: seoKeywords,
  alternates: {
    canonical: "/hot-springs-stump-grinding",
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
