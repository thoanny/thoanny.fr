/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./data/**/*.json"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#93C045",
          secondary: "#81AA39",
          accent: "#ff1ecc",
          neutral: "#0f172b",
          "base-100": "#FFFFFF",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0",
          "base-content": "#020618",
          info: "#00b5fb",
          success: "#00a96e",
          warning: "#ffbf00",
          error: "#ff6368",
        },
      },
      {
        dark: {
          primary: "#93C045",
          "primary-content": "#020618",
          secondary: "#81AA39",
          accent: "#ff1ecc",
          neutral: "#1d293d",
          "base-100": "#1d293d",
          "base-200": "#0f172b",
          "base-300": "#020618",
          "base-content": "#a6adbb",
          info: "#00b5fb",
          success: "#00a96e",
          warning: "#ffbf00",
          error: "#ff6368",
        },
      },
    ],
    darkTheme: "dark",
  },
};
