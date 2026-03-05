'use client'

import React from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/lib/data'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function PropertyCategoriesSection() {
  const { t } = useLanguage()
  const [firstCategory, ...restCategories] = categories

  // Translate category data
  const translateCategory = (cat: typeof firstCategory) => ({
    ...cat,
    name: t.categories.names[cat.slug] ?? cat.name,
    description: t.categories.descriptions[cat.slug] ?? cat.description,
  })

  return (
    <SectionContainer background="white" id="categories">
      <SectionHeading
        eyebrow={t.categories.eyebrow}
        title={t.categories.title}
        subtitle={t.categories.subtitle}
        align="left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="lg:col-span-2 lg:row-span-2">
          <CategoryCard
            category={translateCategory(firstCategory)}
            className="h-full min-h-[400px] lg:min-h-[600px]"
            priority
          />
        </div>
        {restCategories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={translateCategory(cat)}
            className="min-h-[280px] md:min-h-[300px]"
          />
        ))}
      </div>
    </SectionContainer>
  )
}
