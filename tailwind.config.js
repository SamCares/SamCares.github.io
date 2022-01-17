module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
        'xxs': '270px',
        'xs': '340px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          100: 'hsl(210, 4%, 67%)',
          200: 'hsl(232, 10%, 55%)',
          300: 'hsl(213, 9%, 39%)',
          400: 'hsl(212, 27%, 19%)',
          500: 'hsl(168, 34%, 41%)',
          600: 'hsl(198, 62%, 26%)',
          700: 'hsl(167, 40%, 24%)',
          800: 'hsl(51, 100%, 49%)',
          900: 'hsl(7, 99%, 70%)',
        },
        secondary: {
          100: 'rgb(138,209,195)',
          300: 'hsl(164,47%,31%)',
        },
      },
      fontFamily: {
        small: ['Barlow'],
        big: ['Fraunces'],
      },
      fill: {
        100: 'hsl(0, 0%, 100%)',
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
