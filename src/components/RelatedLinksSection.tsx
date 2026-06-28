import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { RelatedLink } from "@/data/seoPages";

type RelatedLinksSectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  links: RelatedLink[];
};

export default function RelatedLinksSection({
  eyebrow = "More Red Dirt Help",
  title = "Related services and nearby areas.",
  text = "If this is not quite the job you need, these pages may point you in the right direction.",
  links,
}: RelatedLinksSectionProps) {
  return (
    <section className="section bg-[#211915]">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="text-5xl font-bold leading-[0.9] text-white md:text-6xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">{text}</p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link, index) => (
              <FadeIn
                key={`${link.href}-${link.label}`}
                delay={index * 0.035}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 transition hover:border-[#9f3a2a]/70 hover:bg-white/[0.07]"
              >
                <Link href={link.href} className="block">
                  <h3 className="text-3xl font-bold leading-none text-white">
                    {link.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {link.text}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
