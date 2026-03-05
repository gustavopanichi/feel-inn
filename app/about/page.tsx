import type { Metadata } from 'next'
import Image from 'next/image'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import { team } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Feeling Inn – our story, mission and the team behind Portugal\'s most curated property management company.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-cream pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-6">
            About us
          </p>
          <h1 className="font-display text-display-xl text-charcoal max-w-3xl">
            Born from a love of Portugal and a belief in exceptional hospitality
          </h1>
        </div>
      </div>

      {/* Story + Image */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A different kind of hospitality company"
            />
            <div className="space-y-5 text-base text-charcoal-500 font-body leading-relaxed">
              <p>
                Feeling Inn was founded with a simple conviction: that every stay should feel
                like staying in a home that truly belongs to you — curated, comfortable, and cared for.
              </p>
              <p>
                We began in Lisbon, managing a handful of carefully selected apartments in the city's
                most characterful neighbourhoods. Over the years, we have grown our portfolio across
                Portugal — from the Algarve coast to the Douro Valley — without ever compromising
                on the standards that define us.
              </p>
              <p>
                Today, Feeling Inn manages over 60 properties for a community of owners who trust
                us with their most valued asset, and for guests who return year after year because
                of the experience we create.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1000&q=80"
              alt="Lisbon streets"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Mission */}
      <SectionContainer background="charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-6">
            Our mission
          </p>
          <blockquote className="font-display text-display-md text-white leading-snug">
            "To curate Portugal's finest homes and deliver stays that inspire, restore and endure in memory."
          </blockquote>
        </div>
      </SectionContainer>

      {/* Team */}
      <SectionContainer background="cream">
        <SectionHeading
          eyebrow="The team"
          title="The people behind Feeling Inn"
          subtitle="A small, dedicated team with deep roots in Portuguese hospitality."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-full aspect-square overflow-hidden mb-6 bg-charcoal-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-3">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-charcoal-400 font-body leading-relaxed">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Office */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Our office"
              title="Come visit us in Lisbon"
            />
            <div className="space-y-4 text-sm text-charcoal-500 font-body">
              <div>
                <p className="font-medium text-charcoal mb-1">Address</p>
                <p>Rua Augusta, 100</p>
                <p>1100-053 Lisboa</p>
                <p>Portugal</p>
              </div>
              <div>
                <p className="font-medium text-charcoal mb-1">Hours</p>
                <p>Monday – Friday: 9:00 – 18:00</p>
                <p>Saturday: 10:00 – 14:00</p>
              </div>
              <div>
                <p className="font-medium text-charcoal mb-1">Contact</p>
                <a href="tel:+351210000000" className="text-sand hover:underline">
                  +351 210 000 000
                </a>
                <br />
                <a href="mailto:hello@feelinginn.pt" className="text-sand hover:underline">
                  hello@feelinginn.pt
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden">
            {/* Map placeholder – replace with Google Maps embed */}
            <div className="w-full h-full bg-charcoal-100 flex items-center justify-center text-charcoal-300 font-body text-sm">
              <span>Map embed here</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
