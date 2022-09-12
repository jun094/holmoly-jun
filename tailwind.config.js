module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],

          // customed ...
          primary: '#5094fa',
          'primary-content': '#fff',
          info: '#A9ABB8',

          // pre-custom ...
          secondary: '#D926A9',
          accent: '#1FB2A6',
          neutral: '#191D24',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    ],
  },
}
