'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from './SectionHeader';

const STEPS = [
  {
    n: '01',
    title: 'Entendimento',
    text: 'Conhecemos sua empresa, seus objetivos e os problemas que precisam ser resolvidos.',
  },
  {
    n: '02',
    title: 'Planejamento',
    text: 'Definimos a melhor solução, tecnologias e prioridades do projeto.',
  },
  {
    n: '03',
    title: 'Design',
    text: 'Criamos uma experiência visual moderna, clara e alinhada à sua marca.',
  },
  {
    n: '04',
    title: 'Desenvolvimento',
    text: 'Transformamos o projeto em uma solução digital funcional, segura e responsiva.',
  },
  {
    n: '05',
    title: 'Entrega',
    text: 'Publicamos, configuramos e deixamos tudo pronto para sua empresa utilizar.',
  },
  {
    n: '06',
    title: 'Evolução',
    text: 'Continuamos disponíveis para melhorias, ajustes e novas necessidades.',
  },
];

export function ProcessTimeline() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 80%', 'end 30%'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="processo"
      className="relative py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Processo"
          title={<span id="process-heading">Do problema à solução.</span>}
          description="Um caminho claro em seis etapas — do primeiro contato até a evolução contínua do projeto."
        />

        <div ref={wrapRef} className="relative mt-14">
          {/* DESKTOP timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-px bg-white/[0.08]" aria-hidden />
              <motion.div
                style={{ width: lineWidth }}
                className="absolute left-0 top-7 h-px bg-gradient-to-r from-tech-500 to-tech-200"
                aria-hidden
              />
              <ol className="relative grid grid-cols-6 gap-4">
                {STEPS.map((s, i) => (
                  <motion.li
                    key={s.n}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                    className="relative pr-2"
                  >
                    <div className="relative">
                      <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-navy-900">
                        <span className="font-display text-sm font-semibold text-tech-200">{s.n}</span>
                        <span className="absolute -inset-2 rounded-full border border-tech-500/0 transition-colors duration-300 group-hover:border-tech-500/40" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>

          {/* MOBILE timeline (vertical) */}
          <ol className="relative space-y-6 lg:hidden">
            <span className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.08]" aria-hidden />
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-900">
                  <span className="font-display text-xs font-semibold text-tech-200">{s.n}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
