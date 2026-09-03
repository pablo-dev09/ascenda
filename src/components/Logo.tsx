import type { CSSProperties } from 'react';
import Image from 'next/image';

type Props = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
  style?: CSSProperties;
};

export function Logo({ size = 36, withWordmark = true, className, variant = 'light', style }: Props) {
  // Uses the official ASCENDA logo files. Variant controls background when needed.
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ''}`}
      style={style}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <Image
          src={variant === 'dark' ? '/logo-navy.jpeg' : '/logo-transparent.png'}
          alt=""
          width={size}
          height={size}
          className="h-full w-full object-contain"
          draggable={false}
        />
      </span>
      {withWordmark && (
        <span className="font-display text-[17px] font-bold leading-none tracking-[0.18em] text-white">
          ASCENDA
        </span>
      )}
    </span>
  );
}
