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
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: '客室',
  description: '鹿のやの客室は五室のみ。それぞれの空間に異なる静けさがあります。',
  path: '/rooms',
})

export default function RoomsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.rooms}
        imageAlt="客室の窓辺"
      >
        <HeroTitle>
          それぞれに<br />
          異なる静けさ
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote>
            鹿のやの客室は<br />
            部屋の種類で選ぶものではありません
          </Quote>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider">
            光の入り方<br />
            壁の質感<br />
            夜の灯りの落ち方
          </p>
          <p className="mt-4 text-sm text-ink-muted leading-loose tracking-wider">
            それぞれの空間に<br />
            異なる居心地があります
          </p>
        </div>
      </Section>

      {/* Room Gallery */}
      <Section className="pt-0">
        <Gallery
          images={[
            { src: siteImages.rooms.window, alt: '窓からの光' },
            { src: siteImages.rooms.wall, alt: '壁の質感' },
            { src: siteImages.rooms.lighting, alt: '夜の灯り' },
          ]}
          columns={3}
          aspectRatio="gallery"
        />
      </Section>

      <Divider />

      {/* Shitsurai */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <GalleryItem
            src={siteImages.rooms.amenity}
            alt="アメニティの設え"
            aspectRatio="wide"
          />
          <div>
            <h2 className="text-xl tracking-wider mb-8">しつらえ</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              素材は多くを語りません<br />
              無垢の木 布 和紙<br />
              手に触れたときに<br />
              はじめて気づくものだけを置いています
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              過剰な設備や装飾はありません<br />
              必要なものだけを<br />
              静かに揃えています
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Amenities */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl tracking-wider mb-8 text-center">備品</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider text-center space-y-1">
            <li>館内着</li>
            <li>タオル類</li>
            <li>基礎アメニティ</li>
            <li>お茶 コーヒーのご用意</li>
          </ul>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider text-center">
            ご要望がございましたら<br />
            事前にお知らせください
          </p>
        </div>
      </Section>

      <Divider />

      {/* Washroom */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl tracking-wider mb-8">水まわり</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              洗面 浴室は<br />
              夜の時間を意識して設えています
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              灯りを落とし<br />
              一日の終わりを整えるための場所です
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Gallery
              images={[
                { src: siteImages.rooms.washbasin, alt: '洗面台' },
                { src: siteImages.rooms.bath, alt: '浴室' },
              ]}
              columns={2}
              aspectRatio="detail"
            />
          </div>
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">ご案内</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider">
            全室禁煙
          </p>
          <p className="mt-4 text-sm text-ink-muted leading-loose tracking-wider">
            客室数が少ないため 静かな環境を大切にしています<br />
            お子様のご宿泊については事前にご相談ください
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80">
            客室は五室のみのため 日程が限られます<br />
            ご希望の日がある場合は お早めにお問い合わせください
          </p>
          <p className="text-lg tracking-wider mt-8">
            <a
              href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              TEL {siteConfig.tel}
            </a>
          </p>
          <p className="text-sm tracking-wider opacity-70 mt-2">
            {siteConfig.telHours}
          </p>
          <div className="mt-10">
            <ReservationCTA
              variant="secondary"
              className="border-kinnezu text-kinnezu hover:bg-kinnezu-dark/20"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
