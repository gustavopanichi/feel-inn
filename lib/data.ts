import type { Property, Category, Review, TeamMember, Service, ManagementModel } from './types'

// ─── Categories ───────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    id: '1',
    slug: 'city-apartments',
    name: 'City Apartments',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    description: 'Contemporary spaces in the heart of Lisbon and Porto',
    count: 14,
  },
  {
    id: '2',
    slug: 'beach-houses',
    name: 'Beach Houses',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    description: 'Coastal retreats with direct access to Portugal\'s finest shores',
    count: 8,
  },
  {
    id: '3',
    slug: 'luxury-villas',
    name: 'Luxury Villas',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    description: 'Private estates with pools, gardens and exceptional views',
    count: 6,
  },
  {
    id: '4',
    slug: 'family-homes',
    name: 'Family Homes',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    description: 'Spacious properties designed for memorable family stays',
    count: 9,
  },
  {
    id: '5',
    slug: 'long-stay-apartments',
    name: 'Long Stay Apartments',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    description: 'Furnished apartments for extended stays in Portugal',
    count: 20,
  },
]

// ─── Properties ───────────────────────────────────────────────────────────────

export const properties: Property[] = [
  {
    id: '1',
    name: 'Casa do Rossio',
    slug: 'casa-do-rossio',
    location: 'Baixa, Lisbon',
    city: 'Lisbon',
    category: 'city-apartments',
    description:
      'A beautifully restored 19th-century apartment in the heart of Lisbon\'s historic Baixa district. High ceilings, original azulejo tiles and panoramic views over Rossio Square create an atmosphere of timeless elegance.',
    shortDescription: 'Historic elegance meets modern comfort in Lisbon\'s iconic Baixa',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
    ],
    amenities: [
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'ac', label: 'Air Conditioning', icon: 'ac' },
      { id: 'kitchen', label: 'Fully Equipped Kitchen', icon: 'kitchen' },
      { id: 'washer', label: 'Washer & Dryer', icon: 'washer' },
      { id: 'concierge', label: 'Concierge Service', icon: 'concierge' },
    ],
    reviews: [],
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    featured: true,
  },
  {
    id: '2',
    name: 'Villa Comporta',
    slug: 'villa-comporta',
    location: 'Comporta, Setúbal',
    city: 'Comporta',
    category: 'luxury-villas',
    description:
      'An exceptional private villa nestled among the rice fields of Comporta, minutes from one of Europe\'s most pristine beaches. Modernist architecture, a heated pool and curated interiors make this an unrivalled retreat.',
    shortDescription: 'Modernist sanctuary amid Comporta\'s wild rice fields and dunes',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
    ],
    amenities: [
      { id: 'pool', label: 'Heated Pool', icon: 'pool' },
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'ac', label: 'Air Conditioning', icon: 'ac' },
      { id: 'bbq', label: 'BBQ & Outdoor Kitchen', icon: 'bbq' },
      { id: 'concierge', label: 'Concierge Service', icon: 'concierge' },
      { id: 'parking', label: 'Private Parking', icon: 'parking' },
    ],
    reviews: [],
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    featured: true,
  },
  {
    id: '3',
    name: 'Duplex Príncipe Real',
    slug: 'duplex-principe-real',
    location: 'Príncipe Real, Lisbon',
    city: 'Lisbon',
    category: 'city-apartments',
    description:
      'A sun-drenched duplex in Lisbon\'s most coveted neighbourhood. The apartment blends traditional Portuguese craftsmanship with a contemporary sensibility, offering a terrace with sweeping views of the Tagus.',
    shortDescription: 'Sunlit duplex with Tagus views in Lisbon\'s most sought-after quarter',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
    ],
    amenities: [
      { id: 'terrace', label: 'Private Terrace', icon: 'terrace' },
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'ac', label: 'Air Conditioning', icon: 'ac' },
      { id: 'kitchen', label: 'Fully Equipped Kitchen', icon: 'kitchen' },
      { id: 'concierge', label: 'Concierge Service', icon: 'concierge' },
    ],
    reviews: [],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    featured: true,
  },
  {
    id: '4',
    name: 'Casa da Praia Cascais',
    slug: 'casa-da-praia-cascais',
    location: 'Cascais, Lisbon Coast',
    city: 'Cascais',
    category: 'beach-houses',
    description:
      'A charming beach house steps from Cascais\' finest beaches. With its white-washed walls, teak terrace and effortless coastal aesthetic, this home encapsulates the best of the Portuguese Riviera.',
    shortDescription: 'Effortless coastal living on the Portuguese Riviera',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    amenities: [
      { id: 'garden', label: 'Private Garden', icon: 'garden' },
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'ac', label: 'Air Conditioning', icon: 'ac' },
      { id: 'bbq', label: 'BBQ', icon: 'bbq' },
      { id: 'parking', label: 'Private Parking', icon: 'parking' },
    ],
    reviews: [],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    featured: false,
  },
  {
    id: '5',
    name: 'Apartamento Bairro Alto',
    slug: 'apartamento-bairro-alto',
    location: 'Bairro Alto, Lisbon',
    city: 'Lisbon',
    category: 'city-apartments',
    description:
      'A sophisticated pied-à-terre in Lisbon\'s bohemian Bairro Alto. Curated interiors, exposed stone walls and proximity to the city\'s finest restaurants and galleries make this an ideal base.',
    shortDescription: 'A sophisticated pied-à-terre in Lisbon\'s bohemian heart',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200&q=80',
    ],
    amenities: [
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'ac', label: 'Air Conditioning', icon: 'ac' },
      { id: 'kitchen', label: 'Fully Equipped Kitchen', icon: 'kitchen' },
      { id: 'concierge', label: 'Concierge Service', icon: 'concierge' },
    ],
    reviews: [],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    featured: false,
  },
  {
    id: '6',
    name: 'Quinta do Douro',
    slug: 'quinta-do-douro',
    location: 'Vale do Douro, Porto',
    city: 'Douro Valley',
    category: 'luxury-villas',
    description:
      'A magnificent estate overlooking the Douro Valley\'s terraced vineyards. This quinta offers a truly immersive wine country experience, with a pool, wine cellar and panoramic views at every turn.',
    shortDescription: 'A magnificent wine estate overlooking the storied Douro Valley',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    ],
    amenities: [
      { id: 'pool', label: 'Infinity Pool', icon: 'pool' },
      { id: 'wine-cellar', label: 'Wine Cellar', icon: 'wine' },
      { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'wifi' },
      { id: 'parking', label: 'Private Parking', icon: 'parking' },
      { id: 'concierge', label: 'Concierge Service', icon: 'concierge' },
    ],
    reviews: [],
    bedrooms: 5,
    bathrooms: 5,
    guests: 10,
    featured: true,
  },
]

