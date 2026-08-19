"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Database,
  Bot,
  Wrench,
} from "lucide-react";

interface DemoScenario {
  id: string;
  prompt: string;
  toolName: string;
  agentReply: string;
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "catalog",
    prompt: "¿Tienen cemento disponible y cuánto cuesta?",
    toolName: "search_catalog(query='cemento')",
    agentReply:
      "¡Hola! Sí, tenemos disponible Cemento Bío Bío 25kg a $4,990 CLP con 150 unidades en stock en nuestra sucursal de Los Leones. ¿Te gustaría generar una cotización o reservar unidades?",
  },
  {
    id: "appointment",
    prompt: "¿Tienen hora disponible para una evaluación mañana a las 16:00?",
    toolName: "check_availability(date='2026-08-20', time='16:00')",
    agentReply:
      "Tenemos disponibilidad mañana a las 16:00 con el especialista Dr. Silva. ¿Te gustaría que reservemos tu cita con tu nombre y RUT?",
  },
  {
    id: "handoff",
    prompt: "Tengo un problema complejo con una factura, necesito un operador.",
    toolName: "escalate_to_human(reason='Facturación')",
    agentReply:
      "Entendido perfectamente. Ya transferí esta conversación a nuestro equipo de soporte humano. Un ejecutivo te atenderá por este mismo chat en un momento.",
  },
];

export function HeroSection() {
  const [activeScenario, setActiveScenario] = useState<DemoScenario>(DEMO_SCENARIOS[0]);
  const [isTyping, setIsTyping] = useState(false);

  function handleSelectScenario(scenario: DemoScenario) {
    setIsTyping(true);
    setActiveScenario(scenario);
    setTimeout(() => {
      setIsTyping(false);
    }, 350);
  }

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>SaaS Operacional de WhatsApp con IA para Empresas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Convierte WhatsApp en el{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                motor operacional
              </span>{" "}
              de tu negocio.
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atención 24/7 con IA conectada a tu inventario real en PostgreSQL, confirmación segura de pedidos, agendamiento de citas y derivación a operadores humanos en tiempo real.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-300 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cero alucinaciones de stock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Inbox en tiempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Human Handoff automático</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transition transform hover:-translate-y-0.5"
              >
                <span>Probar 14 Días Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700 rounded-xl transition shadow-sm"
              >
                <span>Explorar Funcionalidades</span>
              </Link>
            </div>

            {/* Metrics */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-8 text-xs text-slate-400">
              <div>
                <span className="block text-xl font-bold text-white font-mono">&lt; 1.2s</span>
                <span>Latencia de respuesta</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <span className="block text-xl font-bold text-emerald-400 font-mono">100%</span>
                <span>Fuente de Verdad en DB</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <span className="block text-xl font-bold text-cyan-400 font-mono">Multi-Tenant</span>
                <span>Aislamiento estricto</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl p-4 sm:p-5 backdrop-blur-xl relative">
              {/* Header simulator */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ferretería Central</p>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CoreAgent AI Activo
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">
                  WhatsApp Cloud API
                </span>
              </div>

              {/* Scenario selector tabs */}
              <div className="mb-4">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Selecciona una consulta de prueba:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DEMO_SCENARIOS.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => handleSelectScenario(sc)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                        activeScenario.id === sc.id
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {sc.id === "catalog"
                        ? "📦 Consultar Stock"
                        : sc.id === "appointment"
                        ? "📅 Agendar Cita"
                        : "🙋 Solicitar Humano"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 min-h-[220px] bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 font-sans text-xs">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="bg-emerald-700/90 text-white rounded-2xl rounded-tr-none px-3.5 py-2 max-w-[85%] shadow">
                    <p>{activeScenario.prompt}</p>
                    <span className="text-[9px] text-emerald-200 block text-right mt-1">10:42 AM</span>
                  </div>
                </div>

                {/* Tool Execution Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-full text-[10px] text-amber-300 font-mono">
                    <Wrench className="w-3 h-3 text-amber-400" />
                    <span>{activeScenario.toolName}</span>
                  </div>
                </div>

                {/* Agent Reply */}
                {isTyping ? (
                  <div className="flex items-center gap-1 text-slate-400 px-3 py-2 bg-slate-800/60 rounded-xl w-24">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[90%] shadow border border-slate-700/60 space-y-1.5">
                      <p className="leading-relaxed">{activeScenario.agentReply}</p>
                      <span className="text-[9px] text-slate-400 block text-right">10:42 AM · IA Verificada</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom simulator note */}
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Database className="w-3.5 h-3.5" />
                  PostgreSQL Source of Truth
                </span>
                <span className="text-slate-400">Respuesta Operacional Segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
