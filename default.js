module.exports = {
  extends: ["stylelint-config-html", "stylelint-config-recess-order"],
  overrides: [
    {
      files: ["**/*.{js,ts,jsx,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
    {
      files: ["**/*.{html,vue,svelte,xml}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.{md,markdown}"],
      customSyntax: "postcss-markdown",
    },
  ],
};
