'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MailIcon, WhatsappIcon } from './Icon';
import { EMAIL, WHATSAPP_URL } from '@/lib/constants';

export function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10 bg-navy-900/50" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

      {/* Background big shield */}
      <div className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[520px] w-[520px] opacity-[0.07]">
        <svg viewBox="0 0 200 220" className="h-full w-full">
          <path
            d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
            fill="none"
            stroke="rgba(31,124,223,1)"
            strokeWidth="1.2"
          />
          <path
            d="M40 150 L70 130 L95 140 L125 110 L160 80"
            fill="none"
            stroke="rgba(31,124,223,1)"
            strokeWidth="1.4"
          />
          <path d="M150 90 L168 70 L168 95" fill="none" stroke="rgba(31,124,223,1)" strokeWidth="1.4" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] -z-10 h-[480px] w-[480px] rounded-full bg-tech-500/10 blur-[100px]" aria-hidden />

      <div className="container-page">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-navy-800/80 to-navy-900/80 p-8 backdrop-blur md:p-14">
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" aria-hidden />
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-tech-500/15 blur-3xl" aria-hidden />

          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1 w-6 bg-tech-400" /> Vamos conversar
          </motion.span>

          <motion.h2
            id="cta-heading"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="h-display mt-4 text-balance text-3xl leading-[1.1] text-white sm:text-4xl md:text-5xl"
          >
            Seu negócio está pronto para <span className="bg-gradient-to-r from-tech-200 to-tech-400 bg-clip-text text-transparent">ascender</span>?
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-pretty text-base text-white/70 sm:text-lg"
          >
            Conte para nós o que sua empresa precisa. Vamos encontrar uma solução digital que faça sentido
            para o seu momento.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsappIcon size={18} />
              Falar com a Ascenda
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-ghost">
              <MailIcon size={18} />
              Enviar um e-mail
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-2"
          >
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-300">WhatsApp</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-base text-white hover:text-tech-200"
              >
                +55 (21) 98370-2734
              </a>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-300">E-mail</div>
              <a href={`mailto:${EMAIL}`} className="mt-2 block text-base text-white hover:text-tech-200">
                {EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
