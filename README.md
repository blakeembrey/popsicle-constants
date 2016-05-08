# Popsicle Constants

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Replace constants in the request URL.

**DEPRECATED:** Use template strings before making HTTP request.

## Installation

```
npm install popsicle-constants --save
```

## Usage

```javascript
var request = require('popsicle')
var constants = require('popsicle-constants')

request('http://example.com/{API_KEY}/users.json')
  .use(constants({
    API_KEY: 'abc'
  }))
  //=> { url: "http://example.com/abc/users.json" }
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/popsicle-constants.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-constants
[downloads-image]: https://img.shields.io/npm/dm/popsicle-constants.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-constants
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-constants.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-constants
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-constants.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-constants?branch=master
