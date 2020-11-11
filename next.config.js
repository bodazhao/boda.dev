// keep next.config.js simple as it is not parsed by Webpack, Babel or TS

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // list extensions that be treated as pages/routes at build time
  // pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  pageExtensions: ["tsx", "mdx"],
});
