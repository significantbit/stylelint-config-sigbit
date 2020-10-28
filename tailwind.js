const atRule = [
  true,
  {
    ignoreAtRules: [
      'tailwind',
      'layer',
      'apply',
      'variants',
      'responsive',
      'screen',
    ],
  },
];

module.exports = {
  extends: [
    './index',
  ],
  rules: {
    'at-rule-no-unknown': atRule,
    'scss/at-rule-no-unknown': atRule,
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
