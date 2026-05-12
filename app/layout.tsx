import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANP Health — Valida tu Título de Enfermería en Estados Unidos",
  description:
    "Programa de validación de credenciales para enfermeros latinos. +2,000 profesionales de 28 países. Acompañamiento completo hasta la licencia RN en EE.UU.",
  keywords:
    "validar título enfermería USA, enfermeros latinos estados unidos, NCLEX-RN, homologación enfermería, ANP Health, licencia RN, TruMerit, CGFNS, trabajar como enfermero en Estados Unidos, sponsor migratorio enfermería",
  authors: [{ name: "ANP Health Solutions" }],
  openGraph: {
    title: "ANP Health — Valida tu Título de Enfermería en Estados Unidos",
    description:
      "Programa de validación de credenciales para enfermeros latinos. +2,000 profesionales de 28 países.",
    url: "https://anp-health-landing.vercel.app",
    siteName: "ANP Health",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANP Health — Valida tu Título de Enfermería en Estados Unidos",
    description:
      "Programa de validación de credenciales para enfermeros latinos. +2,000 profesionales de 28 países.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://anp-health-landing.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  );
}
