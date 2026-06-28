import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.95)_0%,rgba(16,14,13,.82)_44%,rgba(80,28,20,.42)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(159,58,42,.32),transparent_34rem)]" />

      <div className="pointer-events-none absolute right-[-4rem] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-[0.06] lg:block">
        <Image
          src="/images/logo2.png"
          alt=""
          fill
          className="object-contain"
          sizes="520px"
        />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
        <FadeIn className="max-w-4xl">
          <p className="eyebrow mb-5">
            Based in the Amity & Glenwood Area • Serving Rural Arkansas
          </p>

          <h1 className="text-6xl font-bold leading-[0.88] text-white sm:text-7xl lg:text-8xl">
            Property Problems Don&apos;t Fix Themselves.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
            From overgrown brush and storm debris to rental cleanouts, dirt
            work, tree cleanup, stump grinding, hauling, old sheds, and property
            messes that have gotten out of hand, Red Dirt Property Services helps
            Arkansas property owners get things cleaned up and moving forward.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="btn btn-primary">
              Get a Free Quote
            </Link>

            <Link href={`tel:${siteData.phoneHref}`} className="btn btn-secondary">
              Call or Text Photos
            </Link>
          </div>

          <div className="mt-10 grid max-w-5xl grid-cols-2 gap-3 text-sm font-bold uppercase tracking-wide text-white/84 md:grid-cols-3 lg:grid-cols-6">
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Property Cleanup
            </span>
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Dirt Work
            </span>
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Tree Work
            </span>
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Stump Grinding
            </span>
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Hauling
            </span>
            <span className="rounded-xl border border-white/12 bg-black/30 px-4 py-3 backdrop-blur-sm">
              Light Demo
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}