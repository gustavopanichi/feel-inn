import React from 'react'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import CategoryCard from '@/components/CategoryCard'
import { categories } from '@/lib/data'

export default function PropertyCategoriesSection() {
  const [firstCategory, ...restCategories] = categories

  return (
    <SectionContainer background="white" id="categories">
      <SectionHeading
        eyebrow="Browse by type"
        title="Find your perfect stay"
        subtitle="From vibrant city apartments to secluded coastal villas, our portfolio spans the full breadth of Portugal's finest properties."
        align="left"
      />

      {/* Category grid: 1 large + 4 regular */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Featured category – spans 2 columns and 2 rows */}
        <div className="lg:col-span-2 lg:row-span-2">
          <CategoryCard
            category={firstCategory}
            className="h-full min-h-[400px] lg:min-h-[600px]"
            priority
          />
        </div>

        {/* Remaining categories */}
        {restCategories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            className="min-h-[280px] md:min-h-[300px]"
          />
        ))}
      </div>
    </SectionContainer>
  )
}
