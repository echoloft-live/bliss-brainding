import type { HTMLAttributes, ReactNode } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  center?: boolean;
}

/** Small uppercase section label. Kept as plain tracked text, no rules or dashes. */
export function Eyebrow({ children, center = false, className = '', ...rest }: EyebrowProps) {
  return (
    <span
      className={[
        'inline-block',
        'text-[11.5px] font-bold tracking-[0.2em] uppercase text-teal',
        center ? 'text-center' : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}
