import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import type { Category } from '@/lib/types'

interface CategoryCardProps {
  category: Category
  className?: string
  priority?: boolean
}

export default function CategoryCard({
  category,
  className,
  priority = false,
}: CategoryCardProps) {
  const { slug, name, image, description, count } = category

  return (
    <Link
      href={`/properties?category=${slug}`}
      className={clsx(
        'group relative block overflow-hidden aspect-[3/4] bg-charcoal-100',
        className
      )}
    >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-white/60 font-body font-medium mb-2">
          {count} properties
        </p>
        <h3 className="font-display text-display-sm text-white mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-sm text-white/70 font-body leading-relaxed line-clamp-2 mb-5">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-body font-medium text-white/80 group-hover:text-sand-light transition-colors duration-300">
          <span>Explore</span>
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
