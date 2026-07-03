import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
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