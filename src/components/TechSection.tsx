'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Stagger, itemVariants } from './Reveal';

const TECHS = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'n8n',
  'APIs',
  'Cloud',
];

export function TechSection() {
  return (
    <section
      id="tecnologia"
      className="relative py-24 md:py-32"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeader
            eyebrow="Tecnologia"
            title={
              <span id="tech-heading">
                Tecnologia moderna.
                <br />
                <span className="text-white/85">Sem complicação.</span>
              </span>
            }
            description="A tecnologia certa depende do problema certo. Usamos ferramentas atuais para entregar soluções estáveis, seguras e fáceis de evoluir."
          />

          <Stagger className="flex flex-wrap gap-2.5 lg:justify-end">
            {TECHS.map((t) => (
              <motion.span
                key={t}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-tech-500/50 hover:bg-tech-500/10 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-tech-400 transition-transform group-hover:scale-150" />
                {t}
              </motion.span>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
