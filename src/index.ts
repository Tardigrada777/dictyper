const parse = require('json-to-ast');

const test = {
    "pages": {
        "settings": {
            "title": "Settings Page"
        },
        "home": {
            "title": "Home Page"
        }
    },
    "messages": {
        "hello": "Hello Message"
    },
    "locale": "en"
};

const res = parse(JSON.stringify(test));
console.log(res.children[0].key);