import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Que es TruMerit y por que es importante para tu proceso? — ANP Health",
  description:
    "TruMerit, respaldado por CGFNS International, es la plataforma de validacion de credenciales de enfermeria. Conoce el proceso paso a paso.",
};

const relatedArticles = [
  {
    slug: "nclex-rn-guia-2026",
    title: "Guia NCLEX-RN 2026: Todo lo que necesitas saber",
    category: "Guia",
  },
  {
    slug: "estados-demanda-enfermeros",
    title: "Los 5 estados con mas demanda de enfermeros en EE.UU.",
    category: "Ranking",
  },
];

export default function TruMeritArticle() {
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
            Noticias
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
            Que es TruMerit y por que es importante para tu proceso?
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            TruMerit, respaldado por CGFNS International, es la plataforma de
            validacion de credenciales que agiliza tu camino hacia la licencia RN
            en Estados Unidos.
          </p>
          <p className="text-slate/50 text-sm mt-4">
            Publicado el 5 de mayo, 2026 &middot; Lectura de 10 minutos
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose-custom">
          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Que es TruMerit?
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            TruMerit es la plataforma tecnologica desarrollada por CGFNS International (Commission on Graduates of Foreign Nursing Schools) para gestionar la evaluacion y validacion de credenciales de profesionales de salud educados fuera de Estados Unidos. Lanzada como una evolucion digital de los servicios tradicionales de CGFNS, TruMerit centraliza todo el proceso en un portal en linea que facilita el seguimiento y la gestion de documentos.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            CGFNS International fue fundada en 1977 y es la organizacion mas reconocida a nivel mundial en evaluacion de credenciales de enfermeria. Durante mas de 45 anos, ha evaluado las credenciales de cientos de miles de profesionales de enfermeria de practicamente todos los paises del mundo.
          </p>
          <p className="text-slate leading-relaxed mb-6">
            Con TruMerit, CGFNS modernizo su proceso, permitiendo a los candidatos cargar documentos, hacer seguimiento del estado de su evaluacion y recibir notificaciones en tiempo real, todo desde una plataforma digital accesible desde cualquier dispositivo.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Por que la validacion de credenciales es fundamental
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            La validacion de credenciales es un requisito obligatorio para enfermeros internacionales que buscan obtener la licencia RN en Estados Unidos. Sin este paso, no puedes registrarte para el <a href="/blog/nclex-rn-guia-2026" className="text-cyan hover:underline">examen NCLEX-RN</a> ni aplicar al Board of Nursing de ningun estado. El estado que elijas tambien importa — revisa <a href="/blog/estados-demanda-enfermeros" className="text-cyan hover:underline">los 5 estados con mas demanda</a> para tu decision.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            El proposito de la validacion es verificar que tu educacion de enfermeria sea equivalente a la formacion que reciben los enfermeros en Estados Unidos. Esto incluye:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Autenticidad de documentos:</strong> Que tus titulos, transcripciones y certificaciones son autenticos y emitidos por instituciones reconocidas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Equivalencia curricular:</strong> Que el contenido y las horas de tu programa de enfermeria cubren las areas requeridas por los estandares estadounidenses.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Horas clinicas:</strong> Que completaste suficientes horas de practica clinica supervisada en las areas requeridas (pediatria, maternidad, salud mental, medico-quirurgica, comunitaria).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Licencia vigente:</strong> Que tienes o tuviste una licencia de enfermeria activa en tu pais de origen.</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Sin una evaluacion positiva de credenciales, tu camino hacia la licencia RN queda bloqueado. Por eso es uno de los primeros y mas importantes pasos del proceso.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            El proceso de evaluacion paso a paso
          </h2>
          <p className="text-slate leading-relaxed mb-6">
            El proceso de validacion a traves de TruMerit sigue una secuencia definida. Entender cada etapa te ayudara a prepararte y evitar retrasos:
          </p>

          <div className="space-y-4 mb-8">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-cyan font-bold text-xl mt-0.5">01</span>
                <div>
                  <h3 className="text-off-white font-bold mb-2">Crear cuenta en TruMerit</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    El primer paso es registrarte en la plataforma TruMerit (trumerit.com). Creas un perfil con tus datos personales, pais de origen, programa de enfermeria y tipo de evaluacion que necesitas. La plataforma te guia sobre que servicio solicitar segun el estado donde planeas aplicar.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-cyan font-bold text-xl mt-0.5">02</span>
                <div>
                  <h3 className="text-off-white font-bold mb-2">Seleccionar el tipo de evaluacion</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    CGFNS ofrece diferentes servicios segun tus necesidades. Los mas comunes son el Credentials Evaluation Service (CES) Professional Report, requerido por la mayoria de los Boards of Nursing, y el VisaScreen Certificate, necesario para obtener ciertos tipos de visa. Tu asesor te orientara sobre cual necesitas.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-cyan font-bold text-xl mt-0.5">03</span>
                <div>
                  <h3 className="text-off-white font-bold mb-2">Reunir y enviar documentos</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Debes reunir todos los documentos requeridos y cargarlos en la plataforma o enviarlos segun las instrucciones. Algunos documentos deben ser enviados directamente por la institucion emisora (como transcripciones oficiales). La plataforma te indica exactamente que necesitas y el estado de cada documento.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-cyan font-bold text-xl mt-0.5">04</span>
                <div>
                  <h3 className="text-off-white font-bold mb-2">Verificacion y evaluacion</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Una vez que CGFNS recibe todos tus documentos, su equipo de evaluadores los revisa y verifica. Contactan a tus instituciones educativas para confirmar la autenticidad de los documentos. Esta es generalmente la etapa que mas tiempo toma del proceso.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-cyan font-bold text-xl mt-0.5">05</span>
                <div>
                  <h3 className="text-off-white font-bold mb-2">Emision del reporte</h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Si tu evaluacion es positiva, CGFNS emite un reporte oficial que se envia directamente al Board of Nursing del estado que seleccionaste. Este reporte confirma que tu educacion cumple con los estandares requeridos y te habilita para continuar con el proceso de licenciamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Documentos requeridos
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Los documentos especificos pueden variar segun tu pais de origen y el tipo de evaluacion, pero en general necesitaras:
          </p>
          <div className="glass-card rounded-xl p-6 mb-6">
            <ul className="text-slate space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Titulo de enfermeria:</strong> Diploma o titulo original, con traduccion oficial al ingles si esta en otro idioma.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Transcripciones academicas:</strong> Detalle de materias cursadas, horas teoricas y clinicas. Deben ser enviadas directamente por la universidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Licencia de enfermeria:</strong> Copia de tu licencia o registro profesional vigente o mas reciente en tu pais.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Identificacion oficial:</strong> Pasaporte vigente con foto clara.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Desglose curricular:</strong> Syllabus o programa detallado de tus materias clinicas, especificando horas teoricas vs. practicas por area.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Certificacion de horas clinicas:</strong> Documento firmado por tu universidad o centro de practicas que detalle las horas clinicas completadas por especialidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-1">&#10003;</span>
                <span><strong className="text-off-white">Prueba de ingles (si aplica):</strong> Algunos estados y servicios requieren resultados de TOEFL o IELTS. Verifica los requisitos de tu estado objetivo.</span>
              </li>
            </ul>
          </div>
          <p className="text-slate leading-relaxed mb-6">
            Es importante que todos los documentos esten en ingles o acompanados de una traduccion certificada. Los documentos incompletos, ilegibles o sin traduccion oficial son la causa mas comun de retrasos en el proceso.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Tiempos estimados del proceso
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Los tiempos de procesamiento de TruMerit/CGFNS varian segun varios factores. Es importante tener expectativas realistas:
          </p>
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-off-white text-sm font-medium">Revision inicial de documentos</span>
                <span className="text-cyan text-sm font-semibold">2-4 semanas</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-off-white text-sm font-medium">Verificacion con instituciones</span>
                <span className="text-cyan text-sm font-semibold">4-12 semanas</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-off-white text-sm font-medium">Evaluacion y emision del reporte</span>
                <span className="text-cyan text-sm font-semibold">2-4 semanas</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-off-white text-sm font-bold">Tiempo total estimado</span>
                <span className="text-cyan text-sm font-bold">2-6 meses</span>
              </div>
            </div>
          </div>
          <p className="text-slate leading-relaxed mb-4">
            Los factores que mas afectan el tiempo incluyen:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Capacidad de respuesta de tu universidad:</strong> Si tu institucion educativa tarda en verificar documentos o enviar transcripciones, todo el proceso se retrasa.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Completitud de documentos:</strong> Enviar documentos incompletos genera solicitudes de informacion adicional y retrasos significativos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Pais de origen:</strong> Algunos paises tienen procesos mas rapidos de verificacion que otros, dependiendo de la infraestructura institucional.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Volumen de aplicaciones:</strong> Los tiempos pueden variar segun la carga de trabajo de CGFNS en el momento de tu aplicacion.</span>
            </li>
          </ul>

          {/* Section 6 - Differences from other services */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            TruMerit vs. otros servicios de evaluacion
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Aunque existen otras agencias de evaluacion de credenciales (como IERF, WES, Josef Silny), CGFNS/TruMerit es la mas reconocida y aceptada especificamente para enfermeria. Las diferencias clave incluyen:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Especializacion:</strong> CGFNS se especializa exclusivamente en profesionales de salud, a diferencia de agencias generalistas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Aceptacion:</strong> La gran mayoria de los Boards of Nursing aceptan evaluaciones de CGFNS. No todas las agencias son aceptadas por todos los estados.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">VisaScreen:</strong> CGFNS es la unica organizacion autorizada para emitir el VisaScreen Certificate, necesario para ciertos procesos migratorios.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Conocimiento de curriculos:</strong> Con 45+ anos evaluando programas de enfermeria de todo el mundo, CGFNS tiene un conocimiento profundo de los sistemas educativos de cada pais.</span>
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Como ANP Health gestiona este proceso por ti
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            La validacion de credenciales es uno de los pasos mas complejos y donde mas errores cometen los candidatos que intentan hacerlo solos. En ANP Health, nuestro equipo se encarga de:
          </p>
          <ul className="text-slate space-y-3 mb-6 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Evaluacion previa de documentos:</strong> Antes de enviar nada a CGFNS, revisamos que todos tus documentos esten completos, correctamente traducidos y en el formato requerido.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Coordinacion con tu universidad:</strong> Nos comunicamos con tu institucion educativa para facilitar el envio de transcripciones y verificaciones, agilizando el proceso.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Seguimiento continuo:</strong> Monitoreamos el estado de tu evaluacion en TruMerit y te mantenemos informado en cada etapa. Si CGFNS solicita informacion adicional, actuamos rapidamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Resolucion de problemas:</strong> Si surge un problema con tu evaluacion (documentos faltantes, discrepancias curriculares, verificaciones pendientes), nuestro equipo tiene experiencia manejando estos casos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan mt-1">&#9679;</span>
              <span><strong className="text-off-white">Seleccion del servicio correcto:</strong> Te orientamos sobre si necesitas un CES Report, un VisaScreen, o ambos, segun tu estado objetivo y tu situacion migratoria.</span>
            </li>
          </ul>
          <p className="text-slate leading-relaxed mb-6">
            Con mas de 2,000 profesionales de 28 paises acompanados, hemos desarrollado un conocimiento profundo de los requisitos especificos de cada pais y cada Board of Nursing, lo que nos permite anticipar problemas y reducir tiempos.
          </p>

          {/* Common mistakes */}
          <h2 className="text-2xl md:text-3xl font-bold text-off-white mt-12 mb-6">
            Errores comunes que debes evitar
          </h2>
          <div className="space-y-4 mb-8">
            <div className="glass-card rounded-xl p-5">
              <p className="text-off-white font-bold text-sm mb-2">Enviar documentos sin traduccion certificada</p>
              <p className="text-slate text-sm leading-relaxed">CGFNS requiere traducciones oficiales de todos los documentos que no esten en ingles. Traducciones informales o hechas por el candidato no son aceptadas y generan retrasos.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-off-white font-bold text-sm mb-2">No verificar los requisitos del estado antes de aplicar</p>
              <p className="text-slate text-sm leading-relaxed">Cada Board of Nursing tiene requisitos especificos. Algunos aceptan solo ciertos tipos de reportes. Verificar esto antes te ahorra tiempo y dinero.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-off-white font-bold text-sm mb-2">No contactar a tu universidad con anticipacion</p>
              <p className="text-slate text-sm leading-relaxed">Las universidades pueden tardar semanas en preparar y enviar documentos a CGFNS. Notificarles con anticipacion agiliza significativamente el proceso.</p>
            </div>
            <div className="glass-card rounded-xl p-5">
              <p className="text-off-white font-bold text-sm mb-2">Seleccionar el servicio de evaluacion incorrecto</p>
              <p className="text-slate text-sm leading-relaxed">CGFNS ofrece multiples servicios y no todos son aceptados por todos los estados. Elegir el servicio equivocado puede requerir una nueva evaluacion.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center border border-cyan/20 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
              Necesitas ayuda con tu validacion de credenciales?
            </h2>
            <p className="text-slate max-w-xl mx-auto mb-6">
              En una asesoria gratuita evaluamos tu documentacion, te orientamos
              sobre el tipo de evaluacion que necesitas y te acompanamos en cada
              paso del proceso con TruMerit.
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
