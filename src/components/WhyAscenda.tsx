'use client';

import { motion } from 'framer-motion';
import { Stagger, itemVariants } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { WhyVisual3D } from './WhyVisual3D';
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

          {/* Abstract 3D scene (no shield) */}
          <WhyVisual3D />
        </div>
      </div>
    </section>
  );
}
