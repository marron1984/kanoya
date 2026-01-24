import { Metadata } from 'next'
import {
  Section,
  Hero,
  HeroTitle,
  Quote,
  GalleryItem,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'アクセス',
  description: '奈良 鹿のやへのアクセス。春日大社、奈良公園へは徒歩圏内です。',
  path: '/access',
})

export default function AccessPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.access}
        imageAlt="奈良公園の風景"
      >
        <HeroTitle>
          奈良公園の<br />
          ほど近く
        </HeroTitle>
      </Hero>

      {/* Address */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">所在地</h2>
          <address className="not-italic text-sm text-ink-muted leading-loose tracking-wider">
            <p className="text-ink-main text-base mb-4">{siteConfig.name}</p>
            <p>{siteConfig.address.full}</p>
          </address>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider">
            春日大社 奈良公園へは徒歩圏内です
          </p>
        </div>
      </Section>

      {/* Map Area - placeholder */}
      <Section className="pt-0">
        <GalleryItem
          src={siteImages.access.map}
          alt="周辺地図"
          aspectRatio="hero"
        />
      </Section>

      <Divider />

      {/* Train */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-xl tracking-wider mb-8">電車でお越しの場合</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              最寄り駅より タクシーまたは徒歩にて<br />
              到着時間に余裕を持ってお越しください
            </p>
          </div>
          <div>
            <h2 className="text-xl tracking-wider mb-8">お車でお越しの場合</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              専用駐車場をご用意しております<br />
              台数に限りがございますので 事前にお知らせください
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Arrival */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">到着について</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider">
            チェックイン時刻前後は周辺が混み合う場合がございます<br />
            時間に余裕をもって 静かな到着をおすすめします
          </p>
        </div>
      </Section>

      {/* Exterior */}
      <Section className="pt-0">
        <GalleryItem
          src={siteImages.access.exterior}
          alt="外観"
          aspectRatio="wide"
        />
      </Section>
    </>
  )
}
