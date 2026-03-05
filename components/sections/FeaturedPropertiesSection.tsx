import React from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import PropertyCard from '@/components/PropertyCard'
import Button from '@/components/ui/Button'
import { properties } from '@/lib/data'

export default function FeaturedPropertiesSection() {
  const featured = properties.filter((p) => p.featured).slice(0, 4)

  return (
    <SectionContainer background="cream" id="featured">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
        <SectionHeading
          eyebrow="Handpicked for you"
          title="Featured properties"
          className="mb-0"
        />
        <Button href="/properties" variant="outline" className="self-start md:self-auto flex-shrink-0">
          View all properties
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {featured.map((property, i) => (
          <PropertyCard
            key={property.id}
            property={property}
            variant={i === 0 ? 'large' : 'default'}
            className={i === 0 ? 'md:row-span-2' : ''}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
