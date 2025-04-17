/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        maroondark: "#3D0C11",
        maroon2: "#D80032",
        maroon3: "#F78CA2",
        maroon4: "#F9DEC9",
        maroon5: "#f5e4e8",
      },
    },
  },
  plugins: [],
};
