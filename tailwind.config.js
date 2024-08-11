/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom_red: "0 0 20px 2px #f46b5d",
        custom_yellow: "0 0 20px 2px #f9bd4e",
        custom_green: "0 0 20px 2px #57c353",
      },
      // screens: {
      //   "mid-width": { raw: "(mid-width: 1280px)" },
      // },
    },
  },
  plugins: [],
};
