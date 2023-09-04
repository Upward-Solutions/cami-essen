import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      transparent: 'transparent',
      background: '#E1E1E1',
      'card-background': '#F2F2F2',
      'card-background-hover': '#CFCFDD',
      headlines: '#1F1F1F',
      text: '#8F8F8F',
      primary: '#e41657',
      'primary-pressed': '#6F0B2B',
      'primary-hover': '#A71140',
    },
  },
  plugins: [],
};
export default config;
