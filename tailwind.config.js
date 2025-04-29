/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    borderColor:{
      'primary': 'rgb(16, 165, 223)',
      'secondary':'rgb(16, 223, 71)'

    },
    fontFamily :{
      'hero-font':'Sriracha'
    }
    
  },
  
  plugins: [],
}

