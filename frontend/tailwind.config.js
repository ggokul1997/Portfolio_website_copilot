/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e01111',
        bg: '#0b0b0d',
        muted: '#121214',
      },
      borderRadius: {
        glass: '1.25rem',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(16, 16, 32, 0.37)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
