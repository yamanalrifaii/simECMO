module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'blue': '2E7CA5', 
        'red' : '#991b1b',
        'grey' : '#f4f4f5', 
        'transparent' : 'transparent',
        'dark-grey': "#374151", 
      },
      screens: {
        'tablet': '640px',  // Custom breakpoints for responsive design
        'laptop': '1024px',
        'desktop': '1280px',
      },
      fontFamily: {
        'font': ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}