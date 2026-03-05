import type { Metadata } from 'next'
import BookingSearchBar from '@/components/BookingSearchBar'
import PropertyCard from '@/components/PropertyCard'
import SectionContainer from '@/components/ui/SectionContainer'
import { properties, categories } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Properties',
  description:
    'Browse our curated portfolio of premium rental properties across Portugal – city apartments, beach houses, luxury villas and more.',
}

interface PropertiesPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const { category } = await searchParams

  const filtered = category
    ? properties.filter((p) => p.category === category)
    : properties

  return (
    <>
      {/* Page header */}
      <div className="bg-charcoal pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-4">
            Our portfolio
          </p>
          <h1 className="font-display text-display-xl text-white mb-6">
            {category
              ? categories.find((c) => c.slug === category)?.name ?? 'Properties'
              : 'All Properties'}
          </h1>
          <p className="text-white/60 font-body max-w-xl">
            {filtered.length} curated properties available across Portugal
          </p>
        </div>
      </div>

      {/* Booking bar */}
      <div className="bg-charcoal pb-0">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 pb-0">
          <BookingSearchBar variant="inline" />
        </div>
      </div>

      {/* Category filters */}
      <div className="bg-cream border-b border-charcoal/10 sticky top-[72px] z-30">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex gap-8 overflow-x-auto py-5 scrollbar-hide">
            <Link
              href="/properties"
              className={clsx(
                'text-xs uppercase tracking-widest font-body font-medium whitespace-nowrap transition-colors flex-shrink-0 pb-1',
                !category
                  ? 'text-charcoal border-b border-charcoal'
                  : 'text-charcoal-400 hover:text-charcoal'
              )}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/properties?category=${cat.slug}`}
                className={clsx(
                  'text-xs uppercase tracking-widest font-body font-medium whitespace-nowrap transition-colors flex-shrink-0 pb-1',
                  category === cat.slug
                    ? 'text-charcoal border-b border-charcoal'
                    : 'text-charcoal-400 hover:text-charcoal'
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Property grid */}
      <SectionContainer background="white">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal mb-4">No properties found</p>
            <p className="text-charcoal-400 font-body">
              Try adjusting your filters or{' '}
              <Link href="/properties" className="text-sand underline-offset-2 underline">
                view all properties
              </Link>
              .
            </p>
          </div>
        )}
      </SectionContainer>
    </>
  )
}
