import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        filterText: "#6679BF",
        activeText: "#242A56",
      },
    },
  },
  plugins: [],
};

export default config;
