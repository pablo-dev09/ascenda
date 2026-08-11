'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function AboutSection() {
  const reduce = useReducedMotion();
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 -z-10 bg-navy-900/30" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Sobre a Ascenda"
              title={
                <span id="about-heading">
                  Uma empresa criada para fazer outras empresas crescerem.
                </span>
              }
            />

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  A Ascenda nasceu com uma ideia simples: tornar tecnologia de qualidade mais acessível para
                  pequenos negócios.
                </p>
                <p>
                  Acreditamos que uma empresa não precisa ter uma grande estrutura para contar com soluções
                  digitais profissionais.
                </p>
                <p>
                  Por isso, trabalhamos próximos de cada cliente para entender o problema, construir a solução
                  e evoluir junto com o negócio.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Segurança', 'Confiabilidade', 'Acessibilidade', 'Qualidade', 'Inovação', 'Proximidade', 'Crescimento'].map(
                  (v) => (
                    <span
                      key={v}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {v}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[460px]" delay={0.1}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
              <div className="absolute inset-6 rounded-3xl border border-white/[0.06] bg-navy-900/60 backdrop-blur" aria-hidden />

              {/* Center shield */}
              <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2">
                <svg viewBox="0 0 200 220" className="h-full w-full">
                  <defs>
                    <linearGradient id="aboutShield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(31,124,223,0.25)" />
                      <stop offset="100%" stopColor="rgba(10,30,69,0.4)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
                    fill="url(#aboutShield)"
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
                </svg>
              </div>

              {/* Ascending bars */}
              {!reduce && (
                <div className="absolute bottom-8 left-1/2 flex h-12 -translate-x-1/2 items-end gap-1.5">
                  {[10, 18, 14, 26, 22, 34, 30, 42, 38, 50].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                      style={{ transformOrigin: 'bottom', height: `${h * 1.2}px` }}
                      className="block w-1.5 rounded-sm bg-gradient-to-t from-tech-700/40 to-tech-300"
                    />
                  ))}
                </div>
              )}

              {/* Floating nodes */}
              {!reduce && [
                { x: '10%', y: '14%', d: 0 },
                { x: '82%', y: '20%', d: 0.3 },
                { x: '18%', y: '80%', d: 0.5 },
                { x: '78%', y: '76%', d: 0.7 },
              ].map((p, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + p.d }}
                  className="absolute h-2.5 w-2.5 rounded-full bg-tech-400 shadow-[0_0_0_4px_rgba(31,124,223,0.18)]"
                  style={{ left: p.x, top: p.y }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
