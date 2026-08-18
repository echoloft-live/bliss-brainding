import { useState, useEffect } from 'react';
import { useScrolled } from '@/hooks';
import { Button } from './Button';
import { BraidIcon } from '@/icons';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-[1000] py-5 transition-all duration-500 ease-[var(--ease-out-expo)]',
        scrolled
          ? 'py-[13px] bg-paper/92 backdrop-blur-[14px] shadow-[0_10px_26px_-18px_rgba(61,33,89,0.2)] border-b border-[var(--color-line)]'
          : '',
      ].join(' ')}
    >
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-[11px]" onClick={closeMenu}>
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

        {/* Desktop nav */}
        <nav className="max-md:hidden">
          <ul className="flex gap-[30px] items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[
                    'relative text-[14px] font-semibold py-1',
                    'transition-colors duration-300',
                    "after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-teal after:rounded-sm after:transition-all after:duration-350 after:ease-[var(--ease-out-expo)] hover:after:w-full",
                    scrolled ? 'text-charcoal' : 'text-white/88',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + menu toggle */}
        <div className="flex items-center gap-[14px]">
          <Button
            as="a"
            href="#booking"
            variant="primary"
            size="sm"
            className="max-md:!hidden"
          >
            Book Appointment
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Toggle menu'}
            aria-expanded={menuOpen}
            className="hidden max-md:flex relative w-[26px] h-5 bg-transparent border-0 cursor-pointer z-[1200]"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={[
                'absolute left-0 right-0 h-[2px] rounded-sm transition-all duration-300',
                scrolled ? 'bg-purple-deep' : 'bg-white',
                menuOpen ? 'top-[9px] rotate-45' : 'top-0',
              ].join(' ')}
            />
            <span
              className={[
                'absolute top-[9px] left-0 right-0 h-[2px] rounded-sm transition-all duration-300',
                scrolled ? 'bg-purple-deep' : 'bg-white',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-0 right-0 h-[2px] rounded-sm transition-all duration-300',
                scrolled ? 'bg-purple-deep' : 'bg-white',
                menuOpen ? 'top-[9px] -rotate-45' : 'top-[18px]',
              ].join(' ')}
            />
          </button>
        </div>

        {/* Mobile slide-out menu */}
        <ul
          className={[
            'fixed top-0 right-[-100%] w-[78%] h-screen bg-purple-deep flex-col justify-center gap-[26px]',
            'transition-right duration-500 ease-[var(--ease-out-expo)] px-10 z-[1100]',
            'md:hidden',
            menuOpen ? '!right-0 flex' : 'hidden',
          ].join(' ')}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-white text-[18px] font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <Button
              as="a"
              href="#booking"
              variant="primary"
              onClick={closeMenu}
              className="w-full justify-center"
            >
              Book Appointment
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
