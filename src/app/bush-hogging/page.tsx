import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Brush Hogging, Bush Hogging & Brush Cutting | Red Dirt Property Services",
  description:
    "Brush hogging, bush hogging, rough mowing, and brush cutting around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, Arkadelphia, and nearby rural Arkansas communities. Red Dirt Property Services helps clear overgrown fields, brush, trails, fence lines, and rural properties.",
  alternates: {
    canonical: "/bush-hogging",
  },
  openGraph: {
    title: "Brush Hogging, Bush Hogging & Brush Cutting | Red Dirt Property Services",
    description:
      "Rural Arkansas brush hogging, bush hogging, brush cutting, field mowing, and property cleanup around Amity, Glenwood, Mount Ida, Kirby, Hot Springs, and Arkadelphia.",
    url: "https://reddirtpropertyservicesar.com/bush-hogging",
    images: ["/images/tractor-bush-hog.jpg"],
  },
};

const siteUrl = "https://reddirtpropertyservicesar.com";

export default function BushHoggingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brush Hogging, Bush Hogging and Brush Cutting",
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
      "Norman AR",
      "Bonnerdale AR",
      "Bismarck AR",
      "Caddo Valley AR",
      "Arkadelphia AR",
      "Hot Springs AR",
    ],
    description:
      "Brush hogging, bush hogging, brush cutting, field mowing, rough mowing, and rural property cleanup for overgrown land, trails, fence lines, small acreage, and neglected properties around Amity, Glenwood, Hot Springs, Arkadelphia, and nearby Arkansas communities.",
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
            src="/images/tractor-bush-hog.jpg"
            alt="Bush hogging and brush cutting service in rural Arkansas"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_48%,rgba(80,28,20,.44)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Bush Hogging • Brush Cutting • Rural Property Cleanup
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Overgrown Property Doesn&apos;t Have To Stay That Way.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt Property Services helps landowners, homeowners, cabin
              owners, and rural property owners get brush, tall grass, trails,
              and rough areas knocked back before they get too far gone.
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
            <p className="eyebrow mb-4">What We Cut</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              Fields, brush, trails, and rural spots that need cleaned up.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Around here, property can get away from you fast. Tall grass,
              briars, saplings, fence lines, old trails, hunting spots, and open
              areas can turn into a mess before you know it.
            </p>

            <p>
              We focus on practical bush hogging and brush cutting for rural
              properties around Amity, Glenwood, Kirby, Mount Ida, Hot Springs,
              Arkadelphia, and nearby communities.
            </p>

            <p>
              If the area is too rough for a regular mower but does not need full
              land clearing, this is usually the kind of job we can take a look
              at.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Overgrown fields and lots",
              "Brushy trails and access paths",
              "Cabin and hunting property cleanup",
              "Fence lines and rough edges",
              "Tall grass and thick weeds",
              "Seasonal property maintenance",
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
              src="/images/tractor-pov.jpg"
              alt="Tractor view while cutting rural Arkansas property"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Bush hogging is usually quoted by the job.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                A simple open area near Amity or Glenwood is different than a
                rough property with saplings, rocks, hidden debris, steep spots,
                or extra travel time.
              </p>

              <p>
                As a starting point, hourly bush hogging work commonly begins
                around $80/hr depending on property conditions, access, travel,
                and equipment time. Larger jobs may be quoted by the job or by
                acreage after we see the property.
              </p>

              <p>
                Send photos, location, and rough acreage if you know it. We will
                give you a straight answer on whether it is a good fit.
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
              Bush hogging around Amity, Glenwood, Mount Ida, Kirby, and nearby
              rural areas.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              We serve rural properties throughout the Amity and Glenwood area,
              including Kirby, Norman, Mount Ida, Bonnerdale, Bismarck, Caddo
              Valley, Arkadelphia, Hot Springs, and surrounding communities when
              the job makes sense with travel.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}