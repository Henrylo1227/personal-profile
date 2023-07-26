/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'primary': '#FFE500',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#646669',
      'grey-light': '##888888',
      'dark-grey': '#323437',
      'purple-light': '#E09EFF',
      'purple-dark': '#9440FF',
    },

    backgroundImage: {
    },

    extend: {

      keyframes: {
        vExtend: {
          '0%': { height: '0%' },
          '100%': { height: '100%'}
        } 
      },

      animation: {
        'ease-in': 'vxtend 1s',
      }
    }
  },

  plugins: [],
}
