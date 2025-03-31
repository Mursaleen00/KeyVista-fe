import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #D48F9A 0%, #6A4C65 90.1%)',
        'profile-gradient': 'linear-gradient(180deg, #B87A8C 0%, #6A4C65 100%)',
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
  plugins: [],
};
export default config;
