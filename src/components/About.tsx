import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { PlaceholderTile } from './PlaceholderTile';
import { BraidIcon } from '@/icons';

export function About() {
  return (
    <section id="about" className="py-[110px] max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-6 grid grid-cols-[0.9fr_1.1fr] gap-16 items-center max-[1080px]:grid-cols-1 max-[1080px]:gap-10">
        <div className="reveal rounded-[22px] overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5] max-[1080px]:max-w-[420px] max-[1080px]:mx-auto">
          <PlaceholderTile
            icon={<BraidIcon className="w-11! h-11!" />}
            label="Bliss African Hair Braiding"
            sub="Studio photography coming soon"
          />
        </div>
        <div className="reveal [transition-delay:0.1s]">
          <Eyebrow>About Bliss</Eyebrow>
          <h2 className="text-[clamp(28px,3.6vw,40px)] my-[14px] leading-[1.15] mb-[18px]">
            Where Beauty Meets Bliss
          </h2>
          <p className="text-charcoal-soft text-[16px] my-[18px] max-w-[480px] mb-[26px]">
            Bliss African Hair Braiding provides professional African hair braiding services in
            Augusta, Georgia, with a focus on beautiful results, careful styling, customer
            comfort, and a welcoming experience.
          </p>
          <p className="text-charcoal-soft text-[16px] my-[18px] max-w-[480px] mb-[26px]">
            Every appointment is treated with care and attention to detail, from your first
            consultation to the final style.
          </p>
          <Button as="a" href="#services" variant="outline-dark" className="max-md:w-full">
            View Our Styles
          </Button>
        </div>
      </div>
    </section>
  );
}
