'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { FormEvent, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cloud,
  Code2,
  Database,
  Gauge,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { Logo } from './Logo';
import { EMAIL, PHONE, PHONE_E164, SITE_NAME, SLOGAN, WHATSAPP_URL } from '@/lib/constants';

const PRINCIPLES = [
  { icon: ShieldCheck, title: 'Segurança', text: 'Proteção e responsabilidade em cada projeto.' },
  { icon: Clock3, title: 'Disponibilidade', text: 'Soluções disponíveis quando sua empresa precisar.' },
  { icon: Sparkles, title: 'Acessibilidade', text: 'Tecnologia profissional que faz sentido para pequenos negócios.' },
];

const PROBLEMS = [
  { n: '01', title: 'Custos elevados', text: 'Soluções tradicionais podem exigir investimentos que não fazem sentido para pequenos negócios.' },
  { n: '02', title: 'Processos manuais', text: 'Tarefas repetitivas consomem tempo que poderia ser utilizado para fazer o negócio crescer.' },
  { n: '03', title: 'Presença digital limitada', text: 'Um negócio excelente também precisa ser encontrado, acessado e lembrado no ambiente digital.' },
  { n: '04', title: 'Tecnologia complicada', text: 'A solução precisa se adaptar ao negócio — não o contrário.' },
];

const DEVELOPMENT_TYPES = ['Sites institucionais', 'Landing pages', 'Sistemas web', 'Aplicativos', 'Plataformas personalizadas', 'Dashboards'];

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

const CHAT = [
  { who: 'Cliente', text: 'Olá! Gostaria de marcar uma reunião.' },
  { who: 'Assistente Ascenda', text: 'Claro! Temos horários amanhã às 14h e às 16h. Qual prefere?' },
  { who: 'Cliente', text: '14h está ótimo.' },
  { who: 'Assistente Ascenda', text: 'Perfeito. Reunião agendada ✓' },
];

const PILLARS = [
  { icon: ShieldCheck, title: 'Segurança', text: 'Suas informações e sistemas tratados com responsabilidade.' },
  { icon: Clock3, title: 'Disponibilidade', text: 'Soluções pensadas para funcionar quando sua empresa precisar.' },
  { icon: Sparkles, title: 'Acessibilidade', text: 'Tecnologia profissional sem tornar o projeto inviável para pequenos negócios.' },
  { icon: TrendingUp, title: 'Crescimento', text: 'Construímos soluções que acompanham a evolução da empresa.' },
];

const PROCESS = [
  { n: '01', title: 'Entendimento', text: 'Conhecemos sua empresa, seus objetivos e os problemas que precisam ser resolvidos.' },
  { n: '02', title: 'Planejamento', text: 'Definimos a melhor solução, tecnologias e prioridades do projeto.' },
  { n: '03', title: 'Design', text: 'Criamos uma experiência visual moderna, clara e alinhada à sua marca.' },
  { n: '04', title: 'Desenvolvimento', text: 'Transformamos o projeto em uma solução digital funcional, segura e responsiva.' },
  { n: '05', title: 'Entrega', text: 'Publicamos, configuramos e deixamos tudo pronto para sua empresa utilizar.' },
  { n: '06', title: 'Evolução', text: 'Continuamos disponíveis para melhorias, ajustes e novas necessidades.' },
];

const RESULTS = [
  { icon: Zap, title: 'Mais eficiência', text: 'Automatize tarefas e economize tempo.' },
  { icon: Database, title: 'Mais organização', text: 'Centralize processos e informações.' },
  { icon: Globe2, title: 'Mais presença', text: 'Fortaleça sua presença no ambiente digital.' },
  { icon: TrendingUp, title: 'Mais crescimento', text: 'Crie uma base tecnológica para evoluir.' },
];

const TECHS = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PHP', 'MySQL', 'PostgreSQL', 'n8n', 'APIs', 'Cloud'];

const GENERIC = ['Prontas e pouco personalizáveis', 'Processos mais complexos', 'Atendimento distante', 'Custos nem sempre adequados', 'Dificuldade de adaptação'];

