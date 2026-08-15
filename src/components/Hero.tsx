'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, WhatsappIcon } from './Icon';
import { WHATSAPP_URL } from '@/lib/constants';

/**
 * Hero — text-only composition over the video background.
 * The shield visual was removed for a cleaner, more cinematic look.
 * Text is centered, slightly smaller, and fades in AFTER the video starts
 * playing (delay tuned to let the user feel the video first).
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.2, 0.7, 0.2, 1] as [number, number, number, number];

  // Cinematic delay: text appears after the video has had a moment to breathe.
  // First item lands ~1.4s after load, with a short stagger between blocks.
  const baseDelay = reduce ? 0 : 1.4;
  const stagger = (i: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: baseDelay + i * 0.12, ease },
        };

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 md:pt-36 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Video background — deepest layer, autoplay muted loop */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-navy-950" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/og-cover.png"
          disablePictureInPicture
          disableRemotePlayback
          className="h-full w-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle dark overlay — guarantees text legibility while keeping the video visible */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/55 to-navy-950/80"
        aria-hidden
      />

      {/* Existing decorative layers (kept for visual texture) */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-radial-glow" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="container-page flex flex-col items-center pb-20 md:pb-24 lg:pb-32">
        <div className="relative max-w-3xl text-center">
          <motion.span
            {...stagger(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tech-300"
          >
            Startup de tecnologia · Brasil
          </motion.span>

          <motion.h1
            id="hero-heading"
            {...stagger(1)}
            className="h-display mx-auto mt-5 max-w-2xl text-balance text-[32px] leading-[1.1] sm:text-4xl md:text-[44px] lg:text-[52px]"
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
            className="mx-auto mt-5 max-w-xl text-pretty text-sm text-white/70 sm:text-base"
          >
            Tecnologia profissional, segura e acessível para pequenas empresas que querem evoluir.
          </motion.p>

          <motion.div
            {...stagger(3)}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/55"
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
      </div>
    </section>
  );
}
