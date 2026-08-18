import { SITE } from '@/data/site';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { CheckIcon, HeartIcon } from '@/icons';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-purple-deep pt-[104px] pb-16"
    >
      {/* Background with slow zoom */}
      <div
        className="absolute inset-0 bg-cover bg-[65%_center] animate-[var(--animate-hero-zoom)]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(61,20,80,0.88) 10%, rgba(44,60,90,0.55) 55%, rgba(44,140,135,0.35) 100%), url('https://images.unsplash.com/photo-1648010035195-6b0a56e14667?auto=format&fit=crop&w=1800&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Floating decorative accents */}
      <CheckIcon
        aria-hidden="true"
        className="absolute top-[20%] right-[10%] w-[26px] opacity-50 text-white/70 animate-[var(--animate-floaty)]"
      />
      <HeartIcon
        aria-hidden="true"
        className="absolute top-[65%] right-[18%] w-5 opacity-50 text-white/70 animate-[var(--animate-floaty)] [animation-delay:2s]"
      />

      {/* Content */}
      <div className="relative z-[2] py-[56px] w-full">
        <div className="max-w-[680px] mx-auto px-7 max-md:px-6">
          <div className="reveal in">
            <Eyebrow className="text-teal-soft">
              {SITE.name} · {SITE.fullLocation}
            </Eyebrow>
          </div>
          <h1 className="reveal in text-white text-[clamp(38px,6vw,64px)] leading-[1.08] my-5 [transition-delay:0.1s]">
            Beautiful Braids.
            <br />
            <span className="italic bg-[linear-gradient(135deg,var(--color-teal-soft),var(--color-violet-soft))] [-webkit-background-clip:text] [background-clip:text] text-transparent">
              Beautiful You.
            </span>
          </h1>
          <p className="reveal in text-white/85 text-[17px] max-w-[460px] mb-[34px] [transition-delay:0.2s]">
            Professional African hair braiding in {SITE.fullLocation}. Discover beautiful styles
            created with care, precision, and attention to detail.
          </p>
          <div className="reveal in flex gap-[14px] flex-wrap mb-11 [transition-delay:0.3s] max-md:grid max-md:gap-3">
            <Button as="a" href="#booking" variant="primary" className="max-md:w-full">
              Book an Appointment
            </Button>
            <Button as="a" href="#services" variant="outline" className="max-md:w-full">
              View Our Styles
            </Button>
          </div>
          <div className="reveal in flex gap-[26px] gap-y-3 flex-wrap [transition-delay:0.4s]">
            <Badge>{SITE.fullLocation}</Badge>
            <Badge>WhatsApp Booking</Badge>
            <Badge>All Ages Welcome</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[9px] text-white/85 text-[13px] font-semibold">
      <CheckIcon className="w-[17px] h-[17px] text-teal-soft shrink-0" />
      {children}
    </div>
  );
}
