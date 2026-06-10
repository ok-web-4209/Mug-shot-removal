/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*/index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        light: { 50: '#FAFAFA', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db' },
        gold: { 400: '#d4b97e', 500: '#c9a96e', 600: '#92722e' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      maxWidth: { container: '1280px' },
    },
  },
};
