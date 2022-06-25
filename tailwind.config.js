module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/img/hero.jpg')",
        card1: "url('/public/img/card1.jpg')",
      },
      fontFamily: {
        Rampart: ['Rampart One', 'cursive'],
        Diplomata: ['Diplomata', 'cursive'],
        LS: ['Londrina Sketch', 'cursive'],
      },
    },
  },
  plugins: [],
};
