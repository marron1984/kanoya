import { Metadata } from 'next'
import {
  Section,
  Hero,
  HeroTitle,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'よくあるご質問',
  description: '鹿のやへのご滞在に関するよくあるご質問をまとめております。',
  path: '/faq',
})

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'チェックイン・チェックアウトの時間',
    answer: 'ご予約時にご案内いたします',
  },
  {
    question: 'お子様のご宿泊について',
    answer: '静かな環境を大切にしているため 事前にご相談ください',
  },
  {
    question: 'アレルギー対応について',
    answer: '可能な範囲で対応いたします ご予約時に具体的にお知らせください',
  },
  {
    question: '駐車場について',
    answer: '専用駐車場がございます 台数に限りがあるため 事前にお知らせください',
  },
  {
    question: 'キャンセルについて',
    answer: 'ご予約時に規定をご案内いたします 日程が近い場合は早めにご連絡ください',
  },
  {
    question: 'お支払いについて',
    answer: '各種クレジットカードに対応しております',
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.faq}
        imageAlt="館内の佇まい"
      >
        <HeroTitle>
          ご滞在について
        </HeroTitle>
      </Hero>

      {/* FAQ List */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-0">
            {faqItems.map((item, index) => (
              <li key={index}>
                {index > 0 && <Divider className="my-10" />}
                <div>
                  <h2 className="text-base tracking-wider mb-4">
                    {item.question}
                  </h2>
                  <p className="text-sm text-ink-muted leading-loose tracking-wider">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-loose tracking-wider opacity-80">
            その他ご不明点はお電話にて
          </p>
          <p className="text-lg tracking-wider mt-6">
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
        </div>
      </Section>
    </>
  )
}
