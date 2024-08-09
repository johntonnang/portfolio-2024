import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background-light': '#fcf8f4',
      light: '#f3f3f3',
      orange: '#ed6829',
      'orange-dark': '#922701',
    },
    extend: {
      width: {
        screen: '100dvw',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
export default config;
