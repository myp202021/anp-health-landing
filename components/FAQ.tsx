"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Necesito ingles avanzado para comenzar?",
    a: "No. Puedes iniciar el proceso sin ingles avanzado. Durante el acompanamiento te orientamos sobre los requisitos de idioma segun tu etapa. El nivel de ingles se evalua en el momento del examen de certificacion (TOEFL, IELTS u OET).",
  },
  {
    q: "Puedo aplicar si soy tecnico en enfermeria?",
    a: "Depende de tu pais. Actualmente aceptamos tecnicos superiores de Venezuela, Argentina y El Salvador. En la asesoria evaluamos tu caso particular y te indicamos las opciones disponibles.",
  },
  {
    q: "Mi familia puede migrar conmigo?",
    a: "Si. El sponsor migratorio incluye a tu conyuge e hijos menores de 21 anos. Es un proceso legal y estructurado para toda tu familia.",
  },
  {
    q: "Cuanto cuesta el programa?",
    a: "Los costos varian segun tu perfil, pais de origen y documentacion disponible. Agenda una asesoria gratuita para recibir informacion personalizada sin ningun compromiso.",
  },
  {
    q: "Cuanto tiempo toma el proceso?",
    a: "El tiempo varia segun cada perfil, pais de origen y documentacion disponible. En la asesoria te damos un estimado personalizado basado en tu situacion especifica.",
  },
  {
    q: "Necesito experiencia laboral para iniciar?",
    a: "No necesitas experiencia profesional para iniciar el proceso de validacion de credenciales. Lo que se evalua es tu formacion academica.",
  },
  {
    q: "ANP Health gestiona visas o empleo?",
    a: "ANP Health no es agencia de empleo, ni firma migratoria, ni escuela. Somos especialistas en acompanamiento tecnico y administrativo para la validacion de credenciales de enfermeria. Te conectamos con hospitales aliados que gestionan el sponsor migratorio.",
  },
  {
    q: "Que pasa si no apruebo el NCLEX a la primera?",
    a: "Es posible retomar el examen. Te orientamos sobre los tiempos de espera, recursos de estudio y estrategias para tu siguiente intento. El proceso no se pierde.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-cyan/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-cyan/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-off-white font-medium text-[15px]">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-cyan flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className={`faq-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-6 pb-5 text-slate text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate text-sm mb-4">
            Tienes mas preguntas?
          </p>
          <a
            href="https://usa.anphealthsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cta-glow text-navy font-bold text-sm px-8 py-3 rounded-full"
          >
            Habla con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
