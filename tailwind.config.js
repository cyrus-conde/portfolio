/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {},
    animation: {
      'pulse-once': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1)',

    },
    keyframes:{
      pulse: {
        '0%':{
          opacity:.25
        },
        '50%':{
          opacity:0.5
        },
        '100%':{
          opacity:1
        }
      }
    }
  },
  plugins: [],
}

