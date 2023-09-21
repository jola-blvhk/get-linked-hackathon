import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: 'var(--heading-font)',
      body: 'var(--body-font)',
      unica: 'var(--unica-font)',
    },
    extend: {
      screens: {
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1220px',
        '2xl': '1440px',
        '3xl': '1700px',
        'custom-1': '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-pink': 'linear-gradient(to right,#FE34B9, #903AFF )',
        section_one: "url('/assets/Section_One_Gradient.png')",
        section_one_mobile: "url('/assets/section-one-mobile-gradient.png')",
      },
      colors: {
        primary: {
          pink_100: '#D434FE',
          purple_100: '#903AFF',
          dark_purple: '#150E28',
          gradient_pink: 'linear-gradient(to right,#FE34B9, #903AFF )',
        },
      },
    },
  },
  plugins: [],
};
export default config;
