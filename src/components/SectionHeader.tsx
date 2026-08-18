import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  /** max width for the header block (Tailwind class) */
  maxWidth?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  className = '',
  maxWidth = 'max-w-[600px]',
}: SectionHeaderProps) {
  return (
    <div
      className={[
        maxWidth,
        'mb-[52px]',
        center ? 'mx-auto text-center' : '',
        className,
      ].join(' ')}
    >
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.15] mt-[14px]">{title}</h2>
      {description ? (
        <p
          className={[
            'text-charcoal-soft mt-[14px] text-[15.5px]',
            center ? 'mx-auto max-w-[520px]' : '',
          ].join(' ')}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
