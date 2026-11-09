import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import TrustStrip from "@/components/TrustStrip";
import GoogleReviews from "@/components/GoogleReviews";
import { siteData } from "@/data/site";

const pages = {
  gutters: {
    slug: "gutter-cleaning",
    eyebrow: "Gutter Cleaning • Glenwood • Hot Springs",
    heading: "Keep Leaves And Debris Out Of Your Gutters.",
    intro: "Leaves, pine needles, and packed debris can keep water from draining properly. Red Dirt offers residential gutter cleaning around Glenwood, Amity, Hot Springs, and nearby Arkansas communities.",
    name: "Residential Gutter Cleaning",
    price: "$125",
    qualifier: "For qualifying smaller, single-story homes with safe access.",
    items: [
      "Remove leaves and loose debris from accessible gutters",
      "Check and clear accessible downspout openings",
      "Check drainage when water access allows",
      "Gather and clean up removed debris",
      "Point out visible issues that may need repair",
      "Spring and fall maintenance by request",
    ],
    details: "Clogged gutters can send rainwater into places it does not belong. We clear the buildup and remove debris. Multiple roof levels, steep slopes, power-line hazards, damaged gutters, and hard-to-reach areas require a separate safety assessment and may not be jobs we can accept.",
    quote: "Send your town and photos showing the roofline, the number of stories, and roughly how much gutter needs cleaned. Wet, packed material and blocked downspouts can affect the quote.",
    other: "Exterior Window Cleaning",
    otherHref: "/exterior-window-cleaning",
  },
  windows: {
    slug: "exterior-window-cleaning",
    eyebrow: "Exterior Window Cleaning • Glenwood • Hot Springs",
    heading: "Cleaner Outside Windows Without The Extra Hassle.",
    intro: "Outside window washing for suitable homes, cabins, and rentals around Glenwood, Amity, Hot Springs, and nearby Arkansas towns. Pair it with gutter cleaning and take care of two jobs in one visit.",
    name: "Exterior Residential Window Cleaning",
    price: "$99",
    qualifier: "For qualifying small homes with standard, safely accessible exterior windows.",
    items: [
      "Wash standard exterior window glass",
      "Squeegee and detail window edges",
      "Outside-only service, no entry into your home",
      "Screen cleaning available for an additional charge",
      "Rental and cabin maintenance by request",
      "Combine it with gutter cleaning or other property work",
    ],
    details: "Dust, pollen, cobwebs, and rain leave outside windows looking rough. We use appropriate window tools instead of a pressure washer on glass and window seals. Hard-water spots, paint, and construction residue may require specialized treatment and a separate quote.",
    quote: "Send your town, roughly how many window openings need washing, the number of stories, and photos of high or difficult windows. Oversized glass and screens may cost extra.",
    other: "Gutter Cleaning",
    otherHref: "/gutter-cleaning",
  },
} as const;

export default function ExteriorCleaningPage({ kind }: { kind: keyof typeof pages }) {
  const p = pages[kind];
  const url = siteData.siteUrl + "/" + p.slug;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": url + "#service",
      name: p.name,
      description: p.intro,
      url,
      serviceType: p.name,
      provider: { "@id": siteData.siteUrl + "/#localbusiness" },
      areaServed: ["Amity, Arkansas", "Glenwood, Arkansas", "Hot Springs, Arkansas", "Mount Ida, Arkansas", "Arkadelphia, Arkansas"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteData.siteUrl },
        { "@type": "ListItem", position: 2, name: p.name, item: url },
      ],
    },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <section className="relative overflow-hidden bg-[#171717] pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_24%,rgba(159,58,42,.30),transparent_55%)]" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <FadeIn>
            <p className="eyebrow mb-5">{p.eyebrow}</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.93] text-white sm:text-6xl lg:text-7xl">{p.heading}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{p.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#quote-form" className="btn btn-primary">Get a Free Quote</Link>
              <a href={"tel:" + siteData.phoneHref} className="btn btn-secondary">Call or Text {siteData.phone}</a>
            </div>
          </FadeIn>
          <FadeIn className="rounded-[2rem] border border-white/15 bg-[#211915] p-7 shadow-2xl md:p-9">
            <p className="eyebrow mb-3">Residential Service</p>
            <p className="text-sm font-bold uppercase tracking-wide text-white/60">{p.name}</p>
            <p className="mt-4 text-6xl font-bold text-white">{p.price}</p>
            <p className="mt-2 font-bold text-[#d8c2a5]">Starting at</p>
            <p className="mt-5 leading-7 text-white/70">{p.qualifier}</p>
            <div className="my-6 border-t border-white/10" />
            <p className="text-sm font-bold uppercase tracking-wider text-white/65">Gutter + Exterior Window Package</p>
            <p className="mt-2 text-4xl font-bold text-white">$225 <span className="text-base font-medium text-white/60">starting at</span></p>
            <p className="mt-4 text-sm leading-6 text-white/55">Final cost depends on gutter length, window count, debris, height, travel, and access. We only accept jobs we can do safely.</p>
          </FadeIn>
        </div>
      </section>
      <TrustStrip />
      <GoogleReviews />
      <section className="section">
        <div className="container">
          <FadeIn>
            <p className="eyebrow mb-4">What We Can Help With</p>
            <h2 className="max-w-3xl text-5xl font-bold leading-[0.94] text-white md:text-6xl">Straightforward work, with a straight quote.</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {p.items.map((item, index) => (
              <FadeIn key={item} delay={index * 0.035} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                <span className="mb-4 block text-xl font-bold text-[#d8c2a5]">✓</span>
                <p className="text-lg font-semibold leading-7 text-white">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#211915]">
        <div className="container grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="eyebrow mb-4">How We Handle It</p>
            <h2 className="text-5xl font-bold leading-[0.94] text-white md:text-6xl">The right job for the right setup.</h2>
            <p className="mt-7 text-lg leading-8 text-white/70">{p.details}</p>
          </FadeIn>
          <FadeIn className="rounded-[2rem] border border-white/10 bg-[#171717] p-7 md:p-9">
            <p className="eyebrow mb-4">Getting A Quote</p>
            <h3 className="text-4xl font-bold text-white">Send us a few details.</h3>
            <p className="mt-5 text-lg leading-8 text-white/70">{p.quote}</p>
            <p className="mt-6 text-base leading-7 text-white/60">Serving Amity, Glenwood, Hot Springs, Lake Hamilton, Mount Ida, and nearby communities. Travel may affect the price of smaller jobs farther from our home area.</p>
            <Link href="/#quote-form" className="btn btn-primary mt-7">Request Your Quote</Link>
          </FadeIn>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <FadeIn>
            <p className="eyebrow mb-4">Make One Trip Count</p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">Ask about {p.other.toLowerCase()} while we're there.</h2>
            <p className="mt-4 text-lg leading-7 text-white/70">Combined gutter and exterior window cleaning starts at $225 for qualifying single-story homes.</p>
          </FadeIn>
          <Link href={p.otherHref} className="btn btn-secondary">See {p.other}</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
