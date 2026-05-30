import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function FAQSection() {
  return (
    <section className="section bg-[#211915]">
      <div className="container">
        <SectionHeading
          eyebrow="Questions"
          title="Good things to know before you call."
          text="A few quick answers for cleanup, hauling, light demo, rural service areas, and quoting."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteData.faqs.map((faq, index) => (
            <FadeIn
              key={faq.question}
              delay={index * 0.04}
              className="rounded-[1.5rem] border border-white/10 bg-[#171717] p-6"
            >
              <h3 className="text-3xl font-bold text-white">{faq.question}</h3>
              <p className="mt-4 leading-7 text-white/66">{faq.answer}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}