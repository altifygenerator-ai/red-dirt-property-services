import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/images/truck2.png')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,12,10,.96)_0%,rgba(24,16,13,.86)_45%,rgba(107,38,27,.54)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(159,58,42,.36),transparent_34rem)]" />

      <div className="pointer-events-none absolute right-[-4rem] top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block">
        <img
          src="/images/logo2.png"
          alt=""
          className="h-[340px] w-[340px] object-contain"
        />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow mb-5">
            Based in the Amity & Glenwood Area • Serving Rural Arkansas
          </p>

          <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
            Property Cleanup, Hauling & Light Demolition Done Right.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
            From old sheds and brush piles to rental cleanouts, storm debris,
            unwanted junk, and small demolition projects, Red Dirt Property
            Services helps Arkansas property owners clear the mess and move
            forward. We show up with the truck, trailer, tools, and work ethic to
            get the job done.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="btn btn-primary">
              Get a Free Quote
            </Link>

            <Link href={`tel:${siteData.phone}`} className="btn btn-secondary">
              Call or Text Today
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 text-sm font-bold uppercase tracking-wide text-white/84 sm:grid-cols-4">
            <span className="rounded-xl border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-sm">
              Property Cleanup
            </span>

            <span className="rounded-xl border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-sm">
              Hauling
            </span>

            <span className="rounded-xl border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-sm">
              Light Demo
            </span>

            <span className="rounded-xl border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-sm">
              Storm Cleanup
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}