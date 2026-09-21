import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import GoogleReviews from "@/components/GoogleReviews";
import FadeIn from "@/components/FadeIn";
import RelatedLinksSection from "@/components/RelatedLinksSection";
import { siteData } from "@/data/site";

const siteUrl = "https://www.reddirtpropertyservicesar.com";

export const metadata: Metadata = {
  title: "Property Cleanup, Dirt Work & Bush Hogging in Glenwood AR",
  description:
    "Red Dirt Property Services LLC provides property cleanup, mini excavator dirt work, driveway help, bush hogging, brush cutting, hauling, cleanouts, storm cleanup, and light demolition around Glenwood, Amity, Kirby, Norman, Mount Ida, and nearby rural Arkansas communities.",
  keywords: [
    "property cleanup Glenwood AR",
    "dirt work Glenwood AR",
    "mini excavator Glenwood AR",
    "driveway grading Glenwood AR",
    "culvert work Glenwood AR",
    "bush hogging Glenwood AR",
    "junk removal Glenwood AR",
    "hauling Glenwood AR",
    "cleanouts Glenwood AR",
    "Red Dirt Property Services LLC",
  ],
  alternates: {
    canonical: "/glenwood-ar",
  },
  openGraph: {
    title: "Property Cleanup, Dirt Work & Bush Hogging in Glenwood AR",
    description:
      "Local property cleanup, mini excavator dirt work, driveway help, bush hogging, hauling, storm cleanup, and light demolition around Glenwood and nearby rural Arkansas communities.",
    url: `${siteUrl}/glenwood-ar`,
    images: ["/images/tractor-bush-hog.jpg"],
  },
};

export default function GlenwoodPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Property Cleanup, Dirt Work and Bush Hogging in Glenwood AR",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Dirt Property Services LLC",
      telephone: siteData.phone,
      email: siteData.email,
      url: siteUrl,
    },
    areaServed: [
      "Glenwood AR",
      "Amity AR",
      "Kirby AR",
      "Norman AR",
      "Mount Ida AR",
      "Bonnerdale AR",
      "Caddo Gap AR",
    ],
    serviceType: [
      "Property cleanup",
      "Mini excavator work",
      "Dirt work",
      "Driveway grading",
      "Drainage work",
      "Bush hogging",
      "Brush cutting",
      "Hauling",
      "Storm cleanup",
      "Light demolition",
    ],
    description:
      "Property cleanup, mini excavator dirt work, driveway help, bush hogging, brush cutting, hauling, storm cleanup, cleanouts, and light demolition around Glenwood and surrounding rural Arkansas communities.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      <section className="relative min-h-[78vh] overflow-hidden pt-20">
        <Image
          src="/images/tractor-bush-hog.jpg"
          alt="Bush hogging and property cleanup around Glenwood Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_50%,rgba(107,38,27,.42)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Glenwood • Amity • Kirby • Norman • Mount Ida
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Property Cleanup, Dirt Work And Bush Hogging Around Glenwood.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt Property Services LLC helps Glenwood area property owners
              with rough cleanup, overgrown land, hauling, and practical
              mini-excavator work for driveways, drainage, washouts, roots, and
              small dirt projects.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phoneHref}`} className="btn btn-primary">
                Call or Text Photos
              </Link>
              <Link href="/#quote-form" className="btn btn-secondary">
                Get A Free Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustStrip />
      <GoogleReviews />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Glenwood Area Property Work</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              Built for rural properties, equipment work, brush, hauling, and cleanup jobs.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Around Glenwood, Amity, Kirby, Norman, and Mount Ida, a lot of
              property work is not fancy. It is brush that needs cut, old junk
              that needs hauled off, storm debris that needs cleaned up, or a
              driveway, drainage area, or rough spot that needs equipment on it.
            </p>

            <p>
              We focus on the kind of jobs rural homeowners, landowners, cabin
              owners, and families run into around here. If it needs a truck,
              trailer, tractor, mini excavator, or a couple local guys willing to
              get dirty, that is the lane Red Dirt was built for.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Mini excavator dirt work",
              "Bush hogging and rough mowing",
              "Driveway and drainage help",
              "Brush piles and storm cleanup",
              "Rural junk hauling",
              "Old shed and fence removal",
            ].map((item) => (
              <FadeIn
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
              >
                <h3 className="text-3xl font-bold text-white">{item}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/dirt-work/mini-excavator-transport.webp"
              alt="Red Dirt truck hauling a mini excavator for Glenwood area property work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Local Equipment Work</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Dirt work gets quoted around the ground, water, and access.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                Driveway work, drainage, roots, culvert areas, and washouts all
                depend on slope, material, water flow, equipment access, and how
                much shaping or cleanup the property actually needs.
              </p>

              <p>
                Send a few wide photos and the property location. For bigger
                drainage or driveway jobs, we may need to look at the site before
                giving a firm quote.
              </p>

              <Link
                href="/glenwood-dirt-work"
                className="inline-flex font-black text-[#d8c2a5] underline underline-offset-4"
              >
                See Glenwood dirt work & mini excavator services →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <RelatedLinksSection
        title="Glenwood services and nearby areas."
        text="A lot of Glenwood jobs overlap. Dirt work may need brush opened up first, and cleanup jobs can turn into hauling, stump work, or light demo."
        links={[
          { label: "Glenwood Dirt Work", href: "/glenwood-dirt-work", text: "Mini excavator work, driveways, ditches, culverts, washouts, roots, and small excavation." },
          { label: "Bush Hogging", href: "/bush-hogging", text: "Brush cutting, rough mowing, field edges, trails, and rural property cleanup." },
          { label: "Property Cleanup", href: "/property-cleanup", text: "Brush, junk, storm mess, debris, and rough areas cleaned up." },
          { label: "Amity Dirt Work", href: "/amity-dirt-work", text: "Driveways, drainage, culverts, rough grading, roots, and mini excavator work around Amity." },
        ]}
      />

      <Footer />
    </main>
  );
}
