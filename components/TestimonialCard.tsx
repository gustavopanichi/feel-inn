import React from 'react'
import clsx from 'clsx'
import type { Review } from '@/lib/types'

interface TestimonialCardProps {
  review: Review
  light?: boolean
  className?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={clsx(
            'w-3.5 h-3.5',
            i < rating ? 'text-sand fill-current' : 'text-charcoal-200 fill-current'
          )}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({
  review,
  light = false,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between p-8 md:p-10',
        light ? 'bg-white/5 border border-white/10' : 'bg-cream',
        className
      )}
    >
      <div>
        <StarRating rating={review.rating} />
        <blockquote
          className={clsx(
            'mt-6 font-display text-xl md:text-2xl leading-snug',
            light ? 'text-white' : 'text-charcoal'
          )}
        >
          &ldquo;{review.text}&rdquo;
        </blockquote>
      </div>
      <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-end justify-between">
        <div>
          <p
            className={clsx(
              'text-sm font-body font-medium',
              light ? 'text-white' : 'text-charcoal'
            )}
          >
            {review.author}
          </p>
          {review.location && (
            <p
              className={clsx(
                'text-xs font-body mt-1',
                light ? 'text-white/50' : 'text-charcoal-400'
              )}
            >
              {review.location}
            </p>
          )}
          {review.date && (
            <p
              className={clsx(
                'text-xs font-body mt-0.5',
                light ? 'text-white/30' : 'text-charcoal-300'
              )}
            >
              {review.date}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
