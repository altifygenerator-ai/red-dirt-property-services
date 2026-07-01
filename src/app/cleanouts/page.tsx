import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedLinksSection from "@/components/RelatedLinksSection";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Property Cleanouts & Junk Removal",
  description:
    "Property cleanouts, junk removal, estate cleanouts, rental cleanouts, garage cleanouts, and hauling around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and rural Arkansas.",
  alternates: {
    canonical: "/cleanouts",
  },
  openGraph: {
    title: "Property Cleanouts & Junk Removal",
    description:
      "Local property cleanouts, junk removal, estate cleanouts, rental cleanouts, and hauling around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, and Arkadelphia.",
    url: "https://www.reddirtpropertyservicesar.com/cleanouts",
    images: ["/images/truck-trailers.jpg"],
  },
};

const siteUrl = "https://www.reddirtpropertyservicesar.com";

export default function CleanoutsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Property Cleanouts and Junk Removal",
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
      "Property cleanouts, junk removal, rental cleanouts, estate cleanouts, garage cleanouts, hauling, and debris removal around Amity and Glenwood, Arkansas.",
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
            src="/images/truck-trailers.jpg"
            alt="Truck and trailers for property cleanouts and hauling"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_48%,rgba(80,28,20,.44)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Property Cleanouts • Junk Removal • Hauling
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Clear Out The Mess And Get Your Property Back.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              From rental cleanouts and garage junk to inherited property,
              storm debris, old furniture, appliances, and trailer loads of
              unwanted stuff, Red Dirt helps get it loaded, hauled, and handled.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phoneHref}`} className="btn btn-primary">
                Call or Text Photos
              </Link>
              <Link href="/#quote-form" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Cleanout Help</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              Some cleanouts are too much for one person and a pickup truck.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Cleanouts are usually not just about hauling junk. They are about
              getting a property back to where it can be used, rented, sold,
              repaired, or passed on without the mess hanging over everybody.
            </p>

            <p>
              We help homeowners, landlords, realtors, families, cabin owners,
              and rural property owners with the kind of cleanout jobs that need
              a truck, trailer, tools, and some help that will actually show up.
            </p>

            <p>
              Send a few photos and the property location. Most cleanouts can be
              estimated pretty quickly once we see the amount, access, travel,
              and disposal needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Rental cleanouts",
              "Estate cleanouts",
              "Garage and shop cleanouts",
              "Cabin and lake property cleanups",
              "Furniture and appliance removal",
              "Brush, debris, and unwanted junk",
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
              src="/images/dump.jpg"
              alt="Dump trailer for cleanouts and debris hauling"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Cleanouts are priced by load, labor, travel, and disposal.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                A small haul-off might be simple. A rental or estate cleanout may
                take multiple hours, heavier lifting, sorting, and more than one
                dump run.
              </p>

              <p>
                We look at the amount of material, weight, dump fees, property
                access, mileage, and how much labor it will take before giving a
                price.
              </p>

              <p>
                The easiest way to start is to text photos. If it looks like a
                larger job, we may schedule a time to look at it in person.
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
              Cleanouts and junk removal around Amity, Glenwood, Hot Springs,
              Arkadelphia, and nearby towns.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Red Dirt serves homeowners, landlords, cabin owners, families, and
              property owners around Amity, Glenwood, Kirby, Mount Ida, Norman,
              Bismarck, Caddo Valley, Arkadelphia, Hot Springs, Murfreesboro,
              Malvern, and surrounding rural communities.
            </p>
          </FadeIn>
        </div>
      </section>

      <RelatedLinksSection
        title="More hauling and cleanout help."
        text="Cleanouts often turn into junk removal, property cleanup, or light demolition once the real mess is uncovered."
        links={[
          { label: "Junk Removal", href: "/junk-removal", text: "Furniture, appliances, garage junk, and debris hauled off without the runaround." },
          { label: "Property Cleanup", href: "/property-cleanup", text: "Brush, junk, debris, old materials, and rural cleanup work for rough properties." },
          { label: "Hot Springs Area", href: "/hot-springs-ar", text: "Cleanouts, junk removal, hauling, and property cleanup around Hot Springs." },
          { label: "Arkadelphia Area", href: "/arkadelphia-ar", text: "Rental cleanouts, estate cleanouts, junk hauling, and storm cleanup around Arkadelphia." },
        ]}
      />

      <Footer />
    </main>
  );
}