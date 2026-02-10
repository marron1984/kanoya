'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { FadeIn, LineReveal } from '@/components/animations/TextReveal'
import { ImageReveal } from '@/components/animations/ImageReveal'
import { ParallaxImage } from '@/components/animations/ParallaxImage'
import { ScrollIndicator } from '@/components/animations/ScrollIndicator'
import { siteImages } from '@/lib/siteImages'
import { siteConfig } from '@/lib/siteConfig'

/* ─── Hero Section ─── */
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -80])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <Image
          src={siteImages.hero.top}
          alt="L'Artisan KANOYA 外観の夕景"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-sumi-deep/40" />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(13, 13, 13, 0.7) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
        style={{ y: contentY }}
      >
        {/* Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span
            className="text-3xl md:text-4xl text-shironezu/90"
            style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.35em' }}
          >
            L&apos;ARTISAN KANOYA
          </span>
        </motion.div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <motion.p
            className="text-sm md:text-base text-shironezu/60 text-center"
            style={{ letterSpacing: '0.3em' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            静寂と美食の宿
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xs text-shironezu/40 text-center"
          style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.2em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        >
          SILENCE &amp; GASTRONOMY
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      {/* Cinematic bars on load */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-sumi-deep z-20 origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-sumi-deep z-20 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
    </section>
  )
}

/* ─── Concept Section (序) ─── */
function ConceptSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 md:py-48 relative">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Vertical Japanese Text */}
          <FadeIn delay={0.2} className="lg:w-1/3 flex justify-center">
            <div
              className="writing-vertical text-base md:text-lg leading-loose h-[400px] md:h-[500px] text-shironezu/70"
              style={{ letterSpacing: '0.15em' }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>
                  静けさが<br />
                  もてなしになる場所
                </p>
                <p className="mt-8">
                  多くを語らず<br />
                  過剰に飾らず<br />
                  灯りと余白で<br />
                  お迎えします
                </p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: Description + Image */}
          <div className="lg:w-2/3 space-y-12">
            <FadeIn delay={0.4}>
              <span
                className="text-xs text-kinnezu/60 block mb-6"
                style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
              >
                PHILOSOPHY
              </span>
              <h2 className="text-xl md:text-2xl text-shironezu/90 mb-8" style={{ letterSpacing: '0.15em' }}>
                五室だけの静謐
              </h2>
              <div className="space-y-6 text-sm text-shironezu/50 leading-loose" style={{ letterSpacing: '0.08em' }}>
                <p>
                  L&apos;Artisan KANOYAは<br />
                  奈良の深い静寂の中に佇む<br />
                  五室だけの小さなオーベルジュ旅館です
                </p>
                <p>
                  ここにあるのは<br />
                  音を抑えた空間と<br />
                  食事の余韻<br />
                  そして静かな時間です
                </p>
              </div>
            </FadeIn>

            <ImageReveal
              src={siteImages.hero.experience}
              alt="春日の森の朝"
              variant="slit"
              containerClassName="aspect-cinema w-full"
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-shironezu/5" />
    </section>
  )
}

