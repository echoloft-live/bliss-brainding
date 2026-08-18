import { useState, type FormEvent } from 'react';
import { SITE } from '@/data/site';
import { serviceOptions } from '@/data/services';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { WhatsAppIcon } from '@/icons';

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-[120px] max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5">
        <SectionHeader
          eyebrow="Booking"
          title="Ready for Your Next Style?"
          description="Choose your style, contact us, and let's get your next look started."
        />

        <div className="grid grid-cols-[0.85fr_1.15fr] gap-14 max-[1080px]:grid-cols-1">
          {/* Info card */}
          <div className="bg-white border border-[var(--color-line)] rounded-[22px] px-9 py-11 text-charcoal relative overflow-hidden shadow-[var(--shadow-tight)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_85%_100%,rgba(44,140,135,0.08),transparent_55%)]">
            <div className="relative z-[1]">
              <Eyebrow>Prefer to Message Us?</Eyebrow>
              <h3 className="text-purple-deep text-[26px] my-[14px] mb-4">
                Book Instantly on WhatsApp
              </h3>
              <p className="text-[14.5px] text-charcoal-soft mb-7">
                Send us your preferred style, date and any inspiration photos — we'll confirm
                your appointment directly.
              </p>
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] bg-lavender border border-violet-soft rounded-2xl px-5 py-[18px] mt-[6px] hover:bg-lavender/80 transition-colors"
              >
                <WhatsAppIcon className="w-[26px] h-[26px] shrink-0 text-whatsapp" stroke="#25D366" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.06em] text-charcoal-soft">
                    WhatsApp
                  </div>
                  <div className="font-bold text-[15px] text-purple-deep">
                    {SITE.whatsapp.number}
                  </div>
                </div>
              </a>
              <div className="mt-6 text-[13.5px] text-charcoal-soft">
                <div className="py-[6px]">Call: {SITE.phones.primary}</div>
                <div className="py-[6px]">Google Business: {SITE.phones.secondary}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[var(--color-line)] rounded-[22px] p-10 shadow-[var(--shadow-tight)] max-md:p-6"
          >
            <div className="grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
              <Field label="Name">
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14]"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  type="tel"
                  required
                  placeholder="(404) ..."
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14]"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14]"
                />
              </Field>
              <Field label="Preferred Service">
                <select
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14] appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%233D2159%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-no-repeat bg-[right_15px_center]"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date" full>
                <input
                  type="date"
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14]"
                />
              </Field>
              <Field label="Message" full>
                <textarea
                  rows={4}
                  placeholder="Tell us about the look you want..."
                  className="w-full px-[15px] py-[13px] rounded-[10px] border border-[var(--color-line)] bg-paper font-sans text-[14.5px] transition-[border-color,box-shadow] duration-300 focus:outline-none focus:border-violet-soft focus:ring-[3px] focus:ring-violet/[0.14] resize-y"
                />
              </Field>
            </div>
            <Button type="submit" variant="primary" className="w-full mt-[18px] py-4">
              {submitted ? 'Request Sent ✓' : 'Book Your Appointment'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? 'col-span-full' : ''}>
      <label className="block text-[11.5px] font-bold tracking-[0.04em] uppercase text-charcoal-soft mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
