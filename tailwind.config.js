/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      hungry: ['The Hungry Regular', 'sans-serif'],
      brigends: ['Brigends Expanded', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      fullBlack: "#000000",
      fullWhite: "#FFFFFF",
      blueGrad: {
        from: '#316099',
        to: '#52A0FF'
      },
      lightBlack: '#3F3F3F'
    },
    borderRadius: {
      '50' : '17%',
      'full' : '50%'
    }
  },
  plugins: [],
};
