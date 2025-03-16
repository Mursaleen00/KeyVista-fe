import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0FA6A2', light: '#0FA6A214' },
        text: { DEFAULT: '#9F9CAD', light: '#6B6681' },
        heading: '#2C254B',
        red: '#F55D5D',
        white: '#FFFFFF',
        light: { SeGreen: '#ECF8F8' },
      },
    },
  },
  plugins: [],
};
export default config;
