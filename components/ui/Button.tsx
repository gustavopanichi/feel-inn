'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-charcoal text-white hover:bg-charcoal-700 border border-charcoal hover:border-charcoal-700',
  secondary:
    'bg-sand text-white hover:bg-sand-dark border border-sand hover:border-sand-dark',
  ghost:
    'bg-transparent text-white hover:bg-white/10 border border-white/40 hover:border-white',
  outline:
    'bg-transparent text-charcoal hover:bg-charcoal hover:text-white border border-charcoal',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-8 py-3.5 text-xs tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  fullWidth = false,
  loading = false,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center uppercase font-body font-medium',
    'transition-all duration-300 ease-luxury',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
