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

### `deepCopy`
Deeps copy an object. It uses JSON serialization under the hood: `JSON.parse(JSON.stringify(a));`

usage 1: `to = deepCopy(from)` creates new deep copied object
```
const deepCopy = require('jsshorts').deepCopy;
const from = { a: 'v1', b: 'v2', c: { x: '123', y: '345' } };

const to = deepCopy(from);
from.a = 'x'; // modify object, that does not influence 'to' 
console.log(`${JSON.stringify(from)}`);
console.log(`${JSON.stringify(to)}`);
```
usage 2: `deepCopy(from, to)` deeply copies properties of 'from' object into 'to' object
```
const deepCopy = require('jsshorts').deepCopy;

const from = { a: 'aaa' };
const to = { b: 'bbb' };
deepCopy(from, to);
console.log(`${JSON.stringify(to)}`); // to contains a and b
```

### `removePropertiesNotInFilter`
Removes properties from 'from' object when property not in 'filter' object

```
const obj = {
  a: 'v1', b: 'v2', c: 'v3', d: 'v4',
};
const filter = { b: 'cc', c: 'dd' };
removePropertiesNotInFilter(obj, filter);
console.log(`${JSON.stringify(obj)}`); // a and d are removed
```