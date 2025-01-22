module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^\.\/(.*)$"],
}
