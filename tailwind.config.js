/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        error: 'hsl(14, 31%, 58%)',
        neutral: {
          'dark-cyan': 'hsl(183, 100%, 15%)',
          'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
          'grayish-cyan': 'hsl(184, 14%, 56%)',
          'light-grayish-cyan': 'hsl(185, 41%, 84%)',
          'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },
      letterSpacing: {
        large: '.5em'
      },
      screens: {
        mobile: '375px',
        desktop: '1440px'
      }
    }
  },
  plugins: []
}
