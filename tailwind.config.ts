import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #D48F9A 0%, #6A4C65 90.1%)',
        'profile-gradient': 'linear-gradient(180deg, #B87A8C 0%, #6A4C65 100%)',
        'hero-gradient':
          'linear-gradient(244.74deg, #B87A8C 33.97%, #6A4C65 75.66%)',
      },
      colors: {
        primary: {
          DEFAULT: '#6A4C65', // Dusty Plum
          medium: '#9E7B8A',
          normal: '#D29BB0',
          light: '#D0B4C3',
        },
        text: {
          DEFAULT: '#9F9CAD',
          light: '#6B6681',
          veryLight: '#E0DEEA',
          dark: '#2C254B',
          normal: '#9995AC',
        },
        heading: '#2C254B',
        red: '#F55D5D',
        white: '#FFFFFF',
        orange: '#F8A748',
        light: { SeGreen: '#ECF8F8' },
        border: { DEFAULT: '#E0DEEA', light: '#F2F1F5' },
      },
    },
  },
  // plugins: [],
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
