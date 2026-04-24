import HeroSection from "@/components/home/HeroSection";
import MottoSection from "@/components/home/MottoSection";
import ServicesSection from "@/components/home/ServicesSection";
import PillarsSection from "@/components/home/PillarsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TechSection from "@/components/home/TechSection";
import MarqueeSection from "@/components/home/MarqueeSection";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <MarqueeSection />
      <MottoSection />
      <ServicesSection />
      <PillarsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <TechSection />
    </div>
  );
}
