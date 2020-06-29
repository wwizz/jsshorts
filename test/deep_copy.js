const describe = require('mocha').describe;
const expect = require('chai').expect;
const deepCopy = require('../index').deepCopy;

describe('deepCopy', () => {
  describe('without \'to\' argument passed', () => {
    it('creates a copy', () => {
      const obj = { a: 'v1', b: 'v2', c: { x: '123', y: '345' } };
      const dc = deepCopy(obj);
      expect(obj).not.equals(dc);
    });
    it('copies an object deeply', () => {
      const obj = { a: 'v1', b: 'v2', c: { x: '123', y: '345' } };
      const dc = deepCopy(obj);
      expect(JSON.stringify(obj)).equals(JSON.stringify(dc));
    });
  });
  describe('with \'to\' argument passed', () => {
    it('properties of from are deep copied into to', () => {
      const from = { a: 'v1', b: 'v2', c: { x: '123', y: '345' } };
      const to = {};
      deepCopy(from, to);
      expect(JSON.stringify(from)).equals(JSON.stringify(to));
    });
    it('\'to\' object will be extended with properties of \'from\'', () => {
      const from = { a: 'aaa' };
      const to = { b: 'bbb' };
      deepCopy(from, to);
      expect(to).to.have.property('a', 'aaa');
      expect(to).to.have.property('b', 'bbb');
    });
    it('Existing properties in \'to\' object will be overwitten with properties of \'from\'', () => {
      const from = { a: 'aaa' };
      const to = { a: 'bbb' };
      deepCopy(from, to);
      expect(to).to.have.property('a', 'aaa');
    });
  });
});
