module.exports = {

  purge: ["./src/*.html", "./src/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      
      colors: {
        primary: '#013ebb',
        secondary: '#FF9900',
        primaryLight: '2B69E5',
        primaryDark: '#002979',

        black: '#333',
        white: '#fff',

        gray: '#F4F4F4',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
