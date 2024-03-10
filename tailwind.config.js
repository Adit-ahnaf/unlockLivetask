/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        "scrn-900":"900px",
        "scrn-1330":"1330px"
      },
      fontFamily:{
        'bakilda':['bakilda'],
        'value-medium':['value-medium'],
        'lemon-regular':['"Lemon", serif'],
        'abril-bold':['abril-bold']
      },
      backgroundImage:{
        'Leaf':"url('./src/assets/icons/Leaf.svg')",
        'LeafBottom':"url('./src/assets/icons/leafbottom.svg')",
        'CofeeBin':"url('./src/assets/icons/coffeebin.svg')",
        'BiscutWhite':"url('./src/assets/icons/biscutwithtea.svg')",
        'FooterBg':"url('./src/assets/images/footerbg.png')",
      }
    },
  },
  plugins: [],
}