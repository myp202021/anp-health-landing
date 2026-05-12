"use client";

import { useEffect, useRef, useState } from "react";

const comparisons = [
  {
    others: "Otros te prometen trabajo",
    anp: "ANP te acompana a VALIDAR tu titulo primero",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    others: "Otros son agencias de empleo",
    anp: "ANP es especialista en homologacion de credenciales",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    others: "Otros te cobran sin explicar",
    anp: "ANP te da asesoria gratuita antes de cualquier compromiso",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
  {
    others: "Otros te dejan solo despues de pagar",
    anp: "ANP tiene comunicacion directa y constante en cada etapa",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
];

const clarifications = [
  { no: "Agencia de empleo", si: "Acompanamiento tecnico y administrativo" },
  { no: "Escuela o universidad", si: "Especialista en homologacion" },
  { no: "Firma migratoria", si: "Facilitador del proceso completo" },
];

export default function WhyANP() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-navy relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Diferencia real
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Lo que hace ANP Health que otros{" "}
            <span className="text-cyan">NO</span> hacen
          </h2>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className={`glass-card glass-card-hover rounded-2xl p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-slate text-sm line-through mb-2">{c.others}</p>
                  <p className="text-off-white font-medium">{c.anp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification bar */}
        <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-6">
            ANP Health <span className="text-cyan">NO es</span>:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clarifications.map((c) => (
              <div key={c.no} className="text-center">
                <div className="text-red-400/80 text-sm line-through mb-1">{c.no}</div>
                <div className="text-cyan text-sm font-medium">{c.si}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
