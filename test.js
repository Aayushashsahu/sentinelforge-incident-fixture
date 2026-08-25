const fs = require("node:fs");

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const manifest = JSON.parse(fs.readFileSync("release-manifest.json", "utf8"));

if (packageJson.version !== manifest.version) {
  console.error(`Release manifest version mismatch: package.json=${packageJson.version}, release-manifest.json=${manifest.version}`);
  process.exit(1);
}

console.log(`Release manifest version verified: ${packageJson.version}`);
