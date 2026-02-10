import { Metadata } from 'next'
import {
  Section,
  Hero,
  HeroTitle,
  Quote,
  Gallery,
  GalleryItem,
  ReservationCTA,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'
import { generateEnPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateEnPageMetadata({
  title: 'Dining',
  description: 'Dining comes first. Temperature, aroma, silence are part of the experience.',
  path: '/dining',
})

export default function DiningPageEn() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.dining}
        imageAlt="Counter at dusk"
      >
        <HeroTitle className="text-en">
          Dining comes first
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote className="text-en">
            The stay exists<br />
            to receive the lingering taste
          </Quote>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="pt-0">
        <Gallery
          images={[
            { src: siteImages.dining.dish, alt: 'Seasonal dish' },
            { src: siteImages.dining.vessel, alt: 'Vessel detail' },
          ]}
          columns={2}
          aspectRatio="detail"
        />
      </Section>

      <Divider />

      {/* Counter */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-xl tracking-wider mb-8 text-en">Counter dining</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider text-en">
              Explanations minimal<br />
              Taste and resonance speak
            </p>
          </div>
          <GalleryItem
            src={siteImages.dining.atmosphere}
            alt="Counter atmosphere"
            aspectRatio="wide"
          />
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">Please note</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider text-en space-y-2">
            <li>Dietary requests must be communicated in advance</li>
            <li>No strong fragrances</li>
            <li>Photography with consideration for others</li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80 text-en">
            Seating is limited<br />
            Reservations by phone or online
          </p>
          <p className="text-lg tracking-wider mt-8">
            <a
              href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              TEL {siteConfig.telInternational}
            </a>
          </p>
          <p className="text-sm tracking-wider opacity-70 mt-2">
            {siteConfig.telHours} JST
          </p>
          <div className="mt-10">
            <ReservationCTA
              variant="secondary"
              className="border-kinnezu text-kinnezu hover:bg-kinnezu-dark/20"
              label="Check Availability"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
