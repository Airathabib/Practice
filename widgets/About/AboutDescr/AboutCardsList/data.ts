export type CardData = {
  id?: string;
  icon: string;
  title: string;
  descr: string;
  barcode: string;
};

export const data: CardData[] = [
  {
    id: '1',
    icon: '@/../card1.svg',
    title: 'PRECISION',
    descr:
      'Every detail counts at Schrift. We believe in designing with intention, where every element serves a purpose.',
    barcode: '@/../card_barcode1.svg',
  },
  {
    id: '2',
    icon: '@/../card2.svg',
    title: 'BOLD',
    descr:
      'Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement.',
    barcode: '@/../card_barcode2.svg',
  },
  {
    id: '3',
    icon: '@/../card3.svg',
    title: 'CLIENT - CENTERED',
    descr:
      'Your vision is our priority. We work closely with clients, valuing open communication and feedback at every step.',
    barcode: '@/../card_barcode3.svg',
  },
  {
    id: '4',
    icon: '@/../card4.svg',
    title: 'creative excellence',
    descr:
      'Our team is composed of experienced designers who bring fresh, innovative perspectives to each project',
    barcode: '@/../card_barcode1.svg',
  },
];
