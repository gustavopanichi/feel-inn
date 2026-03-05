'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function OwnerCtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
        alt="Luxury villa in Portugal"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <p className="text-xs uppercase tracking-ultra-wide text-sand-light font-body font-medium mb-6">
          {t.owner.eyebrow}
        </p>
        <h2 className="font-display text-display-xl text-white mb-6 max-w-3xl mx-auto">
          {t.owner.title}
        </h2>
        <p className="text-base md:text-lg text-white/70 font-body max-w-xl mx-auto mb-12">
          {t.owner.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/owner" variant="secondary" size="lg">
            {t.owner.cta1}
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            {t.owner.cta2}
          </Button>
        </div>
      </div>
    </section>
  )
}
