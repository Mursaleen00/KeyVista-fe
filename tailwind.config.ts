import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#25D7D2',
        secondary: '#0F6A62',
        text: '#9F9CAD',
        heading: '#2C254B',
      },
    },
  },
  plugins: [],
} satisfies Config;
