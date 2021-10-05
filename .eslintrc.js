module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "settings": {
    "version": "detect",
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
  ],
  "rules": {
    "react/prop-types": 0,
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};
