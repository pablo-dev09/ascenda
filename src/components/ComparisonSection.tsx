'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Reveal, Stagger, itemVariants } from './Reveal';
import { CheckIcon, XIcon } from './Icon';

const GENERIC = [
  'Prontas e pouco personalizáveis',
  'Processos mais complexos',
  'Atendimento distante',
  'Custos nem sempre adequados',
  'Dificuldade de adaptação',
];

const ASCENDA = [
  'Personalizada para o seu negócio',
  'Próxima do cliente em cada etapa',
  'Pensada para pequenas empresas',
  'Tecnologia adequada ao problema',
  'Investimento acessível',
  'Evolução contínua do projeto',
];

export function ComparisonSection() {
  return (
    <section
      id="comparativo"
      className="relative py-24 md:py-32"
      aria-labelledby="compare-heading"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="container-page">
        <SectionHeader
          eyebrow="Diferencial"
          title={
            <span id="compare-heading">
              Tecnologia que se adapta ao seu negócio.
            </span>
          }
          description="A Ascenda se posiciona ao lado do cliente, com soluções construídas a partir do problema real — não de catálogos prontos."
          align="center"
        />

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 md:p-8"
          >
            <Reveal>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white/80">Soluções genéricas</h3>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Comum
                </span>
              </div>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {GENERIC.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40">
                    <XIcon size={12} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl border border-tech-500/30 bg-gradient-to-b from-tech-500/[0.08] to-transparent p-6 md:p-8"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-tech-500/15 blur-3xl" aria-hidden />
            <Reveal>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">Ascenda</h3>
                <span className="rounded-full border border-tech-500/40 bg-tech-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-tech-200">
                  Escolhida
                </span>
              </div>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {ASCENDA.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-tech-500/40 bg-tech-500/15 text-tech-200">
                    <CheckIcon size={12} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
