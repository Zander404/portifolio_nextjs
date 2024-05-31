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
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: [{
      light: {
        "primary": "#a991f7",
        "secondary": "#f6d860",
        "accent": "#81f",
        "neutral": "#fff",
        "base-100": "#9fff",
        'text': '#ffff'
      },
      dark: {
        "primary": "#a991f7",
        "secondary": "#f6d860",
        "accent": "#ef3",
        "neutral": "#525252",
        "base-100": "#0000",
      }
    }]
  }
};
export default config;
