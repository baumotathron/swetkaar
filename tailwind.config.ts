import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#000000",
        electric: "#005498",
        "tech-blue": "#014074",
        "tech-blue-dark": "#003A6A",
        gold: "#fdc500",
        "soft-gold": "#ffdd33"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top left, rgba(0,84,152,0.35), transparent 55%)",
        "orb-gradient":
          "radial-gradient(circle at 20% 20%, rgba(1,64,116,0.45), transparent 60%), radial-gradient(circle at 80% 10%, rgba(0,84,152,0.3), transparent 55%)"
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,84,152,0.45)",
        "inner-glow": "inset 0 0 30px rgba(0,84,152,0.25)"
      },
      fontFamily: {
        display: ["var(--font-syne)"],
        body: ["var(--font-manrope)"]
      }
    }
  },
  plugins: []
};

export default config;

