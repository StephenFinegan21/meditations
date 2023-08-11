/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,md}"],
  theme: {
    extend: {},
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'libre' : ['Libre Baskerville', 'serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'inter': ['Inter', 'sans-serif'],
      'garamond': ['Cormorant Garamond', 'serif']

    }
  },
  plugins: [],
}
