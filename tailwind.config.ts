import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          50: '#E7ECF3',
          100: '#BFC9D9',
          200: '#7E92B3',
          300: '#3D5B8C',
          400: '#142B57',
          500: '#0A1E45',
          600: '#071736',
          700: '#051029',
          800: '#030A1C',
          900: '#020611',
          950: '#01030A',
        },
        tech: {
          50: '#E6F1FC',
          100: '#C2DDF8',
          200: '#86BCF1',
          300: '#4A9AEA',
          400: '#1F7CDF',
          500: '#0A60C2',
          600: '#084A99',
          700: '#063872',
          800: '#04264C',
          900: '#021426',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'glow-tech': '0 0 0 1px rgba(31, 124, 223, 0.25), 0 12px 40px -12px rgba(31, 124, 223, 0.45)',
        'card-dark': '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(10,30,69,0) 0%, rgba(10,30,69,0.6) 50%, rgba(10,30,69,1) 100%)',
        'radial-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(31,124,223,0.18) 0%, rgba(10,30,69,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'rise-bar': {
          '0%': { transform: 'scaleY(0.2)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'float-y': 'float-y 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'draw-line': 'draw-line 2.4s ease-out forwards',
        'rise-bar': 'rise-bar 1.1s cubic-bezier(.2,.7,.2,1) both',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
