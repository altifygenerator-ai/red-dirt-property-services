import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ServiceArea() {
  return (
    <section id="area" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Service Area"
          title="Serving the communities we call home."
          text="Red Dirt Property Services is based around the Amity and Glenwood area and serves nearby communities throughout Montgomery, Pike, Clark, Garland, and surrounding counties."
        />

        <FadeIn className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {siteData.serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-bold text-white/78"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="mt-6 leading-7 text-white/64">
            Outside those areas? Reach out anyway. Some rural jobs make sense
            with mileage included, especially larger cleanouts, hauling, or demo
            work.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}