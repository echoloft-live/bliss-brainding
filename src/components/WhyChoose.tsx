import { SectionHeader } from './SectionHeader';
import {
  SingleBraidIcon,
  PersonIcon,
  HeartOutlineIcon,
  LocationIcon,
} from '@/icons';
import type { ReactNode } from 'react';

interface WhyItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const items: WhyItem[] = [
  {
    icon: <SingleBraidIcon strokeWidth={1.8} className="w-5 h-5 text-white" />,
    title: 'Professional Braiding',
    description: 'Beautiful, detailed styles created with care.',
  },
  {
    icon: <PersonIcon strokeWidth={1.8} className="w-5 h-5 text-white" />,
    title: 'Personalized Service',
    description: 'Styles selected around your preferences and hair needs.',
  },
  {
    icon: <HeartOutlineIcon className="w-5 h-5 text-white" />,
    title: 'Quality Experience',
    description: 'A comfortable and welcoming braiding experience.',
  },
  {
    icon: <LocationIcon className="w-5 h-5 text-white" />,
    title: 'Augusta Based',
    description: 'Proudly serving clients in Augusta, Georgia.',
  },
];

export function WhyChoose() {
  return (
    <section className="py-[100px] bg-paper-dim max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5">
        <SectionHeader eyebrow="Why Choose Bliss" title="Braiding you can trust" center />

        <div className="grid grid-cols-4 gap-6 max-[1080px]:grid-cols-2 max-md:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[var(--color-line)] rounded-[18px] px-6 py-[30px] shadow-[var(--shadow-tight)] transition-transform duration-[400ms] ease-out hover:-translate-y-[6px]"
            >
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center mb-[18px]">
                {item.icon}
              </div>
              <h4 className="text-[17.5px] mb-2">{item.title}</h4>
              <p className="text-[13px] text-charcoal-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
