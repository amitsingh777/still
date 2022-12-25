/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        greenbackground: '#A8CAD1',
        bluebackground: '#A3BBD9',
        halo: '#FBFBFB',
        primary: '#A3BBD9',
        secondary: '#D7D7D7',
        accent: '#F8F1DB',
        border: '#C4CBCD',
        textcolor: '#F8F1DB'

      },
      fontFamily: {
        body: ['EB Garamond', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('assets/imgs/bg-still.svg')",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'calm': 'calm 10s linear',
        'welcome': 'welcome 13s linear',
        'video': 'video 15s linear',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        calm: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '10%': { opacity: '0.1', transform: 'translateY(40px)' },
          '20%': { opacity: '0.5', transform: 'translateY(30px)' },
          '30%': { opacity: '0.3', transform: 'translateY(20px)' },
          '60%': { opacity: '0.8', transform: 'translateY(10px)' },
          '75%': { opacity: '1', transform: 'translateY(5px)' },
          '80%': { opacity: '1', transform: 'translateY(1px)' },
          '95%': { opacity: '0.8', transform: 'translateY(0px)' },
          '100%': { opacity: '0.3', transform: 'translateY(0px)' },
        },
        welcome: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '10%': { opacity: '0', transform: 'translateY(40px)' },
          '20%': { opacity: '0', transform: 'translateY(30px)' },
          '30%': { opacity: '0.1', transform: 'translateY(20px)' },
          '60%': { opacity: '0.2', transform: 'translateY(10px)' },
          '75%': { opacity: '0.8', transform: 'translateY(5px)' },
          '80%': { opacity: '1', transform: 'translateY(1px)' },
          '85%': { opacity: '0.9', transform: 'translateY(1px)' },
          '95%': { opacity: '0.4', transform: 'translateY(1px)' },
          '100%': { opacity: '0.2', transform: 'translateY(0px)' },
        },
        video: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '10%': { opacity: '0', transform: 'translateY(40px)' },
          '20%': { opacity: '0', transform: 'translateY(30px)' },
          '30%': { opacity: '0', transform: 'translateY(20px)' },
          '60%': { opacity: '0', transform: 'translateY(10px)' },
          '75%': { opacity: '0', transform: 'translateY(5px)' },
          '80%': { opacity: '0.2', transform: 'translateY(1px)' },
          '85%': { opacity: '0.5', transform: 'translateY(1px)' },
          '95%': { opacity: '0.8', transform: 'translateY(1px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      }
    },
  },
  plugins: [],
}
