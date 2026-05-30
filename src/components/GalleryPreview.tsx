import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const placeholders = [
  "Truck & Trailer",
  "Before Cleanup",
  "After Cleanup",
  "Light Demo",
  "Brush Removal",
  "Haul-Off Load",
];

export default function GalleryPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Work Photos"
          title="Real work will tell the story."
          text="As jobs are completed, this section will show before-and-after cleanup photos, trailer loads, light demolition projects, and property transformations from around the area."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item, index) => (
            <FadeIn
              key={item}
              delay={index * 0.04}
              className="flex aspect-[4/3] items-end rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(159,58,42,.28),rgba(0,0,0,.35)),linear-gradient(180deg,#31231d,#171717)] p-5"
            >
              <span className="rounded-full border border-white/12 bg-black/30 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-white/78 backdrop-blur">
                {item}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}