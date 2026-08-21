import { Suspense } from "react";
import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LegalTabsContent } from "@/components/legal/LegalTabsContent";

export const metadata: Metadata = {
  title: "Centro Legal y Privacidad | Tentaculus",
  description: "Términos y condiciones, acuerdo de servicio (SLA) y política de privacidad de Tentaculus.",
};

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100 selection:bg-white selection:text-black">
      <LandingNavbar />
      <main className="flex-1">
        <Suspense fallback={<div className="max-w-4xl mx-auto py-24 text-center text-neutral-500 font-mono text-xs">Cargando centro legal...</div>}>
          <LegalTabsContent />
        </Suspense>
      </main>
      <LandingFooter />
    </div>
  );
}
