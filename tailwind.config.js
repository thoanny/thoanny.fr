/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        thoanny: {
          primary: "#93C045",
          secondary: "#81AA39",
          accent: "#344417",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
