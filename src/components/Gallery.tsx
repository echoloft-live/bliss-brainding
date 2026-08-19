import { useState } from 'react';
import { galleryCategories, galleryItems } from '@/data/gallery';
import type { GalleryCategory } from '@/data/gallery';
import { SectionHeader } from './SectionHeader';

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>('All');

  const items =
    active === 'All'
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-[110px] bg-lavender max-md:py-20">
      <div className="max-w-[1200px] mx-auto px-7 max-md:px-6">
        <SectionHeader
          eyebrow="Braiding Gallery"
          title="A closer look at our work"
          description="A selection of finished looks by category — from everyday protective styles to statement pieces for special occasions."
        />

        {/* Filters */}
        <div className="flex gap-[10px] flex-wrap mb-10" role="group" aria-label="Filter gallery by style">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={[
                'min-h-[40px] px-[18px] rounded-full border text-[12.5px] font-bold transition-colors duration-200 cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                active === cat
                  ? 'bg-teal text-white border-transparent'
                  : 'bg-white border-[var(--color-line)] text-purple-deep hover:bg-paper',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-4 gap-5 [column-width:220px] max-[1080px]:columns-3 max-[1080px]:[column-width:180px] max-md:columns-2 max-md:[column-width:140px]">
          {items.map((item) => {
            const aspectMap = {
              '3/4': 'aspect-[3/4]',
              '1/1': 'aspect-square',
              '4/5': 'aspect-[4/5]',
            } as const;
            return (
              <div
                key={item.id}
                className={[
                  'break-inside-avoid mb-5 rounded-[18px] overflow-hidden shadow-[var(--shadow-tight)] relative',
                  aspectMap[item.aspect],
                ].join(' ')}
              >
                <img
                  src={item.image}
                  alt={`${item.label} braids`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-[14px] left-[14px] bg-white/92 text-purple-deep text-[10.5px] font-bold tracking-[0.04em] uppercase px-3 py-[6px] rounded-full z-[2]">
                  {item.category === 'Special Occasion' ? 'Occasion' : item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
