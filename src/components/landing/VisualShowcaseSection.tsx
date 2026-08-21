import Image from "next/image";
import Link from "next/link";
import { Monitor, Users, Shield, Cpu, MessageSquare } from "lucide-react";

export function VisualShowcaseSection() {
  return (
    <section id="showcase" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Control Operacional Total
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Un Inbox en tiempo real para supervisar y colaborar con la IA.
          </h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            Nuestra interfaz de 3 columnas permite a tu equipo ver el catálogo consultado, los pedidos generados y tomar el control de cualquier chat en 1 clic.
          </p>
        </div>

        {/* Big Dashboard Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-black shadow-2xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/dashboard-ui.webp"
              alt="Dashboard de Inbox en Tiempo Real Tentaculus"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 bg-neutral-900/90 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-semibold">Inbox Reactivo con WebSockets Integrados</span>
            </div>
            <span className="text-neutral-400 font-mono">Multi-Operador · Estado AI_HANDLING & HUMAN_HANDLING</span>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Tool Calling Estricto</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              El LLM no inventa datos; ejecuta herramientas seguras que leen inventario y escriben pedidos en PostgreSQL.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Human Handoff Automático</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Si un humano responde, la IA se apaga en ese chat inmediatamente. Cero interrupciones a tu equipo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Idempotencia Garantizada</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Deduplicación por wamid y tokens de confirmación en 2 fases para evitar cobros dobles o pedidos duplicados.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
