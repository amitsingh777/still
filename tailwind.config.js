/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        greenbackground: "#A8CAD1",
        bluebackground: "#A3BBD9",
        halo: "#FBFBFB",
        primary: "#A3BBD9",
        secondary: "#D7D7D7",
        accent: "#F8F1DB",
        border: "#C4CBCD",
        textcolor: "#F8F1DB",
        whiteGrey: "#DAD9D9",
        white: "#FFFFFF",
        darkGrey: "#797979",
        darkSecondaryGrey: "#8D8D8D",
      },
      fontFamily: {
        body: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('assets/imgs/bg-still.svg')",
      },
      animation: {
        blob: "blob 7s infinite",
        calm: "calm 10s linear",
        welcome: "welcome 13s linear",
        video: "video 15s linear",
        tilt: "tilt 10s infinite linear",
        bgColor: "animateBgColor 10s linear",
      },
      keyframes: {
        calm: {
          // "0%": { opacity: "0" },
          "0%": { opacity: "0.1" },
          "20%": { opacity: "0.5" },
          "30%": { opacity: "0.3" },
          "60%": { opacity: "0.8" },
          "75%": { opacity: "1" },
          "80%": { opacity: "1" },
          "95%": { opacity: "0.8" },
          "100%": { opacity: "0.3" },
        },
        welcome: {
          "0%": { opacity: "0" },
          "10%": { opacity: "0" },
          "20%": { opacity: "0" },
          "50%": { opacity: "0.1" },
          "60%": { opacity: "0.2" },
          "75%": { opacity: "0.8" },
          "80%": { opacity: "1" },
          "85%": { opacity: "0.9" },
          "95%": { opacity: "0.4" },
          "100%": { opacity: "0.2" },
        },
        video: {
          "0%": { opacity: "0" },
          "85%": { opacity: "0" },
          "95%": { opacity: "0.8" },
          "100%": { opacity: "1" },
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
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        animateBgColor: {
          "0%": {
            backgroundColor: "#A8CAD1",
          },
          "50%": {
            backgroundColor: "#A3BBD9",
          },
          "100%": {
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [],
};
