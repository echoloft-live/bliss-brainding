# Bliss African Hair Braiding

Marketing website for **Bliss African Hair Braiding** — a professional African hair braiding salon in Augusta, Georgia.

## Stack

- **[Vite](https://vitejs.dev/)** — fast build tooling & dev server
- **[React 18](https://react.dev/) + TypeScript** — type-safe component architecture
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling with a custom design-token theme
- **Google Fonts** — Playfair Display (display) + DM Sans (body)

## Project structure

```
src/
├── components/      # UI and section components
│   ├── layout/      # Header, Footer, FloatingWhatsApp, MobileTabBar
│   ├── sections/    # Hero, Services, Gallery, About, WhyChoose, Booking, Follow, Testimonials, Contact
│   └── ui/          # Button, Eyebrow, SectionHeader, PlaceholderTile
├── data/            # Typed content (services, testimonials, gallery, site config)
├── hooks/           # useScrolled, useReveal (IntersectionObserver)
├── icons/           # Inline SVG React icon components
├── App.tsx          # Page composition
├── main.tsx         # App entry
└── index.css        # Tailwind entry + design tokens + keyframes
```

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build locally
```

## Design tokens

The brand palette is defined in `src/index.css` as Tailwind `@theme` custom colors:

| Token             | Hex      | Purpose                         |
| ----------------- | -------- | ------------------------------- |
| `--color-purple-deep` | `#3D2159` | Primary deep purple (headers, hero) |
| `--color-violet`      | `#6E3FA3` | Mid violet accent               |
| `--color-violet-soft` | `#9B6FC7`| Soft violet (borders, hover)    |
| `--color-teal`        | `#2C8C87`| Primary brand accent (CTAs)     |
| `--color-teal-soft`   | `#5FBFB6`| Lighter teal (icon accents)     |
| `--color-lavender`    | `#F3EDFA`| Section wash background         |
| `--color-paper`       | `#FBF8F5`| Base page background            |
| `--color-whatsapp`    | `#25D366`| WhatsApp CTAs                   |

## SEO & structured data

- Meta description, OpenGraph tags, and JSON-LD `HairSalon` / `LocalBusiness` schema are in `index.html`.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- Decorative placeholder tiles (used until real client photography is available) carry the "Photo coming soon" sublabel.

## Accessibility notes

- Skip-to-content friendly (all sections are reachable by anchor links).
- Mobile menu toggle has `aria-label`, `aria-expanded`, and locks body scroll when open.
- `prefers-reduced-motion` is respected (animations disabled in `index.css`).
- All social/external links use `rel="noopener noreferrer"`.
