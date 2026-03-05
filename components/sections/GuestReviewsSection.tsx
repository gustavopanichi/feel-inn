import React from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import { guestReviews } from '@/lib/data'

export default function GuestReviewsSection() {
  return (
    <SectionContainer background="charcoal" id="reviews">
      <SectionHeading
        eyebrow="Guest reviews"
        title="What our guests say"
        subtitle="Genuine experiences from guests who have stayed in our properties."
        align="center"
        light
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {guestReviews.map((review) => (
          <TestimonialCard key={review.id} review={review} light />
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center">
        {[
          { value: '500+', label: 'Happy guests' },
          { value: '4.9', label: 'Average rating' },
          { value: '57+', label: 'Curated properties' },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-display text-4xl md:text-5xl text-white mb-2">{value}</p>
            <p className="text-xs uppercase tracking-widest text-white/40 font-body font-medium">
              {label}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
