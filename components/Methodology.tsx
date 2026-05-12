const steps = [
  {
    number: "01",
    title: "Validación de Credenciales",
    description:
      "Evaluamos tu elegibilidad y te acompañamos en el proceso de validación con TruMerit y CGFNS. Gestionamos traducciones, certificaciones y toda la documentación necesaria.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Preparación para NCLEX-RN",
    description:
      "Te orientamos en la preparación del examen NCLEX-RN, el paso fundamental para obtener tu licencia de enfermería en Estados Unidos.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Conexión con Hospitales Aliados",
    description:
      "Te conectamos con nuestra red de hospitales y centros de salud en Estados Unidos que buscan activamente enfermeros internacionales.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sponsor Migratorio Familiar",
    description:
      "El hospital sponsor gestiona tu visa de trabajo, incluyendo a tu cónyuge e hijos menores de 21 años. Un camino legal y seguro para toda tu familia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm font-semibold uppercase tracking-wider">
            Metodología
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tu camino hacia la licencia RN en 4 pasos
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Un proceso estructurado y acompañado de principio a fin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 hover:border-teal/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-teal/30 text-3xl font-bold group-hover:text-teal/50 transition-colors">
                  {step.number}
                </span>
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center text-teal">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
