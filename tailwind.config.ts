import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  		},
  		scale: {
  			'175': '1.75',
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)'],
  		},
  	},
  },
  plugins: [],
};
export default config;
