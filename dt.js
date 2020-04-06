const { DictionaryParser } = require('./dist');
const { join } = require('path');

const d = new DictionaryParser(join(__dirname, 'en.json'));
d.generate(join(__dirname, './'));