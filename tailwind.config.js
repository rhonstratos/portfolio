/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tea-green': '#d7f2baff',
        'celadon': {
          '1': '#bde4a8ff',
          '2': '#9cc69bff',
          '3': '#8ddca4ff'
        },
        'cambridge-blue': '#79b4a9ff',
        'reseda-green': '#676f54ff',
        'licorice': '#291711ff',
        'dark-moss-green': '#474b24ff',
        'mint': '#5fbb97ff',
        'finn': '#63326eff',
      }
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require("daisyui")
  ],
}
