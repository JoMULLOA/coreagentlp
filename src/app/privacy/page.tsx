import Link from "next/link";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { ArrowLeft, Lock, ShieldCheck, EyeOff, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <LandingNavbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la página principal</span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Política de Privacidad
            </h1>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Última actualización: 19 de Agosto de 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                1. Compromiso con la Privacidad
              </h2>
              <p>
                En <strong>CoreAgent AI</strong>, protegemos la privacidad de su empresa y la de sus clientes finales. Esta política explica cómo recopilamos, procesamos y resguardamos la información generada a través de nuestros servicios.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-400" />
                2. Información que Procesamos
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Mensajes y Metadatos de WhatsApp:</strong> Identificadores de mensaje (wamid), número de teléfono del cliente y contenido del mensaje exclusivamente para responder y registrar la conversación en su Inbox.</li>
                <li><strong>Datos de Negocio:</strong> Catálogo de productos, inventario, servicios, citas y configuración horaria.</li>
                <li><strong>Logs de Auditoría:</strong> Registro de herramientas ejecutadas para garantizar trazabilidad e idempotencia.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                3. Seguridad y Confidencialidad
              </h2>
              <p>
                Toda la comunicación entre Meta, nuestro servidor y el panel web está cifrada mediante protocolos <strong>HTTPS / TLS y WebSockets Seguros (WSS)</strong>. Las credenciales de API y tokens de acceso se almacenan encriptados en reposo.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-400" />
                4. Derechos del Titular y Contacto
              </h2>
              <p>
                Usted puede solicitar la rectificación, eliminación o exportación de los datos almacenados de su empresa enviando un correo electrónico a <strong>privacidad@coreagent.ai</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
