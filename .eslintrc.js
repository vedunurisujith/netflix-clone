module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6":true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"],
            "react/prop-types": "off",
            "no-console": "off",
            "no-unused-vars": "off",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
          "version": "16.3.0"
        }
      }
};
