/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'footer-links':"#444D56"
    },
    extend: {
      width: {
        'side-width': '25%',
        'right-width':"75%",
        'page-width':'100%'
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
