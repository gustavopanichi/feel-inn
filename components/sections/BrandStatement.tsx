import React from 'react'
import Link from 'next/link'
import SectionContainer from '@/components/ui/SectionContainer'

export default function BrandStatement() {
  return (
    <SectionContainer background="cream" className="py-28 md:py-40">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-8">
          Our Philosophy
        </p>
        <h2 className="font-display text-display-xl text-charcoal leading-[1.06] mb-10">
          We believe a home tells a story.
          <br />
          <span className="italic text-sand">We help you live it.</span>
        </h2>
        <p className="text-lg text-charcoal-400 font-body leading-relaxed max-w-2xl mb-10">
          Feeling Inn curates a portfolio of exceptional properties across Portugal —
          each one selected for its character, location and the experience it offers.
          From intimate city apartments to private coastal villas, every stay is managed
          with the care and attention of a trusted host.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-body font-medium text-charcoal hover:text-sand transition-colors duration-300 group"
        >
          <span>Our story</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </SectionContainer>
  )
}
