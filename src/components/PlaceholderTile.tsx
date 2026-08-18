import type { ReactNode } from 'react';

interface PlaceholderTileProps {
  icon: ReactNode;
  label: string;
  sub?: string;
  className?: string;
}

/**
 * Decorative gradient tile used wherever real photography is not yet available.
 * Uses the same diagonal purple→teal gradient + diagonal hatch overlay as the original.
 */
export function PlaceholderTile({ icon, label, sub, className = '' }: PlaceholderTileProps) {
  return (
    <div
      className={[
        'relative w-full h-full rounded-inherit overflow-hidden',
        'flex flex-col items-center justify-center gap-[10px]',
        'bg-[linear-gradient(150deg,var(--color-purple-deep),var(--color-teal))]',
        'text-white/90 text-center p-[18px]',
        "before:content-[''] before:absolute before:inset-0 before:opacity-[0.18]",
        'before:bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.5)_0_2px,transparent_2px_26px)]',
        className,
      ].join(' ')}
    >
      <span className="relative z-[1] [&>svg]:w-[26px] [&>svg]:h-[26px]">{icon}</span>
      <span className="relative z-[1] font-display text-[16px] font-semibold">{label}</span>
      {sub ? (
        <span className="relative z-[1] text-[10.5px] tracking-[0.08em] uppercase opacity-80">
          {sub}
        </span>
      ) : null}
    </div>
  );
}
