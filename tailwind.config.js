/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#c1de21',
        secondary: '#ed1c6f',
        light: '#726b70',
        dark: '#11111d',
      },
      fontFamily: {
        abrilFatFace: ['Abril Fatface', 'serif'],
      },
    },
  },
  plugins: [],
};
