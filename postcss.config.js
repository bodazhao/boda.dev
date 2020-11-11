// NOTE: we could process.env.NODE_ENV === "production" the output of plugins
// if we don't want or customise transformations in development

// the following packages are part of Next.js PostCSS defaults
// - postcss-flexbugs-fixes
// - postcss-preset-env
// see https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins

module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    "tailwindcss",
  ],
};
