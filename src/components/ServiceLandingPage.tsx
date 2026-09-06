import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import GoogleReviews from "@/components/GoogleReviews";
import FadeIn from "@/components/FadeIn";
import RelatedLinksSection from "@/components/RelatedLinksSection";
import RecentWorkMediaSection from "@/components/RecentWorkMediaSection";
import {
  organizationSchemaBase,
  type ServicePageData,
} from "@/data/seoPages";
import { siteData } from "@/data/site";

type ServiceLandingPageProps = {
  page: ServicePageData;
};

export default function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteData.siteUrl}/${page.slug}#service`,
    name: page.schemaName,
    provider: organizationSchemaBase,
    areaServed: page.areaServed,
    serviceType: page.serviceType,
    description: page.schemaDescription,
    image: `${siteData.siteUrl}${page.heroImage}`,
    url: `${siteData.siteUrl}/${page.slug}`,
    mainEntityOfPage: `${siteData.siteUrl}/${page.slug}`,
    offers: {
      "@type": "Offer",
      areaServed: page.areaServed,
      itemOffered: {
        "@type": "Service",
        name: page.schemaName,
        serviceType: page.serviceType,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteData.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: `${siteData.siteUrl}/${page.slug}`,
      },
    ],
  };

  const schema = [serviceSchema, breadcrumbSchema];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      <section className="relative min-h-[78vh] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={page.heroImage}
            alt={page.heroAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.84)_48%,rgba(80,28,20,.44)_100%)]" />

        <div className="container relative z-10 flex min-h-[calc(78vh-80px)] items-center py-20">
          <FadeIn className="max-w-4xl">
            <p className="eyebrow mb-5">{page.eyebrow}</p>

            <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              {page.h1}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
              {page.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${siteData.phoneHref}`} className="btn btn-primary">
                {page.primaryCta}
              </Link>
              <Link href="/#quote-form" className="btn btn-secondary">
                {page.secondaryCta}
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
            <p className="eyebrow mb-4">{page.overviewEyebrow}</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              {page.overviewTitle}
            </h2>
          </FadeIn>

          <FadeIn className="space-y-5 text-lg leading-8 text-white/70">
            {page.overviewText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section bg-[#211915]">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {page.cards.map((item, index) => (
              <FadeIn
                key={item}
                delay={index * 0.035}
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
              src={page.detailImage}
              alt={page.detailAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="eyebrow mb-4">{page.detailEyebrow}</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              {page.detailTitle}
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
              {page.detailText.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {page.recentWork ? <RecentWorkMediaSection media={page.recentWork} /> : null}

      <section className="section bg-[#211915]">
        <div className="container text-center">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Service Area</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              {page.areaTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {page.areaText}
            </p>
          </FadeIn>
        </div>
      </section>

      <RelatedLinksSection links={page.related} />

      <Footer />
    </main>
  );
}
