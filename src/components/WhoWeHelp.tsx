import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function WhoWeHelp() {
  return (
    <section className="section bg-[#211915]">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for rural property owners and working folks."
          text="Some jobs are too big to ignore and too aggravating to handle alone. That is where a local truck, trailer, and dependable crew comes in."
        />

        <FadeIn className="grid gap-3 sm:grid-cols-2">
          {siteData.whoWeHelp.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.045] px-5 py-4 font-bold text-white/82"
            >
              {item}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}