module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nova Mono', 'monospace'],
      serif: ['Nova Mono', 'monospace'],
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      primary: '#eb3660',
      secondary: '#ffae18',
    }),
    extend: {
      colors: {
        primary: {
          100: '#eb3660',
          150: '#d43156',
          200: '#bc2b4d',
          250: '#a52643',
          300: '#8d203a',
          350: '#761b30',
          400: '#5e1626',
        },
        secondary: {
          100: '#ffae18',
          150: '#e69d16',
          200: '#cc8b13',
          250: '#b37a11',
          300: '#99680e',
          350: '#80570c',
          400: '#66460a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
