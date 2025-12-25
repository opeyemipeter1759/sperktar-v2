/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0ddff2",
        "primary-dark": "#0abfcf",
        "background-light": "#f5f8f8",
        "background-dark": "#111718",
        "surface-dark": "#1a2324",
        "text-secondary": "#9cb7ba",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(13, 223, 242, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(13, 223, 242, 0.1) 0px, transparent 50%)',
      }
    }
  },
  plugins: []
};