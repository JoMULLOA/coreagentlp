import Link from "next/link";
import { Bot, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              CoreAgent <span className="text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800">AI</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">WhatsApp Ops SaaS</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/#features" className="hover:text-emerald-400 transition">
            Funcionalidades
          </Link>
          <Link href="/#verticals" className="hover:text-emerald-400 transition">
            Industrias
          </Link>
          <Link href="/#architecture" className="hover:text-emerald-400 transition">
            Seguridad & Arquitectura
          </Link>
          <Link href="/#pricing" className="hover:text-emerald-400 transition">
            Planes
          </Link>
          <Link href="/#faq" className="hover:text-emerald-400 transition">
            FAQ
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/terms"
            className="hidden sm:inline-flex items-center text-xs text-slate-400 hover:text-slate-200 transition"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
          >
            <span>Comenzar Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
