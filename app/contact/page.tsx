'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SectionContainer from '@/components/ui/SectionContainer'
import Button from '@/components/ui/Button'

const SUBJECTS = [
  'General enquiry',
  'Book a property',
  'Concierge services',
  'Become an owner partner',
  'Press & media',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to form backend (e.g. Formspree, Resend, or API route)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-charcoal/20 bg-white px-4 py-3.5 text-sm font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-sand transition-colors duration-200'
  const labelClass = 'block text-xs uppercase tracking-widest font-body font-medium text-charcoal-400 mb-2'

  return (
    <>
      {/* Header */}
      <div className="bg-cream pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-8xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-widest text-sand font-body font-medium mb-6">
            Get in touch
          </p>
          <h1 className="font-display text-display-xl text-charcoal">
            We&apos;d love to hear from you
          </h1>
        </div>
      </div>

      <SectionContainer background="white" padded>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xl text-charcoal mb-4">Contact</h3>
                <ul className="space-y-3 text-sm font-body text-charcoal-500">
                  <li>
                    <a href="tel:+351210000000" className="hover:text-sand transition-colors">
                      +351 210 000 000
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@feelinginn.pt" className="hover:text-sand transition-colors">
                      hello@feelinginn.pt
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal mb-4">Office</h3>
                <address className="text-sm font-body text-charcoal-500 not-italic leading-relaxed">
                  Rua Augusta, 100
                  <br />
                  1100-053 Lisboa
                  <br />
                  Portugal
                </address>
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal mb-4">Hours</h3>
                <p className="text-sm font-body text-charcoal-500 leading-relaxed">
                  Monday – Friday: 9:00 – 18:00
                  <br />
                  Saturday: 10:00 – 14:00
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal mb-4">Response time</h3>
                <p className="text-sm font-body text-charcoal-500">
                  We respond to all enquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="border border-charcoal/10 p-12 text-center">
                <div className="w-12 h-12 border border-sand flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">Message received</h3>
                <p className="text-charcoal-400 font-body text-sm">
                  Thank you for reaching out. We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 000 000 000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClass}>Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a subject</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg">
                    Send message
                  </Button>
                </div>

                <p className="text-xs text-charcoal-300 font-body">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="underline hover:text-sand">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
