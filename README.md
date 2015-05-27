Int16Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an [Int16Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array).


## Installation

``` bash
$ npm install validate.io-int16array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isInt16Array = require( 'validate.io-int16array' );
```

#### isInt16Array( value )

Validates if a value is an [Int16Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array).

``` javascript
var arr = new Int16Array( 10 );

var bool = isInt16Array( arr );
// returns true
```


## Examples

``` javascript
var isInt16Array = require( 'validate.io-int16array' );

console.log( isInt16Array( new Int16Array( 10 ) ) );
// returns true

console.log( isInt16Array( new Int8Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Uint8Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isInt16Array( new Uint16Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Int32Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Float32Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Float64Array( 10 ) ) );
// returns false

console.log( isInt16Array( new Array( 10 ) ) );
// returns false

console.log( isInt16Array( {} ) );
// returns false

console.log( isInt16Array( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-int16array.svg
[npm-url]: https://npmjs.org/package/validate.io-int16array

[travis-image]: http://img.shields.io/travis/validate-io/int16array/master.svg
[travis-url]: https://travis-ci.org/validate-io/int16array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/int16array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/int16array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/int16array.svg
[dependencies-url]: https://david-dm.org/validate-io/int16array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/int16array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/int16array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/int16array.svg
[github-issues-url]: https://github.com/validate-io/int16array/issues
