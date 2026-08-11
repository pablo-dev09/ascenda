'use client';

import { motion } from 'framer-motion';
import { GlobeIcon, CpuIcon, BoltIcon, LinkIcon, ChartIcon, LayersIcon } from './Icon';
import { SectionHeader } from './SectionHeader';
import { Stagger, itemVariants } from './Reveal';
import type { ComponentType, SVGProps } from 'react';

type Item = {
  n: string;
  title: string;
  text: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  visual: 'globe' | 'cpu' | 'bolt' | 'link' | 'chart' | 'layers';
};

const ITEMS: Item[] = [
  {
    n: '01',
    title: 'Sites profissionais',
    text: 'Sites modernos, rápidos e responsivos para fortalecer a presença digital da sua empresa.',
    icon: GlobeIcon,
    visual: 'globe',
  },
  {
    n: '02',
    title: 'Sistemas personalizados',
    text: 'Sistemas desenvolvidos de acordo com as necessidades específicas de cada negócio.',
    icon: CpuIcon,
    visual: 'cpu',
  },
  {
    n: '03',
    title: 'Automação',
    text: 'Automatize tarefas repetitivas e torne sua operação mais eficiente.',
    icon: BoltIcon,
    visual: 'bolt',
  },
  {
    n: '04',
    title: 'Integrações',
    text: 'Conecte ferramentas, sistemas e processos para trabalhar de forma mais inteligente.',
    icon: LinkIcon,
    visual: 'link',
  },
  {
    n: '05',
    title: 'Dashboards e dados',
    text: 'Transforme informações do seu negócio em dados úteis para tomada de decisões.',
    icon: ChartIcon,
    visual: 'chart',
  },
  {
    n: '06',
    title: 'Soluções digitais',
    text: 'Projetos personalizados para problemas que não cabem em soluções prontas.',
    icon: LayersIcon,
    visual: 'layers',
  },
];

function Visual({ kind }: { kind: Item['visual'] }) {
  switch (kind) {
    case 'globe':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <defs>
            <linearGradient id="vg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f7cdf" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1f7cdf" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="6" y="14" width="108" height="60" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="6" y="14" width="108" height="14" fill="url(#vg1)" />
          <circle cx="14" cy="21" r="1.6" fill="currentColor" />
          <circle cx="22" cy="21" r="1.6" fill="currentColor" opacity="0.6" />
          <circle cx="30" cy="21" r="1.6" fill="currentColor" opacity="0.4" />
          <rect x="14" y="36" width="22" height="14" rx="2" fill="currentColor" opacity="0.25" />
          <rect x="40" y="36" width="34" height="14" rx="2" fill="currentColor" opacity="0.15" />
          <rect x="14" y="54" width="60" height="6" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="80" y="36" width="26" height="24" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.5" />
        </svg>
      );
    case 'cpu':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <rect x="40" y="20" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.6" />
          <rect x="48" y="28" width="24" height="24" rx="2" fill="currentColor" opacity="0.25" />
          {[0, 1, 2, 3].map((i) => (
            <line key={`t${i}`} x1={48 + i * 8} y1="20" x2={48 + i * 8} y2="14" stroke="currentColor" strokeOpacity="0.6" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`b${i}`} x1={48 + i * 8} y1="60" x2={48 + i * 8} y2="66" stroke="currentColor" strokeOpacity="0.6" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`l${i}`} x1="40" y1={28 + i * 8} x2="34" y2={28 + i * 8} stroke="currentColor" strokeOpacity="0.6" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`r${i}`} x1="80" y1={28 + i * 8} x2="86" y2={28 + i * 8} stroke="currentColor" strokeOpacity="0.6" />
          ))}
        </svg>
      );
    case 'bolt':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <path d="M58 8 L40 42 L54 42 L48 72 L80 32 L64 32 L70 8 Z" fill="none" stroke="currentColor" strokeOpacity="0.7" strokeLinejoin="round" />
          <circle cx="40" cy="42" r="2" fill="currentColor" />
          <circle cx="80" cy="32" r="2" fill="currentColor" />
        </svg>
      );
    case 'link':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <circle cx="32" cy="40" r="14" fill="none" stroke="currentColor" strokeOpacity="0.6" />
          <circle cx="60" cy="40" r="14" fill="none" stroke="currentColor" strokeOpacity="0.4" />
          <circle cx="88" cy="40" r="14" fill="none" stroke="currentColor" strokeOpacity="0.6" />
          <line x1="46" y1="40" x2="74" y2="40" stroke="currentColor" strokeOpacity="0.7" />
        </svg>
      );
    case 'chart':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeOpacity="0.4" />
          <line x1="10" y1="10" x2="10" y2="70" stroke="currentColor" strokeOpacity="0.4" />
          {[
            [20, 60],
            [34, 50],
            [48, 56],
            [62, 36],
            [76, 42],
            [90, 22],
            [104, 18],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.4" fill="currentColor" />
          ))}
          <path
            d="M20 60 L34 50 L48 56 L62 36 L76 42 L90 22 L104 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 120 80" className="h-16 w-full text-tech-300/80" aria-hidden>
          <path d="M60 12 L100 30 L60 48 L20 30 Z" fill="none" stroke="currentColor" strokeOpacity="0.7" strokeLinejoin="round" />
          <path d="M20 44 L60 60 L100 44" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeLinejoin="round" />
          <path d="M20 58 L60 74 L100 58" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative py-24 md:py-32"
      aria-labelledby="solutions-heading"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      <div className="container-page">
        <SectionHeader
          eyebrow="Soluções"
          title={
            <span id="solutions-heading">
              Tecnologia sob medida para o tamanho do seu negócio.
            </span>
          }
          description="A Ascenda cria soluções digitais profissionais, acessíveis e pensadas para resolver problemas reais."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.n}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.005] p-6 transition-all hover:border-tech-500/40 hover:from-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-tech-300 transition-colors group-hover:border-tech-500/50 group-hover:text-tech-200">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-xs font-semibold tracking-[0.18em] text-white/40">
                    {it.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
                <div className="mt-6 border-t border-white/[0.05] pt-5">
                  <Visual kind={it.visual} />
                </div>
                <div className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full bg-tech-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
