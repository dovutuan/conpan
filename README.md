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
