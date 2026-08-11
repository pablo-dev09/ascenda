'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ClockIcon, ShieldIcon, SparklesIcon } from './Icon';
import { Reveal, Stagger, itemVariants } from './Reveal';

const ITEMS = [
  {
    icon: ShieldIcon,
    title: 'Segurança',
    text: 'Proteção e responsabilidade em cada projeto.',
  },
  {
    icon: ClockIcon,
    title: 'Disponibilidade',
    text: 'Soluções pensadas para estar disponíveis quando sua empresa precisar.',
  },
  {
    icon: SparklesIcon,
    title: 'Acessibilidade',
    text: 'Tecnologia profissional que faz sentido para pequenos negócios.',
  },
];

export function MiniIndicators() {
  const reduce = useReducedMotion();
  return (
    <section
      aria-label="Princípios da Ascenda"
      className="relative border-y border-white/[0.05] bg-navy-900/40"
    >
      <div className="container-page py-10 md:py-14">
        <Stagger className="grid gap-6 md:grid-cols-3 md:gap-10">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                variants={itemVariants}
                className="group flex items-start gap-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-xl bg-tech-500/20 blur-md transition-opacity group-hover:opacity-100" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-tech-300">
                    <Icon size={20} />
                  </div>
                </div>
                <div>
                  <div className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {it.title}
                  </div>
                  <p className="mt-1 text-sm text-muted">{it.text}</p>
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
      {reduce ? null : <div className="hairline mx-auto max-w-7xl" aria-hidden />}
    </section>
  );
}