/* ─── Cuisine Section (美食) ─── */
function CuisineSection() {
  return (
    <section className="py-32 md:py-48 bg-sumi-deep">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-20 md:mb-28">
          <span
            className="text-xs text-kinnezu/60 block mb-4"
            style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
          >
            CUISINE
          </span>
          <h2 className="text-2xl md:text-3xl text-shironezu/90 mb-6" style={{ letterSpacing: '0.15em' }}>
            美食
          </h2>
          <p className="text-sm text-shironezu/40 max-w-md mx-auto" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
            オーベルジュの魂である料理<br />
            素材の声に耳を傾け<br />
            器の余白に物語を紡ぐ
          </p>
        </FadeIn>

        {/* Large Hero Image */}
        <FadeIn delay={0.2}>
          <ImageReveal
            src={siteImages.dining.counter}
            alt="カウンターから見る料理の景色"
            variant="zoom-out"
            containerClassName="aspect-cinema w-full mb-16 md:mb-24"
            sizes="100vw"
          />
        </FadeIn>

        {/* Grid of food images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <FadeIn delay={0.1}>
            <ImageReveal
              src={siteImages.dining.dish}
              alt="季節の一皿"
              variant="slide-up"
              containerClassName="aspect-gallery w-full"
              delay={0.2}
            />
            <div className="mt-6">
              <p className="text-sm text-shironezu/60" style={{ letterSpacing: '0.12em' }}>
                季節の声を聴く
              </p>
              <p className="text-xs text-shironezu/30 mt-2" style={{ letterSpacing: '0.08em', lineHeight: '2' }}>
                カウンター越しに感じる温度<br />
                器に残る余白<br />
                食後に訪れる沈黙
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ImageReveal
              src={siteImages.dining.vessel}
              alt="器の表情"
              variant="slide-up"
              containerClassName="aspect-gallery w-full"
              delay={0.4}
            />
            <div className="mt-6">
              <p className="text-sm text-shironezu/60" style={{ letterSpacing: '0.12em' }}>
                器と余白
              </p>
              <p className="text-xs text-shironezu/30 mt-2" style={{ letterSpacing: '0.08em', lineHeight: '2' }}>
                料理は<br />
                この空間のために用意されます
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Link */}
        <FadeIn delay={0.3} className="text-center mt-16">
          <Link
            href="/dining"
            className="link-subtle text-sm text-kinnezu/70"
            style={{ letterSpacing: '0.15em' }}
          >
            料理について
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Sanctuary Section (空間) ─── */
function SanctuarySection() {
  return (
    <section className="relative">
      {/* Full-width Parallax Image */}
      <ParallaxImage
        src={siteImages.rooms.overview}
        alt="客室の静寂"
        containerClassName="h-[70vh] md:h-[80vh]"
        speed={0.2}
      />

      {/* Overlapping Content */}
      <div className="relative -mt-32 md:-mt-48 z-10 pb-32 md:pb-48">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="bg-sumi/90 backdrop-blur-sm p-10 md:p-16 lg:p-20">
            <FadeIn>
              <span
                className="text-xs text-kinnezu/60 block mb-4"
                style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
              >
                SANCTUARY
              </span>
              <h2 className="text-2xl md:text-3xl text-shironezu/90 mb-8" style={{ letterSpacing: '0.15em' }}>
                空間
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className="space-y-6 text-sm text-shironezu/50" style={{ letterSpacing: '0.08em', lineHeight: '2.2' }}>
                  <p>
                    客室は五室のみ<br />
                    間取りやしつらえは同じではありません
                  </p>
                  <p>
                    窓からの光<br />
                    壁の質感<br />
                    夜の灯りの落ち方
                  </p>
                  <p>
                    それぞれの部屋に<br />
                    異なる静けさがあります
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/rooms"
                      className="link-subtle text-sm text-kinnezu/70"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      客室について
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <ImageReveal
                    src={siteImages.rooms.window}
                    alt="窓からの光"
                    variant="slit"
                    containerClassName="aspect-wide w-full"
                    delay={0.3}
                  />
                  <ImageReveal
                    src={siteImages.rooms.lighting}
                    alt="夜の灯り"
                    variant="slit"
                    containerClassName="aspect-wide w-full"
                    delay={0.5}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Experience Section ─── */
function ExperienceSection() {
  return (
    <section className="py-32 md:py-48">
      <div className="max-w-narrow mx-auto px-6 md:px-8 text-center">
        <FadeIn>
          <span
            className="text-xs text-kinnezu/60 block mb-4"
            style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
          >
            EXPERIENCE
          </span>
          <h2 className="text-xl md:text-2xl text-shironezu/90 mb-12" style={{ letterSpacing: '0.15em' }}>
            一日の流れを 静かに
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-sm text-shironezu/50 space-y-2" style={{ letterSpacing: '0.12em', lineHeight: '2.8' }}>
            <p>朝 ── 奈良公園を歩く</p>
            <p>午後 ── 静かにチェックイン</p>
            <p>夕刻 ── 料理と向き合う</p>
            <p>夜 ── 灯りを落とす</p>
            <p>朝 ── 余韻の残る目覚め</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <LineReveal className="my-12" />
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-sm text-shironezu/40" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
            特別な演出はありません<br />
            時間そのものを お過ごしください
          </p>
          <div className="mt-10">
            <Link
              href="/experience"
              className="link-subtle text-sm text-kinnezu/70"
              style={{ letterSpacing: '0.15em' }}
            >
              過ごし方について
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Booking Section (予約) ─── */
function BookingSection() {
  return (
    <section className="py-32 md:py-48 bg-sumi-deep relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-narrow mx-auto px-6 md:px-8 text-center relative z-10">
        <FadeIn>
          <span
            className="text-xs text-kinnezu/60 block mb-4"
            style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
          >
            RESERVATION
          </span>
          <h2 className="text-xl md:text-2xl text-shironezu/90 mb-8" style={{ letterSpacing: '0.15em' }}>
            ご予約について
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm text-shironezu/40 mb-8" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
            ご予約は<br />
            お電話またはオンラインにて承っております
          </p>

          <div className="mb-10">
            <p className="text-lg text-shironezu/70" style={{ letterSpacing: '0.1em' }}>
              <a
                href={`tel:${siteConfig.tel.replace(/-/g, '')}`}
                className="hover:text-kinnezu transition-colors duration-600"
              >
                TEL {siteConfig.tel}
              </a>
            </p>
            <p className="text-xs text-shironezu/30 mt-2" style={{ letterSpacing: '0.08em' }}>
              {siteConfig.telHours}
            </p>
          </div>

          <LineReveal className="max-w-xs mx-auto mb-10" />

          <p className="text-sm text-shironezu/40 mb-10" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
            五室のみのため<br />
            ご希望の日程がある場合は<br />
            お早めにご相談ください
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a
            href={siteConfig.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-kinnezu border border-kinnezu-dark/50 px-12 py-5 hover:bg-kinnezu-dark/20 transition-all duration-800 relative overflow-hidden group"
            style={{ letterSpacing: '0.2em' }}
          >
            <span className="relative z-10">
              予約を確認する
            </span>
            <span
              className="block text-xs text-kinnezu/40 mt-1 relative z-10"
              style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.15em' }}
            >
              Booking.com
            </span>
            <div className="absolute inset-0 bg-kinnezu-dark/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 ease-quint origin-left" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Access Teaser ─── */
function AccessSection() {
  return (
    <section className="relative">
      <ParallaxImage
        src={siteImages.access.surroundings}
        alt="奈良公園の風景"
        containerClassName="h-[50vh] md:h-[60vh]"
        speed={0.15}
      />

      <div className="py-24 md:py-32">
        <div className="max-w-narrow mx-auto px-6 md:px-8 text-center">
          <FadeIn>
            <span
              className="text-xs text-kinnezu/60 block mb-4"
              style={{ fontFamily: 'var(--font-en)', letterSpacing: '0.3em' }}
            >
              ACCESS
            </span>
            <h2 className="text-xl md:text-2xl text-shironezu/90 mb-8" style={{ letterSpacing: '0.15em' }}>
              奈良公園のほど近く
            </h2>
            <p className="text-sm text-shironezu/40" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
              春日大社 奈良公園へは徒歩圏内<br />
              街の喧騒から一歩離れた場所にあります
            </p>
            <p className="text-sm text-shironezu/40 mt-6" style={{ letterSpacing: '0.1em', lineHeight: '2.2' }}>
              観光の拠点としてではなく<br />
              戻ってくる場所としてお使いください
            </p>
            <div className="mt-10">
              <Link
                href="/access"
                className="link-subtle text-sm text-kinnezu/70"
                style={{ letterSpacing: '0.15em' }}
              >
                アクセスについて
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <CuisineSection />
      <SanctuarySection />
      <ExperienceSection />
      <AccessSection />
      <BookingSection />
    </>
  )
}
