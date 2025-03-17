import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0FA6A2', medium: '#E8FFFE', light: '#0FA6A214' },
        text: { DEFAULT: '#9F9CAD', light: '#6B6681' },
        heading: '#2C254B',
        red: '#F55D5D',
        white: '#FFFFFF',
        light: { SeGreen: '#ECF8F8' },
        border: { DEFAULT: '#E0DEEA', light: '#F2F1F5' },

        // border: '#E0DEEA',
      },
    },
  },
  plugins: [],
};
export default config;
