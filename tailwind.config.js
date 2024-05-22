/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "background-strong": "#EADDD4",
        "accent": "#775432",
        "background": "#F0EDEA",
      },
      boxShadow: {
        'custom': '0px 0px 3px 1px rgba(143, 143, 143, 0.411)',
        'box': '0px 0px 12px 2px rgba(167, 167, 167, 0.235)'
      },
    },
  },
  plugins: [],
};
