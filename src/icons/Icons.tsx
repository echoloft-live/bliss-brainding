import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  viewBox: '0 0 24 24',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* Brand / Braid */
export const BraidIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3c-2 3-2 5-2 7 0 3 2 5 2 5s2-2 2-5c0-2 0-4-2-7Z" />
    <path d="M8 9c-2 1-3 3-3 5 0 3 2.5 5 3.5 6M16 9c2 1 3 3 3 5 0 3-2.5 5-3.5 6" />
  </svg>
);

export const SingleBraidIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3c-2 3-2 5-2 7 0 3 2 5 2 5s2-2 2-5c0-2 0-4-2-7Z" />
  </svg>
);

export const CornrowsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CircleIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const PersonIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r={props.strokeWidth === 1.8 || props.strokeWidth === 2 ? 4 : 3.2} />
    <path d={props.strokeWidth === 1.8 || props.strokeWidth === 2 ? "M4 21c0-4 3.5-7 8-7s8 3 8 7" : "M6 21c0-3.5 2.7-6 6-6s6 2.5 6 6"} />
  </svg>
);

export const TwistIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M8 3v18M16 3v18M4 8h4M16 8h4M4 16h4M16 16h4" />
  </svg>
);

export const SparkleIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
  </svg>
);

/* UI */
export const CheckIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const HeartIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21s-7-4.6-9.5-8.5C.7 9 2 5.5 5.2 4.6 7.3 4 9.4 5 12 8c2.6-3 4.7-4 6.8-3.4C22 5.5 23.3 9 21.5 12.5 19 16.4 12 21 12 21Z" />
  </svg>
);

export const HeartOutlineIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
);

export const LocationIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.6} {...props}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20l1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
  </svg>
);

export const WhatsAppSolidIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.86 14.24c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.1.09-1.78-.11-.41-.12-.93-.29-1.6-.57-2.83-1.22-4.67-4.06-4.81-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.25-.28.55-.34.73-.34h.53c.17 0 .4-.04.62.47.25.6.85 2.07.92 2.22.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.94 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.25.09 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.68-.18 1.38Z" />
  </svg>
);

export const TikTokIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46M14 4a5 5 0 0 0 5 5" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.6} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" stroke="none" />
  </svg>
);

export const GoogleIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={1.6} {...props}>
    <path d="M21 12a9 9 0 1 1-2.6-6.4" />
    <path d="M21 12h-9" />
  </svg>
);

export const HomeIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={2} {...props}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 9h18M8 3v3M16 3v3" />
  </svg>
);

export const serviceIconMap = {
  braid: SingleBraidIcon,
  cornrows: CornrowsIcon,
  circle: CircleIcon,
  person: PersonIcon,
  twist: TwistIcon,
  sparkle: SparkleIcon,
} as const;
