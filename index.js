module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "globals": {
    "window": false,
    "define": false,
    "document": false,
    "process": false,
    "console": false,
    "_t": false,
    "angular": false
  },
  "rules": {
    "curly": [2, "all"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "quotes": [2, "single"],
    "max-params": [2, 4],
    "max-depth": [2, 3],
    "max-statements": [2, 20],
    "max-len": [2, 100, 2, {ignoreComments: true, ignoreUrls: true}],
    "no-undef": 2,
    "no-unused-vars": 2,
    "strict": [2, "global"],
    "operator-linebreak": [2, "after"],
    "no-multi-str": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "space-unary-ops": 2,
    "one-var": [2, {uninitialized: "always", initialized: "never"}],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "keyword-spacing": 2,
    "space-infix-ops": 2,
    "space-before-blocks": [2, "always"],
    "eol-last": 2,
    "array-bracket-spacing": [2, "never"],
    "object-curly-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "no-multiple-empty-lines": 2,
    "semi-spacing": [2, {"before": false, "after": true}]
  }
};
