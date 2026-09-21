import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import GoogleReviews from "@/components/GoogleReviews";
import ServicesSection from "@/components/ServicesSection";
import VideoProofSection from "@/components/VideoProofSection";
import PricingNote from "@/components/PricingNote";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import ServiceArea from "@/components/ServiceArea";
import AboutSection from "@/components/AboutSection";
import GalleryPreview from "@/components/GalleryPreview";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HotSpringsSeoSection from "@/components/HotSpringsSeoSection";

export const metadata: Metadata = {
  title:
    "Red Dirt Property Services LLC | Dirt Work, Cleanup & Hauling in Southwest Arkansas",
  description:
    "Licensed and insured Red Dirt Property Services LLC handles mini excavator dirt work, driveway grading and drainage help, property cleanup, junk removal, brush hogging, stump grinding, cleanouts, hauling, storm cleanup, and light demolition around Amity, Glenwood, Hot Springs, Arkadelphia, Mount Ida, Kirby, and nearby Arkansas towns.",
  keywords: [
    "Red Dirt Property Services LLC",
    "dirt work Amity AR",
    "dirt work Glenwood AR",
    "mini excavator Glenwood AR",
    "mini excavator Amity AR",
    "driveway grading Glenwood AR",
    "culvert work Amity AR",
    "property cleanup Amity AR",
    "junk removal Glenwood AR",
    "brush hogging Hot Springs AR",
    "bush hogging Arkadelphia AR",
    "cleanouts Southwest Arkansas",
    "hauling near me",
    "storm cleanup Arkansas",
    "light demolition Arkansas",
    "stump grinding Arkansas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Red Dirt Property Services LLC | Dirt Work, Cleanup & Hauling",
    description:
      "Licensed and insured local mini excavator dirt work, driveway help, property cleanup, junk removal, brush hogging, hauling, stump grinding, cleanouts, storm cleanup, and light demolition across Southwest Arkansas.",
    url: "/",
    images: ["/images/cover.png"],
  },
  twitter: {
    title:
      "Red Dirt Property Services LLC | Dirt Work, Cleanup & Hauling",
    description:
      "Licensed and insured local mini excavator dirt work, driveway help, property cleanup, junk removal, brush hogging, hauling, stump grinding, cleanouts, storm cleanup, and light demolition across Southwest Arkansas.",
    images: ["/images/cover.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <GoogleReviews />
      <ServicesSection />
      <VideoProofSection />
      <BeforeAfterSection />
      <GalleryPreview />
      <PricingNote />
      <HowItWorks />
      <WhoWeHelp />
      <ServiceArea />
      <HotSpringsSeoSection compact />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
