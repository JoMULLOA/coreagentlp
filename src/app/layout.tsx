import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tentaculus | SaaS Operacional de WhatsApp para Empresas",
  description: "Convierte WhatsApp en el motor de ventas y operaciones de tu negocio con Tentaculus: agentes IA conectados a tu inventario real en PostgreSQL, confirmación de pedidos y agendamiento 24/7.",
  keywords: ["Tentaculus", "WhatsApp AI", "SaaS WhatsApp", "Agente IA Empresas", "Comercio Conversacional", "Tool Calling WhatsApp"],
  authors: [{ name: "Tentaculus Team" }],
  icons: {
    icon: "/images/tentaculus-logo.png",
    shortcut: "/images/tentaculus-logo.png",
    apple: "/images/tentaculus-logo.png",
  },
  openGraph: {
    title: "Tentaculus | SaaS Operacional de WhatsApp",
    description: "Atención 24/7 conectada a inventario real, confirmación de pedidos y derivación inteligente a humanos.",
    type: "website",
    images: [
      {
        url: "/images/tentaculus-logo.png",
        width: 800,
        height: 800,
        alt: "Tentaculus Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-black text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
