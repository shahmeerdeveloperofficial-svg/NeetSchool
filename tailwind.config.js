/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        main: "#0090D0", // Alta Vista Sky Cyan Accent
        mainD: "#0070A4", // Darker Cyan
        sec: "#0A1860", // Alta Vista Deep Sapphire Navy
        secD: "#122A88", // Royal Navy
        skyBrand: "#38BDF8",
        skyLight: "#E0F2FE",
        navyBrand: "#0A1860",
        light: "#FFFFFF",
        dark: "#060E36", // Deep Midnight Navy
        gray: "#64748B",
        grayL: "#F0F9FF",
        grayD: "#334155",
      },
    },
  },
  plugins: [],
};
