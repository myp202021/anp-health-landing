"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#proceso", label: "Proceso" },
  { href: "#califica", label: "Calificas?" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-cyan/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/anp-logo-7.png"
              alt="ANP Health Solutions"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate hover:text-cyan transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow text-navy font-bold text-sm px-6 py-2.5 rounded-full"
            >
              Agenda Asesoria Gratuita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
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
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="space-y-1 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base text-slate hover:text-cyan py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block cta-glow text-navy font-bold text-base px-6 py-3 rounded-full text-center mt-4"
            >
              Agenda Asesoria Gratuita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
