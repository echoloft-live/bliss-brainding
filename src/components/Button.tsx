import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'outline-dark' | 'whatsapp' | 'tiktok';
type Size = 'sm' | 'md';

const baseClasses = [
  'inline-flex items-center justify-center gap-2',
  'rounded-full font-bold text-[14px]',
  'cursor-pointer border border-transparent',
  'whitespace-nowrap select-none',
  'transition-[transform,box-shadow,background,color] duration-[400ms] ease-[var(--ease-out-expo)]',
  'hover:-translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/50',
].join(' ');

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-teal text-white shadow-[var(--shadow-tight)] hover:bg-[#256F6B] hover:shadow-[0_18px_34px_-16px_rgba(44,140,135,0.5)]',
  outline: 'bg-transparent border-[1.5px] border-white/65 text-white hover:bg-white/14',
  'outline-dark':
    'bg-transparent border-[1.5px] border-violet-soft text-purple-deep hover:bg-lavender',
  whatsapp: 'bg-whatsapp text-white shadow-[0_12px_26px_-12px_rgba(37,211,102,0.5)]',
  tiktok:
    'bg-purple-deep text-white shadow-[var(--shadow-tight)] hover:bg-[#2E1743] hover:shadow-[0_16px_34px_-14px_rgba(61,33,89,0.4)]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-[18px] py-[10px] text-[12.5px]',
  md: 'px-[28px] py-[15px] text-[14px]',
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
