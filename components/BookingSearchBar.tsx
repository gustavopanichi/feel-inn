'use client'

import React, { useState } from 'react'
import clsx from 'clsx'

type Variant = 'hero' | 'inline'

interface BookingSearchBarProps {
  variant?: Variant
  className?: string
}

const DESTINATIONS = [
  'All Portugal',
  'Lisbon',
  'Porto',
  'Algarve',
  'Cascais',
  'Comporta',
  'Douro Valley',
  'Alentejo',
]

export default function BookingSearchBar({
  variant = 'hero',
  className,
}: BookingSearchBarProps) {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [guestDropOpen, setGuestDropOpen] = useState(false)

  const isHero = variant === 'hero'

  // Build the Talkguest search URL with parameters
  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (checkIn) params.set('checkin', checkIn)
    if (checkOut) params.set('checkout', checkOut)
    params.set('guests', String(guests))
    // Replace with actual Talkguest widget URL when available
    const talkguestUrl = `https://app.talkguest.com/search?${params.toString()}`
    window.open(talkguestUrl, '_blank')
  }

  const fieldBase = clsx(
    'w-full bg-transparent outline-none font-body transition-colors',
    isHero
      ? 'text-charcoal placeholder-charcoal/40 text-sm'
      : 'text-charcoal placeholder-charcoal/40 text-sm'
  )

  const labelBase = 'text-xs uppercase tracking-widest font-body font-medium text-charcoal/50 mb-1 block'

  if (isHero) {
    return (
      <div
        className={clsx(
          'w-full max-w-5xl mx-auto',
          className
        )}
      >
        <div className="bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
            {/* Destination */}
            <div className="px-6 py-5">
              <label className={labelBase}>Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={clsx(fieldBase, 'appearance-none cursor-pointer pr-4')}
              >
                <option value="">Anywhere in Portugal</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in */}
            <div className="px-6 py-5">
              <label className={labelBase}>Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={fieldBase}
              />
            </div>

            {/* Check-out */}
            <div className="px-6 py-5">
              <label className={labelBase}>Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className={fieldBase}
              />
            </div>

            {/* Guests + CTA */}
            <div className="flex items-stretch">
              <div className="relative flex-1 px-6 py-5 border-r border-charcoal/10">
                <label className={labelBase}>Guests</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-6 h-6 flex items-center justify-center border border-charcoal/20 hover:border-charcoal transition-colors text-charcoal"
                    aria-label="Decrease guests"
                  >
                    <span className="text-lg leading-none">−</span>
                  </button>
                  <span className="font-body text-sm text-charcoal min-w-[2ch] text-center">
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    className="w-6 h-6 flex items-center justify-center border border-charcoal/20 hover:border-charcoal transition-colors text-charcoal"
                    aria-label="Increase guests"
                  >
                    <span className="text-lg leading-none">+</span>
                  </button>
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="flex-shrink-0 bg-charcoal text-white px-6 py-5 text-xs uppercase tracking-widest font-body font-medium hover:bg-sand transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden lg:block">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Inline variant (used on properties page etc.)
  return (
    <div
      className={clsx(
        'bg-cream border border-charcoal/10',
        className
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
        <div className="bg-cream px-5 py-4">
          <label className={labelBase}>Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={clsx(fieldBase, 'appearance-none cursor-pointer')}
          >
            <option value="">All Portugal</option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-cream px-5 py-4">
          <label className={labelBase}>Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={fieldBase}
          />
        </div>
        <div className="bg-cream px-5 py-4">
          <label className={labelBase}>Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || new Date().toISOString().split('T')[0]}
            className={fieldBase}
          />
        </div>
        <div className="bg-cream px-5 py-4 flex items-end gap-3">
          <div className="flex-1">
            <label className={labelBase}>Guests</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-5 h-5 flex items-center justify-center border border-charcoal/20 hover:border-charcoal text-charcoal text-sm"
              >
                −
              </button>
              <span className="text-sm text-charcoal min-w-[1.5ch] text-center">{guests}</span>
              <button
                onClick={() => setGuests(Math.min(20, guests + 1))}
                className="w-5 h-5 flex items-center justify-center border border-charcoal/20 hover:border-charcoal text-charcoal text-sm"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="bg-charcoal text-white px-5 py-2.5 text-xs uppercase tracking-widest font-body font-medium hover:bg-sand transition-colors duration-300 whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
