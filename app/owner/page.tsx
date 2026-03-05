import type { Metadata } from 'next'
import Image from 'next/image'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'
import Button from '@/components/ui/Button'
import { ownerServices, ownerTestimonials, managementModels } from '@/lib/data'

export const metadata: Metadata = {
  title: 'For Property Owners',
  description:
    'Partner with Feeling Inn to turn your property into a high-performing rental. Professional management, premium marketing and genuine care for your investment.',
}

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    message: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    sparkles: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  }
  return <span className="text-sand">{icons[icon]}</span>
}

export default function OwnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center min-h-[75vh] overflow-hidden bg-charcoal pt-24">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=80"
          alt="Premium property in Portugal"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-10 lg:px-16 py-20">
          <p className="text-xs uppercase tracking-ultra-wide text-sand font-body font-medium mb-6">
            For property owners
          </p>
          <h1 className="font-display text-display-2xl text-white mb-6 max-w-3xl leading-tight">
            Turn your property into a high-performing rental
          </h1>
          <p className="text-lg text-white/70 font-body max-w-xl mb-12">
            We manage premium short-term and long-term rental properties across Portugal,
            delivering exceptional results for property owners while providing outstanding
            experiences for guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Become a partner
            </Button>
            <Button href="/contact?type=consultation" variant="ghost" size="lg">
              Schedule a consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <SectionContainer background="white">
        <SectionHeading
          eyebrow="What we offer"
          title="Complete property management"
          subtitle="We handle every aspect of your property's performance, so you can enjoy the returns without the complexity."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {ownerServices.map((service) => (
            <div
              key={service.id}
              className="flex gap-6 p-8 border border-charcoal/10 hover:border-sand/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-sand/10 flex items-center justify-center">
                <ServiceIcon icon={service.icon} />
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-sm text-charcoal-400 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Management Models */}
      <SectionContainer background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Our portfolio"
              title="Proven across all rental models"
              subtitle="We have experience managing every type of residential rental — from high-demand short-term lets to long-stay furnished apartments."
            />
            <div className="space-y-6">
              {managementModels.map((model) => (
                <div key={model.id} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-display text-3xl text-sand">{model.count}</span>
                  </div>
                  <div className="border-l border-sand/30 pl-6">
                    <h4 className="font-body font-medium text-charcoal mb-1">{model.label}</h4>
                    <p className="text-sm text-charcoal-400 font-body">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80"
              alt="Managed property"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Owner Testimonials */}
      <SectionContainer background="charcoal">
        <SectionHeading
          eyebrow="Owner testimonials"
          title="Trusted by property owners"
          subtitle="What our partners say about working with Feeling Inn."
          align="center"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ownerTestimonials.map((review) => (
            <TestimonialCard key={review.id} review={review} light />
          ))}
        </div>
      </SectionContainer>

      {/* Owner Portal */}
      <SectionContainer background="cream">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-4">
            Owner dashboard
          </p>
          <h2 className="font-display text-display-md text-charcoal mb-6">
            Already a Feeling Inn partner?
          </h2>
          <p className="text-base text-charcoal-400 font-body mb-10">
            Access your owner portal to view performance reports, booking calendars,
            financial statements and more.
          </p>
          <Button
            href="https://owner.talkguest.com"
            external
            variant="primary"
            size="lg"
          >
            Access owner portal
          </Button>
        </div>
      </SectionContainer>
    </>
  )
}
