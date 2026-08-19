import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { CapabilitiesSection } from "@/components/landing/CapabilitiesSection";
import { IndustryVerticalsSection } from "@/components/landing/IndustryVerticalsSection";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <IndustryVerticalsSection />
        <ArchitectureSection />
        <PricingSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}
