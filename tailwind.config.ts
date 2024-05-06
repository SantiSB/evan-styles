import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F5F5',   // Blanco muy claro
          100: '#EEEEEE',  // Blanco claro
          200: '#E0E0E0',  // Gris claro
          300: '#BDBDBD',  // Gris medio
          400: '#9E9E9E',  // Gris plata
          500: '#757575',  // Gris oscuro
          600: '#616161',  // Gris más oscuro
          700: '#424242',  // Casi negro
          800: '#212121',  // Muy oscuro (casi negro)
          900: '#000000',  // Negro
        },
        secondary: {
          50: '#F8F8F8',  // Casi blanco
          100: '#F1F1F1', // Plateado muy claro
          200: '#DADADA', // Plateado claro
          300: '#C2C2C2', // Plateado medio
          400: '#ABABAB', // Plateado más oscuro
          500: '#949494', // Plateado oscuro
          600: '#7D7D7D', // Plateado muy oscuro
          700: '#666666', // Gris oscuro
          800: '#4F4F4F', // Más oscuro
          900: '#383838', // Muy oscuro
        },
      }
    },
  },
  plugins: [],
};

export default config;
