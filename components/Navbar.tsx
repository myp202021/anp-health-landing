"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              ANP <span className="text-teal">Health</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodologia" className="text-sm text-slate hover:text-white transition-colors">
              Metodología
            </a>
            <a href="#beneficios" className="text-sm text-slate hover:text-white transition-colors">
              Beneficios
            </a>
            <a href="#elegibilidad" className="text-sm text-slate hover:text-white transition-colors">
              Elegibilidad
            </a>
            <a href="#faq" className="text-sm text-slate hover:text-white transition-colors">
              Preguntas Frecuentes
            </a>
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal-dark text-navy font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Agenda tu Asesoría
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#metodologia" onClick={() => setOpen(false)} className="block text-sm text-slate hover:text-white">
              Metodología
            </a>
            <a href="#beneficios" onClick={() => setOpen(false)} className="block text-sm text-slate hover:text-white">
              Beneficios
            </a>
            <a href="#elegibilidad" onClick={() => setOpen(false)} className="block text-sm text-slate hover:text-white">
              Elegibilidad
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="block text-sm text-slate hover:text-white">
              Preguntas Frecuentes
            </a>
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal text-navy font-semibold text-sm px-5 py-2.5 rounded-lg text-center"
            >
              Agenda tu Asesoría
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
