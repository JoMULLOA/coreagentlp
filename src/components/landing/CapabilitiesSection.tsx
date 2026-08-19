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
    <section id="features" className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Capacidades del Sistema
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            El modelo interpreta, las herramientas ejecutan y la base de datos manda.
          </h2>
          <p className="text-base text-neutral-400 font-light">
            Diseñado para empresas que necesitan fiabilidad matemática y control operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-950 p-8 rounded-3xl border border-neutral-900 hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{cap.title}</h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
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
