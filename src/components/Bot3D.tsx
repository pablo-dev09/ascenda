'use client';

import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Bot3D — a sophisticated SVG robot character with real CSS 3D perspective
 * and subtle parallax that follows the cursor. No external 3D libraries.
 */
export function Bot3D() {
  const reduce = useReducedMotion();

  // Cursor-driven parallax (no-op when reduced motion is on)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-1, 1], [8, -8]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(px, [-1, 1], [-10, 10]), { stiffness: 80, damping: 14 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      // Normalize cursor to [-1, 1] inside the wrapper — handled by parent, so we
      // just listen at the window level for a softer global response.
      const w = window.innerWidth;
      const h = window.innerHeight;
      px.set((e.clientX / w) * 2 - 1);
      py.set((e.clientY / h) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [px, py, reduce]);

  return (
    <div
      className="relative mx-auto flex w-full max-w-[420px] items-center justify-center aspect-square sm:max-w-[480px]"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient glow under the bot */}
      <div
        className="pointer-events-none absolute inset-x-10 bottom-6 h-20 rounded-full bg-tech-500/30 blur-3xl"
        aria-hidden
      />

      {/* Pedestal disc */}
      <div
        className="pointer-events-none absolute bottom-[14%] left-1/2 h-3 w-44 -translate-x-1/2 rounded-full bg-gradient-to-b from-tech-400/40 to-transparent"
        aria-hidden
      />

      <motion.div
        style={reduce ? undefined : { rotateX: rx, rotateY: ry }}
        className="relative aspect-square w-[78%]"
        aria-label="Assistente digital Ascenda"
        role="img"
      >
        <motion.svg
          viewBox="0 0 320 320"
          className="h-full w-full"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          <defs>
            {/* Body gradient — fake 3D shading */}
            <linearGradient id="botBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3a82d4" />
              <stop offset="50%" stopColor="#1f5fbf" />
              <stop offset="100%" stopColor="#0d2d5e" />
            </linearGradient>
            <linearGradient id="botBodyHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="botHead" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a9aee" />
              <stop offset="100%" stopColor="#1a4ea0" />
            </linearGradient>
            <linearGradient id="botVisor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#061a3a" />
              <stop offset="100%" stopColor="#0a2d6e" />
            </linearGradient>
            <radialGradient id="botEye" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="60%" stopColor="#1f7cdf" />
              <stop offset="100%" stopColor="#1f7cdf" stopOpacity="0" />
            </radialGradient>
            <filter id="botShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Drop shadow under body */}
          <ellipse cx="160" cy="278" rx="84" ry="10" fill="rgba(31,124,223,0.35)" filter="url(#botShadow)" />

          {/* Antenna */}
          <line x1="160" y1="58" x2="160" y2="42" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
          <motion.circle
            cx="160"
            cy="38"
            r="5"
            fill="#7dd3fc"
            animate={reduce ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="160" cy="38" r="9" fill="none" stroke="rgba(125,211,252,0.35)" />

          {/* Head — rounded square */}
          <rect
            x="92"
            y="56"
            width="136"
            height="106"
            rx="28"
            fill="url(#botHead)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.2"
          />
          {/* Head highlight */}
          <rect
            x="100"
            y="62"
            width="120"
            height="32"
            rx="22"
            fill="url(#botBodyHighlight)"
            opacity="0.5"
          />

          {/* Visor / face screen */}
          <rect
            x="108"
            y="78"
            width="104"
            height="56"
            rx="18"
            fill="url(#botVisor)"
            stroke="rgba(31,124,223,0.5)"
            strokeWidth="1"
          />

          {/* Eyes */}
          <motion.g
            animate={reduce ? undefined : { scaleY: [1, 0.1, 1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.04, 0.08, 0.92, 1] }}
            style={{ transformOrigin: '160px 106px' }}
          >
            <circle cx="138" cy="106" r="9" fill="url(#botEye)" />
            <circle cx="182" cy="106" r="9" fill="url(#botEye)" />
            <circle cx="138" cy="106" r="3" fill="#ffffff" />
            <circle cx="182" cy="106" r="3" fill="#ffffff" />
          </motion.g>

          {/* Mouth / speaker grille */}
          <g stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round">
            <line x1="142" y1="124" x2="150" y2="124" />
            <line x1="154" y1="124" x2="166" y2="124" />
            <line x1="170" y1="124" x2="178" y2="124" />
          </g>

          {/* Neck */}
          <rect x="146" y="160" width="28" height="14" rx="4" fill="rgba(31,124,223,0.7)" stroke="rgba(255,255,255,0.15)" />

          {/* Body — rounded rectangle */}
          <rect
            x="76"
            y="174"
            width="168"
            height="100"
            rx="26"
            fill="url(#botBody)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.2"
          />
          {/* Body highlight strip */}
          <rect
            x="86"
            y="180"
            width="148"
            height="22"
            rx="14"
            fill="url(#botBodyHighlight)"
            opacity="0.45"
          />

          {/* Chest panel */}
          <rect
            x="120"
            y="200"
            width="80"
            height="50"
            rx="10"
            fill="rgba(6,26,58,0.7)"
            stroke="rgba(31,124,223,0.5)"
            strokeWidth="1"
          />
          {/* Pulse line inside chest panel */}
          <motion.path
            d="M126 226 L138 226 L142 218 L150 234 L158 212 L166 226 L182 226 L194 220"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={reduce ? undefined : { pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            strokeDasharray="200"
            strokeDashoffset="0"
          />

          {/* Arms (small shoulders) */}
          <rect x="58" y="186" width="22" height="56" rx="11" fill="url(#botBody)" stroke="rgba(255,255,255,0.18)" />
          <rect x="240" y="186" width="22" height="56" rx="11" fill="url(#botBody)" stroke="rgba(255,255,255,0.18)" />
          {/* Hand dots */}
          <circle cx="69" cy="252" r="9" fill="url(#botHead)" stroke="rgba(255,255,255,0.2)" />
          <circle cx="251" cy="252" r="9" fill="url(#botHead)" stroke="rgba(255,255,255,0.2)" />

          {/* Indicator light on body */}
          <motion.circle
            cx="100"
            cy="258"
            r="3"
            fill="#7dd3fc"
            animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />

          {/* Brand wordmark on chest bottom */}
          <text
            x="160"
            y="268"
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-montserrat), system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="3"
            fill="rgba(255,255,255,0.7)"
          >
            ASCENDA
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}
