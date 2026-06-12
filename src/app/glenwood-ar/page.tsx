import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

const siteUrl = "https://reddirtpropertyservicesar.com";

export const metadata: Metadata = {
  title: "Property Cleanup & Bush Hogging in Glenwood AR",
  description:
    "Red Dirt Property Services provides property cleanup, bush hogging, brush cutting, hauling, cleanouts, storm cleanup, and light demolition around Glenwood, Amity, Kirby, Norman, Mount Ida, and nearby rural Arkansas communities.",
  alternates: {
    canonical: "/glenwood-ar",
  },
  openGraph: {
    title: "Property Cleanup & Bush Hogging in Glenwood AR",
    description:
      "Local property cleanup, bush hogging, brush cutting, hauling, storm cleanup, and light demolition around Glenwood, Amity, Kirby, Norman, Mount Ida, and nearby rural Arkansas communities.",
    url: `${siteUrl}/glenwood-ar`,
    images: ["/images/tractor-bush-hog.jpg"],
  },
};

export default function GlenwoodPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Property Cleanup and Bush Hogging in Glenwood AR",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Dirt Property Services",
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
      "Bush hogging",
      "Brush cutting",
      "Hauling",
      "Storm cleanup",
      "Light demolition",
    ],
    description:
      "Property cleanup, bush hogging, brush cutting, hauling, storm cleanup, cleanouts, and light demolition around Glenwood, Amity, Kirby, Norman, Mount Ida, and surrounding rural Arkansas communities.",
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
              Property Cleanup And Bush Hogging Around Glenwood.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt Property Services helps Glenwood area property owners
              clean up rough spots, brush piles, overgrown land, storm debris,
              junk, old sheds, and rural property messes that have gotten out of
              hand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phone}`} className="btn btn-primary">
                Call or Text Photos
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Get A Free Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Glenwood Area Property Work</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              Built for rural properties, brush, hauling, and cleanup jobs.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Around Glenwood, Amity, Kirby, Norman, and Mount Ida, a lot of
              property work is not fancy. It is brush that needs cut, old junk
              that needs hauled off, storm debris that needs cleaned up, or a
              rough spot on the property that needs attention.
            </p>

            <p>
              We focus on the kind of jobs rural homeowners, landowners, cabin
              owners, and families run into around here. If it needs a truck,
              trailer, tools, tractor work, or a couple local guys willing to get
              dirty, that is the lane Red Dirt was built for.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Bush hogging and rough mowing",
              "Brush piles and storm cleanup",
              "Rural junk hauling",
              "Old shed and fence removal",
              "Cabin and lake property cleanup",
              "General property cleanouts",
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
              src="/images/truck-trailers.jpg"
              alt="Red Dirt truck and trailers for Glenwood area hauling and cleanup"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Most Glenwood area jobs are quoted by photos and location.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                Bush hogging, cleanups, hauling, and light demo all depend on
                distance, access, load size, disposal, and how much work the
                property needs.
              </p>

              <p>
                Send us a few photos and tell us where the property is. We will
                give you a straight answer and let you know if it is something we
                can handle.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}