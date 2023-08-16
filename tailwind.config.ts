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
  },
  plugins: [],
};
export default config;
