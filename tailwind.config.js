/** @type {import('tailwindcss').Config} */
export default {
  mode: "all",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbfa",
          100: "#d3f3f1",
          200: "#a9e7e4",
          300: "#72d3cf",
          400: "#38b6b2",
          500: "#1d9b97",
          600: "#137d7c",
          700: "#136464",
          800: "#154f50",
          900: "#154243",
        },
        accent: {
          400: "#f6a96b",
          500: "#f08a3c",
          600: "#dd7322",
        },
        ink: "#0f2a33",
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f5f9f9",
          tint: "#eefbfa",
        },
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(15, 42, 51, 0.35)",
        card: "0 12px 30px -18px rgba(15, 42, 51, 0.28)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
