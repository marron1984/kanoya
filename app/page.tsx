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
  TelCTA,
  Divider,
} from '@/components/site'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc={siteImages.hero.top}
        imageAlt="鹿のや 入口の夕景"
      >
        <HeroTitle>
          奈良公園の静けさに<br />
          五室だけの滞在
        </HeroTitle>
        <HeroSubtitle>
          春日の森に寄り添う<br />
          小さなオーベルジュ旅館
        </HeroSubtitle>
      </Hero>

      {/* Contact Bar */}
      <section className="py-8 border-b border-line-subtle">
        <div className="max-w-content mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <TelCTA />
          <ReservationCTA variant="secondary" />
        </div>
      </section>

      {/* Concept */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl tracking-wider mb-12">
            静けさが もてなしになる場所
          </h2>
          <Quote>
            鹿のやは<br />
            奈良公園のほど近く 春日の森に寄り添う<br />
            五室だけの小さな宿です
          </Quote>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider">
            多くを語らず<br />
            過剰に飾らず<br />
            灯りと余白でお迎えします
          </p>
          <p className="mt-8 text-sm text-ink-muted leading-loose tracking-wider">
            ここにあるのは<br />
            音を抑えた空間と<br />
            食事の余韻<br />
            そして静かな時間です
          </p>
        </div>
      </Section>

      <Divider />

      {/* Rooms Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Card href="/rooms">
            <CardImage
              src={siteImages.rooms.overview}
              alt="客室の様子"
              aspectRatio="wide"
            />
          </Card>
          <div>
            <CardTitle as="h2">五室 それぞれの居場所</CardTitle>
            <CardText>
              <p>
                客室は五室のみ<br />
                間取りやしつらえは同じではありません
              </p>
              <p className="mt-4">
                窓からの光<br />
                壁の質感<br />
                夜の灯りの落ち方
              </p>
              <p className="mt-4">
                それぞれの部屋に<br />
                異なる静けさがあります
              </p>
            </CardText>
            <div className="mt-8">
              <Link href="/rooms" className="link-subtle text-sm tracking-wider">
                客室について
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
            <CardTitle as="h2">宿泊できる 料理の場</CardTitle>
            <CardText>
              <p>
                鹿のやは<br />
                料理を軸に設えられた宿です
              </p>
              <p className="mt-4">
                カウンター越しに感じる温度<br />
                器に残る余白<br />
                食後に訪れる沈黙
              </p>
              <p className="mt-4">
                料理は<br />
                この空間のために用意されます
              </p>
            </CardText>
            <div className="mt-8">
              <Link href="/dining" className="link-subtle text-sm tracking-wider">
                料理について
              </Link>
            </div>
          </div>
          <Card href="/dining" className="order-1 lg:order-2">
            <CardImage
              src={siteImages.dining.counter}
              alt="カウンターの様子"
              aspectRatio="wide"
            />
          </Card>
        </div>
      </Section>

      <Divider />

      {/* Experience Teaser */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <CardTitle as="h2">一日の流れを 静かに</CardTitle>
          <CardText>
            <p>
              朝 奈良公園を歩く<br />
              午後 静かにチェックイン<br />
              夕刻 料理と向き合う<br />
              夜 灯りを落とす<br />
              朝 余韻の残る目覚め
            </p>
            <p className="mt-8">
              特別な演出はありません<br />
              時間そのものを お過ごしください
            </p>
          </CardText>
          <div className="mt-8">
            <Link href="/experience" className="link-subtle text-sm tracking-wider">
              過ごし方について
            </Link>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Access Teaser */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Card href="/access">
            <CardImage
              src={siteImages.access.surroundings}
              alt="奈良公園の風景"
              aspectRatio="wide"
            />
          </Card>
          <div>
            <CardTitle as="h2">奈良公園のほど近く</CardTitle>
            <CardText>
              <p>
                春日大社 奈良公園へは徒歩圏内<br />
                街の喧騒から一歩離れた場所にあります
              </p>
              <p className="mt-4">
                観光の拠点としてではなく<br />
                戻ってくる場所としてお使いください
              </p>
            </CardText>
            <div className="mt-8">
              <Link href="/access" className="link-subtle text-sm tracking-wider">
                アクセスについて
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section deep>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl tracking-wider mb-8">
            ご予約について
          </h2>
          <p className="text-sm leading-loose tracking-wider opacity-80">
            ご予約は<br />
            お電話またはオンラインにて承っております
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
          <p className="text-sm leading-loose tracking-wider opacity-80 mt-8">
            五室のみのため<br />
            ご希望の日程がある場合は<br />
            お早めにご相談ください
          </p>
          <div className="mt-10">
            <ReservationCTA
              variant="secondary"
              className="border-bg-main text-bg-main hover:bg-bg-main hover:text-bg-deep"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
