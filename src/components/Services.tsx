import { services } from '@/data/services';
import { serviceIconMap } from '@/icons';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { PlaceholderTile } from './PlaceholderTile';

export function Services() {
  return (
    <section id="services" className="py-[120px] pb-[100px] max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-5">
        <SectionHeader
          eyebrow="Our Styles"
          title="A style for every occasion"
          description="From protective everyday styles to statement looks for a special event. Pricing varies by length, size and hair used — contact us for pricing."
          center
        />

        <div className="grid grid-cols-3 gap-[26px] max-[1080px]:grid-cols-2 max-md:grid-cols-1">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <article
                key={service.id}
                className="bg-white rounded-[20px] overflow-hidden border border-[var(--color-line)] shadow-[var(--shadow-tight)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-[7px] hover:shadow-[var(--shadow-soft)]"
              >
                <div className="h-[190px] rounded-t-[20px] overflow-hidden">
                  <PlaceholderTile
                    icon={<Icon className="w-[26px] h-[26px]" />}
                    label={service.name}
                    sub="Photo coming soon"
                  />
                </div>
                <div className="p-6 pb-[26px]">
                  <h4 className="text-[19px] mb-2">{service.name}</h4>
                  <p className="text-[13.5px] text-charcoal-soft mb-4">{service.description}</p>
                  <span className="block text-[12px] font-bold uppercase tracking-[0.03em] text-teal mb-[14px]">
                    {service.priceNote}
                  </span>
                  <Button
                    as="a"
                    href="#booking"
                    variant="outline-dark"
                    size="sm"
                    className="w-full"
                  >
                    Book This Style
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
