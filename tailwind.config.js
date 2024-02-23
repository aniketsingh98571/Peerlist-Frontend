/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'footer-links':"#444D56",
      'posting-background':'#FAFBFC',
      'black-text':'#0D0D0D',
      'grey-text':'#6A737D'
    },
    extend: {
      width: {
        'side-width': '25%',
        'right-width':"75%",
        'page-width':'80%'
      },
      height:{
        'side-height':'100%',
        'right-height':'100%',
        'page-height':'100%'
      }
    },
  },
  plugins: [],
};
