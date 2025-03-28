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
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@mui/material",
            message:
              "Importuj komponenty bezpośrednio, np. import Box from '@mui/material/Box'",
          },
        ],
        patterns: ['@mui/material/*/*'],
      },
    ],
  },
  ignorePatterns: ["src/types/strapiTypes/*"],
};
