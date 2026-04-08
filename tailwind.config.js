/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--clr-primary-a0)",
          100: "var(--clr-primary-a10)",
          200: "var(--clr-primary-a20)",
          300: "var(--clr-primary-a30)",
          400: "var(--clr-primary-a40)",
          500: "var(--clr-primary-a50)",
        },
        surface: {
          DEFAULT: "var(--clr-surface-a0)",
          100: "var(--clr-surface-a10)",
          200: "var(--clr-surface-a20)",
          300: "var(--clr-surface-a30)",
          400: "var(--clr-surface-a40)",
          500: "var(--clr-surface-a50)",
        },
        light: {
          DEFAULT: "var(--clr-light-a0)",
        },
        dark: {
          DEFAULT: "var(--clr-dark-a0)",
        },
        success: {
          DEFAULT: "var(--clr-success-a0)",
        },
        warning: {
          DEFAULT: "var(--clr-warning-a0)",
        },
        danger: {
          DEFAULT: "var(--clr-danger-a0)",
        },
        info: {
          DEFAULT: "var(--clr-info-a0)",
        },
      },
    },
  },
  plugins: [],
};