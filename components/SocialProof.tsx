"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedStat({
  target,
  prefix = "",
  suffix = "",
  label,
  delay,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      const duration = 1800;
      const steps = 50;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, target, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-cyan mb-2 tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-slate text-sm font-medium">{label}</p>
    </div>
  );
}

const stats = [
  { target: 2000, prefix: "+", suffix: "", label: "Profesionales Acompanados" },
  { target: 28, prefix: "", suffix: "", label: "Nacionalidades" },
  { target: 20000, prefix: "+", suffix: "", label: "Asesorias Anuales" },
];

const badges = [
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    label: "Acreditacion TruMerit (CGFNS)",
  },
  {
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    label: "Reclutador Etico Certificado",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-navy via-navy-light/50 to-navy">
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto mb-16">
          {stats.map((s, i) => (
            <AnimatedStat
              key={s.label}
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
              delay={i * 200}
            />
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {badges.map((b) => (
            <div
              key={b.label}
              className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
              </div>
              <span className="text-off-white text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
