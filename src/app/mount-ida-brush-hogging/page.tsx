import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["mount-ida-brush-hogging"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/mount-ida-brush-hogging" },
  openGraph: {
    title: page.ogTitle,
    description: page.ogDescription,
    url: "/mount-ida-brush-hogging",
    images: [{ url: page.heroImage, alt: page.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.ogTitle,
    description: page.ogDescription,
    images: [page.heroImage],
  },
};

export default function MountIdaBrushHoggingPage() {
  return <ServiceLandingPage page={page} />;
}
