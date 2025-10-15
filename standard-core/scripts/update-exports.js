const fs = require('fs');
const path = require('path');

console.log("Updating exports in package.json...");

const distPath = path.resolve(__dirname, '../dist');
const packageJsonPath = path.resolve(__dirname, '../package.json');
const exportsMap = {
  ".": {
    import: "./dist/exports.js",
    require: "./dist/exports.js",
  },
};

/**
 * Recursively processes directories and generates entries for the `exports` section.
 * @param {string} dirPath - The path to the directory being processed.
 * @param {string} exportPath - The export path to be added to package.json.
 */
function processDirectory(dirPath, exportPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.posix.join(exportPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath, relativePath);
    } else if (entry.isFile() && (entry.name === 'index.js' || entry.name === 'exports.js')) {
      const basePath = path.posix.dirname(relativePath.replace(/^dist\//, ''));
      exportsMap[`./${basePath}`] = {
        import: `./${relativePath}`,
        require: `./${relativePath}`,
      };
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const filePath = relativePath.replace(/^dist\//, '').replace(/\.js$/, '');
      exportsMap[`./${filePath}`] = {
        import: `./${relativePath}`,
        require: `./${relativePath}`,
      };
    }
  });
}


processDirectory(distPath, 'dist');

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  packageJson.exports = exportsMap;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log("Exports have been updated in package.json.");
} else {
  console.error("Error: package.json not found!");
}
