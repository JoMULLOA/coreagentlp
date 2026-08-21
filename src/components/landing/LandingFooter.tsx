import Link from "next/link";
import Image from "next/image";
import { Shield, FileText } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-700">
                <Image
                  src="/images/tentaculus-logo.png"
                  alt="Tentaculus Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-base text-white tracking-tight">Tentaculus</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed">
              Plataforma SaaS multiempresa de automatización conversacional y operativa para WhatsApp.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              Producto
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="hover:text-emerald-400 transition">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/#verticals" className="hover:text-emerald-400 transition">
                  Industrias
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-emerald-400 transition">
                  Planes & Precios
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              Legal & Cumplimiento
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <span className="text-neutral-500">Meta Business Compliance</span>
              </li>
              <li>
                <span className="text-neutral-500">SLA 99.9%</span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              Contacto & Soporte
            </h4>
            <p className="text-neutral-400">
              ¿Dudas sobre integración o planes a medida?
            </p>
            <p className="text-emerald-400 font-mono font-medium">
              contacto@tentaculus.ai
            </p>
            <p className="text-neutral-500 text-[11px]">
              Santiago, Chile · Operaciones para toda Latinoamérica.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>&copy; {new Date().getFullYear()} Tentaculus Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-neutral-200 transition">
              Términos del Servicio
            </Link>
            <Link href="/privacy" className="hover:text-neutral-200 transition">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
