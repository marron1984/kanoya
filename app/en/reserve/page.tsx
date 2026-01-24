import { Metadata } from 'next'
import {
  Section,
  Hero,
  HeroTitle,
  Quote,
  ReservationCTA,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'
import { generateEnPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateEnPageMetadata({
  title: 'Reserve',
  description: 'We recommend reservations by phone. Online booking available.',
  path: '/reserve',
})

export default function ReservePageEn() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.reserve}
        imageAlt="Lobby calm"
      >
        <HeroTitle className="text-en">
          Reservations
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote className="text-en">
            We recommend reservations by phone<br />
            to discuss your stay in detail
          </Quote>
        </div>
      </Section>

      <Divider />

      {/* Phone - Primary */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">By telephone</h2>
          <p className="text-2xl md:text-3xl tracking-wider">
            <a
              href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
              className="hover:text-ink-muted transition-colors duration-300"
            >
              TEL {siteConfig.telInternational}
            </a>
          </p>
          <p className="text-sm text-ink-muted tracking-wider mt-4 text-en">
            {siteConfig.telHours} JST
          </p>
        </div>
      </Section>

      <Divider />

      {/* Online - Secondary */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">Online booking</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider mb-8 text-en">
            Check availability below
          </p>
          <ReservationCTA
            variant="secondary"
            label="Check Availability"
          />
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">Please note</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider text-en space-y-2">
            <li>Non-smoking</li>
            <li>Quiet environment</li>
            <li>Children by arrangement</li>
            <li>Dietary requirements in advance</li>
          </ul>
        </div>
      </Section>

      {/* Final */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <Quote className="text-en">
            Five rooms only<br />
            Each stay matters to us
          </Quote>
        </div>
      </Section>
    </>
  )
}
