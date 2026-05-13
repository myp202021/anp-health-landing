"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-cyan tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { target: 2000, prefix: "+", suffix: "", label: "Profesionales" },
  { target: 28, prefix: "", suffix: "", label: "Paises" },
  { target: 100, prefix: "+$", suffix: "K", label: "USD Salario" },
  { target: 3, prefix: "", suffix: "", label: "Turnos/Semana" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Photo background with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center" style={{ opacity: 0.35 }}
          style={{
            backgroundImage:
              "url('/images/nurse-tablet.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-navy/65 to-navy/90" />
      </div>

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-60 h-60 bg-teal/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10 w-full">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-cyan/8 border border-cyan/20 rounded-full px-5 py-2 mb-10">
            <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-cyan text-sm font-medium tracking-wide">
              +2,000 enfermeros de 28 paises confian en ANP Health
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-7 tracking-tight">
            Tu titulo de enfermeria{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal">
              vale en Estados Unidos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-12 leading-relaxed">
            Te acompanamos desde la validacion de tu titulo hasta tu primer dia en un
            hospital americano. Sin promesas vacias — con un proceso probado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto cta-glow text-navy font-bold text-lg px-10 py-4 rounded-full"
            >
              Agenda Asesoria Gratuita
            </a>
            <a
              href="#califica"
              className="w-full sm:w-auto border border-white/20 hover:border-cyan/40 text-white font-medium text-lg px-10 py-4 rounded-full transition-all hover:bg-white/5"
            >
              Califico para el programa?
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center glass-card rounded-2xl py-5 px-4"
              >
                <AnimatedNumber
                  target={s.target}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
                <p className="text-slate mt-2 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  );
}
