import React from 'react'
import clsx from 'clsx'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'cream' | 'charcoal' | 'transparent'
  padded?: boolean
  narrow?: boolean
}

const backgroundClasses = {
  white: 'bg-white',
  cream: 'bg-cream',
  charcoal: 'bg-charcoal',
  transparent: 'bg-transparent',
}

export default function SectionContainer({
  children,
  className,
  id,
  background = 'white',
  padded = true,
  narrow = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={clsx(
        backgroundClasses[background],
        padded && 'py-20 md:py-28 lg:py-36',
        className
      )}
    >
      <div
        className={clsx(
          'mx-auto px-6 md:px-10 lg:px-16',
          narrow ? 'max-w-4xl' : 'max-w-8xl'
        )}
      >
        {children}
      </div>
    </section>
  )
}
