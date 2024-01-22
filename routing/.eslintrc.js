module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['routing-project/routing-app/dist/*'],
  settings: {
    react: {
      version: '18.1',
    },
  },
};
