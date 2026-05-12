"use client";

import { useEffect, useRef, useState } from "react";

const articles = [
  {
    image: "/images/magnific_create-a-composition-with_2963212490.png",
    category: "Guia",
    title: "Guia NCLEX-RN 2026: Todo lo que necesitas saber",
    excerpt:
      "El examen NCLEX-RN es el paso mas importante para obtener tu licencia de enfermeria en Estados Unidos. Te explicamos el proceso completo.",
  },
  {
    image: "/images/magnific_create-a-composition-with_2963236854.png",
    category: "Ranking",
    title: "Los 5 estados con mas demanda de enfermeros en EE.UU.",
    excerpt:
      "Descubre cuales estados ofrecen las mejores condiciones salariales y calidad de vida para enfermeros internacionales.",
  },
  {
    image: "/images/magnific__create-a-composicion-using-img2-as-reference-but-s__52460.png",
    category: "Noticias",
    title: "Que es TruMerit y por que es importante para tu proceso?",
    excerpt:
      "TruMerit, respaldado por CGFNS International, es la plataforma de validacion de credenciales que agiliza tu camino hacia la licencia RN.",
  },
];

export default function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 md:py-28 bg-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Noticias y Guias para Enfermeros
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Informacion actualizada para que tomes las mejores decisiones en tu carrera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((a, i) => (
            <div
              key={i}
              className={`glass-card glass-card-hover rounded-2xl overflow-hidden group transition-all duration-700 cursor-pointer ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
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
                <h3 className="text-lg font-bold mb-3 text-off-white group-hover:text-cyan transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <span className="text-cyan text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer mas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 border border-cyan/30 hover:border-cyan/60 text-cyan font-medium text-sm px-6 py-3 rounded-full transition-all hover:bg-cyan/5"
          >
            Ver todos los articulos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
