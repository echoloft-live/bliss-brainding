import { SITE } from '@/data/site';
import { Button } from './Button';
import { TikTokIcon } from '@/icons';

export function Follow() {
  return (
    <section className="py-[100px] bg-lavender text-charcoal text-center relative overflow-hidden max-md:py-20 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(44,140,135,0.10),transparent_60%)]">
      <div className="relative z-[1] max-w-[560px] mx-auto px-7 max-md:px-5">
        <span className="inline-flex items-center justify-center gap-[9px] text-[11.5px] font-bold tracking-[0.2em] uppercase text-teal">
          Follow Bliss
        </span>
        <h2 className="text-purple-deep text-[clamp(28px,4vw,40px)] my-4 mb-[14px]">
          Follow our latest hairstyles, transformations, and braiding inspiration on TikTok.
        </h2>
        <p className="text-charcoal-soft text-[15.5px] mb-[30px]">
          New looks, quick styling tips, and behind-the-scenes from the braiding chair — posted
          regularly.
        </p>
        <Button
          as="a"
          href={SITE.social.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          variant="tiktok"
        >
          <TikTokIcon className="w-4 h-4" />
          Follow Us on TikTok
        </Button>
      </div>
    </section>
  );
}
