import React from 'react'
import clsx from 'clsx'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'mb-14 md:mb-20',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            'text-xs uppercase tracking-widest font-body font-medium mb-4',
            light ? 'text-sand-light' : 'text-sand'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'font-display text-display-lg',
          light ? 'text-white' : 'text-charcoal',
          align === 'center' && 'mx-auto'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-5 text-base md:text-lg font-body leading-relaxed max-w-2xl',
            light ? 'text-white/70' : 'text-charcoal-400',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
