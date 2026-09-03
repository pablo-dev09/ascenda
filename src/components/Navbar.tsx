'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-white/10 bg-[#061127]/90 shadow-[0_18px_70px_rgba(0,0,0,.36)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#inicio" aria-label="Ascenda — voltar ao início">
          <Logo size={46} withWordmark={false} />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-xl border border-white/[0.06] bg-white/[0.025] p-1">
            {NAV_LINKS.slice(1, 5).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3.5 py-2 text-xs font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-[#07132b] transition hover:-translate-y-0.5 hover:bg-tech-50 lg:inline-flex"
        >
          Falar com especialista
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-[1180px] overflow-hidden rounded-2xl border border-white/10 bg-[#061127]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação móvel">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight size={15} className="text-tech-300" />
                </a>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
            >
              <MessageCircle size={17} />
              Falar com a Ascenda
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
