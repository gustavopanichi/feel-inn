import type { Metadata } from 'next'
import SectionContainer from '@/components/ui/SectionContainer'

export const metadata: Metadata = { title: 'Terms & Conditions' }

export default function TermsPage() {
  return (
    <>
      <div className="bg-cream pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <h1 className="font-display text-display-lg text-charcoal">Terms & Conditions</h1>
        </div>
      </div>
      <SectionContainer background="white" narrow>
        <div className="prose max-w-none font-body text-charcoal-600">
          <p className="text-sm text-charcoal-400 mb-8">Last updated: January 2025</p>
          <p>
            These Terms & Conditions govern your use of the Feeling Inn website and services.
            By accessing or using our website, you agree to these terms.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Use of the website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way that does not
            infringe the rights of others or restrict their use and enjoyment of the site.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Bookings</h2>
          <p>
            All bookings made through our platform are subject to separate booking terms
            provided at the time of reservation, including cancellation and refund policies.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Limitation of liability</h2>
          <p>
            Feeling Inn shall not be liable for any indirect or consequential losses arising
            from use of this website or our services, except where required by law.
          </p>
          <p className="mt-8 text-sm text-charcoal-400">
            Full terms will be provided on the live site. Contact{' '}
            <a href="mailto:hello@feelinginn.pt" className="text-sand">hello@feelinginn.pt</a>{' '}
            for enquiries.
          </p>
        </div>
      </SectionContainer>
    </>
  )
}
