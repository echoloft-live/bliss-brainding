import type { HTMLAttributes, ReactNode } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  center?: boolean;
}

export function Eyebrow({ children, center = false, className = '', ...rest }: EyebrowProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-[9px]',
        'text-[11.5px] font-bold tracking-[0.2em] uppercase text-teal',
        center
          ? 'justify-center'
          : "before:content-[''] before:w-6 before:h-[1.5px] before:bg-teal before:rounded-sm",
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}
