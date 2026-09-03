'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ChartIcon, CheckIcon, LayersIcon, WhatsappIcon } from './Icon';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { WHATSAPP_URL } from '@/lib/constants';
import { Bot3D } from './Bot3D';
import { BotActivityCards } from './BotActivityCards';

const DEVELOPMENT_TYPES = [
  'Sites institucionais',
  'Landing pages',
  'Sistemas web',
  'Aplicativos',
  'Plataformas personalizadas',
  'Dashboards',
];

const BOT_FEATURES = [
  'Atendimento automático',
  'Perguntas frequentes',
  'Agendamento de reuniões',
  'Cadastro de clientes',
  'Envio de informações',
  'Links de pagamento',
  'Notificações',
  'Integração com sistemas',
  'Transferência para humano',
  'Histórico de conversas',
];

const FLOW = [
  { from: 'Cliente', text: 'Olá! Gostaria de marcar uma reunião.' },
  { from: 'Assistente Ascenda', text: 'Claro! Temos horários amanhã às 14h e às 16h. Qual prefere?' },
  { from: 'Cliente', text: '14h está ótimo.' },
  { from: 'Assistente Ascenda', text: 'Perfeito. Reunião agendada ✓' },
];

export function SolutionsSection() {
  const reduce = useReducedMotion();
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
          description="Desenvolvimento sob medida, automação inteligente e marketing digital para fortalecer sua operação e sua presença no mercado."
        />

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {/* SERVICE 01 — DEVELOPMENT */}
          <ServiceDevelopment reduce={!!reduce} />

          {/* SERVICE 02 — AUTOMATION + BOT */}
          <ServiceAutomation reduce={!!reduce} />

          {/* SERVICE 03 — SOCIAL MEDIA + PAID TRAFFIC */}
          <ServiceSocialAds />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICE 03 — Redes sociais e tráfego pago                          */
/* ------------------------------------------------------------------ */

function ServiceSocialAds() {
  return (
    <article
      aria-labelledby="service-social-heading"
      className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
    >
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-tech-300">03</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Marketing digital</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 id="service-social-heading" className="h-display mt-5 text-balance text-2xl leading-[1.15] text-white sm:text-3xl md:text-4xl">
            Redes sociais e tráfego pago.
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base text-muted sm:text-lg">
            Cuidamos da presença da sua marca e criamos campanhas para ampliar o alcance, atrair as pessoas certas e gerar novas oportunidades de contato.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tech-500/10 text-tech-200">
                  <LayersIcon size={17} />
                </span>
                Redes sociais
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Conteúdo e posicionamento para uma presença consistente e profissional.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tech-500/10 text-tech-200">
                  <ChartIcon size={17} />
                </span>
                Tráfego pago
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Campanhas estratégicas para aumentar a visibilidade e criar oportunidades.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quero fortalecer minha presença digital
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mx-auto w-full max-w-[520px]">
        <GrowthVisual />
      </Reveal>
    </article>
  );
}

function GrowthVisual() {
  const reduce = useReducedMotion();
  const steps = [
    { label: 'Presença', value: 'Marca ativa e profissional' },
    { label: 'Alcance', value: 'Mais pessoas certas' },
    { label: 'Oportunidades', value: 'Novos contatos' },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-5 shadow-card-dark sm:p-6">
      <div className="absolute inset-0 grid-bg opacity-35" aria-hidden />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-tech-500/15 blur-3xl" aria-hidden />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-tech-300">Crescimento digital</div>
            <div className="mt-1 text-sm font-semibold text-white">Da presença à oportunidade</div>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-tech-500/30 bg-tech-500/10 text-tech-200">
            <ChartIcon size={19} />
          </span>
        </div>

        <div className="mt-7 flex h-28 items-end gap-2 rounded-xl border border-white/[0.06] bg-navy-900/70 p-4" aria-hidden>
          {[34, 48, 43, 62, 76, 88].map((height, index) => (
            <motion.span
              key={height}
              initial={reduce ? false : { height: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { height: `${height}%`, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
              className="block flex-1 rounded-sm bg-gradient-to-t from-tech-700/35 to-tech-300"
              style={reduce ? { height: `${height}%` } : undefined}
            />
          ))}
        </div>

        <ol className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-tech-300">0{index + 1}</div>
              <div className="mt-2 text-sm font-semibold text-white">{step.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-white/45">{step.value}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICE 01 — Sites, sistemas e aplicativos                          */
/* ------------------------------------------------------------------ */

function ServiceDevelopment({ reduce }: { reduce: boolean }) {
  return (
    <article
      aria-labelledby="service-dev-heading"
      className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
    >
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-tech-300">01</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Desenvolvimento digital</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 id="service-dev-heading" className="h-display mt-5 text-balance text-2xl leading-[1.15] text-white sm:text-3xl md:text-4xl">
            Sites, sistemas e aplicativos.
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base text-muted sm:text-lg">
            Construímos soluções digitais sob medida para empresas que querem ter uma presença digital profissional,
            melhorar seus processos ou transformar uma ideia em um produto.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {DEVELOPMENT_TYPES.map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-sm text-white/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-tech-500/40 bg-tech-500/10 text-tech-200">
                  <CheckIcon size={11} />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quero criar minha solução
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Visual: stacked device mockups */}
      <Reveal delay={0.1} className="relative mx-auto w-full max-w-[520px]">
        <DeviceMockup />
      </Reveal>
    </article>
  );
}

function DeviceMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-tech-500/15 blur-3xl"
        aria-hidden
      />

      {/* Browser window (back) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute left-0 top-[8%] w-[78%]"
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <div className="ml-3 h-3 w-32 rounded-full bg-white/[0.05]" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-tech-500/40 to-tech-300/10" />
              <div className="space-y-1.5">
                <div className="h-2 w-24 rounded-full bg-white/30" />
                <div className="h-1.5 w-16 rounded-full bg-white/15" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-1.5 w-full rounded-full bg-white/[0.08]" />
              <div className="h-1.5 w-5/6 rounded-full bg-white/[0.08]" />
              <div className="h-1.5 w-4/6 rounded-full bg-white/[0.08]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
                  <div className="h-1.5 w-2/3 rounded-full bg-tech-300/60" />
                  <div className="mt-1.5 h-5 rounded bg-white/[0.06]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone (front, overlapping) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute bottom-0 right-0 w-[40%]"
      >
        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-navy-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex justify-center border-b border-white/[0.06] bg-white/[0.02] py-1.5">
            <span className="h-1 w-10 rounded-full bg-white/20" />
          </div>
          <div className="space-y-2 p-2.5">
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded bg-gradient-to-br from-tech-500/40 to-tech-300/10" />
              <div className="h-1.5 flex-1 rounded-full bg-white/15" />
            </div>
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
              <div className="h-1.5 w-1/2 rounded-full bg-white/30" />
              <div className="mt-1.5 h-6 rounded bg-tech-500/15" />
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
                <div className="h-1 w-1/2 rounded-full bg-white/20" />
                <div className="mt-1 h-4 rounded bg-white/[0.05]" />
              </div>
              <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
                <div className="h-1 w-1/2 rounded-full bg-white/20" />
                <div className="mt-1 h-4 rounded bg-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard floating chip (back) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute right-[8%] top-0 hidden rounded-lg border border-white/10 bg-navy-900/95 px-3 py-2 shadow-lg sm:block"
      >
        <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-tech-300">Dashboard</div>
        <div className="mt-1 flex h-8 items-end gap-0.5">
          {[6, 10, 8, 14, 12, 18, 16].map((h, i) => (
            <span
              key={i}
              className="block w-1.5 origin-bottom rounded-sm bg-gradient-to-t from-tech-700/40 to-tech-300"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICE 02 — Automações e bot para WhatsApp                          */
/* ------------------------------------------------------------------ */

function ServiceAutomation({ reduce }: { reduce: boolean }) {
  return (
    <article
      aria-labelledby="service-bot-heading"
      className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
    >
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-tech-300">02</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Automação inteligente</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h3 id="service-bot-heading" className="h-display mt-5 text-balance text-2xl leading-[1.15] text-white sm:text-3xl md:text-4xl">
            Automações e bot inteligente para WhatsApp.
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-base text-muted sm:text-lg">
            Transforme o WhatsApp em um assistente digital capaz de atender clientes, organizar informações,
            executar tarefas e integrar sistemas — tudo no automático.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-3 text-sm text-white/55">
            Cada projeto é personalizado. As capacidades abaixo são desenvolvidas sob medida para a sua operação.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {BOT_FEATURES.slice(0, 8).map((it) => (
              <li key={it} className="flex items-center gap-2.5 text-sm text-white/85">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-tech-500/40 bg-tech-500/10 text-tech-200">
                  <CheckIcon size={11} />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappIcon size={16} />
              Quero automatizar meu negócio
            </a>
            <a href="#fluxo" className="btn-link">
              Ver exemplo de fluxo
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Visual: bot + activity cards + flow */}
      <Reveal delay={0.1} className="relative mx-auto w-full max-w-[560px]">
        <div className="relative aspect-square w-full">
          <Bot3D />
          <BotActivityCards />
        </div>

        {/* Flow card below the bot */}
        <FlowCard />
      </Reveal>
    </article>
  );
}

function FlowCard() {
  return (
    <div
      id="fluxo"
      className="mt-8 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-tech-300" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-tech-300">
          Exemplo de atendimento
        </span>
      </div>
      <ol className="mt-4 space-y-2.5">
        {FLOW.map((m, i) => (
          <li
            key={i}
            className={`flex gap-3 rounded-lg border p-2.5 text-xs ${
              m.from === 'Cliente'
                ? 'border-white/[0.06] bg-white/[0.02]'
                : 'border-tech-500/30 bg-tech-500/[0.06]'
            }`}
          >
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                m.from === 'Cliente' ? 'bg-white/[0.06] text-white/80' : 'bg-tech-500/20 text-tech-200'
              }`}
            >
              {m.from === 'Cliente' ? 'C' : 'A'}
            </div>
            <div>
              <div className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${m.from === 'Cliente' ? 'text-white/55' : 'text-tech-300'}`}>
                {m.from}
              </div>
              <div className="mt-0.5 text-white/90">{m.text}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
