// The following .eslintrc.js file defines the linting rules that I like to work with on javascript projects.
// It requires either a global or a local installation of eslint.

module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "max-len": ["error", { "code": 200, "ignoreStrings": true }],
        "array-bracket-spacing": ["error"],
        "array-callback-return": ["error", { checkForEach: true }],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error"],
        "computed-property-spacing": ["error"],
        "consistent-return": 2,
        "dot-notation": ["error"],
        "eol-last": ["error"],
        "func-call-spacing": ["error"],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "indent": ["error", 2],
        "no-else-return": 1,
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "no-sequences": ["error"],
        "no-trailing-spaces": ["error"],
        "no-var": ["error"],
        "no-undef": ["error"],
        "no-useless-escape": ["error"],
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "double"],
        "require-await": ["error"],
        "semi": [1, "always"],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error"],
        "space-unary-ops": 2,
        "space-infix-ops": ["error"],
    },
};
