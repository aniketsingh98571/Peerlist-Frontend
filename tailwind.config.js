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
      'grey-text':'#6A737D',
      'red-text':'#EB5757',
      'green-text':'#219653'
   },
   
    extend: {
      backgroundColor:{
        'rejected':'#FFEAEA',
        'applied':'#E1E4E8',
        'shortlisted':'#E2F5EA',
        'white':'#ffffff'
      },
      width: {
        'side-width': '22%',
        'right-width':"78%",
        'page-width':'85%',
        'card-width':'32%'
      },
      height:{
        'side-height':'100%',
        'right-height':'100%',
        'page-height':'100%',
        'posting-height':'20%',
        'drag-height':'80%'
      }
    },
  },
  plugins: [],
};
