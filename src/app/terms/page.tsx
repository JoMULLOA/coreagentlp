import Link from "next/link";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { ArrowLeft, Shield, FileCheck, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
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
              Términos y Condiciones de Servicio
            </h1>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Última actualización: 19 de Agosto de 2026 · Versión 1.2
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-8">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                1. Aceptación de los Términos
              </h2>
              <p>
                Al registrarse, acceder o utilizar la plataforma de software como servicio (SaaS) <strong>CoreAgent AI</strong> (&quot;el Servicio&quot;), usted (&quot;el Cliente&quot; o &quot;la Empresa&quot;) acepta quedar legalmente vinculado por estos Términos y Condiciones. Si usted está celebrando este contrato en nombre de una persona jurídica, declara contar con las facultades legales necesarias para representarla.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                2. Descripción del Servicio y Conectividad con WhatsApp
              </h2>
              <p>
                CoreAgent AI provee una infraestructura de software que permite a las empresas automatizar la atención a clientes, consultas de catálogo, agendamiento de citas y generación de pedidos a través de la <strong>WhatsApp Business Platform (Cloud API de Meta)</strong> y un panel de gestión web (Inbox multi-operador).
              </p>
              <p>
                El Cliente reconoce que la prestación del canal de mensajería depende de las políticas, disponibilidad y términos de servicio de <strong>Meta Platforms, Inc.</strong> El Cliente se compromete a cumplir estrictamente con la Política de Comercio y las Políticas de WhatsApp Business.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-400" />
                3. Responsabilidad sobre Datos, Precios e Inventario
              </h2>
              <p>
                CoreAgent AI actúa como procesador de datos y ejecutor de herramientas automatizadas. La información relativa a catálogo, stock, precios, disponibilidad de profesionales y políticas comerciales es cargada y administrada bajo exclusiva responsabilidad del Cliente.
              </p>
              <p>
                Nuestra plataforma implementa mecanismos de control transaccional e idempotencia en dos fases (DRAFT y CONFIRMACIÓN) para mitigar errores; no obstante, el Cliente es responsable de verificar periódicamente sus parámetros operativos y de mantener supervisión sobre las transacciones confirmadas.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-emerald-400" />
                4. Privacidad y Aislamiento Multi-Tenant
              </h2>
              <p>
                Garantizamos que la base de datos de cada Cliente se encuentra aislada lógicamente mediante identificadores únicos de Tenant. En ningún caso CoreAgent AI comercializará, transferirá ni utilizará las conversaciones o datos personales de los clientes finales para el entrenamiento de modelos de lenguaje públicos.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">5. Planes, Facturación y Cancelación</h2>
              <p>
                Los planes de suscripción se facturan de forma mensual o anual anticipada. El Cliente puede cancelar su suscripción en cualquier momento desde su panel de administración, manteniendo el acceso hasta el final del periodo facturado vigente. No se realizarán reembolsos por periodos parciales no utilizados.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">6. Disponibilidad y SLA</h2>
              <p>
                Nos esforzamos por mantener una disponibilidad mensual del Servicio de al menos el <strong>99.9%</strong>. Quedan excluidas las interrupciones por mantenimiento programado previamente notificado o caídas globales atribuibles a la infraestructura de Meta WhatsApp Cloud API.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">7. Jurisdicción y Ley Aplicable</h2>
              <p>
                Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia derivada del uso del servicio será sometida a los tribunales ordinarios de justicia de la ciudad de Santiago.
              </p>
            </section>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
