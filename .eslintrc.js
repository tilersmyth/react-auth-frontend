module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  parser: 'babel-eslint',
  globals: {
    localStorage: true,
    window: true,
    document: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
  },
};
