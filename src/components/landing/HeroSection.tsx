"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-black">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SaaS Conversacional & Operacional
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Crea tu canal de ventas por WhatsApp.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
              Respuestas instantáneas 24/7 conectadas a tu inventario real en PostgreSQL, confirmación segura de pedidos y derivación inteligente a humanos.
            </p>

            {/* Bullets */}
            <div className="space-y-3 pt-2 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span className="font-medium">Precios y stock exactos sin alucinaciones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span className="font-medium">Protocolo transaccional de pedidos en dos fases</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span className="font-medium">Inbox multi-operador con WebSockets en vivo</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-200 text-black font-bold text-sm tracking-wide rounded-xl transition shadow-xl hover:scale-[1.02] transform duration-150 text-center"
              >
                <span>PROBAR 14 DÍAS GRATIS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm border border-neutral-800 rounded-xl transition text-center"
              >
                <span>VER CÓMO FUNCIONA</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-neutral-900 grid grid-cols-3 gap-6 text-neutral-500 font-mono text-xs">
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">&lt; 1.2s</p>
                <p className="text-[11px] mt-0.5">Latencia API</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400 tracking-tight">100%</p>
                <p className="text-[11px] mt-0.5">Datos Reales</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">99.9%</p>
                <p className="text-[11px] mt-0.5">SLA Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res UI Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group hover:border-neutral-700 transition duration-500">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/hero-ui.jpg"
                  alt="CoreAgent WhatsApp AI SaaS y Métricas en Tiempo Real"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                  priority
                />
              </div>
              {/* Overlay card */}
              <div className="p-4 bg-neutral-950/90 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Database className="w-4 h-4" />
                  <span>PostgreSQL 16 Engine Activo</span>
                </div>
                <span className="text-neutral-500">wamid verificado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
