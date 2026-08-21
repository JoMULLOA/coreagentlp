import { Suspense } from "react";
import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LegalTabsContent } from "@/components/legal/LegalTabsContent";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio | Tentaculus",
  description: "Términos y condiciones legales, acuerdo de nivel de servicio (SLA 99.9%) y políticas de contratación de la plataforma Tentaculus.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100 selection:bg-white selection:text-black">
      <LandingNavbar />
      <main className="flex-1">
        <Suspense fallback={<div className="max-w-4xl mx-auto py-24 text-center text-neutral-500 font-mono text-xs">Cargando términos...</div>}>
          <LegalTabsContent initialTab="terms" />
        </Suspense>
      </main>
      <LandingFooter />
    </div>
  );
}
