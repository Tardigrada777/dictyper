const { DictionaryParser } = require('./dist');
const { join } = require('path');

const d = new DictionaryParser(join(__dirname, 'dict-example.json'));
d.generate(join(__dirname, './'));
