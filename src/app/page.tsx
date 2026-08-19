import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { VisualShowcaseSection } from "@/components/landing/VisualShowcaseSection";
import { InteractiveSimulatorSection } from "@/components/landing/InteractiveSimulatorSection";
import { CapabilitiesSection } from "@/components/landing/CapabilitiesSection";
import { IndustryVerticalsSection } from "@/components/landing/IndustryVerticalsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <VisualShowcaseSection />
        <InteractiveSimulatorSection />
        <CapabilitiesSection />
        <IndustryVerticalsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}
