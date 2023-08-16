import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '8px',
      sm: '4px',
      full: '100%',
    },
    screens: {
      mobile: '550px',
      tablet: '834px',
      desktop: '1024px',
    },
    colors: {
      background: '#080808',
      headlines: '#E1E1E1',
      text: '#B1B1B1',
      'primary-hover': '#A71140',
      'primary-pressed': '#6F0B2B',
      transparent: 'transparent',
      primary: '#e41657',
    },
  },
  plugins: [],
};
export default config;
