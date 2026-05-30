import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple process. No mess around."
          text="Send the details, get a quote, pick a time, and we handle the dirty work."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {siteData.steps.map((step, index) => (
            <FadeIn
              key={step.title}
              delay={index * 0.05}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
            >
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#9f3a2a] font-black text-white">
                {index + 1}
              </span>
              <h3 className="text-3xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/66">{step.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}