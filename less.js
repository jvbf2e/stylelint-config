module.exports = {
  extends: [require.resolve("./index.js"), "stylelint-config-recommended"],
  plugins: ["stylelint-less"],
  overrides: [
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
  rules: {
    "at-rule-no-unknown": null,
    "less/color-no-invalid-hex": true,
    "less/no-duplicate-variables": true,
  },
};
