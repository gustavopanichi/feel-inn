import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs uppercase tracking-ultra-wide text-sand font-body font-medium mb-6">
        404
      </p>
      <h1 className="font-display text-display-xl text-charcoal mb-6">
        Page not found
      </h1>
      <p className="text-charcoal-400 font-body mb-12 max-w-md">
        The page you are looking for does not exist, or has been moved.
        Let us help you find what you need.
      </p>
      <div className="flex gap-4">
        <Button href="/" variant="primary">Return home</Button>
        <Button href="/properties" variant="outline">Browse properties</Button>
      </div>
    </div>
  )
}
