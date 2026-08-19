export interface GalleryItem {
  id: string;
  category: string;
  label: string;
  aspect: '3/4' | '1/1' | '4/5';
  icon: 'braid' | 'cornrows' | 'person' | 'twist' | 'sparkle';
  image: string;
}

export const galleryCategories = [
  'All',
  'Knotless',
  'Box Braids',
  'Cornrows',
  'Fulani',
  'Boho',
  'Kids',
  'Special Occasion',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'Knotless', label: 'Knotless', aspect: '3/4', icon: 'braid', image: '/images/gallery-knotless-1.jpg' },
  { id: 'g2', category: 'Cornrows', label: 'Cornrows', aspect: '1/1', icon: 'cornrows', image: '/images/gallery-cornrows.jpg' },
  { id: 'g3', category: 'Box Braids', label: 'Box Braids', aspect: '4/5', icon: 'braid', image: '/images/gallery-box-braids.jpg' },
  { id: 'g4', category: 'Fulani', label: 'Fulani', aspect: '3/4', icon: 'person', image: '/images/gallery-fulani.jpg' },
  { id: 'g5', category: 'Kids', label: 'Kids', aspect: '1/1', icon: 'person', image: '/images/gallery-kids.jpg' },
  { id: 'g6', category: 'Boho', label: 'Boho', aspect: '4/5', icon: 'twist', image: '/images/gallery-boho.jpg' },
  { id: 'g7', category: 'Special Occasion', label: 'Special Occasion', aspect: '3/4', icon: 'sparkle', image: '/images/gallery-special-occasion.jpg' },
  { id: 'g8', category: 'Knotless', label: 'Knotless', aspect: '1/1', icon: 'braid', image: '/images/gallery-knotless-2.jpg' },
];
