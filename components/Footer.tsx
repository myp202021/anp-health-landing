export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-white">
              ANP <span className="text-teal">Health</span>
            </span>
            <p className="text-slate text-sm mt-1">
              Validación de credenciales de enfermería para Latinoamérica
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://usa.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate text-sm hover:text-white transition-colors"
            >
              EE.UU.
            </a>
            <a
              href="https://latam.anphealthsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate text-sm hover:text-white transition-colors"
            >
              Latinoamérica
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate/50 text-xs">
            &copy; {new Date().getFullYear()} ANP Health Solutions. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
