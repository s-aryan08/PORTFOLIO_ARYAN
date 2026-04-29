/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* 👉 Custom breakpoints for 1440p & 4K monitors */
      screens: {
        '3xl': '1920px',  // Full HD+
        '4xl': '2560px',  // 1440p / QHD
        '5xl': '3840px',  // 4K / UHD
      },
      colors: {
        primary: "#0ea5e9", // Sky 500
        secondary: "#6366f1", // Indigo 500
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(14,165,233,0.08), 0 0 30px rgba(99,102,241,0.05)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(14,165,233,0.15), 0 0 50px rgba(99,102,241,0.1)',
          },
        },
      },
    },
  },
  plugins: [],
}
