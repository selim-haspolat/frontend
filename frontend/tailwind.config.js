/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(53, 97, 254)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0, 106, 255, 0) 0%, rgba(53, 97, 254, 1) 50%, rgba(53, 97, 254, 1) 100%)',
      },
    },
  },
  plugins: [],
};
