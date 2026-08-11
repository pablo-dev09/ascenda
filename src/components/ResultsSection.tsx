'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Stagger, itemVariants } from './Reveal';
import { BoltIcon, ChartIcon, GlobeIcon, TrendingUpIcon } from './Icon';

const ITEMS = [
  {
    icon: BoltIcon,
    title: 'Mais eficiência',
    text: 'Automatize tarefas e economize tempo.',
  },
  {
    icon: ChartIcon,
    title: 'Mais organização',
    text: 'Centralize processos e informações.',
  },
  {
    icon: GlobeIcon,
    title: 'Mais presença',
    text: 'Fortaleça sua presença no ambiente digital.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Mais crescimento',
    text: 'Crie uma base tecnológica para evoluir.',
  },
];

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="relative py-24 md:py-32"
      aria-labelledby="results-heading"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Resultados"
          title={
            <span id="results-heading">Tecnologia pensada para gerar impacto.</span>
          }
          description="Cada projeto é construído para trazer benefícios reais ao seu negócio."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-tech-500/30 bg-tech-500/10 text-tech-200">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
                <div className="mt-6 h-1 w-12 origin-left scale-x-100 bg-tech-400/70 transition-transform duration-500 group-hover:scale-x-150" />
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
