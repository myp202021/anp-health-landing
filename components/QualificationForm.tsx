"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://your-webhook-url.com/api/lead"; // Configure later

type FormStep = 1 | 2 | 3 | 4;

const professions = [
  { id: "licenciado", label: "Licenciado/a en Enfermería" },
  { id: "estudiante", label: "Estudiante de Licenciatura en Enfermería" },
  { id: "tecnico", label: "Técnico Superior en Enfermería" },
  { id: "auxiliar", label: "Auxiliar de Enfermería" },
  { id: "otra", label: "Otra profesión / estudiante" },
];

const countries = [
  { id: "venezuela", label: "Venezuela" },
  { id: "argentina", label: "Argentina" },
  { id: "el_salvador", label: "El Salvador" },
  { id: "otro", label: "Otro país" },
];

export default function QualificationForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [transitioning, setTransitioning] = useState(false);
  const [, setSubmitted] = useState(false);

  const goToStep = (next: FormStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 300);
  };

  const qualifies = (): boolean => {
    if (profession === "licenciado" || profession === "estudiante") return true;
    if (profession === "tecnico") {
      return ["venezuela", "argentina", "el_salvador"].includes(country);
    }
    return false;
  };

  const handleSubmit = async () => {
    const data = { name, email, phone, profession, country, qualifies: qualifies() };
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Silently fail — CTA still works
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!name.trim() || !email.trim() || !phone.trim()) return;
      goToStep(2);
    } else if (step === 2) {
      if (!profession) return;
      if (profession === "tecnico") {
        goToStep(3);
      } else {
        handleSubmit();
        goToStep(4);
      }
    } else if (step === 3) {
      if (!country) return;
      handleSubmit();
      goToStep(4);
    }
  };

  const totalSteps = profession === "tecnico" ? 4 : 3;
  const displayStep = step > totalSteps ? totalSteps : step;

  return (
    <section id="califica" className="py-20 md:py-28 bg-navy-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Evaluación rápida
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            ¿Calificas para el programa?
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Descúbrelo en menos de 1 minuto. Responde estas preguntas y te
            diremos si puedes iniciar tu camino como enfermero/a RN en EE.UU.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    i < displayStep ? "bg-cyan w-full" : "w-0"
                  }`}
                  style={{ width: i < displayStep ? "100%" : "0%" }}
                />
              </div>
            ))}
            <span className="text-slate text-xs ml-2 whitespace-nowrap">
              Paso {displayStep}/{totalSteps}
            </span>
          </div>

          {/* Form card */}
          <div className="glass-card rounded-2xl p-8 border border-cyan/10 shadow-[0_0_40px_rgba(0,201,219,0.08)]">
            <div
              className={`transition-all duration-300 ${
                transitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Step 1: Contact info */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold mb-6">
                    Cuéntanos sobre ti
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate mb-1.5">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+58 412 123 4567"
                        className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate/50 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Profession */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold mb-6">
                    ¿Cuál es tu formación?
                  </h3>
                  <div className="space-y-3">
                    {professions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProfession(p.id)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                          profession === p.id
                            ? "border-cyan bg-cyan/10 text-white shadow-[0_0_15px_rgba(0,201,219,0.15)]"
                            : "border-white/10 bg-navy/40 text-slate hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              profession === p.id
                                ? "border-cyan"
                                : "border-white/20"
                            }`}
                          >
                            {profession === p.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-cyan" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{p.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Country (only for Técnico) */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold mb-6">
                    ¿De qué país es tu título?
                  </h3>
                  <div className="space-y-3">
                    {countries.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCountry(c.id)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                          country === c.id
                            ? "border-cyan bg-cyan/10 text-white shadow-[0_0_15px_rgba(0,201,219,0.15)]"
                            : "border-white/10 bg-navy/40 text-slate hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              country === c.id
                                ? "border-cyan"
                                : "border-white/20"
                            }`}
                          >
                            {country === c.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-cyan" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{c.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Result */}
              {step === 4 && (
                <div className="text-center py-4">
                  {qualifies() ? (
                    <>
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-green-400">
                        ¡Calificas para el programa!
                      </h3>
                      <p className="text-slate text-sm mb-6 max-w-sm mx-auto">
                        Tu perfil cumple con los requisitos para iniciar el
                        proceso de validación de credenciales en EE.UU. Agenda
                        tu asesoría gratuita para dar el siguiente paso.
                      </p>
                      <a
                        href="https://usa.anphealthsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block cta-glow text-navy font-bold text-base px-8 py-4 rounded-full"
                      >
                        Agenda tu Asesoría Gratuita
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-amber-400">
                        Tu perfil requiere evaluación
                      </h3>
                      <p className="text-slate text-sm mb-6 max-w-sm mx-auto">
                        Tu perfil actual no califica directamente para el
                        programa de enfermería en EE.UU., pero podemos
                        orientarte. Agenda una asesoría para explorar tus
                        opciones.
                      </p>
                      <a
                        href="https://usa.anphealthsolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-navy font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                      >
                        Agenda una Asesoría
                      </a>
                    </>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              {step < 4 && (
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={() => goToStep((step - 1) as FormStep)}
                      className="text-slate hover:text-white text-sm transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Anterior
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={handleNext}
                    className="bg-cyan hover:bg-cyan-dark text-navy font-bold text-sm px-6 py-3 rounded-xl transition-all hover:scale-105 flex items-center gap-2"
                  >
                    {step === 1 ? "Comenzar evaluación" : "Siguiente"}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* Restart */}
              {step === 4 && (
                <button
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setPhone("");
                    setProfession("");
                    setCountry("");
                    setSubmitted(false);
                    goToStep(1);
                  }}
                  className="mt-6 text-slate hover:text-white text-sm transition-colors mx-auto block"
                >
                  Volver a empezar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
