const recessConfig = require('stylelint-config-recess-order')

const recessConfigWithEmptyLine = recessConfig.rules[
  'order/properties-order'
].map((group) => {
  return {
    ...group,
    emptyLineBefore: 'always',
  }
})

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-no-important': true,
    'order/properties-order': recessConfigWithEmptyLine,
    'declaration-empty-line-before': [
      'never',
      {
        ignore: [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block',
        ],
      },
    ],
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z0-9]+)?(--[a-z0-9]+)?$",
      {
        "message": "Expected class selector to be BEM"
      }
    ],
  },
}
