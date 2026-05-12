const doesItems = [
  "Evalúa tu elegibilidad de forma personalizada",
  "Te acompaña durante toda la validación de credenciales",
  "Coordina traducciones oficiales y certificaciones",
  "Gestiona con los Boards of Nursing estatales",
  "Realiza seguimiento administrativo completo",
  "Te conecta con hospitales y empleadores",
];

const doesntItems = [
  "No es una academia ni curso de enfermería",
  "No es una agencia de empleo",
  "No gestiona visas directamente",
  "No ofrece resultados asegurados",
];

export default function WhatWeDoAndDont() {
  return (
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Transparencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Lo que ANP Health hace y lo que no
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Creemos en la claridad. Esto es exactamente lo que puedes esperar de
            nuestro programa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What we DO */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal">Lo que SÍ hacemos</h3>
            </div>
            <ul className="space-y-4">
              {doesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we DON'T */}
          <div className="glass-card rounded-2xl p-8 border-red-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-400">Lo que NO hacemos</h3>
            </div>
            <ul className="space-y-4">
              {doesntItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
