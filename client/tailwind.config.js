module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFBE9',
      'grey': '#C4C4C4',
      'black': '#000000',
    },
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s forwards',
        'bounce-in': 'bounceIn 0.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '100%': {opacity: '1'}
        },
        bounceIn: {
          '0%': {transform: 'translateY(50%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        }
      }
    }
  },
  plugins: [],
}
