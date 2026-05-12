"use client";

import { useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-teal">
      +{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-teal/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-teal rounded-full animate-pulse" />
            <span className="text-teal text-sm font-medium">
              Programa líder en validación de credenciales
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            El programa que ayuda a{" "}
            <span className="text-teal">Enfermeros Latinos</span> a validar su
            título en Estados Unidos
          </h1>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-10">
            +2,000 enfermeros de 28 nacionalidades han confiado en ANP Health
            para dar el paso más importante de su carrera profesional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-teal hover:bg-teal-dark text-navy font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal/20"
            >
              Agenda tu Asesoría Gratuita
            </a>
            <a
              href="#metodologia"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white font-medium text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Conoce el Proceso
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <AnimatedNumber target={2000} />
              <p className="text-slate mt-2 text-sm">Profesionales acompañados</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-teal">28</span>
              <p className="text-slate mt-2 text-sm">Nacionalidades</p>
            </div>
            <div className="text-center">
              <AnimatedNumber target={100} suffix="K" />
              <p className="text-slate mt-2 text-sm">USD salario potencial anual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
