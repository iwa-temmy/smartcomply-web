module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '28w': '38vw'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}