const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const tsLint = () => `yarn check-types`;

module.exports = {
  '**/*.{js,jsx,cjs,mjs,ts,tsx}': ['yarn prettier', buildEslintCommand],
  '**/*.{ts,tsx}': [tsLint],
};
