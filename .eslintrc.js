module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    ],
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // => 함수의 반환타입이 지정되어 있지 않거나 타입이 지정되어야 할 곳에 타입이 없어면 에러 표시됨
    "prefer-const": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
