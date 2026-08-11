'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, WhatsappIcon } from './Icon';
import { HeroVisual } from './HeroVisual';
import { WHATSAPP_URL } from '@/lib/constants';

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.2, 0.7, 0.2, 1] as [number, number, number, number];
  const stagger = (i: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease },
        };

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 md:pt-36 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-navy-950" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-bg opacity-70" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-radial-glow" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="container-page grid items-center gap-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32">
        <div className="relative">
          <motion.span
            {...stagger(0)}
            className="eyebrow"
          >
            <span className="h-1 w-6 bg-tech-400" /> Startup de tecnologia · Brasil
          </motion.span>

          <motion.h1
            id="hero-heading"
            {...stagger(1)}
            className="h-display mt-5 text-balance text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            <span className="text-white">Tecnologia que </span>
            <span className="bg-gradient-to-r from-tech-200 via-tech-300 to-tech-400 bg-clip-text text-transparent">
              protege.
            </span>
            <br />
            <span className="text-white">Soluções que </span>
            <span className="bg-gradient-to-r from-tech-200 via-tech-300 to-tech-400 bg-clip-text text-transparent">
              fazem crescer.
            </span>
          </motion.h1>

          <motion.p
            {...stagger(2)}
            className="mt-6 max-w-xl text-pretty text-base text-white/70 sm:text-lg"
          >
            Tecnologia profissional, segura e acessível para pequenas empresas que querem evoluir.
          </motion.p>

          <motion.div
            {...stagger(3)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#solucoes" className="btn-primary">
              Conheça nossas soluções
              <ArrowRightIcon size={16} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <WhatsappIcon size={16} />
              Fale com a Ascenda
            </a>
          </motion.div>

          <motion.div
            {...stagger(4)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tech-300" /> Atendimento próximo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tech-300" /> Soluções sob medida
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tech-300" /> Foco em pequenos negócios
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
