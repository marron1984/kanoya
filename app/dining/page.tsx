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
  title: '料理',
  description: '鹿のやは料理を軸に設えられた宿です。カウンター越しに感じる温度、器に残る余白、食後に訪れる沈黙。',
  path: '/dining',
})

export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.dining}
        imageAlt="カウンターの夕景"
      >
        <HeroTitle>
          料理と向き合う<br />
          夜の時間
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote>
            ここでは<br />
            食事が主であり<br />
            宿泊はその余韻を受け取るためにあります
          </Quote>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider">
            料理の温度<br />
            香り<br />
            器の重み
          </p>
          <p className="mt-4 text-sm text-ink-muted leading-loose tracking-wider">
            すべては<br />
            この空間で味わうために整えられています
          </p>
        </div>
      </Section>

      <Divider />

      {/* Cuisine */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Gallery
            images={[
              { src: siteImages.dining.dish, alt: '季節の一皿' },
              { src: siteImages.dining.vessel, alt: '器の佇まい' },
            ]}
            columns={2}
            aspectRatio="detail"
          />
          <div>
            <h2 className="text-xl tracking-wider mb-8">お料理</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              季節の素材を<br />
              その日の状態で
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              決まった型よりも<br />
              素材と向き合うことを大切にしています
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              一皿ごとに<br />
              説明は最小限です
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              言葉よりも<br />
              味と余韻でお楽しみください
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Counter */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl tracking-wider mb-8">カウンター</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              料理は<br />
              カウンター越しにご提供します
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              火の入る音<br />
              手の動き<br />
              空気の変化
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              それらも含めて<br />
              食事の時間です
            </p>
          </div>
          <GalleryItem
            src={siteImages.dining.atmosphere}
            alt="カウンターの雰囲気"
            aspectRatio="wide"
            className="order-1 lg:order-2"
          />
        </div>
      </Section>

      <Divider />

      {/* Flow */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">流れ</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider">
            夕食は一斉スタートではありません<br />
            開始時間はご予約時にご案内します<br />
            所要時間は約2〜3時間
          </p>
          <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
            ゆっくりと<br />
            時間をお使いください
          </p>
        </div>
      </Section>

      <Divider />

      {/* Dietary */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">食事制限</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider">
            アレルギーや<br />
            お控えの食材がある場合は<br />
            必ず事前にお知らせください
          </p>
          <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
            当日の対応が難しい場合がございます
          </p>
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">ご案内</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider space-y-2">
            <li>ドレスコードは設けておりません</li>
            <li>香水など強い香りはお控えください</li>
            <li>写真撮影は 周囲への配慮をお願いいたします</li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80">
            料理の席数にも限りがございます<br />
            ご宿泊 お食事のご予約は お電話またはオンラインにて
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
