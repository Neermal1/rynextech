import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        primary: "#041436",
        secondary: "#BB031D",
        black: "#111111",
        hover: "#ff2342",
        accent: "#fff0f2",
        lightAccent: "#F2F5F7",
        neutral: "#9ca3af",
      },
    },
  },
  plugins: [],
};
export default config;
