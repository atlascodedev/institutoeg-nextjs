module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },

      boxShadow: {
        custom: "0px 2px 10px 2px rgba(38, 44, 80, 0.2);",
        customAlt:
          "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);",
      },

      zIndex: {
        250: 250,
        500: 500,
        1000: 1000,
      },

      margin: {
        "1/2": "50%",
        "1/3": "33.333%",
        "1/4": "25%",
      },

      height: {
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
      },

      width: {
        "over-10": "110%",
        "over-20": "120%",
      },

      maxWidth: {
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "10pc": "10%",
        "20pc": "20%",
        "30pc": "30%",
        "40pc": "40%",
        "50pc": "50%",
        "60pc": "60%",
        "70pc": "70%",
        "80pc": "80%",
        "90pc": "90%",
        "100pc": "100%",
      },

      minWidth: {
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "10pc": "10%",
        "20pc": "20%",
        "30pc": "30%",
        "40pc": "40%",
        "50pc": "50%",
        "60pc": "60%",
        "70pc": "70%",
        "80pc": "80%",
        "90pc": "90%",
        "100pc": "100%",
      },

      colors: {
        deepBlue: "#172b4d",

        primary: {
          main: "#003358",
          light: "#054C80",
          dark: "#002946",
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#004D58",
          light: "#026E7C",
          dark: "#003D45",
          contrastText: "#FFFFFF",
        },
        tertiary: {
          main: "#718463",
          light: "#9BB48A",
          dark: "#42513A",
        },
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus", "responsive", "group-hover", "group-focus"],
    },
    opacity: ["disabled"],
    pointerEvents: ["disabled"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({ stratagy: "class" }),
  ],
};
