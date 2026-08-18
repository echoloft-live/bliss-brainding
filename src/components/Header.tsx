import { useEffect, useRef, useState } from 'react';
import { useScrolled } from '@/hooks';
import { SITE } from '@/data/site';
import { Button } from './Button';
import {
  BraidIcon,
  ChevronIcon,
  CloseIcon,
  LocationIcon,
  PhoneIcon,
  WhatsAppSolidIcon,
  TikTokIcon,
  InstagramIcon,
  GoogleIcon,
} from '@/icons';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  // Lock body scroll while the drawer is open (keeps page context behind the scrim)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close when resizing up to desktop, so the two navigations never fight
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Keyboard: Escape closes, Tab cycles within the open drawer
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (active === first || !drawerRef.current.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Move focus into the drawer when it opens, back to the toggle when it closes
  useEffect(() => {
    if (menuOpen) {
      const t = window.setTimeout(() => {
        drawerRef.current
          ?.querySelector<HTMLElement>('a[href], button:not([disabled])')
          ?.focus();
      }, 90);
      return () => window.clearTimeout(t);
    }
    toggleRef.current?.focus();
  }, [menuOpen]);

  const onLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-[var(--ease-out-expo)]',
        scrolled
          ? 'bg-paper/92 backdrop-blur-[14px] shadow-[0_10px_26px_-18px_rgba(61,33,89,0.2)] border-b border-[var(--color-line)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div
        className={[
          'max-w-[1200px] mx-auto px-7 max-md:px-6 flex items-center justify-between',
          'h-[84px] transition-[height] duration-500 ease-[var(--ease-out-expo)]',
          scrolled ? 'md:h-[68px]' : '',
        ].join(' ')}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center shrink-0 shadow-[var(--shadow-tight)]">
            <BraidIcon className="w-5 h-5 text-teal-soft" />
          </span>
          <span
            className={[
              'font-display text-[21px] font-semibold transition-colors duration-300',
              scrolled ? 'text-purple-deep' : 'text-white',
            ].join(' ')}
          >
            Bliss <em className="italic text-teal not-italic">Braiding</em>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex gap-[30px] items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[
                    'relative inline-flex items-center text-[14px] font-semibold py-2',
                    'transition-colors duration-300',
                    "after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:w-0 after:h-[2px] after:bg-teal after:rounded-sm after:transition-all after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:w-full",
                    scrolled
                      ? 'text-charcoal-soft hover:text-purple-deep'
                      : 'text-white/85 hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Wrapper controls visibility so the button's own display class
              never fights a `hidden` utility (source-order conflict). */}
          <span className="hidden md:block">
            <Button as="a" href="#booking" variant="primary" size="sm">
              Book Appointment
            </Button>
          </span>

          <button
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={[
              'md:hidden relative -mr-2 flex h-11 w-11 items-center justify-center',
              'rounded-full cursor-pointer transition-colors duration-300 hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft',
            ].join(' ')}
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
          >
            <span className="relative block w-[22px] h-4" aria-hidden="true">
              <span
                className={[
                  'absolute left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-[var(--ease-out-expo)]',
                  scrolled ? 'bg-purple-deep' : 'bg-white',
                  menuOpen ? 'top-[7px] rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute top-[7px] left-0 right-0 h-[2px] rounded-full transition-all duration-300',
                  scrolled ? 'bg-purple-deep' : 'bg-white',
                  menuOpen ? 'opacity-0 scale-x-50' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-[var(--ease-out-expo)]',
                  scrolled ? 'bg-purple-deep' : 'bg-white',
                  menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Scrim: dims the page, click anywhere to dismiss */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={[
          'md:hidden fixed inset-0 z-[1100] bg-[#1A0B22]/60 backdrop-blur-[2px]',
          'transition-opacity duration-400 ease-[var(--ease-out-expo)]',
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal={menuOpen || undefined}
        aria-label="Site menu"
        inert={!menuOpen}
        className={[
          'md:hidden fixed top-0 right-0 z-[1200] h-dvh w-[86%] max-w-[400px]',
          'flex flex-col overflow-y-auto overscroll-contain',
          'bg-[linear-gradient(165deg,var(--color-purple-deep)_0%,#33204B_55%,#26333B_100%)]',
          'shadow-[-24px_0_60px_-24px_rgba(20,8,32,0.55)]',
          'transition-transform duration-500 ease-[var(--ease-out-expo)]',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Drawer header, aligned with the site header */}
        <div className="flex items-center justify-between h-[84px] px-6 shrink-0">
          <span className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <BraidIcon className="w-5 h-5 text-teal-soft" />
            </span>
            <span className="font-display text-[19px] font-semibold text-white">
              Bliss Braiding
            </span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 cursor-pointer transition-colors duration-200 hover:bg-white/12 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft"
          >
            <CloseIcon className="w-[22px] h-[22px]" />
          </button>
        </div>

        {/* Links: 48px+ rows, staggered entrance */}
        <nav aria-label="Mobile" className="px-4 pt-2">
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onLinkClick}
                  style={{ transitionDelay: menuOpen ? `${120 + i * 45}ms` : '0ms' }}
                  className={[
                    'group flex min-h-[52px] items-center justify-between gap-3 rounded-2xl px-4',
                    'text-white text-[16.5px] font-semibold',
                    'transition-[background-color,opacity,transform] duration-500 ease-[var(--ease-out-expo)]',
                    'hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft',
                    menuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-6 pointer-events-none',
                  ].join(' ')}
                >
                  {link.label}
                  <ChevronIcon
                    className="w-4 h-4 text-white/40 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-white/80"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer: conversions + contact */}
        <div className="mt-auto px-6 pt-6 pb-[calc(24px+env(safe-area-inset-bottom))]">
          <div className="flex flex-col gap-3">
            <Button
              as="a"
              href="#booking"
              variant="primary"
              className="w-full"
              onClick={onLinkClick}
            >
              Book Appointment
            </Button>
            <Button
              as="a"
              href={SITE.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full"
              onClick={onLinkClick}
            >
              <WhatsAppSolidIcon className="w-[18px] h-[18px]" />
              Chat on WhatsApp
            </Button>
          </div>

          <ul className="mt-6 pt-5 border-t border-white/12">
            <li>
              <a
                href={`tel:${SITE.phones.primaryTel}`}
                className="flex min-h-[44px] items-center gap-3 text-[14px] text-white/80 transition-colors duration-200 hover:text-white"
              >
                <PhoneIcon className="w-[17px] h-[17px] text-teal-soft shrink-0" />
                {SITE.phones.primary}
              </a>
            </li>
            <li className="flex min-h-[44px] items-center gap-3 text-[14px] text-white/80">
              <LocationIcon className="w-[17px] h-[17px] text-teal-soft shrink-0" />
              {SITE.fullLocation}
            </li>
          </ul>

          <div className="flex items-center gap-2 mt-4">
            <SocialCircle href={SITE.social.tiktok} label="TikTok">
              <TikTokIcon className="w-[18px] h-[18px]" />
            </SocialCircle>
            <SocialCircle href={SITE.social.instagram} label="Instagram">
              <InstagramIcon className="w-[18px] h-[18px]" />
            </SocialCircle>
            <SocialCircle href={SITE.social.google} label="Google Business">
              <GoogleIcon className="w-[18px] h-[18px]" />
            </SocialCircle>
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialCircle({
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
      className="flex h-11 w-11 items-center justify-center rounded-full text-white/75 cursor-pointer transition-colors duration-200 hover:bg-white/12 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-soft"
    >
      {children}
    </a>
  );
}
