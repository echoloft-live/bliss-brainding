import { testimonials } from '@/data/testimonials';
import { SITE } from '@/data/site';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[110px] max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5">
        <SectionHeader
          eyebrow="Testimonials"
          title="What our clients say"
          description="Placeholder reviews shown below — structured so real Google reviews can be added as they come in."
          center
        />

        <div className="grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-md:grid-cols-1">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white border border-[var(--color-line)] rounded-[20px] p-[30px] shadow-[var(--shadow-tight)]"
            >
              <div className="text-teal text-[14px] tracking-[3px] mb-4">
                {'★'.repeat(t.stars)}
              </div>
              <p className="quote text-[14.5px] text-charcoal mb-[22px] leading-[1.7]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-teal flex items-center justify-center text-white font-bold text-[14px] shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[13.5px] text-purple-deep">{t.name}</div>
                  <div className="text-[11.5px] text-charcoal-soft">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-11">
          <Button
            as="a"
            href={SITE.social.google}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
          >
            See Us on Google
          </Button>
        </div>
      </div>
    </section>
  );
}
