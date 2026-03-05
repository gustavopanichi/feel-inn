// ─── Core Data Types ─────────────────────────────────────────────────────────

export interface Property {
  id: string
  name: string
  slug: string
  location: string
  city: string
  category: PropertyCategory
  description: string
  shortDescription: string
  images: string[]
  amenities: Amenity[]
  reviews: Review[]
  bedrooms: number
  bathrooms: number
  guests: number
  featured: boolean
  talkguestId?: string
}

export type PropertyCategory =
  | 'city-apartments'
  | 'beach-houses'
  | 'luxury-villas'
  | 'family-homes'
  | 'long-stay-apartments'

export interface Category {
  id: string
  slug: PropertyCategory
  name: string
  image: string
  description: string
  count: number
}

export interface Amenity {
  id: string
  label: string
  icon: string
}

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  propertyId: string
  location?: string
  date?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface ManagementModel {
  id: string
  label: string
  count: number
  description: string
}

// ─── Booking Types ────────────────────────────────────────────────────────────

export interface BookingSearchParams {
  destination: string
  checkIn: Date | null
  checkOut: Date | null
  guests: number
}

export interface BookingBarProps {
  variant?: 'hero' | 'inline' | 'sticky'
  className?: string
}

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// ─── Section Props ────────────────────────────────────────────────────────────

export interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'cream' | 'charcoal'
  padded?: boolean
}
