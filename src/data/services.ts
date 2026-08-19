export interface Service {
  id: string;
  name: string;
  description: string;
  icon: 'braid' | 'cornrows' | 'circle' | 'person' | 'twist' | 'sparkle';
  priceNote: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic, versatile protective braids in the size and length you love.',
    icon: 'braid',
    priceNote: 'Contact us for pricing',
    image: '/images/service-box-braids.jpg',
  },
  {
    id: 'knotless-braids',
    name: 'Knotless Braids',
    description: 'A gentler, natural-looking finish with less tension at the root.',
    icon: 'braid',
    priceNote: 'Contact us for pricing',
    image: '/images/service-knotless-braids.jpg',
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Neat, close-to-scalp designs — simple styles or intricate patterns.',
    icon: 'cornrows',
    priceNote: 'Contact us for pricing',
    image: '/images/service-cornrows.jpg',
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Thicker, raised braids for a bold, elegant statement look.',
    icon: 'circle',
    priceNote: 'Contact us for pricing',
    image: '/images/service-goddess-braids.jpg',
  },
  {
    id: 'fulani-braids',
    name: 'Fulani Braids',
    description: 'Center braid with cornrow sides, finished with beads for detail.',
    icon: 'person',
    priceNote: 'Contact us for pricing',
    image: '/images/service-fulani-braids.jpg',
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Soft curly pieces left loose for an effortless, romantic finish.',
    icon: 'twist',
    priceNote: 'Contact us for pricing',
    image: '/images/service-boho-braids.jpg',
  },
  {
    id: 'kids-braids',
    name: 'Kids Braids',
    description: 'Gentle, comfortable styling with our little clients in mind.',
    icon: 'person',
    priceNote: 'Contact us for pricing',
    image: '/images/service-kids-braids.jpg',
  },
  {
    id: 'twists',
    name: 'Twists',
    description: 'Two-strand or Senegalese twists for a smooth, defined texture.',
    icon: 'twist',
    priceNote: 'Contact us for pricing',
    image: '/images/service-twists.jpg',
  },
  {
    id: 'custom',
    name: 'Custom Braiding Styles',
    description: 'Have something specific in mind? We\'ll bring your vision to life.',
    icon: 'sparkle',
    priceNote: 'Contact us for pricing',
    image: '/images/service-custom.jpg',
  },
];

export const serviceOptions = services.map((s) => s.name);
