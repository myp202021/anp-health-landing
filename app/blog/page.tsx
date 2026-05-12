import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ANP Health | Recursos para Enfermeros Internacionales",
  description:
    "Guias, noticias y recursos actualizados para enfermeros latinos que buscan validar su titulo y ejercer en Estados Unidos.",
};

const articles = [
  {
    slug: "nclex-rn-guia-2026",
    image: "/images/magnific_create-a-composition-with_2963212490.png",
    category: "Guia",
    title: "Guia NCLEX-RN 2026: Todo lo que necesitas saber",
    excerpt:
      "El examen NCLEX-RN es el paso mas importante para obtener tu licencia de enfermeria en Estados Unidos. Te explicamos el proceso completo.",
    date: "10 de mayo, 2026",
  },
  {
    slug: "estados-demanda-enfermeros",
    image: "/images/magnific_create-a-composition-with_2963236854.png",
    category: "Ranking",
    title: "Los 5 estados con mas demanda de enfermeros en EE.UU.",
    excerpt:
      "Descubre cuales estados ofrecen las mejores condiciones salariales y calidad de vida para enfermeros internacionales.",
    date: "8 de mayo, 2026",
  },
  {
    slug: "trumerit-validacion-credenciales",
    image:
      "/images/magnific__create-a-composicion-using-img2-as-reference-but-s__52460.png",
    category: "Noticias",
    title: "Que es TruMerit y por que es importante para tu proceso?",
    excerpt:
      "TruMerit, respaldado por CGFNS International, es la plataforma de validacion de credenciales que agiliza tu camino hacia la licencia RN.",
    date: "5 de mayo, 2026",
  },
];

export default function BlogIndex() {
  return (
    <section className="min-h-screen bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5">
            Noticias y Guias para Enfermeros
          </h1>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Informacion actualizada para que tomes las mejores decisiones en tu
            carrera profesional en Estados Unidos.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((a) => (
            <a
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group transition-all duration-500 block"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <span className="absolute top-4 left-4 bg-cyan/20 text-cyan text-xs font-semibold px-3 py-1 rounded-full border border-cyan/20">
                  {a.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate/60 text-xs mb-2">{a.date}</p>
                <h2 className="text-xl font-bold mb-3 text-off-white group-hover:text-cyan transition-colors leading-snug">
                  {a.title}
                </h2>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <span className="text-cyan text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer articulo completo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Back to home */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate hover:text-cyan transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
