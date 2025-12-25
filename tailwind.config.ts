
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#06B6D4",
        "primary-hover": "#0891b2",
        "background-light": "#f3f4f6",
        "background-dark": "#18181B",
        "secondary-text": "#E5E7EB",
        "muted": "#9CA3AF",
        "glass-bg": "rgba(24, 24, 27, 0.7)", 
        "glass-border": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
export default config
