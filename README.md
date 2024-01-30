<div align="center">

[![npm version](https://img.shields.io/npm/v/conpan.svg?style=flat-square)](https://www.npmjs.org/package/conpan)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/conpan/conpan)
[![Coverage Status](https://coveralls.io/repos/github/dovutuan/conpan/badge.svg?branch=master)](https://coveralls.io/github/dovutuan/conpan?branch=master)
[![install size](https://packagephobia.com/badge?p=conpan)](https://packagephobia.com/result?p=conpan)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/conpan?style=flat-square)](https://bundlephobia.com/package/conpan@latest)
[![npm downloads](https://img.shields.io/npm/dm/conpan.svg?style=flat-square)](https://npm-stat.com/charts.html?package=conpan)
[![gitter chat](https://img.shields.io/gitter/room/mzabriskie/conpan.svg?style=flat-square)](https://gitter.im/mzabriskie/conpan)
[![Known Vulnerabilities](https://snyk.io/test/npm/conpan/badge.svg)](https://snyk.io/test/npm/conpan)

</div>


## Installing

### Package manager

Using npm:

```bash
$ npm install conpan
```

Using bower:

```bash
$ bower install conpan
```

Using yarn:

```bash
$ yarn add conpan
```

Using pnpm:

```bash
$ pnpm add conpan
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import {toFullSizeCharacters, toHalfSizeCharacters} from 'conpan';

console.log(toHalfSizeCharacters('ｔｅｓｔ'));
console.log(toFullSizeCharacters('test'));
```

If you use `require` for importing, **only default export is available**:

```js
const toFullSizeCharacters = require('conpan');
const toHalfSizeCharacters = require('conpan');

console.log(toHalfSizeCharacters('ｔｅｓｔ'));
console.log(toFullSizeCharacters('test'));
```
