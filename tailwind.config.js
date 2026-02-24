/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0f0f0f',
        'card': '#1a1a1a',
        'primary': '#f5f5f5',
        'secondary': '#aaaaaa',
        'gold': {
          DEFAULT: '#d4af37',
          'hover': '#b4942b',
        }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
