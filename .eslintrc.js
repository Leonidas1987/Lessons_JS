module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: ["tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["warn", "always"],
    "no-unused-vars": ["warn"],
  },
};
