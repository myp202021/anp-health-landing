export default function Founder() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0 border border-teal/20">
              <svg
                className="w-16 h-16 text-teal/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <div>
              <span className="text-teal text-sm font-semibold uppercase tracking-wider">
                Fundador
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                Nelson Hurtado
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                Con una visión clara de conectar el talento de enfermería
                latinoamericano con las oportunidades en Estados Unidos, Nelson
                fundó ANP Health Solutions para crear un puente real, ético y
                profesional entre ambos mundos.
              </p>
              <p className="text-slate leading-relaxed">
                Hoy, más de 2,000 profesionales de 28 países han confiado en su
                programa para transformar su carrera y la vida de sus familias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
