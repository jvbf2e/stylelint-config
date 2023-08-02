module.exports = {
  extends: [require.resolve("./index.js"), "stylelint-config-standard-scss"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
