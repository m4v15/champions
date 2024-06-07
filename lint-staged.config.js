module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --ignore-pattern "src/pages/api/_lib/"',
    'eslint',
  ],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.json': ['prettier --write'],
};
