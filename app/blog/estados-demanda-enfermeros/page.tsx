import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Los 5 estados con mas demanda de enfermeros en EE.UU. — ANP Health",
  description:
    "Descubre cuales estados ofrecen las mejores condiciones salariales, calidad de vida y oportunidades para enfermeros internacionales en Estados Unidos.",
};

const states = [
  {
    name: "Texas",
    salary: "$75,000 - $95,000",
    costOfLiving: "Moderado",
    highlights: [
      "Segundo estado mas grande en poblacion, con demanda constante de enfermeros",
      "Sin impuesto estatal sobre la renta (mayor salario neto)",
      "Ciudades principales: Houston, Dallas, San Antonio, Austin",
      "Comunidad latina grande, lo que facilita la adaptacion cultural",
      "Board of Nursing relativamente agil para enfermeros internacionales",
    ],
    boardReqs:
      "El Texas Board of Nursing acepta validacion de credenciales via TruMerit/CGFNS. Requiere verificacion de educacion y background check. El proceso de licenciamiento suele tomar entre 8 y 16 semanas despues de aprobar el NCLEX.",
    timeline: "8-16 semanas post-NCLEX",
  },
  {
    name: "California",
    salary: "$95,000 - $130,000",
    costOfLiving: "Alto",
    highlights: [
      "Los salarios mas altos del pais para enfermeros",
      "Sistema de salud extenso con miles de hospitales y clinicas",
      "Legislacion favorable para ratios enfermero-paciente",
      "Ciudades: Los Angeles, San Francisco, San Diego, Sacramento",
      "Gran diversidad cultural y comunidad latina establecida",
    ],
    boardReqs:
      "El California Board of Registered Nursing (BRN) es uno de los mas rigurosos. Requiere un minimo de horas clinicas y teoricas especificas. Es importante verificar que tu curriculo cumpla antes de aplicar.",
    timeline: "12-24 semanas post-NCLEX",
  },
  {
    name: "New York",
    salary: "$85,000 - $115,000",
    costOfLiving: "Alto (NYC) / Moderado (upstate)",
    highlights: [
      "Uno de los mercados laborales mas grandes para enfermeria",
      "Hospitales de clase mundial: NYU Langone, Mount Sinai, Columbia",
      "Oportunidades de especializacion y crecimiento profesional",
      "Fuera de NYC, el costo de vida es significativamente menor",
      "Estado con alto porcentaje de enfermeros internacionales",
    ],
    boardReqs:
      "New York Education Department requiere validacion de credenciales y verificacion de equivalencia curricular. Acepta evaluaciones de TruMerit y otras agencias aprobadas. Proceso estructurado pero con tiempos variables.",
    timeline: "10-20 semanas post-NCLEX",
  },
  {
    name: "Florida",
    salary: "$65,000 - $85,000",
    costOfLiving: "Moderado",
    highlights: [
      "Sin impuesto estatal sobre la renta (como Texas)",
      "Clima calido todo el ano, atractivo para familias",
      "Alta demanda por poblacion de adultos mayores",
      "Ciudades: Miami, Orlando, Tampa, Jacksonville",
      "Comunidad hispanohablante muy fuerte, especialmente en Miami",
    ],
    boardReqs:
      "El Florida Board of Nursing tiene un proceso relativamente directo. Requiere validacion de credenciales, fingerprinting y background check. Acepta aplicaciones de enfermeros internacionales con evaluacion CGFNS/TruMerit.",
    timeline: "6-12 semanas post-NCLEX",
  },
  {
    name: "Illinois",
    salary: "$70,000 - $90,000",
    costOfLiving: "Moderado (Chicago) / Bajo (resto del estado)",
    highlights: [
      "Chicago es uno de los principales centros medicos del pais",
      "Hospitales de investigacion de primer nivel: Northwestern, Rush, UChicago",
      "Buenas oportunidades para enfermeros bilingues",
      "Costo de vida moderado comparado con costas este y oeste",
      "Excelente transporte publico en Chicago",
    ],
    boardReqs:
      "Illinois Department of Financial and Professional Regulation supervisa la licencia de enfermeria. Requiere validacion de credenciales y documentacion estandar. Proceso generalmente eficiente.",
    timeline: "8-14 semanas post-NCLEX",
  },
];

