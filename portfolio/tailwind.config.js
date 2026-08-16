/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0F19",
        surface: "#131A29",
        surface2: "#1A2233",
        hairline: "#232B3D",
        ink: "#E7ECF4",
        muted: "#8996AC",
        accent: {
          DEFAULT: "#7C8CF8",
          soft: "#A5B0FA",
        },
        amber: {
          DEFAULT: "#F2B25C",
          soft: "#F7CE93",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(124,140,248,0.06) 0%, rgba(124,140,248,0) 60%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
