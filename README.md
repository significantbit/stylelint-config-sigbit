# Sigbit stylelint config
> 🎨👮 Enforce SCSS code conventions.

## Usage
Add `stylelint`, `stylelint-scss` and this config to your project:

```sh
$ yarn add stylelint stylelint-scss "significantbit/stylelint-config-sigbit#<release>" -D
```

Use default config:
```js
// .stylelintrc.js
module.exports = {
  extends: [
    'stylelint-config-sigbit'
  ]
}
```