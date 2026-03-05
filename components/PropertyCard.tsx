import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Property } from '@/lib/types'

interface PropertyCardProps {
  property: Property
  variant?: 'default' | 'large' | 'horizontal'
  className?: string
}

export default function PropertyCard({
  property,
  variant = 'default',
  className,
}: PropertyCardProps) {
  const { name, slug, location, shortDescription, images, bedrooms, guests, category } = property

  const categoryLabel = category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <Link
      href={`/properties/${slug}`}
      className={clsx(
        'group block relative overflow-hidden bg-white',
        'transition-shadow duration-500 hover:shadow-xl',
        className
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          'relative overflow-hidden bg-charcoal-100',
          variant === 'large' ? 'aspect-[4/5]' : 'aspect-[3/2]'
        )}
      >
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-white/90 text-charcoal text-xs uppercase tracking-widest font-body font-medium px-3 py-1.5">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium">
            {location}
          </p>
          <span className="text-charcoal-200 text-xs">·</span>
          <p className="text-xs text-charcoal-300 font-body">
            {bedrooms} bed · {guests} guests
          </p>
        </div>

        {/* Name */}
        <h3 className="font-display text-xl md:text-2xl text-charcoal mb-2 group-hover:text-sand transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal-400 font-body leading-relaxed line-clamp-2">
          {shortDescription}
        </p>

        {/* CTA link */}
        <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-body font-medium text-charcoal group-hover:text-sand transition-colors duration-300">
          <span>View Property</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
