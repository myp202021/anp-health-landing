"use client";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background photo + overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/magnific_create-a-composition-with_2963236854.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/90 to-navy/95" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Tu carrera en Estados Unidos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-teal">
            empieza con una conversacion
          </span>
        </h2>
        <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Agenda tu asesoria gratuita. Sin compromiso. Sin letra chica.
        </p>

        <a
          href="https://usa.anphealthsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cta-glow text-navy font-bold text-lg px-12 py-5 rounded-full"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          Agenda tu Asesoria Gratuita
        </a>

        <p className="text-slate/60 text-sm mt-8">
          O escribenos directamente:{" "}
          <a
            href="mailto:info@anphealthsolutions.com"
            className="text-cyan hover:underline"
          >
            info@anphealthsolutions.com
          </a>
        </p>
      </div>
    </section>
  );
}
