import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 4px))" },
        },
      },
      animation: {
        "infinate-scroll": "infinite-scroll 50s linear infinite",
      },
      colors: {
        whois_ui: {
          background: "#EBECEE",
          text: "#000405",
          line: "#000405",
        },
        dark: {},
      },
    },
  },
  plugins: [],
} satisfies Config;
