import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': 'var(--black)',    // Custom black color
        'primary': 'var(--primary)',  // Custom primary color (bright green)
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], // Add Inter font
        'poppins': ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
} satisfies Config;
