Small library for creating types map from .json dict files.
===========================================================

<img width="300" src="https://raw.githubusercontent.com/Tardigrada777/dictyper/master/docs/assets/dictyper.png">

[Changelog](CHANGELOG.md)

### Status: Alpha
Currently is under hard development. PRs are appreciated!

### Install

```bash
npm install --save-dev dictyper # or yarn add --dev dictyper 
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

It creates `i18n.dict.d.ts` file. Now, you can use our `dt` function, for example:

```vue
<template>
  <h1> {{ translatedValue }} </h1>
</template>

<script lang="ts">
import { dt } from 'dictyper/dt';

export default {
  computed: {
    translatedValue() {
      return this.$t(dt('path.to.existing.key'));
    }      
  }
}
</script>
```

Once the file `i18n.dict.d.ts` is created, your IDE will prompt the current keys from the dictionary and indicate 
an error if the dialed key does not exist. Or you can type any other function using the generated `dtFuncArgiments` interface.

#### vscode
<img width="548" height="392" src="https://raw.githubusercontent.com/Tardigrada777/dictyper/master/docs/assets/dictyper-vscode.gif">

#### Webstorm
<img width="548" height="392" src="https://raw.githubusercontent.com/Tardigrada777/dictyper/master/docs/assets/dictyper-ws.gif">

### TODO

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
