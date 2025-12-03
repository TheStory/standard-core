/**
 * ESLint config for the standard-core library
 * - Runs independently of Next’s `next lint`
 * - Lints TS/TSX source and stories; ignores build outputs
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "storybook"],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [
    "dist/**",
    ".next/**",
    "storybook-static/**",
    "node_modules/**",
  ],
};
