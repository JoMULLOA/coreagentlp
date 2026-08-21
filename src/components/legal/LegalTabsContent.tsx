"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  Shield,
  FileCheck,
  Scale,
  AlertCircle,
  Lock,
  ShieldCheck,
  EyeOff,
  UserCheck,
  Server,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface LegalTabsContentProps {
  initialTab?: "terms" | "privacy";
}

export function LegalTabsContent({ initialTab = "terms" }: LegalTabsContentProps) {
  const searchParams = useSearchParams();
  const tabFromQuery = searchParams ? searchParams.get("tab") : null;

  const [activeTab, setActiveTab] = useState<"terms" | "privacy">(
    tabFromQuery === "privacy" || initialTab === "privacy" ? "privacy" : "terms"
  );

  useEffect(() => {
    if (tabFromQuery === "privacy" || tabFromQuery === "terms") {
      setActiveTab(tabFromQuery);
    }
  }, [tabFromQuery]);

  const handleTabChange = (tab: "terms" | "privacy") => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", tab === "terms" ? "/terms" : "/privacy");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <div className="relative w-5 h-5 rounded-full overflow-hidden border border-neutral-700">
            <Image
              src="/images/tentaculus-logo.png"
              alt="Tentaculus Logo"
              fill
              className="object-cover"
            />
          </div>
          <span>Centro Legal Tentaculus</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="border-b border-neutral-800 pb-8 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-emerald-400 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparencia, Seguridad y Cumplimiento Normativo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Marco Legal y Normativa de Servicio
        </h1>
        <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
          En <strong className="text-white">Tentaculus</strong> operamos bajo los más altos estándares de protección de datos, 
          aislamiento multi-empresa e integración autorizada con Meta WhatsApp Cloud API.
        </p>

        {/* Tab Selector Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 p-1.5 bg-neutral-900/80 rounded-2xl border border-neutral-800 backdrop-blur-sm max-w-lg">
          <button
            onClick={() => handleTabChange("terms")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition duration-200 cursor-pointer ${
              activeTab === "terms"
                ? "bg-white text-black shadow-lg shadow-white/5"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos de Servicio</span>
          </button>
          <button
            onClick={() => handleTabChange("privacy")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition duration-200 cursor-pointer ${
              activeTab === "privacy"
                ? "bg-white text-black shadow-lg shadow-white/5"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Política de Privacidad</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Términos y Condiciones */}
      {activeTab === "terms" && (
        <div className="space-y-10 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-900 text-xs font-mono text-neutral-400">
            <span>DOCUMENTO: TÉRMINOS Y CONDICIONES DE SERVICIO</span>
            <span>Versión 2.0 · Agosto 2026</span>
          </div>

          <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
            {/* Clause 1 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>1. Aceptación y Objeto de los Términos</span>
              </h2>
              <p>
                Al registrarse, acceder o utilizar la plataforma de software como servicio (SaaS){" "}
                <strong className="text-white">Tentaculus</strong> (&quot;el Servicio&quot;), usted (&quot;el Cliente&quot; o &quot;la Empresa&quot;)
                acepta quedar legalmente vinculado por los presentes Términos y Condiciones. Si celebra este acuerdo en representación de una persona jurídica, declara poseer las facultades legales necesarias para obligarla.
              </p>
            </section>

            {/* Clause 2 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <Server className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>2. Descripción del Servicio y Conectividad con WhatsApp</span>
              </h2>
              <p>
                Tentaculus provee una infraestructura integral que permite a las empresas automatizar la atención a clientes, consultas de catálogo, agendamiento de citas y generación de pedidos a través de la{" "}
                <strong className="text-white">WhatsApp Business Platform (Cloud API de Meta Platforms, Inc.)</strong> y un panel de gestión web centralizado (Inbox multi-operador con WebSockets).
              </p>
              <p className="text-neutral-400 text-xs">
                El Cliente reconoce que la prestación del canal de mensajería está sujeta a las políticas, términos de uso y tiempos de disponibilidad de Meta. El Cliente se compromete a respetar las Políticas Comerciales de WhatsApp.
              </p>
            </section>

            {/* Clause 3 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>3. Responsabilidad sobre Datos, Precios e Inventario</span>
              </h2>
              <p>
                Tentaculus actúa como procesador técnico de datos y ejecutor de herramientas automatizadas (Tool Calling con PostgreSQL). La veracidad, actualización y administración del catálogo, precios, stock y políticas comerciales son de exclusiva responsabilidad del Cliente.
              </p>
              <p>
                Nuestra arquitectura incorpora validaciones transaccionales en dos fases (DRAFT y CONFIRMACIÓN) para evitar errores; no obstante, el Cliente debe supervisar y auditar periódicamente sus transacciones operativas.
              </p>
            </section>

            {/* Clause 4 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>4. Aislamiento Multi-Tenant y Protección de Datos</span>
              </h2>
              <p>
                Garantizamos que la base de datos de cada Cliente se encuentra estrictamente aislada a nivel lógico mediante identificadores de Tenant. En ningún caso Tentaculus transferirá, comercializará ni usará las conversaciones o datos confidenciales de los usuarios para el entrenamiento de modelos de lenguaje públicos.
              </p>
            </section>

            {/* Clause 5 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white">5. Planes, Facturación y Cancelación</h2>
              <p>
                Las suscripciones se facturan de forma periódica anticipada (mensual o anual según el plan contratado). El Cliente puede cancelar o modificar su suscripción en cualquier momento desde su panel de control, conservando el acceso hasta finalizar el ciclo en curso.
              </p>
            </section>

            {/* Clause 6 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white">6. Disponibilidad y Acuerdo de Nivel de Servicio (SLA)</h2>
              <p>
                Tentaculus ofrece un compromiso de disponibilidad de servicio (Uptime SLA) del{" "}
                <strong className="text-emerald-400 font-mono">99.9%</strong> mensual en nuestra infraestructura de orquestación y base de datos, excluyendo ventanas de mantenimiento previamente notificadas o caídas globales del proveedor de red de Meta.
              </p>
            </section>

            {/* Clause 7 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white">7. Jurisdicción y Ley Aplicable</h2>
              <p>
                Los presentes términos se rigen por las leyes de la República de Chile. Cualquier disputa o controversia será sometida a la jurisdicción de los tribunales ordinarios de justicia de Santiago de Chile.
              </p>
            </section>
          </div>
        </div>
      )}

      {/* Tab 2: Política de Privacidad */}
      {activeTab === "privacy" && (
        <div className="space-y-10 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-900 text-xs font-mono text-neutral-400">
            <span>DOCUMENTO: POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</span>
            <span>Versión 2.0 · Agosto 2026</span>
          </div>

          <div className="space-y-8 text-neutral-300 text-sm leading-relaxed">
            {/* Privacy Clause 1 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>1. Compromiso Fundamental con la Privacidad</span>
              </h2>
              <p>
                En <strong className="text-white">Tentaculus</strong> protegemos con rigurosidad la confidencialidad de su empresa y la privacidad de sus clientes finales. Esta política describe cómo recolectamos, procesamos y resguardamos la información generada en el uso de la plataforma.
              </p>
            </section>

            {/* Privacy Clause 2 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <EyeOff className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>2. Información y Datos Procesados</span>
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                <li>
                  <strong className="text-white">Mensajes e Identificadores WhatsApp:</strong> Mensajes entrantes/salientes, identificador único de mensaje (wamid) y números de teléfono exclusivamente para procesar la interacción, sincronizar con el Inbox y ejecutar las órdenes solicitadas.
                </li>
                <li>
                  <strong className="text-white">Datos de Catálogo y Negocio:</strong> Listas de productos, precios, inventario en PostgreSQL, horarios de atención y asignación de operadores humanos.
                </li>
                <li>
                  <strong className="text-white">Logs de Auditoría y Trazabilidad:</strong> Registro seguro de llamadas a funciones (tool calls) para garantizar idempotencia y evitar duplicidades operacionales.
                </li>
              </ul>
            </section>

            {/* Privacy Clause 3 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>3. Cifrado y Medidas de Seguridad</span>
              </h2>
              <p>
                Toda transmisión de datos entre la API de Meta WhatsApp, nuestra infraestructura de backend y el panel de operadores web se realiza mediante canales cifrados{" "}
                <strong className="text-white">HTTPS / TLS 1.3 y WebSockets Seguros (WSS)</strong>. Las credenciales de acceso a bases de datos y tokens de API se encuentran estrictamente encriptados en reposo.
              </p>
            </section>

            {/* Privacy Clause 4 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>4. Derechos del Titular y Solicitudes de Eliminación</span>
              </h2>
              <p>
                Cualquier Cliente puede solicitar la exportación, actualización o eliminación definitiva de sus datos de negocio y registros de conversaciones escribiendo directamente a nuestro equipo de privacidad y cumplimiento:
              </p>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-emerald-400 flex items-center justify-between">
                <span>privacidad@tentaculus.ai</span>
                <span className="text-neutral-500">Respuesta en menos de 24h hábiles</span>
              </div>
            </section>

            {/* Privacy Clause 5 */}
            <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
              <h2 className="text-base font-bold text-white">5. Uso Exclusivo y No Reentrenamiento</h2>
              <p>
                Los datos de sus clientes y las transacciones no son compartidos con terceros comerciales ni utilizados para entrenar modelos de IA públicos. Su información permanece 100% aislada bajo su cuenta empresarial.
              </p>
            </section>
          </div>
        </div>
      )}

      {/* Footer Support Notice inside Legal */}
      <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-white font-semibold">¿Necesitas un acuerdo de confidencialidad (NDA) o SLA empresarial a medida?</p>
          <p className="text-neutral-400">Nuestro equipo legal y de arquitectura corporativa está disponible.</p>
        </div>
        <a
          href="mailto:legal@tentaculus.ai"
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-mono text-xs transition shrink-0 inline-flex items-center gap-1.5"
        >
          <span>legal@tentaculus.ai</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
