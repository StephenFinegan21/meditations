/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,md}"],
  theme: {
    extend: {},
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],

    }
  },
  plugins: [],
}
