const { defineConfig } = require("eslint/config");
const configs = require("eslint-config-varp");

module.exports = defineConfig([
  {
    extends: [configs.eslint.base, configs.eslint.typescript, configs.eslint.react],
    rules: {
      "react/jsx-key": "off",
    },
  },
  {
    ignores: [".cache", "node_modules", "lib"],
  },
]);
