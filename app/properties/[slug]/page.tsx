import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { properties } from '@/lib/data'
import PropertyGallery from '@/components/PropertyGallery'
import TestimonialCard from '@/components/TestimonialCard'
import Button from '@/components/ui/Button'
import SectionContainer from '@/components/ui/SectionContainer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)
  if (!property) return {}
  return {
    title: property.name,
    description: property.shortDescription,
  }
}

// Amenity icon map
function AmenityIcon({ icon }: { icon: string }) {
  const icons: Record<string, string> = {
    wifi: '📶',
    ac: '❄️',
    kitchen: '🍳',
    washer: '🫧',
    concierge: '🛎',
    pool: '🏊',
    bbq: '🔥',
    terrace: '🌿',
    garden: '🌱',
    parking: '🅿️',
    wine: '🍷',
  }
  return <span className="text-base">{icons[icon] ?? '✓'}</span>
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params
  const property = properties.find((p) => p.slug === slug)

  if (!property) notFound()

  const {
    name,
    location,
    city,
    description,
    images,
    amenities,
    bedrooms,
    bathrooms,
    guests,
    category,
    reviews,
  } = property

  const categoryLabel = category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <>
      {/* Gallery */}
      <div className="pt-[72px] md:pt-[88px]">
        <PropertyGallery images={images} name={name} />
      </div>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left column – property details */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal-400 font-body mb-6">
              <span>{city}</span>
              <span>·</span>
              <span>{categoryLabel}</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-display-lg text-charcoal mb-4">{name}</h1>
            <p className="text-sand text-sm font-body font-medium mb-8">{location}</p>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                `${bedrooms} bedroom${bedrooms !== 1 ? 's' : ''}`,
                `${bathrooms} bathroom${bathrooms !== 1 ? 's' : ''}`,
                `${guests} guests`,
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs uppercase tracking-widest font-body font-medium px-4 py-2 border border-charcoal/20 text-charcoal"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-12">
              <p className="text-base text-charcoal-600 font-body leading-relaxed">{description}</p>
            </div>

            {/* Amenities */}
            <div className="border-t border-charcoal/10 pt-10 mb-12">
              <h2 className="font-display text-2xl text-charcoal mb-8">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-3">
                    <AmenityIcon icon={amenity.icon} />
                    <span className="text-sm font-body text-charcoal-600">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {reviews && reviews.length > 0 && (
              <div className="border-t border-charcoal/10 pt-10">
                <h2 className="font-display text-2xl text-charcoal mb-8">Guest reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review) => (
                    <TestimonialCard key={review.id} review={review} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column – booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="border border-charcoal/10 p-8 bg-cream">
                <p className="text-xs uppercase tracking-widest text-charcoal-400 font-body mb-2">
                  Book this property
                </p>
                <h3 className="font-display text-2xl text-charcoal mb-6">{name}</h3>

                {/* Talkguest Widget Placeholder */}
                <div className="bg-white border border-charcoal/10 p-6 mb-6 text-center">
                  <p className="text-xs text-charcoal-400 font-body mb-4">
                    Availability & pricing
                  </p>
                  {/*
                    INTEGRATION NOTE:
                    Replace this section with the Talkguest booking widget.
                    Pass property.talkguestId to the widget.

                    Example:
                    <TalkguestWidget propertyId={property.talkguestId} />

                    Or embed an iframe:
                    <iframe
                      src={`https://app.talkguest.com/widget/${property.talkguestId}`}
                      className="w-full h-80"
                    />
                  */}
                  <Button
                    href={`https://app.talkguest.com/property/${property.talkguestId ?? property.id}`}
                    external
                    variant="primary"
                    fullWidth
                    size="lg"
                  >
                    Check availability
                  </Button>
                </div>

                {/* Concierge note */}
                <div className="flex gap-3 mt-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-sand/20 flex items-center justify-center">
                    <span className="text-sand text-sm">✦</span>
                  </div>
                  <p className="text-xs text-charcoal-400 font-body leading-relaxed">
                    Personal concierge service included with every stay. Our team is available 24/7.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-4 text-center">
                <Button href="/contact" variant="outline" fullWidth>
                  Ask us a question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
