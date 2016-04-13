# object-has

> Checks if path is a direct property of object.



[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/object-has/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/object-has/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/object-has)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/object-has/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/object-has)


## Install

```
$ npm install --save object-has 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/object-has/blob/master/test/spec/index.js)

```js
var has    = require('object-has');
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

has(object, 'a[0].b.c');           // => true
has(object, 'a[1]');               // => true
has(object);                       // => false
has(['a', 'b', 'c'], 2);           // => true
has({ a: 'abcde' }, 'a[1]');       // => false
has({ a: ['abcde'] }, 'a[0][2]');  // => true
```

## Related

- [object-at](https://github.com/bubkoo/object-at) - Get object's property according to the path.
- [object-set](https://github.com/bubkoo/object-set) - Sets the value at path of object.
- [object-unset](https://github.com/bubkoo/object-unset) - Removes the property at path of object.
- [to-path](https://github.com/bubkoo/to-path) - Converts string to a property path array. 


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/object-has/issues/new).
