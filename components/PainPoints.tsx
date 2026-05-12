export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te identificas con alguna de estas situaciones?
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Miles de enfermeros latinos enfrentan estas barreras. ANP Health fue
            creado para resolverlas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Ya en EE.UU. */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-teal/30 transition-colors">
            <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-teal">
              &ldquo;Ya estoy en EE.UU.&rdquo;
            </h3>
            <p className="text-slate leading-relaxed">
              Tienes tu título de enfermería pero no puedes ejercer. Trabajas en
              otra cosa mientras tu vocación queda en pausa. Sabes que podrías
              ganar mucho más haciendo lo que estudiaste, pero el proceso de
              validación te parece confuso e inalcanzable.
            </p>
          </div>

          {/* Card 2 - En Latinoamérica */}
          <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-teal/30 transition-colors">
            <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-teal">
              &ldquo;Estoy en Latinoamérica&rdquo;
            </h3>
            <p className="text-slate leading-relaxed">
              Quieres emigrar legalmente ejerciendo tu profesión. No sabes por
              dónde partir. Has visto ofertas y promesas, pero necesitas un
              camino real y confiable para ti y tu familia. Un programa que te
              acompañe paso a paso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
