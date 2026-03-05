import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import BrandStatement from '@/components/sections/BrandStatement'
import PropertyCategoriesSection from '@/components/sections/PropertyCategoriesSection'
import FeaturedPropertiesSection from '@/components/sections/FeaturedPropertiesSection'
import GuestReviewsSection from '@/components/sections/GuestReviewsSection'
import ConciergeSection from '@/components/sections/ConciergeSection'
import OwnerCtaBanner from '@/components/sections/OwnerCtaBanner'

export const metadata: Metadata = {
  title: 'Curated Homes & Exceptional Stays in Portugal',
  description:
    'Feeling Inn curates a portfolio of premium rental properties across Portugal. From Lisbon apartments to coastal villas — managed with care, delivered with warmth.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStatement />
      <PropertyCategoriesSection />
      <FeaturedPropertiesSection />
      <GuestReviewsSection />
      <ConciergeSection />
      <OwnerCtaBanner />
    </>
  )
}
