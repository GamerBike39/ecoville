import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        hero: "url('/bg/bg_home.webp')",
      },
      colors: {
        "pastel-green": {
          "50": "#f0fdf3",
          "100": "#dbfde5",
          "200": "#b9f9cc",
          "300": "#83f2a4",
          "400": "#53e47f",
          "500": "#1ec952",
          "600": "#12a740",
          "700": "#128335",
          "800": "#14672e",
          "900": "#125529",
          "950": "#042f13",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "fluid-sm": "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        "fluid-base": "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        "fluid-lg": "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        "fluid-xl": "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "fluid-2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "fluid-3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "fluid-4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
