/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      colors: {
        honey: {
          orange: '#F27C22',
        },
      },
    },
  },
  plugins: [],
};