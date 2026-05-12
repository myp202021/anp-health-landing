"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Evaluación de Elegibilidad",
    description: "Revisión de país, título, documentos",
    detail:
      "Analizamos tu formación académica, país de origen y documentación disponible para determinar tu elegibilidad y trazar el mejor camino hacia la licencia RN.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "02",
    title: "Validación de Credenciales",
    description: "TruMerit/CGFNS, traducciones, verificaciones",
    detail:
      "Gestionamos el proceso completo con TruMerit y CGFNS: traducciones certificadas, verificación de título, y toda la documentación requerida por el Board estatal.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    number: "03",
    title: "Registro en Board Estatal",
    description: "Elección de estado, requisitos específicos",
    detail:
      "Te orientamos en la elección del estado más conveniente según tu perfil y gestionamos el registro ante el Board of Nursing correspondiente.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    number: "04",
    title: "Examen NCLEX-RN",
    description: "Preparación y aprobación del examen nacional",
    detail:
      "Te acompañamos en la preparación del NCLEX-RN, el examen nacional de licenciatura en enfermería. Orientación sobre recursos, estrategias y registro.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    number: "05",
    title: "Certificación de Inglés",
    description: "TOEFL/IELTS/OET según el estado",
    detail:
      "Dependiendo del estado elegido, te orientamos sobre el examen de inglés requerido (TOEFL, IELTS u OET) y los puntajes mínimos necesarios.",
    icon: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
  },
  {
    number: "06",
    title: "Conexión con Hospitales",
    description: "Entrevistas, matching con hospitales aliados",
    detail:
      "Te conectamos con nuestra red de hospitales y centros de salud en EE.UU. que buscan activamente enfermeros internacionales. Preparamos entrevistas y matching.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
  },
  {
    number: "07",
    title: "Sponsor Migratorio",
    description: "Visa, cónyuge e hijos menores de 21",
    detail:
      "El hospital sponsor gestiona tu visa de trabajo. El proceso incluye a tu cónyuge e hijos menores de 21 años. Un camino legal y seguro para toda tu familia.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    number: "08",
    title: "Inicio Laboral",
    description: "Orientación, housing, primer día",
    detail:
      "Llegada a EE.UU. con orientación completa: housing por 3 meses proporcionado por el hospital, inducción laboral y acompañamiento en tu adaptación.",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  },
];

export default function ProcessFlow3D() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [particles, setParticles] = useState<
    { left: string; delay: string; duration: string; w: string; h: string }[]
  >([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        w: `${2 + Math.random() * 3}px`,
        h: `${2 + Math.random() * 3}px`,
      }))
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="py-20 md:py-28 bg-navy relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="process-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.w,
              height: p.h,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Tu camino
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            8 pasos hacia tu licencia RN en Estados Unidos
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Un proceso estructurado y acompañado de principio a fin. Cada etapa
            cuenta con nuestro equipo a tu lado.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mb-12 hidden md:block">
          <div className="relative h-1 bg-white/5 rounded-full">
            <div
              className="absolute h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-all duration-700"
              style={{
                width: `${((visibleSteps.size) / 8) * 100}%`,
              }}
            />
            <div className="flex justify-between absolute -top-2 left-0 right-0">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
                    visibleSteps.has(i)
                      ? "bg-cyan border-teal shadow-[0_0_10px_rgba(0,201,219,0.5)]"
                      : "bg-navy border-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3D Card Grid */}
        <div className="process-perspective">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => {
              const isVisible = visibleSteps.has(i);
              const isActive = activeStep === i;
              return (
                <div
                  key={step.number}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  data-index={i}
                  className={`process-card-wrapper ${
                    isVisible ? "process-card-visible" : "process-card-hidden"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setActiveStep(isActive ? null : i)}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div
                    className={`process-card-inner ${isActive ? "process-card-flipped" : ""}`}
                  >
                    {/* Front */}
                    <div className="process-card-face process-card-front glass-card rounded-2xl p-6 cursor-pointer">
                      {/* Glow line at top */}
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-cyan/20 text-3xl font-bold">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={step.icon}
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-base font-bold mb-2">{step.title}</h3>
                      <p className="text-slate text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Connection dots - desktop */}
                      {i < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                          <div className="process-connector">
                            <div className="process-connector-dot" />
                            <div className="process-connector-dot" />
                            <div className="process-connector-dot" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Back */}
                    <div className="process-card-face process-card-back glass-card rounded-2xl p-6 cursor-pointer">
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-teal to-transparent" />
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-cyan/20 rounded-lg flex items-center justify-center text-cyan">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={step.icon}
                            />
                          </svg>
                        </div>
                        <span className="text-cyan font-bold text-sm">
                          Paso {step.number}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold mb-2 text-cyan">
                        {step.title}
                      </h3>
                      <p className="text-off-white text-xs leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-slate/50 text-xs mt-8 md:hidden">
          Toca cada paso para ver más detalles
        </p>
        <p className="text-center text-slate/50 text-xs mt-8 hidden md:block">
          Pasa el cursor sobre cada paso para ver los detalles
        </p>
      </div>
    </section>
  );
}
