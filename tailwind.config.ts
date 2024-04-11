import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/chunks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/fragments/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffffdd',
        accent: '#E8EAED14',
        light: '#5f6368',
        dark: '#202124',
      },
    },
  },
  plugins: [],
};
export default config;
