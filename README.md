<div align="center">
<h1>eslint-plugin-template</h1>

<p>custom rule</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-plugin-template
```

This library has a required `peerDependencies` listing for [`eslint`][eslint].

## Usage

Add `template` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["template"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "template/template": "error"
  }
}
```

## Further Reading

- https://eslint.org/

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/sam-parsons/eslint-plugin-template/node-ci?logo=github&style=flat-square
[build]: https://github.com/sam-parsons/eslint-plugin-template/actions?query=workflow%3Anode-ci
[coverage-badge]: https://img.shields.io/codecov/c/github/sam-parsons/eslint-plugin-template.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/eslint-plugin-template-template.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-plugin-template
[license-badge]: https://img.shields.io/npm/l/eslint-plugin-template.svg?style=flat-square
[license]: https://github.com/sam-parsons/eslint-plugin-template/blob/main/LICENSE
[eslint]: https://eslint.org
<!-- prettier-ignore-end -->
