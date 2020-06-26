module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:chai-expect/recommended",
    "plugin:chai-friendly/recommended"
  ],
  "rules" :  {
    "prefer-destructuring": "off",
    "no-param-reassign": "off",
    "max-len": ["error", { "code": 200 }]
  },
  "plugins": [
    "mocha",
    "chai-expect", "chai-friendly"
  ],
  "env": {
    "mocha": true
  }
};