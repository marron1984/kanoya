import { Metadata } from 'next'
import {
  Section,
  Hero,
  HeroTitle,
  Quote,
  Gallery,
  ReservationCTA,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'
import { generateEnPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateEnPageMetadata({
  title: 'Rooms',
  description: 'Each room a different stillness. Five rooms, minimal amenities, quiet environment.',
  path: '/rooms',
})

export default function RoomsPageEn() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.rooms}
        imageAlt="Guest room window"
      >
        <HeroTitle className="text-en">
          Each room<br />
          a different stillness
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote className="text-en">
            Light texture and atmosphere<br />
            vary subtly from room to room
          </Quote>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="pt-0">
        <Gallery
          images={[
            { src: siteImages.rooms.window, alt: 'Window light' },
            { src: siteImages.rooms.wall, alt: 'Wall texture' },
            { src: siteImages.rooms.lighting, alt: 'Evening lighting' },
          ]}
          columns={3}
          aspectRatio="gallery"
        />
      </Section>

      <Divider />

      {/* Amenities */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">Amenities</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider text-en">
            Minimal essentials only<br />
            Requests can be made in advance
          </p>
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8 text-en">Please note</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider text-en space-y-2">
            <li>Non-smoking</li>
            <li>Quiet environment essential</li>
            <li>Children by prior arrangement</li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80 text-en">
            Five rooms only<br />
            Early inquiry recommended
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
