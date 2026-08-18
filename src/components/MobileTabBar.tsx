import { SITE } from '@/data/site';
import { HomeIcon, SingleBraidIcon, CalendarIcon, WhatsAppSolidIcon, LocationIcon } from '@/icons';

/**
 * Sticky bottom tab bar shown only on mobile. Provides quick access to key sections.
 */
export function MobileTabBar() {
  return (
    <nav
      className="mobile-tabbar hidden md:!none fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t border-[var(--color-line)] shadow-[0_-10px_26px_-18px_rgba(61,33,89,0.3)] py-2 px-[6px] max-md:flex max-md:items-center"
      aria-label="Quick navigation"
    >
      <TabItem href="#home" label="Home">
        <HomeIcon className="w-[19px] h-[19px]" />
      </TabItem>
      <TabItem href="#services" label="Styles">
        <SingleBraidIcon strokeWidth={2} className="w-[19px] h-[19px]" />
      </TabItem>
      <TabItem href="#booking" label="Book" highlight>
        <CalendarIcon className="w-[19px] h-[19px]" />
      </TabItem>
      <TabItem href={SITE.whatsapp.url} label="WhatsApp" external wa>
        <WhatsAppSolidIcon className="w-[19px] h-[19px]" />
      </TabItem>
      <TabItem href="#contact" label="Contact">
        <LocationIcon strokeWidth={2} className="w-[19px] h-[19px]" />
      </TabItem>
    </nav>
  );
}

function TabItem({
  href,
  label,
  children,
  highlight,
  external,
  wa,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  highlight?: boolean;
  external?: boolean;
  wa?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={[
        'flex-1 flex flex-col items-center gap-1 text-[10px] font-bold py-[6px] px-[2px] rounded-xl transition-colors',
        highlight
          ? 'bg-teal text-white mx-[3px]'
          : wa
            ? 'text-[#1cb85a]'
            : 'text-charcoal-soft',
      ].join(' ')}
    >
      {children}
      {label}
    </a>
  );
}
