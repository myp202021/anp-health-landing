const profiles = [
  {
    title: "Licenciado/a en Enfermería",
    eligible: true,
    description: "De cualquier país de Latinoamérica",
  },
  {
    title: "Estudiante de Licenciatura en Enfermería",
    eligible: true,
    description: "Cursando o próximo a graduarse",
  },
  {
    title: "Técnico Superior en Enfermería",
    eligible: true,
    description: "Solo Venezuela, Argentina y El Salvador",
    note: "Consulta tu caso particular",
  },
  {
    title: "Auxiliar de Enfermería",
    eligible: false,
    description: "No califica para el programa",
  },
  {
    title: "Otras profesiones de salud",
    eligible: false,
    description: "No califica para el programa",
  },
];

export default function WhoQualifies() {
  return (
    <section id="elegibilidad" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Elegibilidad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            ¿Puedo participar en el programa?
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Verifica si tu perfil profesional es elegible. Si tienes dudas,
            agenda una asesoría gratuita.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-xl p-5 border transition-colors ${
                profile.eligible
                  ? "glass-card hover:border-teal/30"
                  : "bg-red-500/5 border-red-500/10 hover:border-red-500/20"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  profile.eligible ? "bg-teal/20" : "bg-red-500/10"
                }`}
              >
                {profile.eligible ? (
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{profile.title}</h3>
                <p className="text-slate text-sm">{profile.description}</p>
                {profile.note && (
                  <p className="text-teal text-xs mt-1">{profile.note}</p>
                )}
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  profile.eligible
                    ? "bg-teal/10 text-teal"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {profile.eligible ? "Elegible" : "No elegible"}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://usa.anphealthsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-navy font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Verifica tu Elegibilidad Gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
