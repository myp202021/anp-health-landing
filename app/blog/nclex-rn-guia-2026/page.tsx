import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia NCLEX-RN 2026: Todo lo que necesitas saber — ANP Health",
  description:
    "Guia completa sobre el examen NCLEX-RN 2026 para enfermeros internacionales. Formato, registro, estrategias de estudio, tasas de aprobacion y mas.",
};

const relatedArticles = [
  {
    slug: "estados-demanda-enfermeros",
    title: "Los 5 estados con mas demanda de enfermeros en EE.UU.",
    category: "Ranking",
  },
  {
    slug: "trumerit-validacion-credenciales",
    title: "Que es TruMerit y por que es importante para tu proceso?",
    category: "Noticias",
  },
];

export default function NclexGuide() {
  return (
    <article className="min-h-screen bg-navy">
      {/* Hero header */}
      <div className="relative bg-gradient-to-b from-[#0f172a] to-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-slate hover:text-cyan transition-colors text-sm mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </a>
          <span className="bg-cyan/20 text-cyan text-xs font-semibold px-3 py-1 rounded-full border border-cyan/20">
            Guia
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
            Guia NCLEX-RN 2026: Todo lo que necesitas saber
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            El examen NCLEX-RN es el paso mas importante para obtener tu licencia
            de enfermeria en Estados Unidos. En esta guia te explicamos todo el
            proceso, desde el registro hasta estrategias de estudio.
          </p>
          <p className="text-slate/50 text-sm mt-4">
            Publicado el 10 de mayo, 2026 &middot; Lectura de 12 minutos
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose-custom">
          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Que es el NCLEX-RN?
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            El NCLEX-RN (National Council Licensure Examination for Registered Nurses) es el examen estandarizado que todo profesional de enfermeria debe aprobar para obtener la licencia de Registered Nurse (RN) en Estados Unidos. Es administrado por el NCSBN (National Council of State Boards of Nursing) y aplicado a traves de los centros de evaluacion de Pearson VUE en todo el mundo.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            Este examen no mide conocimientos memoristicos, sino la capacidad del profesional para tomar decisiones clinicas seguras. Evalua el juicio critico del enfermero en situaciones reales de atencion al paciente, lo que lo convierte en una prueba unica en su tipo.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Para enfermeros internacionales, el NCLEX-RN representa la puerta de entrada a una carrera profesional en el sistema de salud mas grande del mundo. Aprobarlo significa que tu formacion y capacidad clinica cumplen con los estandares de calidad exigidos por los Boards of Nursing de cada estado.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Quien necesita tomar el NCLEX-RN?
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Todo profesional de enfermeria que desee ejercer como Registered Nurse en Estados Unidos debe aprobar el NCLEX-RN, sin importar si se graduo en EE.UU. o en otro pais. Esto incluye:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Graduados de programas de enfermeria en EE.UU. (BSN, ADN)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Enfermeros internacionales que han completado la validacion de credenciales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Profesionales que buscan obtener licencia en un nuevo estado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Enfermeros cuya licencia expiro y necesitan re-licenciarse</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Para enfermeros internacionales, antes de poder registrarse al NCLEX-RN, es necesario completar un proceso de validacion de credenciales a traves de organizaciones como TruMerit (respaldada por CGFNS International). Este paso confirma que tu educacion y formacion clinica son equivalentes a los estandares estadounidenses.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Formato y estructura del examen
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            El NCLEX-RN utiliza un formato de evaluacion adaptativa por computadora (CAT, Computer Adaptive Testing). Esto significa que el nivel de dificultad de las preguntas se ajusta en tiempo real segun tus respuestas anteriores.
          </p>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-off-white mb-4">Datos clave del examen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-cyan text-sm font-semibold">Numero de preguntas</p>
                <p className="text-slate text-sm">Minimo 85, maximo 150</p>
              </div>
              <div>
                <p className="text-cyan text-sm font-semibold">Tiempo maximo</p>
                <p className="text-slate text-sm">5 horas (incluye tutorial e instrucciones)</p>
              </div>
              <div>
                <p className="text-cyan text-sm font-semibold">Tipo de preguntas</p>
                <p className="text-slate text-sm">Seleccion multiple, ordenamiento, completar, hot spots, seleccion multiple extendida</p>
              </div>
              <div>
                <p className="text-cyan text-sm font-semibold">Casos clinicos</p>
                <p className="text-slate text-sm">Incluye NGN (Next Generation NCLEX) con escenarios basados en casos</p>
              </div>
            </div>
          </div>

          <p className="text-slate leading-relaxed mb-4">
            El examen evalua cuatro grandes areas de contenido, segun el framework del NCSBN:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan font-bold mt-0">1.</span>
              <span><strong className="text-off-white">Entorno seguro y efectivo:</strong> Manejo de la atencion, seguridad y control de infecciones. Representa aproximadamente el 26-38% del examen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-bold mt-0">2.</span>
              <span><strong className="text-off-white">Promocion y mantenimiento de la salud:</strong> Prevencion, deteccion temprana, educacion del paciente. Aproximadamente 6-12% del examen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-bold mt-0">3.</span>
              <span><strong className="text-off-white">Integridad psicosocial:</strong> Salud mental, mecanismos de adaptacion, apoyo emocional. Aproximadamente 6-12% del examen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan font-bold mt-0">4.</span>
              <span><strong className="text-off-white">Integridad fisiologica:</strong> Cuidado basico, farmacologia, reduccion de riesgos, adaptacion fisiologica. Aproximadamente 38-62% del examen.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Next Generation NCLEX (NGN)
          </h3>
          <p className="text-slate leading-relaxed mb-6">
            Desde 2023, el NCLEX-RN incorporo preguntas de la siguiente generacion (NGN) que evaluan el juicio clinico de forma mas profunda. Estas preguntas presentan escenarios clinicos completos donde debes analizar informacion del paciente, identificar problemas, planificar intervenciones y evaluar resultados. Las preguntas NGN incluyen formatos como matrices, resaltado de texto y respuestas de seleccion multiple extendida.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Como registrarse para el NCLEX-RN
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            El proceso de registro para el NCLEX-RN involucra varios pasos y entidades. Es importante seguirlos en orden para evitar retrasos:
          </p>
          <div className="space-y-4 mb-6">
            <div className="glass-card rounded-xl p-5">
              <p className="text-cyan text-sm font-semibold mb-1">Paso 1: Validacion de credenciales</p>
              <p className="text-slate text-sm">Para enfermeros internacionales, debes completar la evaluacion de credenciales a traves de TruMerit u otra agencia aprobada. Este proceso verifica que tu educacion sea equivalente.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-cyan text-sm font-semibold mb-1">Paso 2: Aplicar al Board of Nursing</p>
              <p className="text-slate text-sm">Debes aplicar al Board of Nursing del estado donde deseas obtener tu licencia. Cada estado tiene requisitos especificos y formularios propios.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-cyan text-sm font-semibold mb-1">Paso 3: Registrarse en Pearson VUE</p>
              <p className="text-slate text-sm">Una vez que el Board aprueba tu elegibilidad, recibes un ATT (Authorization to Test). Con este documento, puedes registrarte en Pearson VUE y agendar tu examen.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-cyan text-sm font-semibold mb-1">Paso 4: Agendar y presentar el examen</p>
              <p className="text-slate text-sm">Pearson VUE tiene centros de evaluacion en todo el mundo. Puedes elegir la fecha y ubicacion que te convenga dentro de la vigencia de tu ATT.</p>
            </div>
          </div>

          <p className="text-slate leading-relaxed mb-6">
            El costo del examen es de $200 USD (tarifa base de Pearson VUE). Adicional a esto, existen tarifas del Board of Nursing estatal y los costos de validacion de credenciales que varian segun la agencia y tu pais de origen.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Estrategias de estudio para el NCLEX-RN
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Prepararse para el NCLEX-RN requiere un enfoque estrategico. No se trata solo de memorizar contenido, sino de desarrollar pensamiento critico y juicio clinico. Aqui te compartimos las estrategias mas efectivas:
          </p>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Comprende el formato antes de estudiar contenido
          </h3>
          <p className="text-slate leading-relaxed mb-4">
            Antes de sumergirte en el estudio de contenido clinico, familiarizate con los tipos de preguntas, especialmente las del formato NGN. Entender como se formulan las preguntas es tan importante como conocer las respuestas. Practica con bancos de preguntas que incluyan los nuevos formatos.
          </p>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Enfocate en el juicio clinico
          </h3>
          <p className="text-slate leading-relaxed mb-4">
            El NCLEX-RN evalua tu capacidad de tomar decisiones clinicas, no cuanto sabes de memoria. Al estudiar cada tema, preguntate: Que haria primero? Cual es la prioridad? Que dato es mas relevante? Este enfoque de razonamiento es clave para aprobar.
          </p>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Utiliza bancos de preguntas reconocidos
          </h3>
          <p className="text-slate leading-relaxed mb-4">
            Plataformas como UWorld, Kaplan, Archer Review y NCSBN Learning Extension ofrecen bancos de preguntas que simulan el formato real del examen. Hacer entre 2,000 y 4,000 preguntas de practica es una recomendacion comun entre quienes aprobaron.
          </p>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Crea un plan de estudio realista
          </h3>
          <p className="text-slate leading-relaxed mb-4">
            La mayoria de los candidatos exitosos estudian entre 6 y 12 semanas de forma intensiva. Distribuye el contenido por areas, dedica tiempo a tus areas debiles y reserva las ultimas 2 semanas para examenes de practica completos. La consistencia diaria es mas efectiva que sesiones maratonicas.
          </p>

          <h3 className="text-xl font-bold text-off-white mt-8 mb-4">
            Domina la farmacologia
          </h3>
          <p className="text-slate leading-relaxed mb-6">
            La farmacologia es una de las areas con mayor peso en el examen. Aprende los prefijos y sufijos de los grupos farmacologicos, mecanismos de accion principales, efectos adversos criticos e interacciones comunes. Herramientas mnemotecnicas y fichas de estudio pueden ser de gran ayuda.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Tasas de aprobacion para enfermeros internacionales
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Es importante ser transparente sobre las estadisticas. Segun datos del NCSBN, las tasas de aprobacion del NCLEX-RN varian significativamente entre candidatos nacionales e internacionales:
          </p>

          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan">~88-90%</p>
                <p className="text-slate text-sm mt-1">Graduados de programas en EE.UU. (primer intento)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal">~35-45%</p>
                <p className="text-slate text-sm mt-1">Enfermeros educados internacionalmente (primer intento)</p>
              </div>
            </div>
          </div>

          <p className="text-slate leading-relaxed mb-4">
            Estas cifras no deben desanimarte, sino motivarte a prepararte de manera estrategica. Los principales factores que afectan la tasa de aprobacion de enfermeros internacionales incluyen:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Diferencias en los curriculos educativos entre paises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Barrera del idioma ingles, especialmente en terminologia clinica</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Diferencias en protocolos y practicas clinicas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span>Falta de familiaridad con el formato de evaluacion adaptativa</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Con una preparacion adecuada y enfocada, muchos enfermeros internacionales logran aprobar en su primer o segundo intento. La clave esta en dedicar el tiempo necesario y utilizar los recursos correctos.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Que sucede si no apruebas el NCLEX-RN?
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            No aprobar el NCLEX-RN no es el fin del camino. Es posible retomar el examen, y muchos enfermeros exitosos necesitaron mas de un intento. Lo importante es entender el proceso:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Periodo de espera:</strong> Debes esperar 45 dias entre intentos para poder registrarte nuevamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Numero de intentos:</strong> La mayoria de los estados permiten hasta 8 intentos. Algunos no tienen limite.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Candidate Performance Report:</strong> Recibes un reporte detallado que indica tus areas de fortaleza y debilidad para enfocar tu estudio.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Costo adicional:</strong> Cada intento requiere pagar nuevamente la tarifa de Pearson VUE y posiblemente la del Board estatal.</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Utiliza el Candidate Performance Report para identificar exactamente donde necesitas mejorar y ajusta tu plan de estudio en consecuencia. Muchos candidatos reportan que su segundo intento fue significativamente mas facil gracias a la experiencia previa.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Como ANP Health te acompana en el proceso
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            ANP Health Solutions no es una academia ni un programa de preparacion para el NCLEX-RN. Lo que hacemos es acompanarte en todo el proceso administrativo y tecnico que rodea al examen:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Validacion de credenciales:</strong> Gestionamos todo el proceso con TruMerit/CGFNS para que tu expediente este completo y correcto.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Registro ante el Board of Nursing:</strong> Te orientamos sobre que estado es mejor para tu perfil y te guiamos en el proceso de aplicacion.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Coordinacion con Pearson VUE:</strong> Te ayudamos a entender los plazos, la documentacion requerida y la logistica de agendar tu examen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Orientacion post-examen:</strong> Sea cual sea el resultado, te orientamos sobre los siguientes pasos en tu proceso hacia la licencia RN.</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Con mas de 2,000 profesionales acompanados de 28 paises, entendemos los desafios unicos que enfrentan los enfermeros internacionales y personalizamos nuestra orientacion segun tu pais de origen, idioma y situacion particular.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Preguntas frecuentes sobre el NCLEX-RN
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                q: "Puedo presentar el NCLEX-RN fuera de Estados Unidos?",
                a: "Si. Pearson VUE tiene centros de evaluacion en varios paises, incluyendo Mexico, India, Filipinas, Canada, Reino Unido y mas. Consulta la lista completa en la pagina de Pearson VUE.",
              },
              {
                q: "Cuanto tiempo tengo para estudiar despues de recibir el ATT?",
                a: "El ATT generalmente tiene una vigencia de 90 dias, aunque puede variar segun el estado. Debes presentar el examen dentro de ese periodo o solicitar una extension.",
              },
              {
                q: "El examen esta disponible en espanol?",
                a: "No. El NCLEX-RN solo esta disponible en ingles. Es fundamental tener un nivel de ingles que te permita comprender terminologia clinica y escenarios de pacientes.",
              },
              {
                q: "Como se que aprobe?",
                a: "Los resultados oficiales se publican aproximadamente 48 horas despues del examen a traves del sitio del Board of Nursing estatal. Existe tambien el servicio 'Quick Results' de Pearson VUE disponible por un costo adicional.",
              },
              {
                q: "Necesito completar la validacion de credenciales antes de estudiar?",
                a: "No necesariamente. Puedes iniciar tu preparacion mientras avanza el proceso de validacion. De hecho, es recomendable comenzar lo antes posible.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <p className="text-off-white font-bold text-sm mb-2">{faq.q}</p>
                <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center border border-cyan/20">
            <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
              Listo para dar el primer paso?
            </h2>
            <p className="text-slate max-w-xl mx-auto mb-6">
              Agenda una asesoria gratuita con nuestro equipo. Evaluamos tu perfil,
              tu pais de origen y tu formacion para orientarte sobre los pasos
              especificos de tu proceso hacia la licencia RN.
            </p>
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow text-navy font-bold text-sm px-8 py-3 rounded-full inline-block"
            >
              Agenda tu Asesoria Gratuita
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
