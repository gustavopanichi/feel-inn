import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Feeling Inn – Curated Homes & Exceptional Stays in Portugal',
    template: '%s | Feeling Inn',
  },
  description:
    'Feeling Inn offers a handpicked portfolio of premium rental properties across Portugal. Short-term and long-term stays managed with care, from Lisbon apartments to coastal villas.',
  keywords: ['Portugal rental', 'luxury villa Portugal', 'Lisbon apartment', 'holiday rental Portugal', 'property management Portugal'],
  authors: [{ name: 'Feeling Inn' }],
  openGraph: {
    type: 'website',
    locale: 'en_PT',
    url: 'https://feelinginn.pt',
    siteName: 'Feeling Inn',
    title: 'Feeling Inn – Curated Homes & Exceptional Stays in Portugal',
    description: 'Handpicked properties across Portugal, managed with care and delivered with warmth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feeling Inn – Curated Stays in Portugal',
    description: 'Handpicked properties across Portugal, managed with care and delivered with warmth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1c1c1c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-charcoal bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
