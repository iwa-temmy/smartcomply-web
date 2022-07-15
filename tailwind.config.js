module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}