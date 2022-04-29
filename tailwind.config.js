module.exports = {
  darkMode: 'media',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./app.{js,ts,vue}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
