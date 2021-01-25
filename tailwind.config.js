module.exports = {
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    // https://tailwindcss.com/docs/controlling-file-size
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
};
