import { SITE } from '@/data/site';
import { WhatsAppSolidIcon } from '@/icons';

/**
 * Fixed circular WhatsApp CTA shown on desktop. Hidden on mobile (replaced by tab bar).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-[26px] right-[26px] z-[900] w-[58px] h-[58px] rounded-full bg-whatsapp items-center justify-center shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)] animate-[var(--animate-pulse-wa)] hover:bg-[#1fb855] transition-colors"
    >
      <WhatsAppSolidIcon className="w-7 h-7 text-white" />
    </a>
  );
}
