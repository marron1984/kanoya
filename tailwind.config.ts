import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--bg-main)',
        'bg-deep': 'var(--bg-deep)',
        'ink-main': 'var(--ink-main)',
        'ink-muted': 'var(--ink-muted)',
        'line-subtle': 'var(--line-subtle)',
        'brass': 'var(--brass)',
      },
      fontFamily: {
        serif: [
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'YuMincho',
          'Garamond',
          'Times New Roman',
          'serif',
        ],
        'en-serif': [
          'Garamond',
          'Times New Roman',
          'serif',
        ],
      },
      maxWidth: {
        'content': '1150px',
      },
      letterSpacing: {
        'wider-ja': '0.08em',
      },
      lineHeight: {
        'relaxed-ja': '2',
        'loose-ja': '2.2',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'subtle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        'hero': '16 / 9',
        'gallery': '4 / 5',
        'detail': '1 / 1',
        'wide': '3 / 2',
      },
    },
  },
  plugins: [],
}
export default config
