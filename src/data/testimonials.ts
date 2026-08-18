export interface Testimonial {
  id: string;
  initial: string;
  name: string;
  location: string;
  stars: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'aisha',
    initial: 'A',
    name: 'Aisha M.',
    location: 'Augusta, GA',
    stars: 5,
    quote:
      'My knotless braids came out perfect and lasted for weeks. So gentle on my edges too.',
  },
  {
    id: 'renee',
    initial: 'R',
    name: 'Renee T.',
    location: 'Augusta, GA',
    stars: 5,
    quote:
      "Booked my daughter's braids for picture day and the stylist was so patient with her.",
  },
  {
    id: 'keisha',
    initial: 'K',
    name: 'Keisha B.',
    location: 'Augusta, GA',
    stars: 5,
    quote:
      'Booking on WhatsApp was so easy, and the finished style was exactly what I asked for.',
  },
];
