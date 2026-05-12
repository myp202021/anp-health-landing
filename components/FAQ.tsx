"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Necesito inglés avanzado para comenzar?",
    answer:
      "No. Puedes iniciar el proceso sin inglés avanzado. Durante el acompañamiento te orientamos sobre los requisitos de idioma según tu etapa. El inglés será necesario para el NCLEX-RN y para ejercer, pero no es un requisito para dar el primer paso.",
  },
  {
    question: "¿Puedo aplicar si soy técnico en enfermería?",
    answer:
      "Depende de tu país de origen. Actualmente aceptamos técnicos superiores de Venezuela, Argentina y El Salvador. Si eres de otro país, agenda una asesoría para evaluar tu caso particular.",
  },
  {
    question: "¿Mi familia puede migrar conmigo?",
    answer:
      "Sí. El sponsor migratorio que gestionan los hospitales aliados incluye a tu cónyuge e hijos menores de 21 años. Es un proceso legal y seguro para toda tu familia.",
  },
  {
    question: "¿Cuánto cuesta el programa?",
    answer:
      "Los costos varían según tu perfil, país de origen y situación particular. Agenda una asesoría gratuita para recibir información personalizada y detallada sobre la inversión.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso completo?",
    answer:
      "El tiempo varía según cada perfil, país de origen, documentación disponible y otros factores. En la asesoría personalizada te damos un estimado basado en tu situación específica.",
  },
  {
    question: "¿Necesito experiencia profesional para iniciar?",
    answer:
      "No necesitas experiencia profesional para iniciar el proceso de validación de credenciales. Lo importante es contar con tu título de enfermería. La experiencia puede ser un plus, pero no es un requisito.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Las preguntas más comunes de enfermeros que están evaluando dar el
            paso.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
              >
                <span className="font-semibold text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-teal shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
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
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
