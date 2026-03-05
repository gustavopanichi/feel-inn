import type { Metadata } from 'next'
import SectionContainer from '@/components/ui/SectionContainer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-cream pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <h1 className="font-display text-display-lg text-charcoal">Privacy Policy</h1>
        </div>
      </div>
      <SectionContainer background="white" narrow>
        <div className="prose prose-charcoal max-w-none font-body text-charcoal-600">
          <p className="text-sm text-charcoal-400 mb-8">Last updated: January 2025</p>
          <p>
            Feeling Inn is committed to protecting your personal data and respecting your privacy.
            This Privacy Policy explains how we collect, use and protect information about you
            when you use our website or services.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Data we collect</h2>
          <p>
            We collect information you provide directly (such as name, email, phone number)
            when making enquiries or bookings. We also collect certain technical data automatically
            (such as IP addresses and browser information) through cookies and analytics tools.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">How we use your data</h2>
          <p>
            Your data is used to respond to enquiries, process bookings, improve our services
            and communicate with you. We do not sell personal data to third parties.
          </p>
          <h2 className="font-display text-2xl text-charcoal mt-10 mb-4">Your rights</h2>
          <p>
            Under GDPR, you have the right to access, correct or delete your personal data.
            To exercise these rights, contact us at{' '}
            <a href="mailto:hello@feelinginn.pt" className="text-sand">hello@feelinginn.pt</a>.
          </p>
          <p className="mt-8 text-sm text-charcoal-400">
            For full details, please contact us directly. This page will be updated with complete
            policy information prior to site launch.
          </p>
        </div>
      </SectionContainer>
    </>
  )
}
