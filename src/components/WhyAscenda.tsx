'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal, Stagger, itemVariants } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { ShieldIcon, ClockIcon, SparklesIcon, TrendingUpIcon } from './Icon';

const PILLARS = [
  {
    icon: ShieldIcon,
    title: 'Segurança',
    text: 'Suas informações e sistemas tratados com responsabilidade.',
  },
  {
    icon: ClockIcon,
    title: 'Disponibilidade',
    text: 'Soluções pensadas para funcionar quando sua empresa precisar.',
  },
  {
    icon: SparklesIcon,
    title: 'Acessibilidade',
    text: 'Tecnologia profissional sem tornar o projeto inviável para pequenos negócios.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Crescimento',
    text: 'Construímos soluções que acompanham a evolução da empresa.',
  },
];

export function WhyAscenda() {
  const reduce = useReducedMotion();
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-navy-900/40" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-500/10 blur-[100px]" aria-hidden />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Por que a Ascenda"
              title={
                <span id="why-heading">
                  Não entregamos apenas tecnologia.
                  <br />
                  <span className="text-white/85">Entregamos evolução.</span>
                </span>
              }
              description="Quatro pilares sustentam cada projeto que construímos. Segurança, disponibilidade, acessibilidade e crescimento pensados para pequenos negócios."
            />

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-tech-500/40 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-tech-300">
                        <Icon size={18} />
                      </span>
                      <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                  </motion.div>
                );
              })}
            </Stagger>
          </div>

          {/* Central symbol composition */}
          <Reveal className="relative mx-auto w-full max-w-[480px]" delay={0.1}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border border-white/[0.05]" aria-hidden />
              <div className="absolute inset-6 rounded-full border border-dashed border-white/[0.08]" aria-hidden />
              <div className="absolute inset-14 rounded-full border border-white/[0.06]" aria-hidden />

              {/* Floating accent dots */}
              {!reduce &&
                [
                  { x: '14%', y: '18%', d: 0 },
                  { x: '82%', y: '20%', d: 0.4 },
                  { x: '78%', y: '78%', d: 0.8 },
                  { x: '16%', y: '80%', d: 1.2 },
                ].map((p, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + p.d }}
                    className="absolute h-2 w-2 rounded-full bg-tech-400 shadow-[0_0_0_4px_rgba(31,124,223,0.18)]"
                    style={{ left: p.x, top: p.y }}
                  />
                ))}

              {/* Shield (center) */}
              <div className="absolute left-1/2 top-1/2 aspect-[5/6] w-[44%] -translate-x-1/2 -translate-y-1/2">
                <svg viewBox="0 0 200 220" className="h-full w-full">
                  <defs>
                    <linearGradient id="whyShield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(31,124,223,0.22)" />
                      <stop offset="100%" stopColor="rgba(10,30,69,0.4)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
                    fill="url(#whyShield)"
                    stroke="rgba(31,124,223,0.7)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M40 150 L70 130 L95 140 L125 110 L160 80"
                    fill="none"
                    stroke="rgba(31,124,223,0.95)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M150 90 L168 70 L168 95"
                    fill="none"
                    stroke="rgba(31,124,223,0.95)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="160" cy="80" r="3" fill="#1f7cdf" />
                </svg>
              </div>

              {/* Side labels */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-r-lg border-l-2 border-tech-500/60 bg-navy-900/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur sm:left-4">
                Segurança
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-l-lg border-r-2 border-tech-500/60 bg-navy-900/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur sm:right-4">
                Crescimento
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-navy-900/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur sm:bottom-6">
                Confiança · Tecnologia · Acessibilidade
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
