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
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: '過ごし方',
  description: '鹿のやでの一日の流れ。特別な演出はありません。時間そのものをお過ごしください。',
  path: '/experience',
})

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.experience}
        imageAlt="庭園の朝の光"
      >
        <HeroTitle>
          一日を<br />
          静かに整える
        </HeroTitle>
      </Hero>

      {/* Morning */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <GalleryItem
            src={siteImages.experience.morning}
            alt="早朝の奈良公園"
            aspectRatio="wide"
          />
          <div>
            <h2 className="text-xl tracking-wider mb-8">朝</h2>
            <Quote>
              早朝の奈良公園は<br />
              観光の気配がまだ届かない時間です
            </Quote>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              鹿の足音<br />
              湿った土の匂い<br />
              木々の間を抜ける光
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              一日の始まりを<br />
              静かに迎えてください
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Check-in */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl tracking-wider mb-8">チェックイン</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              チェックインは<br />
              慌ただしさのない時間帯に
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              必要なご案内は<br />
              簡潔にお伝えします
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              部屋に入り<br />
              灯りを落とし<br />
              まずはひと息
            </p>
          </div>
          <GalleryItem
            src={siteImages.experience.afternoon}
            alt="静かなチェックイン"
            aspectRatio="wide"
            className="order-1 lg:order-2"
          />
        </div>
      </Section>

      <Divider />

      {/* Dinner */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <GalleryItem
            src={siteImages.experience.evening}
            alt="夕食の時間"
            aspectRatio="wide"
          />
          <div>
            <h2 className="text-xl tracking-wider mb-8">夕食</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              料理が始まると<br />
              空間の温度が変わります
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              言葉は控えめに<br />
              音と香りが<br />
              時間を進めていきます
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Night */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl tracking-wider mb-8">夜</h2>
            <p className="text-sm text-ink-muted leading-loose tracking-wider">
              食後は<br />
              それぞれの部屋へ
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              外の音は抑えられ<br />
              灯りは低く
            </p>
            <p className="mt-6 text-sm text-ink-muted leading-loose tracking-wider">
              一日を閉じるための<br />
              静かな時間です
            </p>
          </div>
          <GalleryItem
            src={siteImages.experience.night}
            alt="夜の客室"
            aspectRatio="wide"
            className="order-1 lg:order-2"
          />
        </div>
      </Section>

      {/* Note */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <Quote>
            鹿のやでは<br />
            何をするかを決めていません
          </Quote>
          <p className="mt-8 text-sm leading-loose tracking-wider opacity-80">
            何もしない時間も含めて<br />
            お過ごしください
          </p>
        </div>
      </Section>
    </>
  )
}
