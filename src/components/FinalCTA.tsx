import Link from "next/link";
import { siteData } from "@/data/site";
import FadeIn from "@/components/FadeIn";

export default function FinalCTA() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(159,58,42,.32),rgba(23,23,23,1))] p-8 md:p-12">
          <p className="eyebrow mb-4">Get A Quote</p>

          <h2 className="max-w-3xl text-5xl font-bold leading-[0.9] text-white md:text-7xl">
            Need help cleaning up a property?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Whether you have a pile of debris, an old shed that needs to go, a
            rental property that needs cleaned out, or a project you are not sure
            where to start with, reach out and let us take a look.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`tel:${siteData.phone}`} className="btn btn-primary">
              Call or Text {siteData.phone}
            </Link>
            <Link href={`mailto:${siteData.email}`} className="btn btn-secondary">
              Email Photos
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}