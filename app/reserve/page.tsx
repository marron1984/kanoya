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
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'ご予約',
  description: '鹿のやのご予約について。五室のみの小さな宿です。お電話でのご相談をおすすめしています。',
  path: '/reserve',
})

export default function ReservePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.reserve}
        imageAlt="ロビーの静けさ"
      >
        <HeroTitle>
          ご予約について
        </HeroTitle>
      </Hero>

      {/* Intro */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Quote>
            鹿のやは 五室のみの小さな宿です<br />
            ご滞在の内容を大切にするため ご予約はお電話でのご相談をおすすめしています
          </Quote>
        </div>
      </Section>

      <Divider />

      {/* Phone - Primary */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">お電話でのご予約・お問い合わせ</h2>
          <p className="text-2xl md:text-3xl tracking-wider">
            <a
              href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
              className="hover:text-ink-muted transition-colors duration-300"
            >
              TEL {siteConfig.tel}
            </a>
          </p>
          <p className="text-sm text-ink-muted tracking-wider mt-4">
            受付時間 {siteConfig.telHours}
          </p>
        </div>
      </Section>

      {/* What we can discuss */}
      <Section className="pt-0">
        <div className="max-w-2xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-ink-muted leading-loose tracking-wider">
            <li>空室状況のご案内</li>
            <li>お食事内容のご相談</li>
            <li>アレルギーやご要望</li>
            <li>記念日でのご利用</li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* Online - Secondary */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">オンライン予約</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider mb-8">
            オンライン予約をご希望の場合は 下記より空室状況をご確認ください
          </p>
          <ReservationCTA
            variant="secondary"
            label="空室確認・オンライン予約"
          />
        </div>
      </Section>

      <Divider />

      {/* Notes */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl tracking-wider mb-8 text-center">ご案内</h2>
          <ul className="text-sm text-ink-muted leading-loose tracking-wider space-y-2 text-center">
            <li>全室禁煙</li>
            <li>静かな環境を大切にしています</li>
            <li>お子様のご宿泊は事前にご相談ください</li>
            <li>アレルギー 食事制限は必ず事前にお知らせください</li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* Cancellation */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl tracking-wider mb-8">キャンセルについて</h2>
          <p className="text-sm text-ink-muted leading-loose tracking-wider">
            キャンセル規定は ご予約時にご案内いたします<br />
            日程が近い場合は できるだけ早めにご連絡ください
          </p>
        </div>
      </Section>

      {/* Final */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <Quote>
            鹿のやは 多くの方をお迎えする宿ではありません<br />
            その分 一組一組の時間を大切にしています
          </Quote>
        </div>
      </Section>
    </>
  )
}
