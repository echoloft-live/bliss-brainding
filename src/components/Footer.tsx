import { SITE } from '@/data/site';
import { BraidIcon } from '@/icons';

const exploreLinks = [
  { href: '#services', label: 'Our Styles' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
];

const bookLinks = [
  { href: '#booking', label: 'Book Appointment' },
  { href: SITE.whatsapp.url, label: 'WhatsApp Us', external: true },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[var(--color-line)] pt-[60px] pb-[110px] text-charcoal-soft max-md:pb-24">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-11 pb-10 border-b border-[var(--color-line)] max-md:grid-cols-1 max-md:gap-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-[11px]">
              <span className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center shrink-0 shadow-[var(--shadow-tight)]">
                <BraidIcon className="w-5 h-5 text-teal-soft" />
              </span>
              <span className="font-display text-[21px] font-semibold text-purple-deep">
                Bliss <em className="italic text-teal not-italic">Braiding</em>
              </span>
            </a>
            <p className="text-[13px] my-4 mb-[18px] max-w-[270px]">
              Professional African hair braiding in {SITE.fullLocation} — beautiful results,
              careful styling, welcoming service.
            </p>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Book" links={bookLinks} />

          <div>
            <h5 className="text-purple-deep font-sans text-[12.5px] tracking-[0.06em] uppercase mb-4 font-extrabold">
              Contact
            </h5>
            <ul>
              <li className="mb-[10px] text-[13.5px]">{SITE.fullLocation}</li>
              <li className="mb-[10px] text-[13.5px]">{SITE.phones.primary}</li>
              <li className="mb-[10px] text-[13.5px]">{SITE.phones.secondary}</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-[22px] text-[12px] flex-wrap gap-[10px]">
          <span>© {year} {SITE.name}. All Rights Reserved.</span>
          <span>{SITE.fullLocation}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h5 className="text-purple-deep font-sans text-[12.5px] tracking-[0.06em] uppercase mb-4 font-extrabold">
        {title}
      </h5>
      <ul>
        {links.map((link) => (
          <li key={link.label} className="mb-[10px]">
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-[13.5px] transition-colors duration-300 hover:text-violet"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