const ASCENDA = ['Personalizada para o seu negócio', 'Próxima do cliente em cada etapa', 'Pensada para pequenas empresas', 'Tecnologia adequada ao problema', 'Investimento acessível', 'Evolução contínua do projeto'];

const FAQS = [
  { q: 'Que tipo de empresa pode contratar a Ascenda?', a: 'Atendemos pequenas empresas, empreendedores, negócios locais, prestadores de serviço e pequenos comércios que querem profissionalizar sua presença digital e seus processos. Se a sua empresa precisa de tecnologia, a Ascenda pode ajudar.' },
  { q: 'Vocês trabalham com projetos personalizados?', a: 'Sim. Cada projeto é desenhado a partir do problema real do cliente — não de soluções de prateleira. Combinamos entendimento do negócio, design e desenvolvimento para entregar uma solução sob medida.' },
  { q: 'Quanto custa uma solução digital?', a: 'O investimento varia de acordo com o escopo, a complexidade e os objetivos do projeto. Trabalhamos com propostas personalizadas e transparentes após a etapa de entendimento.' },
  { q: 'Vocês fazem manutenção depois da entrega?', a: 'Sim. Após a entrega, permanecemos disponíveis para ajustes, melhorias, novas funcionalidades e suporte contínuo. Cada cliente pode contar com acompanhamento próximo.' },
  { q: 'É possível começar com um projeto pequeno?', a: 'Sim. Muitos clientes começam com um projeto inicial e evoluem conosco à medida que o negócio cresce. A Ascenda foi pensada justamente para acompanhar essa jornada.' },
  { q: 'Vocês trabalham com automação?', a: 'Sim. Automatizamos tarefas repetitivas, integramos ferramentas e construímos fluxos que reduzem trabalho manual e tornam a operação mais eficiente.' },
  { q: 'Vocês atendem empresas de qualquer lugar?', a: 'Atendemos clientes de diferentes regiões do Brasil, conduzindo os projetos de forma remota, com comunicação clara e reuniões periódicas para alinhar cada etapa.' },
];

function Fade({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, text, center = false }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Fade className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow-badge">{eyebrow}</span>
      <h2 className="h-display mt-6 text-balance text-3xl leading-[1.06] text-white sm:text-4xl lg:text-[52px]">{title}</h2>
      {text ? <p className="mt-5 text-pretty text-base leading-relaxed text-white/55 sm:text-lg">{text}</p> : null}
    </Fade>
  );
}

function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-tech-400/25 bg-tech-400/10 text-tech-200"><Icon size={20} /></span>;
}

export function StartupExperience() {
  return (
    <>
      <PrinciplesStrip />
      <ProblemSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <ResultsAndTechSection />
      <AboutSection />
      <ComparisonSection />
      <FaqSection />
      <LeadSection />
      <Footer />
    </>
  );
}

