import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Ideal para pymes y negocios locales que inician su atención automatizada.",
      price: "$39.990",
      period: "CLP / mes",
      highlight: false,
      features: [
        "1 Número de WhatsApp Cloud API",
        "Hasta 100 productos en catálogo",
        "1.000 conversaciones al mes",
        "Inbox web de 3 columnas en tiempo real",
        "Human Handoff (1 operador)",
        "Soporte estándar por correo",
      ],
      ctaText: "Comenzar con Starter",
    },
    {
      name: "Pro",
      description: "Para empresas con alto flujo comercial que necesitan cerrar ventas y citas.",
      price: "$89.990",
      period: "CLP / mes",
      highlight: true,
      badge: "Más Popular",
      features: [
        "Hasta 3 Números de WhatsApp",
        "Catálogo ilimitado de productos/servicios",
        "10.000 conversaciones al mes",
        "Creación de Pedidos y Citas en 2 fases",
        "Multi-operador ilimitado en Inbox",
        "Integración de WebSockets en tiempo real",
        "Soporte prioritario por WhatsApp",
      ],
      ctaText: "Comenzar Prueba Pro Gratis",
    },
    {
      name: "Enterprise",
      description: "Soluciones a medida para cadenas de retail, clínicas y grandes empresas.",
      price: "Personalizado",
      period: "según infraestructura",
      highlight: false,
      features: [
        "Números de WhatsApp ilimitados",
        "Servidor dedicado de inferencia local",
        "Integración directa con tu ERP / CRM actual",
        "Aislamiento de base de datos on-premise o cloud",
        "SLA de disponibilidad garantizado 99.9%",
        "Gestor de cuenta y onboarding dedicado",
      ],
      ctaText: "Contactar a Ventas",
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
            Planes Transparentes
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Invierte en ventas cerradas, no en horas de chat.
          </p>
          <p className="text-base text-slate-300">
            Comienza hoy con 14 días de prueba gratuita. Sin tarjetas de crédito ni contratos forzados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition duration-300 relative ${
                plan.highlight
                  ? "bg-slate-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 lg:-translate-y-2"
                  : "bg-slate-950/70 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 min-h-[32px]">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>

                <div className="h-px bg-slate-800" />

                <ul className="space-y-3 text-sm text-slate-200">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition shadow-md cursor-pointer ${
                    plan.highlight
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
