import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        foreground: "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-hover)",
          secondary: "var(--accent-secondary)",
        },
        border: "var(--border)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.05", fontWeight: "700" }],
        "display-mobile": ["2.5rem", { lineHeight: "1.05", fontWeight: "700" }],
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        "h1-mobile": ["2rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h2-mobile": ["1.75rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-mobile": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        caption: ["0.8125rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "128px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-down": "fadeInDown 0.4s ease-out forwards",
        "count-up": "countUp 2s ease-in-out forwards",
        "draw-line": "drawLine 1.5s ease-in-out forwards",
        "shimmer": "shimmer 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 169, 110, 0.4)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(201, 169, 110, 0.2)" },
        },
      },
      backdropBlur: {
        nav: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
