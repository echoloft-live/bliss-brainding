import { SITE } from '@/data/site';
import { WhatsAppSolidIcon } from '@/icons';

/**
 * Floating circular WhatsApp bubble (icon-only, brand green).
 * Visible on all breakpoints; sits above the safe-area inset on mobile.
 * Text buttons with white labels use the accessible `whatsapp` Button variant
 * instead, since bright green fails contrast for text.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[calc(20px+env(safe-area-inset-bottom))] right-5 md:bottom-7 md:right-7 z-[900] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-whatsapp-bright shadow-[0_12px_30px_-10px_rgba(14,122,110,0.65)] animate-[var(--animate-pulse-wa)] transition-colors duration-200 hover:bg-[#1FBE5C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft"
    >
      <WhatsAppSolidIcon className="w-7 h-7 text-white" />
    </a>
  );
}
