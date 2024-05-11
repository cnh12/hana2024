const fs = require('fs');
const packageJsonPath = './package.json';
const packageJson = require(packageJsonPath);
process.env.REACT_APP_HOMEPAGE = true
packageJson.homepage = process.env.REACT_APP_HOMEPAGE || "http://cnh12.github.io/hana2024";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
