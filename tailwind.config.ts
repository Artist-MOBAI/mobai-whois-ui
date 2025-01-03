import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mobai: {
          white: "#EBECEE",
          black: "#000405",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
