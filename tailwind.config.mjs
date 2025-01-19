/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      keyframes: {
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },

        slideRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },

        highlightTop: {
          "0%": { left: "-8%", opacity: "0" },
          "100%": { left: "0%", opacity: "1" },
        },

        highlightBottom: {
          "0%": { right: "-8%", opacity: "0" },
          "100%": { right: "0%", opacity: "1" },
        },
        pop: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        highlight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },

        typewriter: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-slide": "fadeSlide 1s ease-out forwards",
        "slide-left": "slideLeft 1s ease-out forwards",
        "slide-right": "slideRight 1s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "scale-up": "scaleUp 0.6s ease-out forwards",
        "highlight-top": "highlightTop 0.7s ease-out forwards",
        "highlight-bottom": "highlightBottom 0.7s ease-out forwards",
        "pop": "pop 0.5s ease-out",
        "fade-up": "fadeUp is ease-out forwards",
        'highlight': 'highlight 1s ease-out forwards',
        'typewriter': 'typewriter 3s steps(40) 1s normal both',
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      // Additional delays for staggered animations
      animationDelay: {
        200: "200ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        500: '500ms', 
      },
    },
  },
  plugins: [],
};
