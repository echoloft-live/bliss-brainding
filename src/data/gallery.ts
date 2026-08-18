export interface GalleryItem {
  id: string;
  category: string;
  label: string;
  aspect: '3/4' | '1/1' | '4/5';
  icon: 'braid' | 'cornrows' | 'person' | 'twist' | 'sparkle';
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
  { id: 'g1', category: 'Knotless', label: 'Knotless', aspect: '3/4', icon: 'braid' },
  { id: 'g2', category: 'Cornrows', label: 'Cornrows', aspect: '1/1', icon: 'cornrows' },
  { id: 'g3', category: 'Box Braids', label: 'Box Braids', aspect: '4/5', icon: 'braid' },
  { id: 'g4', category: 'Fulani', label: 'Fulani', aspect: '3/4', icon: 'person' },
  { id: 'g5', category: 'Kids', label: 'Kids', aspect: '1/1', icon: 'person' },
  { id: 'g6', category: 'Boho', label: 'Boho', aspect: '4/5', icon: 'twist' },
  { id: 'g7', category: 'Special Occasion', label: 'Special Occasion', aspect: '3/4', icon: 'sparkle' },
  { id: 'g8', category: 'Knotless', label: 'Knotless', aspect: '1/1', icon: 'braid' },
];
