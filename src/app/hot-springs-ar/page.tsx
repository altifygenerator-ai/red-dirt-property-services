import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedLinksSection from "@/components/RelatedLinksSection";
import HotSpringsSeoSection from "@/components/HotSpringsSeoSection";
import { siteData } from "@/data/site";

const siteUrl = "https://www.reddirtpropertyservicesar.com";

export const metadata: Metadata = {
  title: "Junk Removal, Brush Hogging & Property Cleanup in Hot Springs AR",
  description:
    "Red Dirt Property Services provides junk removal, brush hogging, bush hogging, property cleanup, hauling, rental cleanouts, estate cleanouts, storm cleanup, brush removal, and light demolition around Hot Springs, Lake Hamilton, Bismarck, Royal, Pearcy, and nearby areas.",
  alternates: {
    canonical: "/hot-springs-ar",
  },
  openGraph: {
    title: "Junk Removal, Brush Hogging & Property Cleanup in Hot Springs AR",
    description:
      "Local junk removal, brush hogging, bush hogging, cleanouts, hauling, storm cleanup, brush removal, property cleanup, and light demolition around Hot Springs, Lake Hamilton, Bismarck, Royal, Pearcy, and nearby Arkansas communities.",
    url: `${siteUrl}/hot-springs-ar`,
    images: ["/images/dump.jpg"],
  },
};

export default function HotSpringsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Junk Removal, Brush Hogging and Property Cleanup in Hot Springs AR",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Dirt Property Services",
      telephone: siteData.phone,
      email: siteData.email,
      url: siteUrl,
    },
    areaServed: [
      "Hot Springs AR",
      "Hot Springs Village AR",
      "Lake Hamilton AR",
      "Bismarck AR",
      "Pearcy AR",
      "Royal AR",
      "Malvern AR",
    ],
    serviceType: [
      "Junk removal",
      "Brush hogging",
      "Bush hogging",
      "Property cleanup",
      "Property cleanouts",
      "Rental cleanouts",
      "Estate cleanouts",
      "Hauling",
      "Storm cleanup",
      "Light demolition",
    ],
    description:
      "Junk removal, brush hogging, bush hogging, property cleanup, property cleanouts, rental cleanouts, estate cleanouts, hauling, storm cleanup, brush removal, and light demolition around Hot Springs, Arkansas.",
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
          src="/images/dump.jpg"
          alt="Dump trailer for junk removal and cleanouts around Hot Springs Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_50%,rgba(107,38,27,.42)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Hot Springs • Lake Hamilton • Bismarck • Surrounding Areas
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Junk Removal, Brush Hogging, And Cleanup Around Hot Springs.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt Property Services helps Hot Springs area homeowners,
              landlords, cabin owners, and property owners with junk removal,
              brush hogging, hauling, cleanouts, storm debris, property cleanup,
              and light demo work.
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

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Hot Springs Cleanup Help</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              For the junk, cleanouts, and property messes you do not want to
              fool with.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Hot Springs has a mix of homes, rentals, lake properties, cabins,
              remodels, wooded lots, fence lines, and rural spots just outside
              town. That means there is always something that needs hauled off,
              cut back, cleaned out, or cleared up.
            </p>

            <p>
              We help with trailer loads of junk, garage cleanouts, rental
              cleanouts, estate cleanouts, brush hogging, rough mowing, storm
              debris, old furniture, appliances, and small structures that need
              removed and hauled away.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Junk removal and hauling",
              "Brush hogging and rough mowing",
              "Rental property cleanouts",
              "Estate and garage cleanouts",
              "Cabin and lake property cleanup",
              "Fence lines, overgrown edges, and brush removal",
              "Storm debris and brush removal",
              "Shed, fence, and light demo cleanup",
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
              alt="Flatbed trailer for hauling and cleanouts around Hot Springs"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Cleanouts and hauling are priced by the job.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                A small pickup is different than a full rental cleanout, a
                brush hogging job, or a property with mixed junk, brush,
                appliances, and debris.
              </p>

              <p>
                We quote based on load size, labor, dump fees, mileage, and what
                kind of material needs hauled. Send photos and the property
                location for the fastest estimate.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <HotSpringsSeoSection
        eyebrow="Hot Springs Cleanup Services"
        title="Specific cleanup and hauling pages for Hot Springs searches."
        text="These pages break out the work people actually search for around Hot Springs, from junk removal and cleanouts to brush hogging, storm cleanup, shed removal, dirt work, and stump grinding."
      />

      <RelatedLinksSection
        title="Hot Springs cleanup services."
        text="Hot Springs jobs can be simple junk removal, rental cleanouts, storm cleanup, or rural property work outside town."
        links={[
          { label: "Junk Removal", href: "/junk-removal", text: "Furniture, appliances, debris, garage junk, and haul-off work around Southwest Arkansas." },
          { label: "Cleanouts", href: "/cleanouts", text: "Rental, estate, garage, cabin, and outbuilding cleanouts." },
          { label: "Storm Cleanup", href: "/storm-cleanup", text: "Downed limbs, brush piles, scattered debris, and cleanup after Arkansas weather." },
          { label: "Mountain Pine Area", href: "/mountain-pine-ar", text: "Property cleanup, brush cleanup, junk hauling, and storm debris around Mountain Pine." },
        ]}
      />

      <Footer />
    </main>
  );
}