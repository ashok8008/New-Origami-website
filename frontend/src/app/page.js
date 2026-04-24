import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ClientsSection from "@/components/home/ClientsSection";
import MobileFocusSection from "@/components/home/MobileFocusSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import AISection from "@/components/home/AISection";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsStrip from "@/components/home/StatsStrip";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <MarqueeSection />
      <ClientsSection />
      <MobileFocusSection />
      <StatsStrip />
      <CaseStudiesSection />
      <AISection />
      <ServicesSection />
      <ApproachSection />
      <IndustriesSection />
      <TestimonialsSection />
    </div>
  );
}
