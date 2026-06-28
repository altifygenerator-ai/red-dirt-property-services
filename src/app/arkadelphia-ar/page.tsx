import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedLinksSection from "@/components/RelatedLinksSection";
import { siteData } from "@/data/site";

const siteUrl = "https://www.reddirtpropertyservicesar.com";

export const metadata: Metadata = {
  title: "Junk Removal, Cleanouts & Hauling in Arkadelphia AR",
  description:
    "Red Dirt Property Services provides junk removal, hauling, rental cleanouts, estate cleanouts, storm cleanup, brush removal, and light demolition around Arkadelphia, Caddo Valley, Bismarck, Amity, and nearby Arkansas communities.",
  alternates: {
    canonical: "/arkadelphia-ar",
  },
  openGraph: {
    title: "Junk Removal, Cleanouts & Hauling in Arkadelphia AR",
    description:
      "Local junk removal, property cleanouts, rental cleanouts, estate cleanouts, hauling, storm cleanup, and light demolition around Arkadelphia and Caddo Valley.",
    url: `${siteUrl}/arkadelphia-ar`,
    images: ["/images/truck-1.png"],
  },
};

export default function ArkadelphiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Junk Removal and Cleanouts in Arkadelphia AR",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Dirt Property Services",
      telephone: siteData.phone,
      email: siteData.email,
      url: siteUrl,
    },
    areaServed: [
      "Arkadelphia AR",
      "Caddo Valley AR",
      "Bismarck AR",
      "Amity AR",
      "Gum Springs AR",
      "Friendship AR",
      "Gurdon AR",
    ],
    serviceType: [
      "Junk removal",
      "Property cleanouts",
      "Rental cleanouts",
      "Estate cleanouts",
      "Hauling",
      "Storm cleanup",
      "Light demolition",
    ],
    description:
      "Junk removal, property cleanouts, rental cleanouts, estate cleanouts, hauling, storm cleanup, brush removal, and light demolition around Arkadelphia and Caddo Valley, Arkansas.",
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
          src="/images/truck-1.png"
          alt="Truck and trailer for junk removal and cleanouts around Arkadelphia Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_50%,rgba(107,38,27,.42)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">
              Arkadelphia • Caddo Valley • Bismarck • Nearby Areas
            </p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Cleanouts, Hauling, And Junk Removal Around Arkadelphia.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              Red Dirt Property Services helps Arkadelphia and Caddo Valley area
              homeowners, landlords, families, and property owners clear out
              junk, clean up rentals, haul debris, remove storm mess, and handle
              light demolition cleanup.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phoneHref}`} className="btn btn-primary">
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
            <p className="eyebrow mb-4">Arkadelphia Area Cleanouts</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              When the job needs more than a trash can and a Saturday afternoon.
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Rental properties, garages, inherited homes, remodel debris, storm
              cleanup, and rural properties around Arkadelphia can pile up fast.
              We help get the mess loaded, hauled, and handled so the property
              can move forward.
            </p>

            <p>
              Whether it is a small junk pickup or a larger cleanout, we quote
              the job based on photos, location, load size, labor, and disposal
              needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Rental cleanouts",
              "Estate and garage cleanouts",
              "Junk removal and hauling",
              "Storm debris cleanup",
              "Brush and property cleanup",
              "Shed, fence, and light demo debris",
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
              src="/images/work-2.jpg"
              alt="Property cleanup and hauling work around Arkadelphia Arkansas"
              fill
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Send photos first and we can usually get close.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              <p>
                Arkadelphia jobs can range from a simple haul-off to a full
                property cleanout. The price depends on what is being hauled,
                how much labor it takes, disposal costs, travel, and access to
                the property.
              </p>

              <p>
                If it looks like a bigger job, we may want to see it in person
                before giving a firm quote.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <RelatedLinksSection
        title="Arkadelphia cleanup services."
        text="Arkadelphia area work often centers on rentals, haul-offs, storm debris, and property cleanups that need a trailer and a steady crew."
        links={[
          { label: "Cleanouts", href: "/cleanouts", text: "Rental, estate, garage, cabin, and outbuilding cleanouts around rural Arkansas." },
          { label: "Junk Removal", href: "/junk-removal", text: "Furniture, appliances, debris, garage junk, and haul-off work." },
          { label: "Shed Removal", href: "/shed-removal", text: "Old sheds, small structures, fences, and demo debris cleaned up and hauled off." },
          { label: "Amity Area", href: "/amity-ar", text: "Local Red Dirt cleanup, hauling, brush hogging, and light demo around Amity." },
        ]}
      />

      <Footer />
    </main>
  );
}