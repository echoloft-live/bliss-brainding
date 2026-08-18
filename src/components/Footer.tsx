import { SITE } from '@/data/site';
import { BraidIcon, TikTokIcon, InstagramIcon, GoogleIcon } from '@/icons';

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
    <footer className="bg-white border-t border-[var(--color-line)] pt-[60px] pb-12 text-charcoal-soft">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-6">
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
              Professional African hair braiding at {SITE.address}. Beautiful results, careful
              styling, and a welcoming experience.
            </p>
            <div className="flex items-center gap-2">
              <FooterSocial href={SITE.social.tiktok} label="TikTok">
                <TikTokIcon className="w-[17px] h-[17px]" />
              </FooterSocial>
              <FooterSocial href={SITE.social.instagram} label="Instagram">
                <InstagramIcon className="w-[17px] h-[17px]" />
              </FooterSocial>
              <FooterSocial href={SITE.social.google} label="Google Business">
                <GoogleIcon className="w-[17px] h-[17px]" />
              </FooterSocial>
            </div>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Book" links={bookLinks} />

          <div>
            <h5 className="text-purple-deep font-sans text-[12.5px] tracking-[0.06em] uppercase mb-4 font-extrabold">
              Contact
            </h5>
            <ul>
              <li className="mb-[10px] text-[13.5px]">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-violet"
                >
                  {SITE.address}
                </a>
              </li>
              <li className="mb-[10px] text-[13.5px]">
                <a
                  href={`tel:${SITE.phones.primaryTel}`}
                  className="transition-colors duration-200 hover:text-violet"
                >
                  {SITE.phones.primary}
                </a>
              </li>
              <li className="mb-[10px] text-[13.5px]">
                <a
                  href={`tel:${SITE.phones.secondaryTel}`}
                  className="transition-colors duration-200 hover:text-violet"
                >
                  {SITE.phones.secondary}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-[22px] text-[12px] flex-wrap gap-[10px]">
          <span>© {year} {SITE.name}. All Rights Reserved.</span>
          <span>{SITE.address}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-purple-deep transition-colors duration-300 hover:border-transparent hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {children}
    </a>
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
          <li key={link.label} className="mb-[6px]">
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex min-h-[36px] items-center text-[13.5px] transition-colors duration-300 hover:text-violet"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
