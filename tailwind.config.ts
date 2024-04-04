import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/chunks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#E8EAED14',
      },
    },
  },
  plugins: [],
};
export default config;
