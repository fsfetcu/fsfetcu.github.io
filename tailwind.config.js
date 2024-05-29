/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        sidebar: '#1F2937',      // Sidebar color (gray-800 equivalent)
        content: '#F3F4F6',      // Main content background (gray-100 equivalent)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
