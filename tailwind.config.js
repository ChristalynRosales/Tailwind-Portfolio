/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
    './src/styles.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2', 
        secondary: '#14171a',
      },
      fontFamily: { 
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
