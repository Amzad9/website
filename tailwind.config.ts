import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
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
        'secondary': 'var(--secondary)',
      },
      fontFamily: {
        'inter': ['var(--font-inter)'],
        'poppins': ['var(--font-poppins)'],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 20s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
function addVariablesForColors({ addBase, theme }: { addBase: (base: Record<string, Record<string, string>>) => void; theme: (path: string) => Record<string, string> }) {
  const allColors = flattenColorPalette(theme("colors")) as Record<string, string>;
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}