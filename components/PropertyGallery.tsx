'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface PropertyGalleryProps {
  images: string[]
  name: string
}

export default function PropertyGallery({ images, name }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Grid layout */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[60vh] md:h-[70vh]">
        {/* Main image */}
        <div
          className="col-span-4 md:col-span-2 row-span-2 relative cursor-pointer overflow-hidden bg-charcoal-100"
          onClick={() => { setActiveIndex(0); setLightboxOpen(true) }}
        >
          <Image
            src={images[0]}
            alt={`${name} – main view`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-700 ease-luxury"
          />
        </div>

        {/* Secondary images */}
        {images.slice(1, 5).map((src, i) => (
          <div
            key={i}
            className={clsx(
              'relative cursor-pointer overflow-hidden bg-charcoal-100',
              'hidden md:block col-span-1 row-span-1'
            )}
            onClick={() => { setActiveIndex(i + 1); setLightboxOpen(true) }}
          >
            <Image
              src={src}
              alt={`${name} – view ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-luxury"
            />
            {/* Show all photos button on last visible thumbnail */}
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                <span className="text-white text-sm font-body font-medium">
                  +{images.length - 4} photos
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
            }}
            className="absolute left-6 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${name} – view ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev + 1) % images.length)
            }}
            className="absolute right-6 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
                className={clsx(
                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                  i === activeIndex ? 'bg-white w-4' : 'bg-white/30'
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
