import type { Config } from 'tailwindcss';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from './src/consts/app.consts';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#00b894',
        secondary: '#ffeaa7',
        secondaryDark: '#fdcb6e',
        secondaryDark2: '#fa983a',
        bgLight: '#ffffff',
        bgDark: '#2d3436',
        bgMedium: '#b2bec3',
        textPrimary: '#2d3436',
        textLight: '#ffffff',
      },
      fill: {
        primary: '#00b894',
        secondary: '#ffeaa7',
      },
      textColor: {
        primary: '#00b894',
        secondary: '#ffeaa7',
      },
      accentColor: {
        primary: '#00b894',
      },
      height: {
        navbarHeight: `${HEADER_HEIGHT}px`,
        footerHeight: `${FOOTER_HEIGHT}px`,
        pageHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      },
      minHeight: {
        pageHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      },
      padding: {
        navbarHeight: `${HEADER_HEIGHT}px`,
      },
    },
  },
  plugins: [],
};
export default config;
