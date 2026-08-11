import { Logo } from './Logo';
import { EMAIL, PHONE, SLOGAN, SITE_NAME } from '@/lib/constants';

const NAV_COL = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const SOCIALS = ['Instagram', 'LinkedIn', 'GitHub'] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#01040C]">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-tech-500/40 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-tech-500/10 blur-[100px]" aria-hidden />

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={36} />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Soluções digitais para negócios que querem crescer.
            </p>
            <p className="mt-3 max-w-xs text-sm font-medium text-white/80">
              {SLOGAN}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-tech-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Disponível para novos projetos
              </span>
            </div>
          </div>

          <FooterCol title="Navegação" items={NAV_COL} />

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:+5521983702734`} className="text-white/85 transition-colors hover:text-tech-200">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/85 transition-colors hover:text-tech-200">
                  {EMAIL}
                </a>
              </li>
              <li className="text-white/55">Brasil · Atendimento remoto</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Empresa</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#politica" className="text-white/85 transition-colors hover:text-tech-200">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="text-white/85 transition-colors hover:text-tech-200">
                  Termos de Uso
                </a>
              </li>
            </ul>
            <h4 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Social
            </h4>
            <ul className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <span
                    aria-label={`${s} (em breve)`}
                    title="Perfil oficial em breve"
                    className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/45"
                  >
                    <SocialIcon name={s} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-white/40">
              Perfis oficiais em breve.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/55">
            © 2026 {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Feito com cuidado pela Ascenda.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((it) => (
          <li key={it.href}>
            <a href={it.href} className="text-white/85 transition-colors hover:text-tech-200">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 17v-7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 19c-4 1-4-2-6-2.5M15 21v-3.5a2 2 0 00-.5-1.5c3-.4 6-1.5 6-6.5a4.5 4.5 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 00-6 0C7 3.3 6 3.6 6 3.6a4.2 4.2 0 00-.1 3.2A4.5 4.5 0 004.5 10c0 5 3 6.1 6 6.5a2 2 0 00-.5 1.5V21" />
    </svg>
  );
}
