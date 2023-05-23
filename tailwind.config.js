const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "w-dark-pink": "#E50075",
        "w-vivid-pink": "#FF2897",
        "w-light-pink": "#FFEAF5",
        "w-dark": "#2D2C4C",
        "w-light-grey": "#F8FAFF",
        "w-grey": "#EEF4FF",
        "w-dark-gray": "#585a5d",
        "w-light-blue": "#C4D6F6",
        "w-light-white": "#FBFAFF",
      },
      boxShadow: {
        "custom": "0px 32px 41px rgba(96, 150, 249, 0.15)",
        "pink-shadow": "0px 11px 28px rgba(232, 5, 121, 0.3)",
        "light-pink": "0px 41px 58px rgba(232, 5, 121, 0.2)",
      },
      backgroundImage: {
        "about-right": "url('../public/about-right.png')",
        "intersect": "url('../icons/intersect.svg')",
        "join": "url('../icons/join-bg.svg')",
        "join-sm": "url('../icons/join-bg-mob.svg')",
        "back-grad-2": "linear-gradient(272.42deg, #E50075 -0.18%, #FF2897 99.55%)",
        "back_grad_1": "linear-gradient(180deg, #F8FAFF 0%, rgba(248, 250, 255, 0) 80.86%)",
        "footer": "url('../icons/footer-main-bg.svg')",
      },
      backgroundSize: {
        "100": "100% 100%"
      },
      screens: {
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1400px",
        "3xl": "1920px",
        "4xl": "2560px"
      }
    },
  },
  plugins: [],
};
