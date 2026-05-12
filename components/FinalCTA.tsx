export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-teal text-sm font-semibold uppercase tracking-wider">
          Da el primer paso
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
          Tu carrera de enfermería en EE.UU.{" "}
          <span className="text-teal">comienza hoy</span>
        </h2>
        <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
          Agenda una asesoría gratuita y personalizada. Evaluamos tu
          elegibilidad, respondemos todas tus preguntas y te mostramos el camino
          paso a paso.
        </p>

        <a
          href="https://usa.anphealthsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-navy font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal/20"
        >
          Agenda tu Asesoría Gratuita
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="text-slate/60 text-sm mt-6">
          Sin compromiso. Sin costo. 100% confidencial.
        </p>
      </div>
    </section>
  );
}
