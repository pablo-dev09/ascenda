'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * WhyVisual3D — abstract 3D data-growth scene.
 * NOT a shield (deliberately different from the brand mark used elsewhere).
 * Composition: perspective floor + ascending 3D bars + orbiting geometric
 * solids + connecting node network. Represents growth, technology, connection.
 */
export function WhyVisual3D() {
  const reduce = useReducedMotion();

  // Heights for the 3D bar chart, ascending to suggest growth
  const bars = [18, 28, 24, 38, 34, 48, 42, 58, 54, 70, 66, 84];

  return (
    <div
      className="relative mx-auto w-full max-w-[520px] aspect-square"
      style={{ perspective: '1400px', perspectiveOrigin: '50% 30%' }}
      aria-label="Visualização abstrata 3D de crescimento e conexão"
      role="img"
    >
      {/* Ambient glow behind the scene */}
      <div
        className="pointer-events-none absolute inset-x-10 bottom-10 h-32 rounded-full bg-tech-500/20 blur-3xl"
        aria-hidden
      />

      {/* Whole 3D scene rotates very slowly */}
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={reduce ? undefined : { rotateY: [-4, 4, -4] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      >
        {/* 3D floor grid — tilted via rotateX */}
        <div
          className="absolute inset-x-0 bottom-[18%] h-[55%] origin-bottom"
          style={{ transform: 'rotateX(64deg)', transformStyle: 'preserve-3d' }}
          aria-hidden
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(31,124,223,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(31,124,223,0.35) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              transform: 'perspective(600px) rotateX(0deg)',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%)',
            }}
          />
        </div>

        {/* Back glow line on the floor — adds depth */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[18%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(31,124,223,0.5), transparent)',
            transform: 'rotateX(64deg)',
            transformOrigin: 'bottom',
            filter: 'blur(0.5px)',
          }}
          aria-hidden
        />

        {/* 3D bars — sitting on the floor */}
        <div
          className="absolute inset-x-0 bottom-[18%] flex h-[55%] items-end justify-center gap-1.5 px-4 sm:gap-2 sm:px-8"
          style={{ transform: 'rotateX(64deg)', transformOrigin: 'bottom' }}
        >
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={reduce ? undefined : { scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              style={{ transformOrigin: 'bottom', height: `${h}%` }}
              className="relative w-full"
            >
              <div
                className="h-full w-full rounded-t-sm"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(125,211,252,0.85) 0%, rgba(31,124,223,0.7) 50%, rgba(10,30,69,0.6) 100%)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(125,211,252,0.3), 0 0 20px rgba(31,124,223,0.25)',
                }}
              />
              {/* Top cap highlight */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-sm bg-gradient-to-b from-tech-200/80 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Ascending line graph — overlayed on top of bars */}
        <svg
          viewBox="0 0 600 400"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="why-line" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(125,211,252,0.1)" />
              <stop offset="50%" stopColor="rgba(125,211,252,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
            </linearGradient>
            <linearGradient id="why-line-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(31,124,223,0.35)" />
              <stop offset="100%" stopColor="rgba(31,124,223,0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 30 320 L 90 280 L 150 290 L 210 230 L 270 200 L 330 160 L 390 130 L 450 90 L 510 60 L 570 30"
            fill="none"
            stroke="url(#why-line)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <motion.path
            d="M 30 320 L 90 280 L 150 290 L 210 230 L 270 200 L 330 160 L 390 130 L 450 90 L 510 60 L 570 30 L 570 360 L 30 360 Z"
            fill="url(#why-line-fill)"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          {/* Tip dot pulsing at the end of the line */}
          <motion.circle
            cx="570"
            cy="30"
            r="5"
            fill="#7dd3fc"
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          />
          <motion.circle
            cx="570"
            cy="30"
            r="10"
            fill="none"
            stroke="rgba(125,211,252,0.6)"
            animate={reduce ? undefined : { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>

        {/* Orbiting geometric solids — cubes rotating in 3D */}
        <OrbitingCube
          size={42}
          orbitRadius={180}
          duration={22}
          startAngle={20}
          verticalOffset={60}
          color="rgba(31,124,223,0.45)"
          reduce={!!reduce}
        />
        <OrbitingCube
          size={28}
          orbitRadius={220}
          duration={28}
          startAngle={140}
          verticalOffset={110}
          color="rgba(125,211,252,0.55)"
          reduce={!!reduce}
        />
        <OrbitingCube
          size={20}
          orbitRadius={150}
          duration={18}
          startAngle={240}
          verticalOffset={40}
          color="rgba(255,255,255,0.35)"
          reduce={!!reduce}
        />

        {/* Network nodes (small dots connected with thin lines) */}
        <NetworkNodes reduce={!!reduce} />
      </motion.div>

      {/* Corner label */}
      <div className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-tech-300" />
        Em tempo real
      </div>

      {/* Bottom metric chip */}
      <div className="absolute bottom-2 left-2 rounded-lg border border-white/10 bg-navy-900/70 px-3 py-1.5 backdrop-blur">
        <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-tech-300">Crescimento</div>
        <div className="font-display text-sm font-semibold text-white">+ 184%</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Orbiting 3D cube                                                    */
/* ------------------------------------------------------------------ */

function OrbitingCube({
  size,
  orbitRadius,
  duration,
  startAngle,
  verticalOffset,
  color,
  reduce,
}: {
  size: number;
  orbitRadius: number;
  duration: number;
  startAngle: number;
  verticalOffset: number;
  color: string;
  reduce: boolean;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
      animate={
        reduce
          ? undefined
          : {
              x: [
                Math.cos((startAngle * Math.PI) / 180) * orbitRadius,
                Math.cos(((startAngle + 360) * Math.PI) / 180) * orbitRadius,
              ],
              y: [
                Math.sin((startAngle * Math.PI) / 180) * orbitRadius * 0.4 - verticalOffset,
                Math.sin(((startAngle + 360) * Math.PI) / 180) * orbitRadius * 0.4 - verticalOffset,
              ],
            }
      }
      transition={{ duration, ease: 'linear', repeat: Infinity }}
    >
      <motion.div
        className="relative"
        style={{ width: size, height: size, transform: 'translate(-50%, -50%)' }}
        animate={reduce ? undefined : { rotateX: 360, rotateY: 360 }}
        transition={{ duration: duration * 0.6, ease: 'linear', repeat: Infinity }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: 'translateZ(0)',
            background: color,
            border: '1px solid rgba(125,211,252,0.5)',
            boxShadow: '0 0 16px rgba(31,124,223,0.45)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(${size / 2}px)`,
            background: 'rgba(125,211,252,0.35)',
            border: '1px solid rgba(125,211,252,0.6)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${size / 2}px)`,
            background: 'rgba(10,30,69,0.5)',
            border: '1px solid rgba(31,124,223,0.4)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Network of small connected nodes                                    */
/* ------------------------------------------------------------------ */

function NetworkNodes({ reduce }: { reduce: boolean }) {
  // Hand-placed nodes for a clean composition
  const nodes: { x: number; y: number; r: number }[] = [
    { x: 60, y: 100, r: 3 },
    { x: 130, y: 70, r: 2 },
    { x: 200, y: 120, r: 3 },
    { x: 280, y: 80, r: 2.5 },
    { x: 360, y: 130, r: 3 },
    { x: 430, y: 90, r: 2 },
    { x: 510, y: 140, r: 3 },
    { x: 100, y: 180, r: 2.5 },
    { x: 240, y: 200, r: 3 },
    { x: 380, y: 200, r: 2.5 },
    { x: 480, y: 220, r: 3 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [0, 7], [7, 8], [8, 3], [8, 9], [9, 10], [10, 6], [2, 8], [4, 9],
  ];

  return (
    <svg
      viewBox="0 0 580 280"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <g>
        {edges.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <motion.line
              key={`e${i}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="rgba(125,211,252,0.35)"
              strokeWidth="0.6"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.04 }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g
            key={`n${i}`}
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r={n.r + 4} fill="rgba(125,211,252,0.1)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#7dd3fc" />
          </motion.g>
        ))}
      </g>
    </svg>
  );
}
