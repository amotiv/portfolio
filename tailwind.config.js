
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'code-img': "url('../public/codeimage1.png')",
        'face-img': "url('../public/me.jpg')",
        'coderight-img': "url('../public/codeimage2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};