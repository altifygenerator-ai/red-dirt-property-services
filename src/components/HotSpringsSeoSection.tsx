import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { hotSpringsServiceLinks, siteData } from "@/data/site";

type HotSpringsSeoSectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  compact?: boolean;
};

export default function HotSpringsSeoSection({
  eyebrow = "Hot Springs Service Pages",
  title = "Focused cleanup pages for the Hot Springs area.",
  text = "Hot Springs jobs are usually specific. These pages break out the exact work people need around Hot Springs, Lake Hamilton, Royal, Pearcy, and nearby areas.",
  compact = false,
}: HotSpringsSeoSectionProps) {
  const visibleLinks = compact
    ? hotSpringsServiceLinks.slice(0, 6)
    : hotSpringsServiceLinks;

  return (
    <section className="section seo-cluster" id="hot-springs-services">
      <div className="container">
        <div className="seo-cluster-shell">
          <FadeIn className="seo-cluster-head">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </FadeIn>

          <div className="seo-cluster-grid">
            {visibleLinks.map((item, index) => (
              <FadeIn
                key={item.href}
                delay={index * 0.035}
                className="seo-cluster-card"
              >
                <Link href={item.href}>
                  <span className="seo-cluster-card-kicker">Hot Springs</span>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="seo-cluster-cta">
            <div>
              <h3>Not sure which service page fits?</h3>
              <p>
                Send a few photos and the property location. Red Dirt can point
                the quote toward cleanup, hauling, brush hogging, dirt work,
                storm cleanup, shed removal, or whatever fits the job.
              </p>
            </div>
            <Link href={`tel:${siteData.phoneHref}`} className="btn btn-primary">
              Call or Text {siteData.phone}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
