'use client';

import { motion } from 'framer-motion';
import { Reveal, Stagger, itemVariants } from './Reveal';
import { SectionHeader } from './SectionHeader';

const ITEMS = [
  {
    n: '01',
    title: 'Custos elevados',
    text: 'Soluções tradicionais podem exigir investimentos que não fazem sentido para pequenos negócios.',
  },
  {
    n: '02',
    title: 'Processos manuais',
    text: 'Tarefas repetitivas consomem tempo que poderia ser utilizado para fazer o negócio crescer.',
  },
  {
    n: '03',
    title: 'Presença digital limitada',
    text: 'Um negócio excelente também precisa ser encontrado, acessado e lembrado no ambiente digital.',
  },
  {
    n: '04',
    title: 'Tecnologia complicada',
    text: 'A solução precisa se adaptar ao negócio — não o contrário.',
  },
];

export function ProblemSection() {
  return (
    <section
      id="problema"
      className="relative py-24 md:py-32"
      aria-labelledby="problem-heading"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="O problema"
          title={
            <span id="problem-heading">
              Tecnologia de qualidade não deveria ser privilégio das grandes empresas.
            </span>
          }
          description="Muitos pequenos negócios sabem que precisam de tecnologia, mas encontram soluções caras, complexas ou difíceis de adaptar à realidade da empresa."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <motion.article
              key={it.n}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 transition-colors hover:border-tech-500/40 hover:from-white/[0.05] hover:to-tech-500/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-tech-300">
                  {it.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-tech-400/60 transition-transform group-hover:scale-150" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-tech-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
