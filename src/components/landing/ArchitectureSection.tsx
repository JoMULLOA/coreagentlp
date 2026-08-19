import { Shield, Database, Cpu, Lock } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>Seguridad & Aislamiento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ingeniería diseñada para no fallar en producción.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Muchos chatbots fallan porque le dan al modelo de lenguaje acceso directo a inventar datos. Nuestra arquitectura separa estrictamente la interpretación del lenguaje de la ejecución transaccional.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Database className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">PostgreSQL como Única Fuente de Verdad</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Precios, stock y disponibilidad se consultan en el milisegundo exacto de la pregunta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Lock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Idempotencia con Tokens Criptográficos</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Evita doble cargo de pedidos o duplicación de citas si WhatsApp reenvía el webhook.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Orquestador con Tool Calling Estricto</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Validación exhaustiva de esquemas Pydantic antes de tocar cualquier registro de datos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Visualization */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-2xl font-mono text-xs text-slate-300 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <span className="text-emerald-400 font-bold">Flujo de Ejecución Segura</span>
              <span>FastAPI + PostgreSQL</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">1. Webhook WhatsApp Inbound</span>
                <span className="text-emerald-400 font-bold">wamid deduplicated</span>
              </div>

              <div className="flex justify-center text-slate-600">&darr;</div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">2. Agent Orchestrator (Intent Engine)</span>
                <span className="text-cyan-400 font-bold">Granite / LLM</span>
              </div>

              <div className="flex justify-center text-slate-600">&darr;</div>

              <div className="p-3 bg-emerald-950/40 rounded-lg border border-emerald-800/80 flex items-center justify-between">
                <span className="text-emerald-200">3. Tool Execution: search_catalog()</span>
                <span className="text-emerald-400 font-bold">PostgreSQL 16</span>
              </div>

              <div className="flex justify-center text-slate-600">&darr;</div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">4. Live Inbox Broadcast</span>
                <span className="text-teal-400 font-bold">WebSocket Real-Time</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-2 text-center">
              Auditoría completa de cada mensaje, herramienta y mutación en la base de datos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
