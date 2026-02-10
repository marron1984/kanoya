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
        'sumi': '#1a1a1a',
        'sumi-deep': '#0d0d0d',
        'sumi-light': '#2a2a2a',
        'keshi': '#333333',
        'shironezu': '#e8e4df',
        'kinnezu': '#b8a88a',
        'kinnezu-dark': '#8c7a5a',
        'hai': '#6b6b6b',
        'usuzumi': '#4a4a4a',
        'bg-main': 'var(--bg-main)',
        'bg-deep': 'var(--bg-deep)',
        'ink-main': 'var(--ink-main)',
        'ink-muted': 'var(--ink-muted)',
        'line-subtle': 'var(--line-subtle)',
        'brass': 'var(--brass)',
      },
      fontFamily: {
        serif: [
          'Noto Serif JP',
          'Yu Mincho',
          'YuMincho',
          'Hiragino Mincho ProN',
          'serif',
        ],
        sans: [
          'Noto Sans JP',
          'Hiragino Kaku Gothic ProN',
          'sans-serif',
        ],
        'en-serif': [
          'Cormorant Garamond',
          'Garamond',
          'Times New Roman',
          'serif',
        ],
      },
      maxWidth: {
        'content': '1150px',
        'narrow': '800px',
      },
      letterSpacing: {
        'wider-ja': '0.12em',
        'widest-ja': '0.2em',
      },
      lineHeight: {
        'relaxed-ja': '2',
        'loose-ja': '2.4',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'gekishibu': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      aspectRatio: {
        'hero': '16 / 9',
        'gallery': '4 / 5',
        'detail': '1 / 1',
        'wide': '3 / 2',
        'cinema': '21 / 9',
      },
      keyframes: {
        'reveal-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'line-expand': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scale-in 2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'line-expand': 'line-expand 1.5s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'scroll-hint': 'scroll-hint 2.5s cubic-bezier(0.76, 0, 0.24, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
