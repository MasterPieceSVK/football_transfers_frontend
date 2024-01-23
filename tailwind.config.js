/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#007BFF",

          secondary: "#FF4500",

          accent: "#FFD700",

          neutral: "#333333",

          "base-100": "#FFFFFF",

          info: "#00bde3",

          success: "#a7d200",

          warning: "#e4a500",

          error: "#ff0e59",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
