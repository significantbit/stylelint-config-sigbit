module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-hudochenkov/order',
  ],
  rules: {
    'indentation': 2,
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'unit-blacklist': ['ms'],
    'order/order': [
      'dollar-variables',
      'custom-properties',
      {
        type: 'at-rule',
        name: 'extend',
      },
      'declarations',
      'at-rules',
      'rules',
    ],
  },
};