import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Azul
        secondary: "#FBBF24", // Amarillo
        success: "#22C55E", // Verde
        warning: "#F59E0B", // Amarillo para advertencias
        error: "#EF4444", //

        //Ligth Mode
        light: {
          background: "#F3F4F6", // Fondo claro
          card: "#FFFFFF", // Fondo de tarjetas
          text: "#1F2937", // Texto oscuro
        },

        // BalckMode
        dark: {
          background: "#1F2937", // Fondo oscuro
          card: "#374151", // Fondo de tarjetas oscuras
          text: "#F9FAFB", // Texto claro
        },
      },

      screens: {
        screens: {
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "850px",
          // => @media (min-width: 850px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }

          xl: "1280px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
  darkMode: "media",
  plugins: [
    nextui({
      themes: {},
    }),
  ],
};
