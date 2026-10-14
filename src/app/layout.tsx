import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { BackgroundField } from "@/components/BackgroundField";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Simeon — Fullstack Developer · QA",
  description:
    "Fullstack developer y analista QA: sistemas empresariales completos (CRM, agendas, cobranzas, tiempo real) entregados con pruebas automatizadas, revisión de seguridad y despliegue verificado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-bg text-foreground">
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, touchMultiplier: 1.5 }}>
          <BackgroundField />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
