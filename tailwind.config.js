/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'radio-green': '#39ff14',
        'radio-amber': '#ffbf00',
        'radio-red': '#ff073a',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'static': 'static 0.1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        static: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(1px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [],
}
