module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn'],
    indent: 'off',
    'no-var': ['off'],
    'one-var': ['off'],
    'no-console': 0,
    'import/newline-after-import': 'off'
  }
};
