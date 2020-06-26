# jsshorts

## About
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

This module provides a couple of shortcuts for commonly used javascript constructs

## Installation
```bash
$ npm install jsshorts
```

## Features
Run the examples below with runkit: https://npm.runkit.com/jsshorts

### `forEach`
Iterates over properties of an object. 
```
const forEach = require('jsshorts').forEach;

const obj = { a: '23', b: 'bla' };
forEach(obj, (k,v) => {
   console.log(`${k} : ${v}`);
}); 

```
### `containsProperty`
Checks if an object contains a property
```
const containsProperty = require('jsshorts').containsProperty;

const obj = { a: '23', b: 'bla' };
console.log(`${containsProperty(obj, 'a')}`);
console.log(`${containsProperty(obj, 'c')}`);
```


