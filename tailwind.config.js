/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        blue: '#285cb0',
        yellow: '#fed754',
        orange: '#cc4b48',
        gray: '#c1c1c1',
        green: '#abc3b5',
        dark: '#222',
        fancyBlue:'#038C8C',
        fancyWhite: '#f2f2ef',
        white: '#fff',
        weakWhite: 'rgba(255,255,255,7)',
        lightGray: '#333',
        shadowColor: 'rgba(0,0,0,0.2)',
        notebookBackground: '#e8e8e0',
        notebookBottom: '#cddc39', 
        notebookPage: '#fbfae8',
        notebookLine: '#e4e4e4',
        transparent:'rgba(0,0,0,0)'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        main: ['Spectral', 'serif'],
        dc: ['Fleur De Leah', 'cursive'],
        notoserif: ['Noto Serif', 'serif'],
        article:["Times New Roman", 'serif']
      },
      boxShadow: {
        'custom': '20px 10px 50px rgba(0,0,0,0.2)',
        'notebook-skin': '0 1px 1px rgba(10,10,10,0.3)' 
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '2000': '2000ms',
      },
      perspective: {
        '800': '800px',
      },
      transformOrigin: {
        'left-center': 'left center',
      },
       fontSize: {
        '12px': '12px',
      },
      spacing: {
        '5em': '5em',
        '8em': '8em',
      },
      gridTemplateColumns:{
        'cvwork':'12em calc(100% - 12em)',
      },
      backgroundImage: {
        ncco: 'var( --color-cover-olive)',
        nccdb: 'var(--color-cover-dusty-blue)',
        nccb: 'var(--color-cover-beige)',
        ncct:'var(--color-cover-terracotta)',
        nccs: 'var(--color-cover-sand)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        textIn: 'textIn 1s ease-in-out',
        textLoopIn: 'textLoopIn 25s linear infinite',
        textLoopIn1: 'textLoopIn1 30s linear infinite'
      },
      keyframes:{
        fadeIn: {
          '100%': { 
            opacity: 1,
          },
           '0%': { 
             opacity: 0,
           }
        },
        fadeOut: {
          '100%': {
            opacity: 0,
          },
           '0%': { 
             opacity: 1,
           }
        },
        textIn: {
          '100%': { 
            opacity: 1,
            transform: 'translateY(0px)'
          },
           '0%': { 
            opacity: 0,
            transform: 'translateY(10px)', 
           }
        },
        textLoopIn:{
          '0%': {
             transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
             transform: 'translate3d(-100%, 0, 0)',
          }
        },
        textLoopIn1:{
          '0%': {
             transform: 'translate3d(90%, 0, 0)',
          },
          '100%': {
             transform: 'translate3d(-100%, 0, 0)',
          }
        }
      },
    }
  },
  plugins: [],
};
