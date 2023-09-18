import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: "var(--heading-font)",
      body: "var(--body-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-pink": "linear-gradient(to right,#FE34B9, #903AFF )",
      },
      colors: {
        primary: {
          pink_100: "#D434FE",
          purple_100: "#903AFF",
          dark_purple: "#150E28",
        },
      },
    },
  },
  plugins: [],
};
export default config;
