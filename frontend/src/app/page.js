import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ClientsSection from "@/components/home/ClientsSection";
import MobileFocusSection from "@/components/home/MobileFocusSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import DocIntelligenceFeature from "@/components/home/DocIntelligenceFeature";
import AuctionsFeature from "@/components/home/AuctionsFeature";
import AISection from "@/components/home/AISection";
import MediaFeature from "@/components/home/MediaFeature";
import ServicesSection from "@/components/home/ServicesSection";
import ApproachSection from "@/components/home/ApproachSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsStrip from "@/components/home/StatsStrip";
import { websiteJsonLd, jsonLdScript } from "@/lib/seo";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <script {...jsonLdScript(websiteJsonLd())} />
      <HeroSection />
      <MarqueeSection />
      <ClientsSection />
      <DocIntelligenceFeature />
      <AuctionsFeature />
      <MobileFocusSection />
      <StatsStrip />
      <CaseStudiesSection />
      <AISection />
      <MediaFeature />
      <ServicesSection />
      <ApproachSection />
      <IndustriesSection />
      <TestimonialsSection />
    </div>
  );
}
