'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero visual — clean, professional shield composition.
 * The shield is the single anchor; rings orbit it precisely.
 * Uses flexbox centering so the shield is dead-center on every viewport.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    // Outer wrapper defines the box, the shield is centered inside.
    <div
      className="relative mx-auto flex w-full max-w-[420px] aspect-square items-center justify-center sm:max-w-[480px] lg:max-w-[520px]"
      aria-hidden
    >
      {/* Ambient backdrop glow — sits behind everything */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-500/15 blur-[110px]" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      {/* The shield is the single anchor — center via flexbox */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        // 60% of the wrapper's width keeps the shield prominent but with breathing room for the rings
        className="relative aspect-[5/6] h-[60%] w-auto"
      >
        <motion.svg
          viewBox="0 0 200 220"
          className="h-full w-full"
          aria-label="Ascenda — escudo de proteção e crescimento"
          role="img"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        >
          <defs>
            <linearGradient id="hv-shield" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.22)" />
              <stop offset="100%" stopColor="rgba(10,30,69,0.5)" />
            </linearGradient>
            <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.95)" />
              <stop offset="100%" stopColor="rgba(31,124,223,0.4)" />
            </linearGradient>
            <filter id="hv-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer glow halo */}
          <path
            d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
            fill="none"
            stroke="rgba(31,124,223,0.18)"
            strokeWidth="6"
            filter="url(#hv-glow)"
          />

          {/* Shield body */}
          <path
            d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
            fill="url(#hv-shield)"
            stroke="url(#hv-stroke)"
            strokeWidth="1.6"
          />

          {/* Inner shield contour */}
          <path
            d="M100 24l66 22v48c0 40-25 74-66 84-41-10-66-44-66-84V46l66-22z"
            fill="none"
            stroke="rgba(31,124,223,0.4)"
            strokeWidth="0.8"
          />

          {/* Ascending arrow inside the shield */}
          <g stroke="rgba(31,124,223,0.95)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M40 150 L70 130 L95 140 L125 110 L160 80" fill="none" strokeWidth="2.4" />
            <path d="M150 90 L168 70 L168 95" fill="none" strokeWidth="2.4" />
          </g>

          {/* Pulse dot at the arrow tip */}
          <motion.circle
            cx="160"
            cy="80"
            r="3.2"
            fill="#1f7cdf"
            animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.svg>

        {/* Slow rotating outer ring — sized relative to the shield, perfectly centered */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            aria-hidden
            className="aspect-square w-[150%]"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          >
            <svg viewBox="0 0 600 600" className="h-full w-full">
              <defs>
                <linearGradient id="hv-ring-outer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(31,124,223,0.55)" />
                  <stop offset="100%" stopColor="rgba(31,124,223,0)" />
                </linearGradient>
              </defs>
              <circle
                cx="300"
                cy="300"
                r="296"
                fill="none"
                stroke="url(#hv-ring-outer)"
                strokeWidth="1.1"
                strokeDasharray="2 8"
              />
            </svg>
          </motion.div>
        </div>

        {/* Counter-rotating inner ring */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            aria-hidden
            className="aspect-square w-[120%]"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            <svg viewBox="0 0 600 600" className="h-full w-full">
              <circle
                cx="300"
                cy="300"
                r="296"
                fill="none"
                stroke="rgba(31,124,223,0.25)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
