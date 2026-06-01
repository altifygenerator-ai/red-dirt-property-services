import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Light Demolition, Shed Removal & Small Structure Removal",
  description:
    "Light demolition, shed removal, small barn removal, fence removal, deck removal, mobile home cleanup, and debris hauling around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and rural Arkansas.",
  alternates: {
    canonical: "/light-demolition",
  },
  openGraph: {
    title: "Light Demolition & Shed Removal | Red Dirt Property Services",
    description:
      "Light demolition, shed removal, fence removal, small structure removal, and debris hauling around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, and Arkadelphia.",
    url: "https://reddirtpropertyservicesar.com/light-demolition",
    images: ["/images/equipment-1.jpg"],
  },
};

const siteUrl = "https://reddirtpropertyservicesar.com";

export default function LightDemolitionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Light Demolition and Shed Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Dirt Property Services",
      telephone: siteData.phone,
      email: siteData.email,
      url: siteUrl,
    },
    areaServed: [
      "Amity AR",
      "Glenwood AR",
      "Kirby AR",
      "Mount Ida AR",
      "Arkadelphia AR",
      "Hot Springs AR",
    ],
    description:
      "Light demolition, shed removal, fence removal, small barn removal, deck removal, old structure removal, mobile home cleanup, and debris hauling around Amity and Glenwood, Arkansas.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <section className="relative min-h-[78vh] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/equipment-1.jpg"
            alt="Light demolition and property cleanup equipment in rural Arkansas"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_48%,rgba(80,28,20,.44)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Light Demolition • Shed Removal • Debris Hauling
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Old Sheds, Fences, And Small Structures Can Come Down.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt handles light demolition and cleanup for old sheds,
              small barns, fences, decks, damaged structures, mobile home
              cleanups, and the kind of tear-down jobs rural property owners
              need gone without turning it into a major construction project.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phone}`} className="btn btn-primary">
                Call or Text Photos
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Light Demo</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              For structures that need removed, not remodeled.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Some things reach the point where fixing them does not make sense.
              Old sheds, rotten decks, falling fences, storm-damaged structures,
              and small outbuildings can become an eyesore, a hazard, or just
              something that keeps getting put off.
            </p>

            <p>
              We focus on light demolition and cleanup work that fits our truck,
              trailers, tools, and equipment. The goal is simple: take down what
              needs to come down, clean up the debris, and haul it off.
            </p>

            <p>
              We are not pushing full house demolition right now. Larger
              projects can be looked at, but our main focus is shed removal,
              small structure removal, fence removal, light tear-out, and rural
              property cleanup.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Shed removal",
              "Small barn removal",
              "Fence removal",
              "Old deck tear-down",
              "Mobile home cleanup",
              "Debris hauling after demo",
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
              src="/images/flatbed.jpg"
              alt="Flatbed trailer for light demolition debris hauling"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Demo gets quoted carefully for a reason.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                Light demolition pricing depends on size, materials, access,
                safety, labor, dump fees, and how much debris needs hauled away.
              </p>

              <p>
                A small simple shed is a different job than an old barn, deck,
                mobile home cleanup, or structure mixed with metal, shingles,
                trash, and hidden debris.
              </p>

              <p>
                Send photos from several angles and tell us where the property is
                located. If it looks like a bigger or riskier job, we will want
                to look at it before giving a firm quote.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container text-center">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Service Area</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              Light demolition and shed removal around Amity, Glenwood, Mount
              Ida, Hot Springs, and Arkadelphia.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              We serve rural properties around Amity, Glenwood, Kirby, Norman,
              Mount Ida, Bonnerdale, Bismarck, Caddo Valley, Arkadelphia, Hot
              Springs, Murfreesboro, Malvern, and nearby Arkansas communities.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}