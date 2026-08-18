import { useEffect } from 'react';
import {
  Header,
  Hero,
  Services,
  Gallery,
  About,
  WhyChoose,
  Booking,
  Follow,
  Testimonials,
  Contact,
  Footer,
  FloatingWhatsApp,
} from '@/components';
import { useReveal } from '@/hooks';

function App() {
  // Activate reveal-on-scroll for all `.reveal` elements in the document.
  useReveal(null);

  // Clean up any leftover scroll lock after navigation events (bfcache restores).
  useEffect(() => {
    const onPageshow = () => {
      document.body.style.overflow = '';
    };
    window.addEventListener('pageshow', onPageshow);
    return () => window.removeEventListener('pageshow', onPageshow);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[2000] focus:rounded-full focus:bg-white focus:text-purple-deep focus:text-[13.5px] focus:font-semibold focus:px-5 focus:py-3 focus:shadow-[var(--shadow-soft)]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <WhyChoose />
        <Booking />
        <Follow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
