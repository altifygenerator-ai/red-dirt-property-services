import FadeIn from "@/components/FadeIn";

export default function PricingNote() {
  return (
    <section id="quote" className="section bg-[#211915]">
      <div className="container">
        <FadeIn className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#171717] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white">
              Every property is different.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/70">
            <p>
              Most cleanup, hauling, dirt work, tree work, stump grinding, and
              light demolition jobs need to be quoted after we know the load
              size, labor involved, travel distance, material or dump fees, and
              access to the property.
            </p>
            <p>
              The easiest way to start is to send a few photos and your location.
              For tree work, ditches, culverts, driveways, or larger clearing
              jobs, we may need to look first so we can quote it safely and
              fairly.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="mt-8 rounded-[2rem] border border-white/10 bg-[#171717] p-7 md:p-9">
          <p className="eyebrow mb-3">Exterior Maintenance</p>
          <h3 className="text-4xl font-bold text-white">Starting prices for the smaller jobs, too.</h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              { label: "Gutter Cleaning", price: "$125", href: "/gutter-cleaning" },
              { label: "Exterior Window Cleaning", price: "$99", href: "/exterior-window-cleaning" },
              { label: "Gutters + Outside Windows", price: "$225", href: "/gutter-cleaning" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-[#9f3a2a]/60">
                <span className="block text-sm font-bold text-white/65">{item.label}</span>
                <strong className="mt-3 block text-4xl text-white">{item.price}</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-[#d8c2a5]">Starting at</span>
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Starting prices are for qualifying smaller, single-story homes with safe access. Final quotes depend on gutter length, window count, debris, height, travel, and access. Elevated or difficult work is assessed individually.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}