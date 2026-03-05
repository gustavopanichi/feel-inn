'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navItems } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On non-home pages, always show solid navbar
  const isSolid = !isHome || scrolled || menuOpen

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isSolid
          ? 'bg-white shadow-sm border-b border-charcoal-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex-shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className={clsx(
                'font-display text-xl md:text-2xl tracking-wide transition-colors duration-500',
                isSolid ? 'text-charcoal' : 'text-white'
              )}
            >
              Feeling Inn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-xs uppercase tracking-widest font-body font-medium transition-colors duration-300',
                  isSolid
                    ? pathname === item.href
                      ? 'text-sand'
                      : 'text-charcoal hover:text-sand'
                    : pathname === item.href
                    ? 'text-sand-light'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={clsx(
                'text-xs uppercase tracking-widest font-body font-medium px-6 py-2.5 border transition-all duration-300',
                isSolid
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-charcoal'
              )}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={clsx(
                  'block h-px transition-all duration-300 origin-center',
                  isSolid ? 'bg-charcoal' : 'bg-white',
                  menuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={clsx(
                  'block h-px transition-all duration-300',
                  isSolid ? 'bg-charcoal' : 'bg-white',
                  menuOpen && 'opacity-0'
                )}
              />
              <span
                className={clsx(
                  'block h-px transition-all duration-300 origin-center',
                  isSolid ? 'bg-charcoal' : 'bg-white',
                  menuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden absolute inset-x-0 top-full bg-white border-b border-charcoal-100 transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'text-sm uppercase tracking-widest font-body font-medium transition-colors',
                pathname === item.href ? 'text-sand' : 'text-charcoal'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm uppercase tracking-widest font-body font-medium px-6 py-3 border border-charcoal text-charcoal text-center"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
