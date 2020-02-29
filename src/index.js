var parse = require('json-to-ast');
var test = {
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
var res = parse(JSON.stringify(test));
console.log(res.children[0].key);
