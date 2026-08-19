"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Bot, Sparkles } from "lucide-react";

export function LandingNavbar() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-neutral-800/80">
      {/* Top Squarespace-style Announcement Bar */}
      {showBanner && (
        <div className="bg-neutral-900 border-b border-neutral-800 text-neutral-300 text-xs py-2 px-4 flex items-center justify-between font-mono">
          <div className="mx-auto flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Versión 2.0 Operacional disponible · PostgreSQL 16 + WhatsApp Cloud API ·</span>
            <Link href="/terms" className="text-white underline hover:text-emerald-400 font-semibold transition">
              TÉRMINOS Y CONDICIONES
            </Link>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-neutral-500 hover:text-white transition cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition duration-200">
            <Bot className="w-6 h-6 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
              COREAGENT <span className="text-[10px] font-mono font-bold bg-neutral-800 text-emerald-400 px-2 py-0.5 rounded border border-neutral-700">AI OPS</span>
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wide text-neutral-400">
          <Link href="#features" className="hover:text-white transition">
            Funcionalidades
          </Link>
          <Link href="#showcase" className="hover:text-white transition">
            Plataforma
          </Link>
          <Link href="#verticals" className="hover:text-white transition">
            Industrias
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Precios
          </Link>
          <Link href="#faq" className="hover:text-white transition">
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/terms"
            className="hidden sm:inline-block text-xs font-mono text-neutral-400 hover:text-white transition"
          >
            LEGAL & SLA
          </Link>
          <Link
            href="#pricing"
            className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-md hover:shadow-lg"
          >
            Comenzar Ahora
          </Link>
        </div>
      </header>
    </div>
  );
}
