/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const pxToRem = require('tailwindcss-preset-px-to-rem')

export default {
  presets: [pxToRem],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        '32-700': ['32px', { lineHeight: '42px', fontWeight: '700' }],
        '32-600': ['32px', { lineHeight: '42px', fontWeight: '600' }],
        '24-700': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        '24-600': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        '24-500': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        '24-400': ['24px', { lineHeight: '32px', fontWeight: '400' }],
        '20-700': ['20px', { lineHeight: '32px', fontWeight: '700' }],
        '20-600': ['20px', { lineHeight: '32px', fontWeight: '600' }],
        '20-500': ['20px', { lineHeight: '32px', fontWeight: '500' }],
        '20-400': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        '18-700': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        '18-600': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        '18-500': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        '18-400': ['18px', { lineHeight: '26px', fontWeight: '400' }],
        '16-700': ['16px', { lineHeight: '26px', fontWeight: '700' }],
        '16-600': ['16px', { lineHeight: '26px', fontWeight: '600' }],
        '16-500': ['16px', { lineHeight: '26px', fontWeight: '500' }],
        '16-400': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        '14-700': ['14px', { lineHeight: '24px', fontWeight: '700' }],
        '14-600': ['14px', { lineHeight: '24px', fontWeight: '600' }],
        '14-500': ['14px', { lineHeight: '24px', fontWeight: '500' }],
        '14-400': ['14px', { lineHeight: '24px', fontWeight: '400' }],
        '13-600': ['13px', { lineHeight: '22px', fontWeight: '600' }],
        '13-500': ['13px', { lineHeight: '22px', fontWeight: '500' }],
        '12-600': ['12px', { lineHeight: '20px', fontWeight: '600' }],
        '12-500': ['12px', { lineHeight: '18px', fontWeight: '500' }],
        '12-400': ['12px', { lineHeight: '18px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} satisfies Config
