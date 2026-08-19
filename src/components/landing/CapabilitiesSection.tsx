import {
  Boxes,
  CalendarCheck2,
  Users,
  Repeat,
  Lock,
  Zap,
} from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Boxes,
      title: "Catálogo & Stock en Tiempo Real",
      description:
        "El modelo nunca inventa precios ni stock. Cada consulta ejecuta búsquedas indexadas en PostgreSQL con soporte morfológico para singular/plural en español.",
      tag: "Cero Alucinaciones",
    },
    {
      icon: CalendarCheck2,
      title: "Pedidos & Reservas en Dos Fases",
      description:
        "Protocolo transaccional seguro: la IA genera un borrador (DRAFT) y solo muta inventario cuando el cliente confirma explícitamente.",
      tag: "Idempotencia Total",
    },
    {
      icon: Users,
      title: "Inbox de 3 Columnas en Tiempo Real",
      description:
        "Visualiza conversaciones activas, historial de herramientas ejecutadas, pedidos relacionados del cliente y WebSockets reactivos sin recargar.",
      tag: "Live Sync",
    },
    {
      icon: Repeat,
      title: "Human Handoff Determinista",
      description:
        "Cuando un operador humano envía un mensaje, la IA apaga automáticamente sus respuestas para evitar interrupciones. Se devuelve el control en 1 clic.",
      tag: "Atención Híbrida",
    },
    {
      icon: Lock,
      title: "Multi-Tenant con Aislamiento Estricto",
      description:
        "Cada empresa tiene su catálogo, clientes, configuración de horarios y tokens totalmente aislados por Tenant UUID en base de datos y WebSockets.",
      tag: "Seguridad B2B",
    },
    {
      icon: Zap,
      title: "WhatsApp Cloud API Oficial",
      description:
        "Conexión directa mediante webhooks verificados de Meta con deduplicación por wamid único para máxima estabilidad y entrega instantánea.",
      tag: "Meta Verified",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
            Arquitectura de Grado Empresarial
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            El modelo interpreta, las herramientas ejecutan y la base de datos manda.
          </p>
          <p className="text-base text-slate-300">
            Diseñado para empresas que necesitan fiabilidad matemática y control operacional, no simples respuestas de texto genéricas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition duration-300 hover:shadow-xl hover:shadow-emerald-500/5 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
