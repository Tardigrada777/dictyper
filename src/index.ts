import DictionaryParser from './DictionaryParser';

const enDict = {
    "page": {
        "home": "Home"
    }
}

interface EN{'page.home','page.messages','an.messages.about.title','page.home.s','page.home.d'};


const parser = new DictionaryParser('./en.json');