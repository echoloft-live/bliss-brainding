import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Button system
 *
 * Design rules (Material Design 3 / Apple HIG / WCAG 2.2):
 * - Touch targets are at least 44px tall (48px+ for prominent CTAs).
 * - Filled variants always pair white text with a background that meets
 *   WCAG AA (>= 4.5:1) at label sizes.
 * - Labels use sentence case, font-weight 600, and never wrap.
 * - Every variant has hover, pressed (active), keyboard-focus and disabled
 *   states. Focus uses a 2px ring with a transparent offset so it reads on
 *   both light and dark surfaces.
 */
type Variant = 'primary' | 'outline' | 'outline-dark' | 'whatsapp' | 'tiktok';
type Size = 'sm' | 'md';

const baseClasses = [
  'inline-flex items-center justify-center gap-2',
  'rounded-full font-semibold tracking-[0.01em] border border-transparent',
  'cursor-pointer select-none whitespace-nowrap',
  'transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out',
  'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:duration-75',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
  'disabled:pointer-events-none disabled:opacity-55',
].join(' ');

const variantClasses: Record<Variant, string> = {
  // teal #257A75 + white = 5.1:1 (AA)
  primary:
    'bg-teal text-white shadow-[var(--shadow-tight)] hover:bg-[#1E615D] hover:shadow-[0_16px_32px_-14px_rgba(37,122,117,0.55)] focus-visible:ring-teal',
  // ghost/outline for dark backgrounds
  outline:
    'border-[1.5px] border-white/70 text-white hover:bg-white/12 hover:border-white focus-visible:ring-white',
  // ghost/outline for light backgrounds
  'outline-dark':
    'border-[1.5px] border-violet-soft text-purple-deep hover:bg-lavender hover:border-violet focus-visible:ring-violet',
  // deep WhatsApp green + white = 5.2:1 (AA). Bright brand green is reserved
  // for the icon-only floating bubble.
  whatsapp:
    'bg-whatsapp text-white shadow-[0_12px_26px_-12px_rgba(14,122,110,0.55)] hover:bg-[#0B6157] focus-visible:ring-whatsapp',
  // deep purple #3D2159 + white = 13.5:1 (AAA)
  tiktok:
    'bg-purple-deep text-white shadow-[var(--shadow-tight)] hover:bg-[#2E1743] hover:shadow-[0_16px_34px_-14px_rgba(61,33,89,0.4)] focus-visible:ring-violet-soft',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-11 px-5 text-[13px]',
  md: 'h-[52px] px-7 text-[14.5px]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ((props as ButtonAsAnchor).as === 'a') {
    const { as: _as, variant: _v, size: _s, children: _c, className: _cn, ...anchorRest } =
      rest as ButtonAsAnchor & { as?: 'a'; variant?: Variant; size?: Size; children?: ReactNode; className?: string };
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, children: _c, className: _cn, ...btnRest } =
    rest as ButtonAsButton & { as?: 'button'; variant?: Variant; size?: Size; children?: ReactNode; className?: string };
  return (
    <button className={classes} {...btnRest}>
      {children}
    </button>
  );
}
