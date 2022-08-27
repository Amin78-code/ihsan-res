module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'sc1200': '1200px',
      'xl': '1280px',
      'sc1350': '1350px',
      'sc1440': '1440px',
      'sc1500': '1500px',
      '2xl': '1536px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}
