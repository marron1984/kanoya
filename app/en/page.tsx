import Link from 'next/link'
import {
  Section,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Quote,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  ReservationCTA,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'

export default function HomePageEn() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.top}
        imageAlt="Kanoya entrance at dusk"
      >
        <HeroTitle className="text-en">
          A Quiet Stay<br />
          Just Five Rooms
        </HeroTitle>
        <HeroSubtitle className="text-en">
          A small auberge style inn<br />
          near Nara Park and Kasuga Forest
        </HeroSubtitle>
      </Hero>

      {/* Contact Bar */}
      <section className="py-8 border-b border-line-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm tracking-wider">
            <p className="text-ink-muted mb-1">Reservations</p>
            <p>
              <a
                href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
                className="link-subtle"
              >
                TEL {siteConfig.telInternational}
              </a>
            </p>
            <p className="text-ink-muted text-xs mt-1">{siteConfig.telHours} JST</p>
          </div>
          <ReservationCTA variant="secondary" label="Check Availability" />
        </div>
      </section>

      {/* Concept */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl tracking-wider mb-12 text-en">
            Where silence becomes hospitality
          </h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider text-en">
            We do not seek to impress<br />
            We arrange space light and time<br />
            for a quiet stay
          </p>
        </div>
      </Section>

      <Divider />

      {/* Rooms Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Card href="/en/rooms">
            <CardImage
              src={siteImages.rooms.overview}
              alt="Guest room"
              aspectRatio="wide"
            />
          </Card>
          <div>
            <CardTitle as="h2" className="text-en">Five rooms five kinds of calm</CardTitle>
            <CardText className="text-en">
              <p>
                Light texture and atmosphere<br />
                vary subtly
              </p>
            </CardText>
            <div className="mt-8">
              <Link href="/en/rooms" className="link-subtle text-sm tracking-wider text-en">
                View rooms
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Dining Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <CardTitle as="h2" className="text-en">A place to stay for the sake of dining</CardTitle>
            <CardText className="text-en">
              <p>
                Temperature aroma silence<br />
                are part of the experience
              </p>
            </CardText>
            <div className="mt-8">
              <Link href="/en/dining" className="link-subtle text-sm tracking-wider text-en">
                View dining
              </Link>
            </div>
          </div>
          <Card href="/en/dining" className="order-1 lg:order-2">
            <CardImage
              src={siteImages.dining.counter}
              alt="Counter dining"
              aspectRatio="wide"
            />
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80 text-en">
            Reservations are limited<br />
            Please contact us early for preferred dates
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
