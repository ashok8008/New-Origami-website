/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#111111",
          800: "#1a1a1a",
        },
        signal: {
          DEFAULT: "#FF3333",
          hover: "#E62E2E",
        },
        klein: "#002FA7",
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "system-ui", "sans-serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.2em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        foldIn: {
          "0%": { opacity: "0", transform: "skewY(-4deg) translateY(20px)" },
          "100%": { opacity: "1", transform: "skewY(0) translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        foldIn: "foldIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
