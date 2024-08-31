import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cls: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          "foreground-secondary": "var(--foreground-secondary)",
          purple: "var(--purple)",
          pink: "var(--pink)",
          red: "var(--red)",
          grey: "var(--grey)",
          "light-green": "var(--light-green)",
        },
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)",
        "tb-gradient": "var(--tb-gradient)",
        "bt-gradient": "var(--bt-gradient)",
        "pink-gradient": "var(--pink-gradient)",
        "dark-gradient": "var(--dark-gradient)",
        "light-card": "var(--light-card-bg)",
      },
      boxShadow: {
        default: "var(--default-shadow)",
        "default-card": "box-shadow: 6px 6px 4px 0px #0A0E14",
        "pink-shadow": "20px 20px 4px 0px rgba(159, 64, 255, 0.8)",
      },
      fontFamily: {
        primary: ["Roboto", ...defaultTheme.fontFamily.sans],
        secondary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        slideIn: "slideIn  250ms ease-in-out",
      },
      keyframes: {
        slideIn: {
          from: { transform: "translate3d(0, -100%, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
}

