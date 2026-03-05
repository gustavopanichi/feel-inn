'use client'

import React from 'react'
import Image from 'next/image'
import BookingSearchBar from '@/components/BookingSearchBar'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen min-h-[680px] max-h-[960px] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=85"
        alt="Portugal coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/40 to-charcoal/70" />

      <div className="relative z-10 text-center px-6 md:px-10 w-full max-w-8xl mx-auto">
        <p className="text-xs uppercase tracking-ultra-wide text-white/70 font-body font-medium mb-6 animate-fade-in">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-display-2xl text-white mb-6 animate-fade-up">
          {t.hero.headline1}
          <br />
          <span className="italic text-sand-light">{t.hero.headline2}</span>
        </h1>
        <p className="text-base md:text-lg text-white/75 font-body max-w-xl mx-auto mb-14 animate-fade-up">
          {t.hero.subheadline}
        </p>
        <div className="animate-fade-up">
          <BookingSearchBar variant="hero" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-fade-in">
        <span className="text-xs uppercase tracking-widest font-body">{t.hero.scroll}</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/60 animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
