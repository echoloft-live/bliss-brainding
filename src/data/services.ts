export interface Service {
  id: string;
  name: string;
  description: string;
  icon: 'braid' | 'cornrows' | 'circle' | 'person' | 'twist' | 'sparkle';
  priceNote: string;
}

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic, versatile protective braids in the size and length you love.',
    icon: 'braid',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'knotless-braids',
    name: 'Knotless Braids',
    description: 'A gentler, natural-looking finish with less tension at the root.',
    icon: 'braid',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Neat, close-to-scalp designs — simple styles or intricate patterns.',
    icon: 'cornrows',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Thicker, raised braids for a bold, elegant statement look.',
    icon: 'circle',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'fulani-braids',
    name: 'Fulani Braids',
    description: 'Center braid with cornrow sides, finished with beads for detail.',
    icon: 'person',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Soft curly pieces left loose for an effortless, romantic finish.',
    icon: 'twist',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'kids-braids',
    name: 'Kids Braids',
    description: 'Gentle, comfortable styling with our little clients in mind.',
    icon: 'person',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'twists',
    name: 'Twists',
    description: 'Two-strand or Senegalese twists for a smooth, defined texture.',
    icon: 'twist',
    priceNote: 'Contact us for pricing',
  },
  {
    id: 'custom',
    name: 'Custom Braiding Styles',
    description: 'Have something specific in mind? We\'ll bring your vision to life.',
    icon: 'sparkle',
    priceNote: 'Contact us for pricing',
  },
];

export const serviceOptions = services.map((s) => s.name);
