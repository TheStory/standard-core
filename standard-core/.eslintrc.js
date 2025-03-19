const eol = require("os").platform();

module.exports = {
  extends: ["next/core-web-vitals", "prettier", "plugin:storybook/recommended"],
  plugins: ["prettier", "@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "linebreak-style": ["warn", eol === "win32" ? "windows" : "unix"],
    "react/jsx-curly-brace-presence": ["warn", "never"],
  },
  ignorePatterns: ["src/types/strapiTypes/*"],
};
