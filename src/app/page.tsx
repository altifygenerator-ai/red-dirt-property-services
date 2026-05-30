import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import PricingNote from "@/components/PricingNote";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import ServiceArea from "@/components/ServiceArea";
import AboutSection from "@/components/AboutSection";
import GalleryPreview from "@/components/GalleryPreview";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <PricingNote />
      <HowItWorks />
      <WhoWeHelp />
      <ServiceArea />
      <AboutSection />
     
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}