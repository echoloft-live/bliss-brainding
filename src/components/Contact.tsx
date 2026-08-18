import { SITE } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import {
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  GoogleIcon,
} from '@/icons';

export function Contact() {
  return (
    <section id="contact" className="py-[110px] pb-[140px] bg-paper-dim max-md:py-20 max-md:pb-24">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch with Bliss"
          description={`Find us at ${SITE.address}. Walk-ins welcome, appointments preferred.`}
        />

        <div className="grid grid-cols-2 gap-[26px] max-md:grid-cols-1">
          <ContactCard
            icon={<LocationIcon className="w-[19px] h-[19px]" />}
            title="Location"
            description="Visit our studio"
          >
            <div className="text-[14.5px] text-purple-deep font-bold mt-1">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-violet"
              >
                {SITE.address}
              </a>
            </div>
          </ContactCard>

          <ContactCard
            icon={<PhoneIcon className="w-[19px] h-[19px]" />}
            title="Phone"
            description="Call or text"
          >
            <div className="text-[14.5px] text-purple-deep font-bold mt-1">
              <a
                href={`tel:${SITE.phones.primaryTel}`}
                className="transition-colors duration-200 hover:text-violet"
              >
                {SITE.phones.primary}
              </a>
            </div>
            <div className="text-[14.5px] text-purple-deep font-bold">
              <a
                href={`tel:${SITE.phones.secondaryTel}`}
                className="transition-colors duration-200 hover:text-violet"
              >
                {SITE.phones.secondary}
              </a>
            </div>
          </ContactCard>

          <ContactCard
            icon={<WhatsAppIcon className="w-[19px] h-[19px]" stroke="#fff" />}
            title="WhatsApp"
            description="Fastest way to book"
          >
            <div className="text-[14.5px] text-purple-deep font-bold mt-1">
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-violet"
              >
                {SITE.whatsapp.number}
              </a>
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[6px] h-[130px] rounded-[14px] bg-[linear-gradient(135deg,rgba(110,63,163,0.07),rgba(44,140,135,0.07))] border border-[var(--color-line)] flex flex-col items-center justify-center gap-[6px] text-[12.5px] text-charcoal-soft text-center p-[14px] transition-colors duration-200 hover:border-violet-soft hover:text-purple-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <LocationIcon className="w-[15px] h-[15px]" aria-hidden="true" />
              <span>{SITE.address}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-teal">
                Get Directions
              </span>
            </a>
          </ContactCard>

          <ContactCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="w-[19px] h-[19px]"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            }
            title="Follow Along"
            description="New styles posted regularly"
          >
            <div className="flex gap-3 mt-[18px]">
              <SocialLink href={SITE.social.tiktok} ariaLabel="TikTok">
                <TikTokIcon className="w-[18px] h-[18px]" strokeWidth={1.6} />
              </SocialLink>
              <SocialLink href={SITE.social.instagram} ariaLabel="Instagram">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </SocialLink>
              <SocialLink href={SITE.social.google} ariaLabel="Google Business">
                <GoogleIcon className="w-[18px] h-[18px]" />
              </SocialLink>
            </div>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[var(--color-line)] rounded-[20px] p-[30px] shadow-[var(--shadow-tight)]">
      <div className="w-[38px] h-[38px] rounded-[11px] bg-teal flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-[17px] mb-[6px]">{title}</h3>
      <p className="text-[14px] text-charcoal-soft">{description}</p>
      {children}
    </div>
  );
}

function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-11 h-11 rounded-full border border-violet-soft flex items-center justify-center transition-all duration-300 text-purple-deep hover:bg-teal hover:border-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      {children}
    </a>
  );
}
