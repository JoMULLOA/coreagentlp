"use client";

import { useState } from "react";
import { Bot, Wrench, Send, Sparkles } from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  prompt: string;
  tool: string;
  reply: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "stock",
    title: "1. Consulta de Stock",
    prompt: "¿Tienen cemento y cuánto vale el saco?",
    tool: "search_catalog(query='cemento') -> Found 'Cemento Bío Bío 25kg' ($4,990 CLP, Stock: 150)",
    reply: "¡Hola! Sí, tenemos Cemento Bío Bío 25kg a $4,990 CLP con 150 unidades disponibles en tienda. ¿Cuántos sacos necesitas?",
  },
  {
    id: "order",
    title: "2. Confirmación de Pedido",
    prompt: "Quiero 10 sacos de cemento para despacho.",
    tool: "create_order_draft(items=[{sku: 'CEM-001', qty: 10}]) -> Total $49,900 CLP",
    reply: "He preparado el borrador de tu pedido #54321 por 10 sacos de Cemento ($49,900 CLP total). ¿Confirmas la compra para reservarlo en bodega?",
  },
  {
    id: "human",
    title: "3. Derivación Humana",
    prompt: "Necesito coordinar una factura exenta con la administración.",
    tool: "escalate_to_human(reason='Facturación exenta') -> Status: WAITING_HUMAN",
    reply: "Entendido. He transferido esta conversación a nuestro departamento de administración. Un ejecutivo te atenderá por aquí en unos minutos.",
  },
];

export function InteractiveSimulatorSection() {
  const [active, setActive] = useState<Scenario>(SCENARIOS[0]);

  return (
    <section id="simulator" className="py-20 bg-black border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">Demostración Interactiva</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Prueba cómo interactúa el agente.
          </h2>
          <p className="text-sm text-neutral-400">
            Haz clic en cualquiera de los flujos de prueba para ver la ejecución en tiempo real:
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActive(sc)}
              className={`px-5 py-2.5 rounded-xl font-medium text-xs tracking-wide transition cursor-pointer ${
                active.id === sc.id
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Simulated Chat Phone Box */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-neutral-950 border border-neutral-800 p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-semibold">Ferretería Central (WhatsApp Business)</span>
            </div>
            <span className="font-mono text-[10px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-emerald-400">
              Tool Calling OK
            </span>
          </div>

          <div className="space-y-3 text-xs min-h-[160px] flex flex-col justify-center">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-emerald-700 text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[85%]">
                <p>{active.prompt}</p>
                <span className="text-[9px] text-emerald-200 block text-right mt-1">11:15 AM</span>
              </div>
            </div>

            {/* Tool badge */}
            <div className="flex justify-center my-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-amber-300 font-mono text-[10px]">
                <Wrench className="w-3 h-3 text-amber-400" />
                <span>{active.tool}</span>
              </div>
            </div>

            {/* Agent reply */}
            <div className="flex justify-start">
              <div className="bg-neutral-900 text-neutral-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[90%] border border-neutral-800">
                <p className="leading-relaxed">{active.reply}</p>
                <span className="text-[9px] text-neutral-500 block text-right mt-1">11:15 AM · IA Verificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
