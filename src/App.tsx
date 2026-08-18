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
  MobileTabBar,
} from '@/components';
import { useReveal } from '@/hooks';

function App() {
  // Activate reveal-on-scroll for all `.reveal` elements in the document.
  useReveal(null);

  // Close mobile menu (if open) when the user resizes up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 760) {
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <Header />
      <main>
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
      <MobileTabBar />
    </>
  );
}

export default App;
