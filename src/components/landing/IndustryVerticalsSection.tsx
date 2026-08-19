import { Hammer, Stethoscope, Dumbbell, UtensilsCrossed } from "lucide-react";

export function IndustryVerticalsSection() {
  const verticals = [
    {
      icon: Hammer,
      title: "Ferreterías & Construcción",
      examples: [
        "Consulta de stock por medidas (pulgadas, mm, sacos)",
        "Cotizaciones multi-producto con precio en CLP",
        "Disponibilidad por sucursal en tiempo real",
      ],
      badge: "Retail & Mayorista",
    },
    {
      icon: Stethoscope,
      title: "Clínicas & Consultorios",
      examples: [
        "Agendamiento con disponibilidad por especialista",
        "Recordatorios y confirmación de asistencia",
        "Derivación inmediata a recepción ante urgencias",
      ],
      badge: "Salud & Bienestar",
    },
    {
      icon: Dumbbell,
      title: "Gimnasios & Centros Fitness",
      examples: [
        "Reserva de cupos en clases guiadas",
        "Información de planes mensuales y matriculación",
        "Horarios de apertura y políticas de congelamiento",
      ],
      badge: "Deportes & Membresías",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes & Gastronomía",
      examples: [
        "Menú del día y consulta de alérgenos",
        "Toma de pedidos para retiro o despacho",
        "Reserva de mesas con validación de capacidad",
      ],
      badge: "Food & Delivery",
    },
  ];

  return (
    <section id="verticals" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
            Verticales Soportadas
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Adaptable a las reglas operacionales de tu rubro.
          </p>
          <p className="text-base text-slate-300">
            Mediante el sistema de <span className="text-emerald-400 font-semibold">Capabilities Registry</span>, el agente solo activa las herramientas que tu negocio necesita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map((vert, idx) => {
            const Icon = vert.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition duration-300 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{vert.title}</h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                    {vert.badge}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-300">
                  {vert.examples.map((ex, exIdx) => (
                    <li key={exIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
