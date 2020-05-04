Small library for creating types map from .json dict files.
===========================================================

<img width="300" src="https://raw.githubusercontent.com/Tardigrada777/dictyper/master/docs/assets/dictyper.png">

[Changelog](CHANGELOG.md)

Currently is under hard development.

### Install

```bash
npm install dictyper # or yarn add dictyper 
```

### Usage

Create a `dt.js` file with the following contents:
```js
const { DictionaryParser } = require('dictyper');
const { join } = require('path');

// path to dict file (dict-example.json)
const d = new DictionaryParser(join(__dirname, 'dict-example.json'));

// path to save the resulting file with types (i18n.dict.d.ts)
d.generate(join(__dirname, './'));
```

Run `dt.js` with node
```bash
node dt.js
```


### Checklist

- [x] 1. Project init
    - [x] 1.1. Init base folder and files structure
    - [x] 1.2. Init git repo
    - [x] 1.3. Create changelog
- [x] 2. Setup compile process via tsc
    - [x] 2.4 compilation
    - [x] 2.3 bundling to `dist` folder
- [x] 3. Write lib
    - [x] 3.1 read from json function
    - [x] 3.2 Tree, Node e.t.c
    - [x] 3.3 Tree from json data
    - [x] 3.4 types generator
    - [x] 3.5 save \<dict\>.d.ts
- [x] 4. Setup webpack configuration (node package for generating dict.d.ts file and dt() typed function)
- [x] 5. npm-package bundling
- [ ] 6. Unit tests
    - [ ] 6.1 setup jest env
- [ ] 7. e2e tests (?)
- [ ] 8. documentation

Thanks for help with tree traversal algorithm [Ann Romme](https://github.com/rommeA)
