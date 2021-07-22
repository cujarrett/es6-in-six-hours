module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  rules: {
    "array-callback-return": [
      "error"
    ],
    "array-bracket-spacing": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      "error",
      {
        properties: "always"
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "dot-notation": [
      "error"
    ],
    "eol-last": [
      "error"
    ],
    eqeqeq: [
      "error"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],
    "id-length": [
      "error",
      {
        min: 2
      }
    ],
    indent: [
      "error",
      2
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      {
        code: 100
      }
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true
      }
    ],
    "newline-per-chained-call": [
      "error"
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-confusing-arrow": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-iterator": [
      "error"
    ],
    "no-loop-func": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1
      }
    ],
    "no-multi-spaces": [
      "error"
    ],
    "no-nested-ternary": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-param-reassign": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-underscore-dangle": [
      "error"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "no-unused-vars": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "no-whitespace-before-property": [
      "error"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "prefer-arrow-callback": [
      "error"
    ],
    "prefer-const": [
      "error"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "error"
    ],
    quotes: [
      "error",
      "double"
    ],
    radix: [
      "error"
    ],
    semi: [
      "error",
      "never"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        named: "never",
        anonymous: "always",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": [
      "error"
    ],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "wrap-iife": [
      "error",
      "outside"
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "no-console": [
      "off"
    ]
  }
}