// ─── Reviews ──────────────────────────────────────────────────────────────────

export const guestReviews: Review[] = [
  {
    id: '1',
    author: 'Charlotte & James B.',
    rating: 5,
    text: 'An extraordinary stay. Feeling Inn curated every detail — the apartment was immaculate, the concierge service impeccable. We felt like locals from the first evening.',
    propertyId: '1',
    location: 'Casa do Rossio, Lisbon',
    date: 'November 2024',
  },
  {
    id: '2',
    author: 'Margot D.',
    rating: 5,
    text: 'Villa Comporta exceeded every expectation. The space, the calm, the access to those extraordinary beaches — it was the most restorative week of the year.',
    propertyId: '2',
    location: 'Villa Comporta',
    date: 'September 2024',
  },
  {
    id: '3',
    author: 'Tom & Elise W.',
    rating: 5,
    text: 'The Príncipe Real duplex has the most beautiful light I have ever experienced in a rented property. The view from the terrace at sunset is something I will not forget.',
    propertyId: '3',
    location: 'Duplex Príncipe Real, Lisbon',
    date: 'October 2024',
  },
  {
    id: '4',
    author: 'Sophie H.',
    rating: 5,
    text: 'Feeling Inn\'s attention to detail is remarkable. The welcome basket, the curated restaurant list, the seamless check-in — all perfect. We will return.',
    propertyId: '5',
    location: 'Apartamento Bairro Alto, Lisbon',
    date: 'December 2024',
  },
]

