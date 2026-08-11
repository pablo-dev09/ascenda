'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function HeroVisual() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
        };

  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-[5/6] sm:max-w-[600px]">
      {/* Backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60%] w-[60%] -translate-x-1/2 rounded-full bg-tech-500/20 blur-[120px]" />
      </div>

      {/* Concentric grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />

      {/* Outer ring with shield silhouette */}
      <motion.div
        {...anim(0.1)}
        className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2"
      >
        <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.6)" />
              <stop offset="100%" stopColor="rgba(31,124,223,0.0)" />
            </linearGradient>
            <linearGradient id="ring2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.45)" />
              <stop offset="100%" stopColor="rgba(31,124,223,0.0)" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="288" fill="none" stroke="url(#ring)" strokeWidth="1.2" />
          <circle cx="300" cy="300" r="232" fill="none" stroke="url(#ring2)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="300" cy="300" r="176" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Central shield + ascending arrow composition */}
      <motion.div
        {...anim(0.2)}
        className="absolute left-1/2 top-1/2 z-10 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2"
      >
        <svg viewBox="0 0 200 220" className="h-full w-full">
          <defs>
            <linearGradient id="shieldG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.22)" />
              <stop offset="100%" stopColor="rgba(10,30,69,0.6)" />
            </linearGradient>
            <linearGradient id="strokeG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.95)" />
              <stop offset="100%" stopColor="rgba(31,124,223,0.35)" />
            </linearGradient>
          </defs>
          {/* Shield */}
          <path
            d="M100 8l84 28v60c0 50-32 92-84 104-52-12-84-54-84-104V36l84-28z"
            fill="url(#shieldG)"
            stroke="url(#strokeG)"
            strokeWidth="1.5"
          />
          <path
            d="M100 24l66 22v48c0 40-25 74-66 84-41-10-66-44-66-84V46l66-22z"
            fill="none"
            stroke="rgba(31,124,223,0.4)"
            strokeWidth="0.8"
          />
          {/* Ascending chart lines */}
          <g stroke="rgba(31,124,223,0.85)" strokeLinecap="round">
            <path d="M40 150 L70 130 L95 140 L125 110 L160 80" fill="none" strokeWidth="2.2" />
            <path d="M40 165 L70 148 L95 156 L125 130 L160 100" fill="none" strokeWidth="1.4" opacity="0.55" />
          </g>
          {/* Arrow head */}
          <path
            d="M150 90 L168 70 L168 95"
            fill="none"
            stroke="rgba(31,124,223,0.95)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pulse dot */}
          <circle cx="160" cy="80" r="3.2" fill="#1f7cdf" />
          <circle cx="160" cy="80" r="7" fill="none" stroke="rgba(31,124,223,0.4)" />
        </svg>
      </motion.div>

      {/* Floating mini-cards */}
      <motion.div
        {...anim(0.45)}
        className="absolute left-0 top-[10%] w-[58%] max-w-[230px] sm:top-[8%]"
      >
        <div className="card-dark rounded-xl p-3.5">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-tech-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-tech-400" /> Plataforma
          </div>
          <div className="mt-2 font-display text-sm font-semibold text-white">Painel Ascenda</div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[18, 32, 26, 40, 28, 46].map((h, i) => (
              <div
                key={i}
                className="origin-bottom rounded-sm bg-gradient-to-t from-tech-700/30 to-tech-300/80"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        {...anim(0.55)}
        className="absolute right-0 top-[18%] w-[55%] max-w-[220px]"
      >
        <div className="card-dark rounded-xl p-3.5">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-tech-300">
            <span>Status</span>
            <span className="text-tech-200">●</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-white">99,9%</span>
            <span className="text-[10px] text-muted">uptime</span>
          </div>
          <svg viewBox="0 0 200 40" className="mt-2 h-8 w-full">
            <path
              d="M0 28 C 30 18, 50 30, 70 22 S 110 6, 140 14 S 180 22, 200 10"
              fill="none"
              stroke="rgba(31,124,223,0.9)"
              strokeWidth="1.6"
            />
            <path
              d="M0 28 C 30 18, 50 30, 70 22 S 110 6, 140 14 S 180 22, 200 10 L 200 40 L 0 40 Z"
              fill="url(#fillG)"
              opacity="0.18"
            />
            <defs>
              <linearGradient id="fillG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1f7cdf" />
                <stop offset="100%" stopColor="#1f7cdf" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <motion.div
        {...anim(0.7)}
        className="absolute bottom-[6%] left-[6%] w-[60%] max-w-[230px] sm:bottom-[4%]"
      >
        <div className="card-dark rounded-xl p-3.5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-tech-300">Segurança</div>
            <span className="rounded-full border border-tech-500/40 bg-tech-500/10 px-2 py-0.5 text-[10px] font-semibold text-tech-200">
              Ativo
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-display text-sm font-semibold text-white">Proteção contínua</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-tech-400 to-tech-200" />
          </div>
        </div>
      </motion.div>

      <motion.div
        {...anim(0.8)}
        className="absolute bottom-[14%] right-[2%] w-[50%] max-w-[200px] sm:bottom-[16%]"
      >
        <div className="card-dark rounded-xl p-3.5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-tech-300">Crescimento</div>
          <div className="mt-2 flex items-end gap-1.5">
            {[8, 12, 9, 16, 14, 20, 18, 24].map((h, i) => (
              <span
                key={i}
                className="block w-2 origin-bottom rounded-sm bg-gradient-to-t from-tech-700/40 to-tech-300"
                style={{ height: `${h * 1.2}px` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating tags */}
      <motion.div
        {...anim(0.9)}
        className="absolute right-[8%] top-[6%] hidden rounded-full border border-white/10 bg-navy-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur sm:inline-block"
      >
        Cloud
      </motion.div>
      <motion.div
        {...anim(1.0)}
        className="absolute left-[2%] bottom-[24%] hidden rounded-full border border-white/10 bg-navy-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur sm:inline-block"
      >
        APIs
      </motion.div>
    </div>
  );
}
