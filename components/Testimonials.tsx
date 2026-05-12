const testimonials = [
  {
    name: "María G.",
    country: "Colombia",
    role: "Enfermera RN — Texas",
    quote:
      "Llegué a EE.UU. sin saber por dónde empezar. ANP Health me guió paso a paso hasta obtener mi licencia RN. Hoy trabajo en lo que amo y mi familia está conmigo.",
  },
  {
    name: "Carlos R.",
    country: "Venezuela",
    role: "Enfermero RN — Florida",
    quote:
      "Como técnico superior de Venezuela, pensé que no tenía opciones. ANP evaluó mi caso y hoy estoy ejerciendo en un hospital en Florida. El proceso fue claro y profesional.",
  },
  {
    name: "Ana P.",
    country: "México",
    role: "Enfermera RN — California",
    quote:
      "Lo que más valoro es la transparencia. Desde el día uno me explicaron exactamente qué esperar y cumplieron. Mi esposo e hijos ya están conmigo gracias al sponsor.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Historias de quienes ya dieron el paso
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Más de 2,000 profesionales de enfermería han confiado en ANP Health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover:border-teal/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center text-teal font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-slate text-xs">
                    {t.country} — {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
