'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CheckIcon } from './Icon';

type Activity = {
  id: string;
  label: string;
  status?: 'ok' | 'pending';
};

const SEQUENCE: Activity[] = [
  { id: '1', label: 'Novo atendimento recebido', status: 'pending' },
  { id: '2', label: 'Cliente identificado', status: 'ok' },
  { id: '3', label: 'Reunião agendada para amanhã, 14h', status: 'ok' },
  { id: '4', label: 'Link de pagamento enviado', status: 'ok' },
  { id: '5', label: 'Atendimento finalizado', status: 'ok' },
];

/**
 * Floating activity cards around the bot.
 * Cycles through a small set of realistic bot events, one at a time,
 * with subtle entrance/exit animations.
 */
export function BotActivityCards() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % SEQUENCE.length);
        setVisible(true);
      }, 380);
    }, 3200);
    return () => clearInterval(t);
  }, [reduce]);

  const current = SEQUENCE[idx];

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* Top-left card — current activity */}
      <div className="absolute left-0 top-[8%] sm:left-[2%] sm:top-[6%]">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: -8, scale: 0.96 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-navy-900/85 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  current.status === 'ok' ? 'bg-tech-500/20 text-tech-200' : 'bg-white/[0.06] text-white/70'
                }`}
              >
                {current.status === 'ok' ? <CheckIcon size={12} /> : <span className="h-2 w-2 rounded-full bg-white/70" />}
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-tech-300">
                  {current.status === 'ok' ? 'Concluído' : 'Em andamento'}
                </div>
                <div className="mt-0.5 text-xs font-medium text-white">{current.label}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right card — WhatsApp connection */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 12 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute right-0 top-[28%] hidden sm:block"
      >
        <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-navy-900/85 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <WhatsAppGlyph />
          </span>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-tech-300">WhatsApp</div>
            <div className="mt-0.5 text-xs font-medium text-white">Conectado · 24/7</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom-left card — flow indicator */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-[10%] left-[2%] hidden md:block"
      >
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-navy-900/80 px-3 py-2 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tech-300" />
          <span className="text-[11px] font-medium text-white/85">Processando em tempo real</span>
        </div>
      </motion.div>

      {/* Bottom-right card — small metric */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-[8%] right-[2%] hidden md:block"
      >
        <div className="rounded-lg border border-white/10 bg-navy-900/80 px-3 py-2 backdrop-blur-md">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-tech-300">Hoje</div>
          <div className="mt-0.5 text-sm font-semibold text-white">128 atendimentos</div>
        </div>
      </motion.div>
    </div>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.2.2 2 3.1 4.8 4.3 1.7.7 2.3.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1112 20.2z" />
    </svg>
  );
}