export const ownerTestimonials: Review[] = [
  {
    id: '10',
    author: 'Ricardo & Ana M.',
    rating: 5,
    text: 'Since partnering with Feeling Inn, our property has consistently performed above market. Their professionalism and care for both guests and owners is genuinely rare.',
    propertyId: '',
    location: 'Property owners, Lisbon',
  },
  {
    id: '11',
    author: 'Catherine F.',
    rating: 5,
    text: 'I was anxious about renting my family home. Feeling Inn gave me complete peace of mind — they treat every property as if it were their own.',
    propertyId: '',
    location: 'Property owner, Cascais',
  },
  {
    id: '12',
    author: 'Pedro A.',
    rating: 5,
    text: 'Exceptional yields, transparent reporting and a team that truly cares. Three years in and I could not imagine working with anyone else.',
    propertyId: '',
    location: 'Property owner, Porto',
  },
]

// ─── Concierge Services ───────────────────────────────────────────────────────

export const conciergeServices: Service[] = [
  {
    id: '1',
    title: 'Personal Check-In',
    description: 'A dedicated host greets every guest personally, ensuring a warm and seamless arrival experience.',
    icon: 'key',
  },
  {
    id: '2',
    title: 'Housekeeping',
    description: 'Professional cleaning and linen service, tailored to the rhythm of your stay.',
    icon: 'sparkles',
  },
  {
    id: '3',
    title: 'Local Recommendations',
    description: 'Curated guides to the finest restaurants, hidden gems and authentic local experiences.',
    icon: 'map',
  },
  {
    id: '4',
    title: 'Experience Bookings',
    description: 'Private wine tastings, yacht charters, surf lessons and cultural tours arranged on request.',
    icon: 'star',
  },
  {
    id: '5',
    title: 'Airport Transfers',
    description: 'Private chauffeur service to and from the airport, available around the clock.',
    icon: 'car',
  },
  {
    id: '6',
    title: 'In-Home Chef',
    description: 'Local chefs who bring the flavours of Portugal directly to your kitchen table.',
    icon: 'chef',
  },
]

// ─── Owner Services ───────────────────────────────────────────────────────────

export const ownerServices: Service[] = [
  {
    id: '1',
    title: 'Property Management',
    description: 'End-to-end operational management, from maintenance and inspections to key holding and guest relations.',
    icon: 'building',
  },
  {
    id: '2',
    title: 'Guest Communication',
    description: 'Professional, multilingual guest communication from initial inquiry through to post-stay review.',
    icon: 'message',
  },
  {
    id: '3',
    title: 'Cleaning & Maintenance',
    description: 'Rigorous standards for cleaning, linen changeovers and proactive property maintenance.',
    icon: 'sparkles',
  },
  {
    id: '4',
    title: 'Marketing & Distribution',
    description: 'Premium listings across all major platforms, with professional photography and dynamic pricing.',
    icon: 'chart',
  },
]

// ─── Management Models ────────────────────────────────────────────────────────

export const managementModels: ManagementModel[] = [
  {
    id: '1',
    label: 'AL – Short-Term Rentals',
    count: 25,
    description: 'Fully managed holiday lets with dynamic pricing and full guest services.',
  },
  {
    id: '2',
    label: 'Furnished Rentals',
    count: 20,
    description: 'Mid to long-term furnished apartments managed for quality corporate and relocation tenants.',
  },
  {
    id: '3',
    label: 'Reservation Management',
    count: 10,
    description: 'Channel management, pricing and reservations for owner-operated properties.',
  },
  {
    id: '4',
    label: 'Unfurnished Rentals',
    count: 7,
    description: 'Traditional tenancy management with full compliance and tenant vetting.',
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Ana Ferreira',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'With over a decade in Portuguese hospitality, Ana founded Feeling Inn with the conviction that every stay should be extraordinary.',
  },
  {
    id: '2',
    name: 'Miguel Santos',
    role: 'Head of Property',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Miguel oversees our property portfolio with an architect\'s eye for detail and a hotelier\'s commitment to excellence.',
  },
  {
    id: '3',
    name: 'Sofia Rodrigues',
    role: 'Guest Experience Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Sofia crafts the experiences that turn a stay into a memory, with personal attention to every guest journey.',
  },
  {
    id: '4',
    name: 'Tomás Alves',
    role: 'Owner Relations Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Tomás is the trusted point of contact for our property owners, ensuring transparency, performance and peace of mind.',
  },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navItems = [
  { label: 'Properties', href: '/properties' },
  { label: 'Owner', href: '/owner' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Livro de Reclamações', href: 'https://www.livroreclamacoes.pt', external: true },
]
