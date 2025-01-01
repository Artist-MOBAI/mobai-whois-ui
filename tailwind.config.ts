import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
