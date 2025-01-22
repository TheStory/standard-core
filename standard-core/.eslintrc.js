const eol = require("os").platform();

module.exports = {
  extends: ["next/core-web-vitals", "prettier", "plugin:storybook/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["warn", { endOfLine: "auto" }],
    "linebreak-style": ["warn", eol === "win32" ? "windows" : "unix"],
    "react/jsx-curly-brace-presence": ["warn", "never"],
  },
  ignorePatterns: ["src/types/strapiTypes/*"],
};
