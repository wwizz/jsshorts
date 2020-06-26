const describe = require('mocha').describe;
const expect = require('chai').expect;
const containsProperty = require('../index').containsProperty;

describe('contains', () => {
  it('returns true when object contains property', () => {
    const obj = { a: 'v1', b: 'v2' };
    expect(containsProperty(obj, 'a')).to.be.true;
    expect(containsProperty(obj, 'b')).to.be.true;
  });

  it('returns false when object not contains property', () => {
    const obj = { a: 'v1', b: 'v2' };
    expect(containsProperty(obj, 'c')).to.be.false;
    expect(containsProperty(obj, 'd')).to.be.false;
  });
});
