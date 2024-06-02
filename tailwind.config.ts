import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#DFDFDF",
          secondary: "#C2c2c2",
          accent: "#0000",
          neutral: "#8f8f8f",
          "base-100": "#ffff",
          "info": '#f97316'
        },
        dark: {
          primary: "#373737",
          secondary: "#303030",
          accent: "#FFFFFF",
          neutral: "#585858",
          "base-100": "#3F3F3F",
          'info': '#f97316'
        },
      },
    ],
  },
};
export default config;
