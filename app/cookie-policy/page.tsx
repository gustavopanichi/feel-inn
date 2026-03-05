import type { Metadata } from 'next'
import SectionContainer from '@/components/ui/SectionContainer'

export const metadata: Metadata = { title: 'Cookie Policy' }

export default function CookiePolicyPage() {
  return (
    <>
      <div className="bg-cream pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <h1 className="font-display text-display-lg text-charcoal">Cookie Policy</h1>
        </div>
      </div>
      <SectionContainer background="white" narrow>
        <div className="prose max-w-none font-body text-charcoal-600">
          <p className="text-sm text-charcoal-400 mb-8">Last updated: January 2025</p>
          <p>
            This Cookie Policy explains how Feeling Inn uses cookies and similar tracking
            technologies on our website.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit our website.
            They help us provide a better experience by remembering your preferences and
            understanding how you use our site.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Types of cookies we use</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Essential cookies</strong>: required for the website to function correctly</li>
            <li><strong>Analytics cookies</strong>: help us understand how visitors interact with our site</li>
            <li><strong>Marketing cookies</strong>: used to deliver relevant advertising</li>
          </ul>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Managing cookies</h2>
          <p>
            You can control and delete cookies through your browser settings. Disabling certain
            cookies may affect the functionality of our website.
          </p>
        </div>
      </SectionContainer>
    </>
  )
}
