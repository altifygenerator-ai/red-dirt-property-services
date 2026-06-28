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
      </div>
    </section>
  );
}