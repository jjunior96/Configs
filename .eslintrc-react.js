module.exports = {
  env: {
    "commonjs": true,
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    "plugin:react/recommended"
  ],
  plugins: [
    'prettier',
    'import'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "path/to/config.js",
    },
  },
  parser: "babel-eslint",
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "prettier/prettier": "error",
    "no-console": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": [ "error", { "argsIgnorePattern": "next" } ]
  },
};