const relatedArticles = [
  {
    slug: "nclex-rn-guia-2026",
    title: "Guia NCLEX-RN 2026: Todo lo que necesitas saber",
    category: "Guia",
  },
  {
    slug: "trumerit-validacion-credenciales",
    title: "Que es TruMerit y por que es importante para tu proceso?",
    category: "Noticias",
  },
];

export default function EstadosDemanda() {
  return (
    <article className="min-h-screen bg-navy">
      {/* Hero header */}
      <div className="relative bg-gradient-to-b from-[#0f172a] to-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="flex items-center gap-2 text-slate hover:text-cyan transition-colors text-sm mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </a>
          <span className="bg-cyan/20 text-cyan text-xs font-semibold px-3 py-1 rounded-full border border-cyan/20">
            Ranking
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
            Los 5 estados con mas demanda de enfermeros en EE.UU.
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            Descubre cuales estados ofrecen las mejores condiciones salariales,
            calidad de vida y oportunidades para enfermeros internacionales.
          </p>
          <p className="text-slate/50 text-sm mt-4">
            Publicado el 8 de mayo, 2026 &middot; Lectura de 10 minutos
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose-custom">
          {/* Intro */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            La escasez de enfermeros en Estados Unidos: una oportunidad real
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Estados Unidos enfrenta una escasez critica de enfermeros que se ha intensificado en los ultimos anos. Segun la Oficina de Estadisticas Laborales (BLS), se proyectan mas de 200,000 vacantes anuales para Registered Nurses hasta 2031. Esta demanda representa una oportunidad significativa para enfermeros internacionales que buscan desarrollar su carrera en el sistema de salud mas avanzado del mundo.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            Sin embargo, no todos los estados son iguales. Las condiciones salariales, el costo de vida, los requisitos de licenciamiento y la calidad de vida varian enormemente. Antes de elegir estado, necesitas completar la <a href="/blog/trumerit-validacion-credenciales" className="text-cyan hover:underline">validacion de credenciales con TruMerit</a> y aprobar el <a href="/blog/nclex-rn-guia-2026" className="text-cyan hover:underline">examen NCLEX-RN</a>. Una vez listo, el estado que elijas puede hacer una diferencia significativa en tu experiencia profesional y personal.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            En este articulo analizamos los 5 estados con mayor demanda de enfermeros, comparando salarios, costos, requisitos y tiempos de licenciamiento para ayudarte a tomar una decision informada.
          </p>

          {/* Comparison table */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Tabla comparativa rapida
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan/20">
                  <th className="text-left text-cyan py-3 px-3 font-semibold">Estado</th>
                  <th className="text-left text-cyan py-3 px-3 font-semibold">Salario anual</th>
                  <th className="text-left text-cyan py-3 px-3 font-semibold">Costo de vida</th>
                  <th className="text-left text-cyan py-3 px-3 font-semibold">Licencia post-NCLEX</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                {states.map((s) => (
                  <tr key={s.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-3 text-off-white font-medium">{s.name}</td>
                    <td className="py-3 px-3">{s.salary}</td>
                    <td className="py-3 px-3">{s.costOfLiving}</td>
                    <td className="py-3 px-3">{s.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Each state detailed */}
          {states.map((state, i) => (
            <div key={state.name}>
              <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
                {i + 1}. {state.name}
              </h2>

              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-cyan text-xs font-semibold">Salario anual RN</p>
                    <p className="text-off-white font-bold text-lg">{state.salary}</p>
                  </div>
                  <div>
                    <p className="text-cyan text-xs font-semibold">Costo de vida</p>
                    <p className="text-off-white font-bold text-lg">{state.costOfLiving}</p>
                  </div>
                  <div>
                    <p className="text-cyan text-xs font-semibold">Licencia post-NCLEX</p>
                    <p className="text-off-white font-bold text-lg">{state.timeline}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-off-white mb-4">Por que {state.name}?</h3>
              <ul className="text-slate space-y-3 mb-6 ml-4">
                {state.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-cyan mt-1">&#9679;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-off-white mb-4">
                Requisitos del Board of Nursing
              </h3>
              <p className="text-slate leading-relaxed mb-6">{state.boardReqs}</p>
            </div>
          ))}

          {/* How to choose */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Como elegir el estado correcto para ti
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Elegir el estado ideal no depende solo del salario. Hay varios factores que debes considerar segun tu situacion personal y familiar:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Salario neto vs. bruto:</strong> Texas y Florida no cobran impuesto estatal sobre la renta, lo que puede significar un ingreso neto mayor que estados con salarios brutos mas altos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Costo de vivienda:</strong> En California o New York el salario es mas alto, pero el alquiler puede consumir una porcion significativa. Investiga el costo de vivienda en la ciudad especifica donde trabajarias.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Comunidad latina:</strong> Si la adaptacion cultural es importante para ti y tu familia, estados como Texas, Florida y California tienen comunidades hispanohablantes grandes y establecidas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Velocidad de licenciamiento:</strong> Si el tiempo es critico, Florida y Texas tienden a tener procesos mas agiles que California o New York.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Nurse Licensure Compact (NLC):</strong> Algunos estados participan en el Compact, que te permite ejercer en multiples estados con una sola licencia. Texas, Florida e Illinois son miembros; California y New York no.</span>
            </li>
          </ul>

          {/* Compact license explanation */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Que es el Nurse Licensure Compact (NLC)?
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            El NLC es un acuerdo entre estados que permite a los enfermeros con licencia multiestatal ejercer en cualquier estado miembro sin necesidad de obtener una licencia adicional. Actualmente, mas de 40 estados participan en el Compact.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Para enfermeros internacionales, obtener una licencia Compact puede abrir significativamente tus opciones laborales. Si obtienes tu licencia en un estado Compact como Texas, puedes trabajar temporalmente o hacer travel nursing en docenas de otros estados sin tramites adicionales.
          </p>

          {/* ANP Health section */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Como ANP Health te ayuda a elegir el estado ideal
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Elegir el estado correcto es una decision que afecta tu vida profesional, financiera y familiar. En ANP Health te acompanamos en esta decision considerando:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Tu pais de origen y los requisitos especificos del Board of Nursing de cada estado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Tu situacion familiar y preferencias de calidad de vida</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Los tiempos de procesamiento segun tu perfil</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Las oportunidades de sponsor migratorio disponibles en cada region</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            No recomendamos un estado por defecto. Cada caso es diferente, y la orientacion personalizada es parte fundamental de nuestro acompanamiento.
          </p>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center border border-cyan/20 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
              No sabes por donde empezar?
            </h2>
            <p className="text-slate max-w-xl mx-auto mb-6">
              En una asesoria gratuita evaluamos tu perfil completo y te orientamos
              sobre cual estado se adapta mejor a tus necesidades y las de tu
              familia.
            </p>
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow text-navy font-bold text-sm px-8 py-3 rounded-full inline-block"
            >
              Agenda tu Asesoría Gratuita
            </a>
            <p className="text-slate/40 text-xs mt-4">
              Sin costo. Sin compromiso. Personalizada segun tu perfil.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-off-white mb-6">Articulos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="glass-card glass-card-hover rounded-xl p-5 block group transition-all"
                >
                  <span className="text-cyan text-xs font-semibold">{r.category}</span>
                  <p className="text-off-white font-bold text-sm mt-1 group-hover:text-cyan transition-colors">
                    {r.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
