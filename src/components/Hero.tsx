'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Bot, Check, Code2, MessageCircle, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const SIGNALS = [
  { icon: Code2, label: 'Produto digital', value: 'Sob medida', detail: 'Sites, sistemas e aplicativos' },
  { icon: Bot, label: 'Automação', value: 'Sempre ativa', detail: 'WhatsApp e processos inteligentes' },
  { icon: BarChart3, label: 'Crescimento', value: 'Com estratégia', detail: 'Redes sociais e tráfego pago' },
];

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: reduce ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] as const },
  });

  return (
    <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden pb-20 pt-32 sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:pb-24">
      <div className="absolute inset-0 -z-30 bg-[#020714]" />
      <video autoPlay muted loop playsInline preload="metadata" poster="/og-cover.png" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25 mix-blend-screen" aria-hidden>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#020714_4%,rgba(2,7,20,.95)_38%,rgba(2,7,20,.62)_72%,#020714_100%)]" />
      <div className="site-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div className="absolute left-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-tech-500/20 blur-[120px]" aria-hidden />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-10">
          <div className="max-w-3xl">
            <motion.div {...enter(0.15)} className="eyebrow-badge">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tech-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tech-300" />
              </span>
              Startup de tecnologia · Brasil
            </motion.div>

            <motion.h1 id="hero-heading" {...enter(0.23)} className="h-display mt-7 max-w-[760px] text-balance text-[42px] leading-[.98] text-white sm:text-6xl lg:text-[72px]">
              Tecnologia que protege. <span className="text-gradient">Soluções que fazem crescer.</span>
            </motion.h1>

            <motion.p {...enter(0.31)} className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Tecnologia profissional, segura e acessível para pequenas empresas que querem evoluir.
            </motion.p>

            <motion.div {...enter(0.39)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={18} />
                Conte o que você precisa
                <ArrowUpRight size={16} />
              </a>
              <a href="#solucoes" className="btn-secondary">
                Explorar soluções
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div {...enter(0.47)} className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
              {['Atendimento próximo', 'Soluções sob medida', 'Foco em pequenos negócios'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-tech-400/30 bg-tech-400/10 text-tech-200">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={reduce ? false : { opacity: 0, x: 24, scale: 0.98 }} animate={reduce ? undefined : { opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }} className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="absolute -inset-8 rounded-[40px] bg-tech-500/10 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#07132b]/80 p-4 shadow-[0_40px_120px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-tech-400/30 bg-tech-400/10 text-tech-200">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-white">Ascenda digital core</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[.16em] text-white/35">Estrutura para crescer</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online
                </span>
              </div>

              <div className="mt-4 grid gap-3">
                {SIGNALS.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <motion.div key={signal.label} initial={reduce ? false : { opacity: 0, x: 16 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.55 + index * 0.1 }} className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3.5 transition hover:border-tech-400/30 hover:bg-tech-400/[0.06]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-tech-200"><Icon size={19} /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white">{signal.label}</p>
                        <p className="mt-1 truncate text-[11px] text-white/40">{signal.detail}</p>
                      </div>
                      <span className="rounded-lg border border-white/[0.07] bg-[#020714]/60 px-2.5 py-1.5 text-[10px] font-medium text-white/55">{signal.value}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-[#020714]/60 p-4">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.15em] text-white/35">
                  <span>Entender</span><span>Construir</span><span>Evoluir</span>
                </div>
                <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.span initial={reduce ? false : { width: '12%' }} animate={reduce ? undefined : { width: ['12%', '100%', '72%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-tech-500 via-tech-300 to-cyan-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-tech-300/40 to-transparent" />
    </section>
  );
}
