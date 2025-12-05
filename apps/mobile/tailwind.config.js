/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#020617", // fondo casi negro
          800: "#0b1120",
          700: "#111827",
          600: "#1f2937",
        },
        neon: {
          pink: "#ec4899",
          blue: "#22d3ee",
          lime: "#bef264",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
