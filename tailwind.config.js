module.exports = {
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
    purgeLayersByDefault: true,
  },
  purge: {
    // https://tailwindcss.com/docs/controlling-file-size
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
};
