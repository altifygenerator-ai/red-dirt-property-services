import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Property work for jobs that need more than a pickup bed."
          text="Red Dirt focuses on practical cleanup, dirt work, hauling, tree cleanup, stump grinding, and rural property work for folks who need the job handled without a bunch of runaround."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.04}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9f3a2a] text-2xl text-white">
                  <Icon />
                </div>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/66">{service.text}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}