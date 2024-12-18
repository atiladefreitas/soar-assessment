import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#343C6A",
        card: {
          "dark-from": "#5B5A6F",
          "dark-to": "#000000",
          "light-text": "#718EBF",
          border: "#DFEAF2",
        },
        input: {
          bg: "#F5F7FA",
          text: "#8BA3CB",
          icon: "#718EBF",
        },
        text: {
          primary: "#232323",
          secondary: "#718EBF",
        },
        accent: "#396AFF",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-left": "slide-left 0.5s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
