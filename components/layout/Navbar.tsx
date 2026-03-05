'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const navLinks = [
  { href: '/properties', key: 'properties' },
  { href: '/owner', key: 'owner' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Image
              src="/logo.svg"
              alt="Feeling Inn"
              width={110}
              height={78}
              priority
              className={clsx(
                'transition-all duration-500 w-[88px] md:w-[110px]',
                isSolid ? '' : 'brightness-0 invert'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-xs uppercase tracking-widest font-body font-medium transition-colors duration-300',
                  isSolid
                    ? pathname === item.href
                      ? 'text-terracotta'
                      : 'text-charcoal hover:text-terracotta'
                    : pathname === item.href
                    ? 'text-sand-light'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {t.nav[item.key]}
              </Link>
            ))}

            {/* Language switcher */}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className={clsx(
                'text-xs uppercase tracking-widest font-body font-medium transition-colors duration-300 border px-3 py-1',
                isSolid
                  ? 'border-charcoal/30 text-charcoal/60 hover:text-terracotta hover:border-terracotta'
                  : 'border-white/40 text-white/60 hover:text-white hover:border-white'
              )}
              aria-label="Switch language"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>

            <Link
              href="/contact"
              className={clsx(
                'text-xs uppercase tracking-widest font-body font-medium px-6 py-2.5 border transition-all duration-300',
                isSolid
                  ? 'border-terracotta text-terracotta hover:bg-terracotta hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-charcoal'
              )}
            >
              {t.nav.bookNow}
            </Link>
          </nav>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-3 relative z-10">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className={clsx(
                'text-xs uppercase tracking-widest font-body font-medium border px-2.5 py-1 transition-colors duration-300',
                isSolid
                  ? 'border-charcoal/30 text-charcoal/60'
                  : 'border-white/40 text-white/60'
              )}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 -mr-2"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden absolute inset-x-0 top-full bg-white border-b border-charcoal-100 transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'text-sm uppercase tracking-widest font-body font-medium transition-colors',
                pathname === item.href ? 'text-terracotta' : 'text-charcoal'
              )}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm uppercase tracking-widest font-body font-medium px-6 py-3 border border-terracotta text-terracotta text-center"
          >
            {t.nav.bookNow}
          </Link>
        </nav>
      </div>
    </header>
  )
}
