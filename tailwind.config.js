/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',
          surface: '#121212',
          elevated: '#1E1E1E',
          border: '#2A2A2A',
          accent: '#38bdf8',
          'accent-light': '#7dd3fc',
          success: '#10b981',
          whatsapp: '#25d366',
        },
        text: {
          primary: '#ededed',
          secondary: '#a1a1aa',
          muted: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "shimmer": "shimmer 1.5s infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    }
  },
  plugins: [],
}