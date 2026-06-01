import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function VideoProofSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/Vid-1.MOV"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,13,12,.96)_0%,rgba(15,13,12,.82)_42%,rgba(15,13,12,.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(159,58,42,.28),transparent_32rem)]" />

      <div className="container relative z-10 flex min-h-[620px] items-center py-20">
        <FadeIn className="max-w-2xl">
          <p className="eyebrow mb-5">Local Work. Done Right.</p>

          <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-7xl">
            We Take Pride In Every Property.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/72">
            We&apos;re local people who understand rural properties and the hard
            work that comes with keeping them cleaned up. Whether it&apos;s years
            of brush, a pile that needs hauled off, or a property that needs
            attention, we show up ready to work and get the job done right.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#gallery" className="btn btn-primary">
              See Our Work
            </Link>

            <Link href="#contact" className="btn btn-secondary">
              Get A Quote
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}