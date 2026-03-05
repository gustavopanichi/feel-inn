import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

export const metadata: Metadata = {
  title: {
    default: 'Feeling Inn – Casas Selecionadas & Estadias Excepcionais em Portugal',
    template: '%s | Feeling Inn',
  },
  description:
    'A Feeling Inn oferece um portefólio selecionado de propriedades premium em Portugal. Estadias de curta e longa duração geridas com cuidado, de apartamentos em Lisboa a vilas costeiras.',
  keywords: ['aluguer Portugal', 'villa luxo Portugal', 'apartamento Lisboa', 'aluguer férias Portugal', 'gestão propriedades Portugal'],
  authors: [{ name: 'Feeling Inn' }],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://feelinginn.pt',
    siteName: 'Feeling Inn',
    title: 'Feeling Inn – Casas Selecionadas & Estadias Excepcionais em Portugal',
    description: 'Propriedades selecionadas em Portugal, geridas com cuidado e entregues com calor humano.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feeling Inn – Estadias Selecionadas em Portugal',
    description: 'Propriedades selecionadas em Portugal, geridas com cuidado e entregues com calor humano.',
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
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-charcoal bg-white antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
