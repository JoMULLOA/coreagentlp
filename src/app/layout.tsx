import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreAgent AI | SaaS Operacional de WhatsApp para Empresas",
  description: "Convierte WhatsApp en el motor de ventas y operaciones de tu negocio con agentes IA conectados a tu inventario real en PostgreSQL, confirmación de pedidos y agendamiento 24/7.",
  keywords: ["WhatsApp AI", "SaaS WhatsApp", "Agente IA Empresas", "Comercio Conversacional", "Tool Calling WhatsApp"],
  authors: [{ name: "CoreAgent AI Team" }],
  openGraph: {
    title: "CoreAgent AI | SaaS Operacional de WhatsApp",
    description: "Atención 24/7 conectada a inventario real, confirmación de pedidos y derivación inteligente a humanos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
