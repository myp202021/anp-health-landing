"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/images/anp-logo-7.png"
              alt="ANP Health Solutions"
              className="h-12 w-auto mb-4"
            />
            <p className="text-slate text-sm leading-relaxed max-w-xs">
              Acompanamiento tecnico y administrativo para la validacion de
              credenciales de enfermeria en Estados Unidos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-off-white font-bold text-sm mb-4 uppercase tracking-wider">
              Navegacion
            </h4>
            <div className="space-y-2.5">
              {[
                { href: "#proceso", label: "Proceso" },
                { href: "#califica", label: "Calificas?" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#testimonios", label: "Testimonios" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-slate text-sm hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-off-white font-bold text-sm mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://usa.anphealthsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate text-sm hover:text-cyan transition-colors"
              >
                usa.anphealthsolutions.com
              </a>
              <a
                href="https://latam.anphealthsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate text-sm hover:text-cyan transition-colors"
              >
                latam.anphealthsolutions.com
              </a>
              <a
                href="mailto:info@anphealthsolutions.com"
                className="block text-slate text-sm hover:text-cyan transition-colors"
              >
                info@anphealthsolutions.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-slate/40 text-xs leading-relaxed mb-4 max-w-4xl">
            ANP Health Solutions no es una agencia de empleo, firma migratoria ni institucion
            educativa. Ofrecemos acompanamiento tecnico y administrativo para la validacion de
            credenciales de enfermeria. Los resultados, tiempos y costos varian segun cada perfil
            individual. ANP Health no puede ni pretende ofrecer resultados asegurados.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate/40 text-xs">
              &copy; {new Date().getFullYear()} ANP Health Solutions. Todos los
              derechos reservados.
            </p>
            <p className="text-slate/30 text-xs">
              Desarrollado por{" "}
              <a
                href="https://www.mulleryperez.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate/50 hover:text-cyan transition-colors"
              >
                Muller y Perez
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
