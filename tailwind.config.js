/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: 'bellefair',
        barlow: 'barlow'
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '3.5rem',
        '4xl': '6.25rem',
        '5xl': '9.375rem',
      },
      letterSpacing: {
        widest: '0.3rem'
      },
      backgroundImage: {
        'home-desktop': "url('../src/assets/images/background-home-desktop.jpg')",
        'home-tablet': "url('../src/assets/images/background-home-tablet.jpg')",
        'home-mobile': "url('../src/assets/images/background-home-mobile.jpg')",
        'destination-desktop': 'url("../src/assets/images/background-destination-desktop.jpg")'
      },
      width: {
        '1440': '1440px',
        '473': '473px',
        '830': '830px',
        '34-r': '34rem'
      },
      maxWidth: {
        'sm': '375px',
        'md': '768px',
        'lg': '1440px'
      },
      screens: {
        'sm': {
          'max': '375px',
        },
        'md': {
          'min': '375px', 'max': '768px'
        },
        'lg': {
          'max': '1440px'
        }
      },
      boxShadow: {
        '3xl': '0 0 0 80px rgb(36, 38, 47)'
      },
      spacing: {
        '57': '57rem'
      }
    },
    colors: {
      darkBlue: 'rgb(11, 13, 23)',
      lightBlue: 'rgb(208, 214, 249)',
      gray: 'rgb(151, 151, 151)',
      darkGray: 'rgb(36, 38, 47)',
      white: 'rgb(255, 255, 255)',
    },
  },
  plugins: [],
}
