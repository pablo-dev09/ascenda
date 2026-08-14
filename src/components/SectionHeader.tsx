import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
};

export function SectionHeader({ eyebrow, title, description, align = 'left', className, id }: Props) {
  return (
    <header
      id={id}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tech-300">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="h-display mt-4 text-balance text-3xl leading-[1.1] text-white sm:text-4xl md:text-[44px]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-pretty text-base text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </header>
  );
}
