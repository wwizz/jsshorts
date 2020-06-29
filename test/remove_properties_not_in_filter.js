const describe = require('mocha').describe;
const expect = require('chai').expect;
const removePropertiesNotInFilter = require('../index').removePropertiesNotInFilter;

describe('removePropertiesNotInFilter', () => {
  it('accepts undefined obj (and does not crash)', () => {
    const filter = { b: 'cc', c: 'dd' };
    const obj = undefined;
    removePropertiesNotInFilter(obj, filter);
  });
  it('accepts undefined filter, obj is not effected (and does not crash)', () => {
    const obj = {
      a: 'v1', b: 'v2', c: 'v3', d: 'v4',
    };
    const before = JSON.stringify(obj);

    const filter = undefined;
    removePropertiesNotInFilter(obj, filter);
    const after = JSON.stringify(obj);
    expect(before).equal(after);
  });
  it('filters', () => {
    const obj = {
      a: 'v1', b: 'v2', c: 'v3', d: 'v4',
    };
    const filter = { b: 'cc', c: 'dd' };
    removePropertiesNotInFilter(obj, filter);
    expect(obj).to.not.have.property('a');
    expect(obj).to.have.property('b', 'v2');
    expect(obj).to.have.property('c', 'v3');
    expect(obj).to.not.have.property('d');
  });
});