function PrinciplesStrip() {
  return (
    <section aria-label="Princípios da Ascenda" className="relative border-b border-white/[0.07] bg-[#030a1c]">
      <div className="container-page grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
        {PRINCIPLES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group flex gap-4 py-7 md:px-7 md:first:pl-0 md:last:pr-0">
            <span className="mt-0.5 text-tech-300 transition group-hover:scale-110"><Icon size={20} /></span>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-white">{title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-white/42">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problema" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-tech-500/[0.07] blur-[120px]" aria-hidden />
      <div className="container-page grid gap-16 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionIntro
            eyebrow="O desafio"
            title={<>Tecnologia de qualidade não deveria ser privilégio das grandes empresas.</>}
            text="Muitos pequenos negócios sabem que precisam de tecnologia, mas encontram soluções caras, complexas ou difíceis de adaptar à realidade da empresa."
          />
          <Fade delay={0.1} className="mt-8">
            <a href="#solucoes" className="btn-secondary">Ver como resolvemos <ArrowRight size={17} /></a>
          </Fade>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((item, index) => (
            <Fade key={item.n} delay={index * 0.06}>
              <article className="group relative min-h-[220px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-tech-400/30 hover:bg-tech-400/[0.05]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold tracking-[.18em] text-tech-300">{item.n}</span>
                  <span className="h-2 w-2 rounded-full bg-tech-300 shadow-[0_0_18px_rgba(74,154,234,.9)]" />
                </div>
                <h3 className="mt-12 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/48">{item.text}</p>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="solucoes" className="relative overflow-hidden border-y border-white/[0.06] bg-[#040c1d] py-24 sm:py-28 lg:py-36">
      <div className="site-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Soluções"
            title={<>Tecnologia sob medida para o tamanho do seu negócio.</>}
            text="Desenvolvimento sob medida, automação inteligente e marketing digital para fortalecer sua operação e sua presença no mercado."
          />
          <Fade delay={0.12}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Encontrar minha solução <ArrowUpRight size={17} /></a>
          </Fade>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Fade className="lg:col-span-7">
            <article className="service-card flex h-full min-h-[560px] flex-col">
              <ServiceTop n="01" label="Desenvolvimento digital" icon={Code2} />
              <div className="mt-10 grid flex-1 gap-10 md:grid-cols-[1fr_.9fr]">
                <div>
                  <h3 className="h-display text-3xl text-white sm:text-4xl">Sites, sistemas e aplicativos.</h3>
                  <p className="mt-5 text-sm leading-relaxed text-white/55 sm:text-base">Construímos soluções digitais sob medida para empresas que querem ter uma presença digital profissional, melhorar seus processos ou transformar uma ideia em um produto.</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {DEVELOPMENT_TYPES.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                  </ul>
                </div>
                <ProductMockup />
              </div>
              <ServiceAction label="Quero criar minha solução" />
            </article>
          </Fade>

          <Fade className="lg:col-span-5" delay={0.06}>
            <article className="service-card flex h-full min-h-[560px] flex-col">
              <ServiceTop n="02" label="Automação inteligente" icon={Bot} />
              <h3 className="h-display mt-10 text-3xl text-white">Automações e bot inteligente para WhatsApp.</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/55">Transforme o WhatsApp em um assistente digital capaz de atender clientes, organizar informações, executar tarefas e integrar sistemas — tudo no automático.</p>
              <p className="mt-3 text-xs leading-relaxed text-white/35">Cada projeto é personalizado. As capacidades são desenvolvidas sob medida para a sua operação.</p>
              <ChatPreview />
              <ServiceAction label="Quero automatizar meu negócio" icon={MessageCircle} />
            </article>
          </Fade>

          <Fade className="lg:col-span-5" delay={0.06}>
            <article className="service-card flex h-full min-h-[510px] flex-col">
              <ServiceTop n="03" label="Marketing digital" icon={BarChart3} />
              <h3 className="h-display mt-10 text-3xl text-white">Redes sociais e tráfego pago.</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/55">Cuidamos da presença da sua marca e criamos campanhas para ampliar o alcance, atrair as pessoas certas e gerar novas oportunidades de contato.</p>
              <div className="mt-8 grid gap-3">
                <MiniService icon={Layers3} title="Redes sociais" text="Conteúdo e posicionamento para uma presença consistente e profissional." />
                <MiniService icon={Target} title="Tráfego pago" text="Campanhas estratégicas para aumentar a visibilidade e criar oportunidades." />
              </div>
              <ServiceAction label="Fortalecer minha presença digital" />
            </article>
          </Fade>

          <Fade className="lg:col-span-7" delay={0.12}>
            <article id="fluxo" className="service-card flex h-full min-h-[510px] flex-col">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-tech-300">Capacidades da automação</p>
                  <h3 className="h-display mt-3 text-2xl text-white sm:text-3xl">Um fluxo que trabalha junto com você.</h3>
                </div>
                <IconTile icon={Workflow} />
              </div>
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {BOT_FEATURES.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <div className="mt-auto grid grid-cols-3 gap-2 pt-10">
                {['Entender', 'Executar', 'Evoluir'].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/[0.06] bg-[#020714]/70 px-3 py-4 text-center">
                    <p className="text-[10px] font-semibold text-tech-300">0{index + 1}</p>
                    <p className="mt-2 text-xs font-medium text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Fade>
        </div>
      </div>
    </section>
  );
}

function ServiceTop({ n, label, icon }: { n: string; label: string; icon: LucideIcon }) {
  const Icon = icon;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="font-display text-xs font-bold tracking-[.18em] text-tech-300">{n}</span>
        <span className="h-px w-8 bg-white/15" />
        <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/38">{label}</span>
      </div>
      <span className="text-tech-300"><Icon size={20} /></span>
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return <li className="flex items-center gap-2.5 text-xs text-white/65"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tech-400/10 text-tech-200"><Check size={11} strokeWidth={2.5} /></span>{children}</li>;
}

function ServiceAction({ label, icon: Icon = ArrowUpRight }: { label: string; icon?: LucideIcon }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-9 text-sm font-semibold text-white transition hover:text-tech-200">
      {label}<Icon size={16} />
    </a>
  );
}

function ProductMockup() {
  return (
    <div className="relative min-h-[260px] self-end rounded-[22px] border border-white/[0.08] bg-[#020714]/80 p-4 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-3"><span className="h-2 w-2 rounded-full bg-tech-300" /><span className="h-2 w-2 rounded-full bg-white/15" /><span className="h-2 w-2 rounded-full bg-white/15" /><span className="ml-auto text-[9px] uppercase tracking-[.14em] text-white/25">Produto digital</span></div>
      <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
        <div className="h-2 w-20 rounded-full bg-tech-300/70" /><div className="mt-3 h-2 w-4/5 rounded-full bg-white/10" /><div className="mt-2 h-2 w-3/5 rounded-full bg-white/[0.06]" />
        <div className="mt-6 grid grid-cols-2 gap-2"><div className="h-20 rounded-lg bg-tech-400/10" /><div className="h-20 rounded-lg border border-white/[0.05] bg-white/[0.02]" /></div>
      </div>
      <div className="absolute -bottom-5 -right-4 w-[42%] rounded-2xl border border-white/10 bg-[#07132b] p-3 shadow-2xl">
        <div className="mx-auto h-1 w-8 rounded-full bg-white/15" /><div className="mt-3 h-10 rounded-lg bg-tech-400/10" /><div className="mt-2 h-14 rounded-lg bg-white/[0.04]" />
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="mt-8 rounded-[22px] border border-white/[0.07] bg-[#020714]/70 p-4">
      <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3"><span className="h-2 w-2 rounded-full bg-emerald-300" /><span className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Exemplo de atendimento</span></div>
      <div className="mt-4 space-y-2.5">
        {CHAT.map((message, index) => (
          <div key={index} className={`max-w-[88%] rounded-xl px-3 py-2.5 ${message.who === 'Cliente' ? 'bg-white/[0.05] text-white/60' : 'ml-auto border border-tech-400/20 bg-tech-400/10 text-white/75'}`}>
            <p className="text-[9px] font-semibold uppercase tracking-[.13em] text-tech-300">{message.who}</p><p className="mt-1 text-[11px] leading-relaxed">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniService({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <div className="flex gap-4 rounded-2xl border border-white/[0.07] bg-[#020714]/60 p-4"><span className="mt-0.5 text-tech-300"><Icon size={19} /></span><div><h4 className="text-sm font-semibold text-white">{title}</h4><p className="mt-1.5 text-xs leading-relaxed text-white/42">{text}</p></div></div>;
}

function WhySection() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-500/[0.08] blur-[140px]" aria-hidden />
      <div className="container-page relative">
        <SectionIntro eyebrow="Por que a Ascenda" title={<>Não entregamos apenas tecnologia. <span className="text-gradient">Entregamos evolução.</span></>} text="Quatro pilares sustentam cada projeto que construímos. Segurança, disponibilidade, acessibilidade e crescimento pensados para pequenos negócios." center />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }, index) => (
            <Fade key={title} delay={index * 0.06}>
              <article className="group h-full rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-tech-400/30">
                <IconTile icon={Icon} /><h3 className="mt-8 font-display text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/46">{text}</p>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="relative border-y border-white/[0.06] bg-[#040c1d] py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionIntro eyebrow="Processo" title={<>Do problema à solução.</>} text="Um caminho claro em seis etapas — do primeiro contato até a evolução contínua do projeto." />
            <Fade delay={0.1} className="mt-8"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Iniciar um projeto <ArrowUpRight size={17} /></a></Fade>
          </div>
          <ol className="relative grid gap-3 sm:grid-cols-2">
            {PROCESS.map((step, index) => (
              <Fade key={step.n} delay={index * 0.045}>
                <li className="group flex h-full min-h-[190px] flex-col rounded-[24px] border border-white/[0.07] bg-[#020714]/60 p-6 transition hover:border-tech-400/30 hover:bg-tech-400/[0.035]">
                  <div className="flex items-center justify-between"><span className="font-display text-xs font-bold tracking-[.16em] text-tech-300">{step.n}</span><span className="h-px w-12 bg-gradient-to-r from-tech-300/70 to-transparent" /></div>
                  <h3 className="mt-9 font-display text-lg font-semibold text-white">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/45">{step.text}</p>
                </li>
              </Fade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ResultsAndTechSection() {
  return (
    <section id="resultados" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionIntro eyebrow="Resultados" title={<>Tecnologia pensada para gerar <span className="text-gradient">impacto real.</span></>} text="Cada projeto é construído para trazer benefícios reais ao seu negócio." center />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map(({ icon: Icon, title, text }, index) => (
            <Fade key={title} delay={index * 0.06}><article className="h-full rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"><span className="text-tech-300"><Icon size={22} /></span><h3 className="mt-8 font-display text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm text-white/45">{text}</p></article></Fade>
          ))}
        </div>

        <Fade className="mt-5">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#07132b]/70 p-6 sm:p-8 lg:p-10">
            <div className="site-grid absolute inset-0 opacity-25" aria-hidden />
            <div className="relative grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div><span className="eyebrow-badge">Tecnologia</span><h3 className="h-display mt-5 text-3xl text-white">Tecnologia moderna. Sem complicação.</h3><p className="mt-4 text-sm leading-relaxed text-white/50">A tecnologia certa depende do problema certo. Usamos ferramentas atuais para entregar soluções estáveis, seguras e fáceis de evoluir.</p></div>
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {TECHS.map((tech) => <span key={tech} className="rounded-xl border border-white/[0.08] bg-[#020714]/70 px-4 py-2.5 text-xs font-medium text-white/65 transition hover:border-tech-400/30 hover:text-white">{tech}</span>)}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="relative border-y border-white/[0.06] bg-[#040c1d] py-24 sm:py-28 lg:py-36">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
        <div>
          <SectionIntro eyebrow="Sobre a Ascenda" title={<>Uma empresa criada para fazer outras empresas crescerem.</>} />
          <Fade delay={0.08} className="mt-7 space-y-4 text-sm leading-relaxed text-white/52 sm:text-base">
            <p>A Ascenda nasceu com uma ideia simples: tornar tecnologia de qualidade mais acessível para pequenos negócios.</p>
            <p>Acreditamos que uma empresa não precisa ter uma grande estrutura para contar com soluções digitais profissionais.</p>
            <p>Por isso, trabalhamos próximos de cada cliente para entender o problema, construir a solução e evoluir junto com o negócio.</p>
          </Fade>
          <Fade delay={0.12} className="mt-8 flex flex-wrap gap-2">
            {['Segurança', 'Confiabilidade', 'Acessibilidade', 'Qualidade', 'Inovação', 'Proximidade', 'Crescimento'].map((value) => <span key={value} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[11px] font-medium text-white/55">{value}</span>)}
          </Fade>
        </div>
        <Fade delay={0.08}>
          <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#020714] p-7">
            <div className="site-grid absolute inset-0 opacity-50" aria-hidden />
            <div className="absolute inset-[14%] rounded-full border border-tech-300/15" /><div className="absolute inset-[25%] rounded-full border border-tech-300/25" />
            <div className="absolute inset-0 flex items-center justify-center"><div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-tech-300/30 bg-tech-400/10 shadow-[0_0_70px_rgba(47,140,255,.25)]"><Logo size={74} withWordmark={false} /></div></div>
            {[{ top: '13%', left: '13%', icon: ShieldCheck }, { top: '15%', right: '12%', icon: Network }, { bottom: '13%', left: '15%', icon: Gauge }, { bottom: '13%', right: '14%', icon: Rocket }].map((node, index) => {
              const Icon = node.icon;
              return <motion.span key={index} animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }} style={node} className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#07132b] text-tech-200 shadow-xl"><Icon size={20} /></motion.span>;
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section id="comparativo" className="py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionIntro eyebrow="Diferencial" title={<>Tecnologia que se adapta ao seu negócio.</>} text="A Ascenda se posiciona ao lado do cliente, com soluções construídas a partir do problema real — não de catálogos prontos." center />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
          <Fade><ComparisonCard title="Soluções genéricas" badge="Comum" items={GENERIC} positive={false} /></Fade>
          <Fade delay={0.08}><ComparisonCard title="Ascenda" badge="Escolhida" items={ASCENDA} positive /></Fade>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, badge, items, positive }: { title: string; badge: string; items: string[]; positive: boolean }) {
  return (
    <article className={`h-full rounded-[28px] border p-6 sm:p-8 ${positive ? 'border-tech-400/30 bg-tech-400/[0.07] shadow-[0_30px_80px_rgba(15,95,190,.12)]' : 'border-white/[0.07] bg-white/[0.02]'}`}>
      <div className="flex items-center justify-between"><h3 className="font-display text-xl font-semibold text-white">{title}</h3><span className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] ${positive ? 'border-tech-300/30 bg-tech-400/10 text-tech-200' : 'border-white/10 bg-white/[0.03] text-white/35'}`}>{badge}</span></div>
      <ul className="mt-8 space-y-4">
        {items.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-white/58"><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${positive ? 'bg-tech-400/15 text-tech-200' : 'bg-white/[0.05] text-white/30'}`}>{positive ? <Check size={11} strokeWidth={2.5} /> : <X size={11} />}</span>{item}</li>)}
      </ul>
    </article>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <section id="faq" className="relative border-y border-white/[0.06] bg-[#040c1d] py-24 sm:py-28 lg:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start"><SectionIntro eyebrow="FAQ" title={<>Perguntas frequentes</>} text="Respostas para as dúvidas mais comuns sobre os projetos e a forma de trabalho da Ascenda." /></div>
        <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#020714]/60 px-5 sm:px-7">
          {FAQS.map((item, index) => {
            const active = open === index;
            return (
              <div key={item.q} className="border-b border-white/[0.07] last:border-b-0">
                <button type="button" onClick={() => setOpen(active ? null : index)} aria-expanded={active} aria-controls={`faq-${index}`} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-sm font-semibold text-white sm:text-base">{item.q}</span><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${active ? 'rotate-180 border-tech-400/30 bg-tech-400/10 text-tech-200' : 'border-white/10 bg-white/[0.03] text-white/45'}`}><ChevronDown size={16} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {active ? <motion.div id={`faq-${index}`} initial={reduce ? false : { height: 0, opacity: 0 }} animate={reduce ? undefined : { height: 'auto', opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-white/48">{item.a}</p></motion.div> : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadSection() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState('Site, sistema ou aplicativo');
  const message = useMemo(() => {
    const intro = name.trim() ? `Olá, sou ${name.trim()}` : 'Olá';
    const business = company.trim() ? ` da ${company.trim()}` : '';
    return `${intro}${business}. Quero conversar sobre: ${need}.`;
  }, [company, name, need]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    const next = window.open(target, '_blank', 'noopener,noreferrer');
    if (next) next.opener = null;
  }

  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-500/[0.1] blur-[150px]" aria-hidden />
      <div className="container-page relative">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#07132b]/85 shadow-[0_40px_120px_rgba(0,0,0,.4)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1fr_.9fr]">
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div className="site-grid absolute inset-0 opacity-30" aria-hidden />
              <div className="relative"><span className="eyebrow-badge">Vamos conversar</span><h2 className="h-display mt-7 max-w-xl text-balance text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl">Seu negócio está pronto para <span className="text-gradient">ascender?</span></h2><p className="mt-6 max-w-xl text-base leading-relaxed text-white/55">Conte para nós o que sua empresa precisa. Vamos encontrar uma solução digital que faça sentido para o seu momento.</p>
                <div className="mt-9 space-y-3 text-sm text-white/60"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-white"><MessageCircle size={17} className="text-tech-300" />{PHONE}</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition hover:text-white"><Mail size={17} className="text-tech-300" />{EMAIL}</a></div>
              </div>
            </div>
            <div className="border-t border-white/[0.08] bg-[#020714]/65 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-tech-300">Comece em menos de 1 minuto</p><h3 className="font-display mt-3 text-2xl font-semibold text-white">Qual desafio podemos resolver?</h3><p className="mt-2 text-xs leading-relaxed text-white/38">Preencha os campos e continue a conversa diretamente no WhatsApp.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <label className="block"><span className="text-xs font-medium text-white/55">Seu nome</span><input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-tech-400/50 focus:outline-none" /></label>
                <label className="block"><span className="text-xs font-medium text-white/55">Empresa <span className="text-white/25">(opcional)</span></span><input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Nome do seu negócio" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-tech-400/50 focus:outline-none" /></label>
                <label className="block"><span className="text-xs font-medium text-white/55">O que você procura?</span><select value={need} onChange={(event) => setNeed(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#07132b] px-4 py-3.5 text-sm text-white/75 focus:border-tech-400/50 focus:outline-none"><option>Site, sistema ou aplicativo</option><option>Automação e bot para WhatsApp</option><option>Redes sociais e tráfego pago</option><option>Quero entender a melhor solução</option></select></label>
                <button type="submit" className="btn-primary mt-2 w-full"><MessageCircle size={17} />Iniciar conversa<ArrowUpRight size={16} /></button>
              </form>
              <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/28"><ShieldCheck size={13} />Seus dados não ficam armazenados neste site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const nav = [{ label: 'Soluções', href: '#solucoes' }, { label: 'Processo', href: '#processo' }, { label: 'Sobre', href: '#sobre' }, { label: 'Contato', href: '#contato' }];
  return (
    <footer className="border-t border-white/[0.07] bg-[#01040c]">
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_1fr_.8fr]">
          <div><Logo size={38} /><p className="mt-5 max-w-xs text-sm text-white/42">Soluções digitais para negócios que querem crescer.</p><p className="mt-3 max-w-xs text-sm font-medium text-white/70">{SLOGAN}</p><span className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[.15em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Disponível para novos projetos</span></div>
          <FooterList title="Navegação">{nav.map((item) => <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>)}</FooterList>
          <FooterList title="Contato"><a href={`tel:${PHONE_E164}`} className="transition hover:text-white"><Phone size={13} />{PHONE}</a><a href={`mailto:${EMAIL}`} className="transition hover:text-white"><Mail size={13} />{EMAIL}</a><span>Brasil · Atendimento remoto</span></FooterList>
          <FooterList title="Empresa"><a href="#politica" className="transition hover:text-white">Política de Privacidade</a><a href="#termos" className="transition hover:text-white">Termos de Uso</a><span className="mt-3 text-[9px] uppercase tracking-[.16em] text-white/25">Perfis oficiais em breve</span><div className="flex gap-2"><SocialSoon icon={Instagram} label="Instagram" /><SocialSoon icon={Linkedin} label="LinkedIn" /><SocialSoon icon={Github} label="GitHub" /></div></FooterList>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-white/28 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 {SITE_NAME}. Todos os direitos reservados.</p><p>Feito com cuidado pela Ascenda.</p></div>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: ReactNode }) {
  return <div><h3 className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/35">{title}</h3><div className="mt-5 flex flex-col items-start gap-3 text-xs text-white/48 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2">{children}</div></div>;
}

function SocialSoon({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return <span title="Perfil oficial em breve" aria-label={`${label} (em breve)`} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/30"><Icon size={15} /></span>;
}
