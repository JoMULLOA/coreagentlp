"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Puedo usar mi número actual de WhatsApp comercial?",
      answer:
        "Sí. Puedes conectar tu número comercial existente a través de la WhatsApp Cloud API oficial de Meta. Te guiamos paso a paso en el proceso de verificación en Meta Business Manager.",
    },
    {
      question: "¿Qué pasa si un cliente consulta por un producto que no tengo en stock?",
      answer:
        "El agente ejecuta una búsqueda estricta en PostgreSQL. Si no hay existencias o el producto no existe, informa de manera cortés y transparente que no está disponible, sugiriendo alternativas del catálogo sin inventar datos.",
    },
    {
      question: "¿Cómo interviene un operador humano cuando un cliente lo necesita?",
      answer:
        "Contamos con Human Handoff automático: cuando un operador envía un mensaje desde el Inbox web, el sistema desactiva automáticamente las respuestas de la IA para ese chat para que el humano tenga el control total sin interrupciones. Se puede devolver a la IA con un solo clic.",
    },
    {
      question: "¿Cómo evitan que el bot cree pedidos duplicados o erróneos?",
      answer:
        "Implementamos un protocolo transaccional en dos fases con tokens criptográficos de idempotencia. Primero se crea un borrador (DRAFT) que se le muestra al cliente con el desglose y valor total en CLP. Solo cuando el cliente dice 'Sí, confirmo', el sistema muta el inventario y marca el pedido como CONFIRMADO.",
    },
    {
      question: "¿Mis datos y los de mis clientes están seguros?",
      answer:
        "Totalmente. La plataforma está construida con aislamiento multi-tenant estricto. La información de cada empresa (clientes, catálogo, mensajes y pedidos) está aislada lógicamente por Tenant UUID y no se comparte con otros clientes ni se utiliza para entrenar modelos públicos.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
            Preguntas Frecuentes
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-emerald-400 transition cursor-pointer"
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
