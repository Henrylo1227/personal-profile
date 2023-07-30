/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

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

  plugins: [],
}
