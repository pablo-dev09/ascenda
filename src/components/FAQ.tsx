'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { PlusIcon, MinusIcon } from './Icon';

const FAQS = [
  {
    q: 'Que tipo de empresa pode contratar a Ascenda?',
    a: 'Atendemos pequenas empresas, empreendedores, negócios locais, prestadores de serviço e pequenos comércios que querem profissionalizar sua presença digital e seus processos. Se a sua empresa precisa de tecnologia, a Ascenda pode ajudar.',
  },
  {
    q: 'Vocês trabalham com projetos personalizados?',
    a: 'Sim. Cada projeto é desenhado a partir do problema real do cliente — não de soluções de prateleira. Combinamos entendimento do negócio, design e desenvolvimento para entregar uma solução sob medida.',
  },
  {
    q: 'Quanto custa uma solução digital?',
    a: 'O investimento varia de acordo com o escopo, a complexidade e os objetivos do projeto. Trabalhamos com propostas personalizadas e transparentes após a etapa de entendimento.',
  },
  {
    q: 'Vocês fazem manutenção depois da entrega?',
    a: 'Sim. Após a entrega, permanecemos disponíveis para ajustes, melhorias, novas funcionalidades e suporte contínuo. Cada cliente pode contar com acompanhamento próximo.',
  },
  {
    q: 'É possível começar com um projeto pequeno?',
    a: 'Sim. Muitos clientes começam com um projeto inicial e evoluem conosco à medida que o negócio cresce. A Ascenda foi pensada justamente para acompanhar essa jornada.',
  },
  {
    q: 'Vocês trabalham com automação?',
    a: 'Sim. Automatizamos tarefas repetitivas, integramos ferramentas e construímos fluxos que reduzem trabalho manual e tornam a operação mais eficiente.',
  },
  {
    q: 'Vocês atendem empresas de qualquer lugar?',
    a: 'Atendemos clientes de diferentes regiões do Brasil, conduzindo os projetos de forma remota, com comunicação clara e reuniões periódicas para alinhar cada etapa.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          title={<span id="faq-heading">Perguntas frequentes</span>}
          description="Respostas para as dúvidas mais comuns sobre os projetos e a forma de trabalho da Ascenda."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
                className="border-b border-white/[0.06]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-tech-500/50 bg-tech-500/10 text-tech-200'
                        : 'border-white/10 bg-white/[0.02] text-white/70'
                    }`}
                    aria-hidden
                  >
                    {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="content"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-muted sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
