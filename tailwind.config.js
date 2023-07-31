/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        xs: '0 0.5px 0.5px var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      keyframes: {
        vExtend: {
          '0%': { height: '0%' },
          '100%': { height: '100%'}
        } 
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'primary': '#FFE500',
        'white': '#FFFFFF',
        'black': '#000000',
        'grey': '#646669',
        'grey-light': '#D9D9D9',
        'dark-grey': '#323437',
        'purple-light': '#E09EFF',
        'purple-dark': '#9440FF',
        'paper': '#FFF7EF',
      },

    }
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
