const describe = require('mocha').describe;
const expect = require('chai').expect;
const forEach = require('../index').forEach;

describe('forEach', () => {
  it('iterates over properties of object', () => {
    const obj = { a: 'v1', b: 'v2' };
    const keys = [];
    const vals = [];

    forEach(obj, (k, v) => {
      keys.push(k);
      vals.push(v);
    });
    expect(keys).to.have.lengthOf(2);
    expect(keys).to.have.ordered.members(['a', 'b']);
    expect(vals).to.have.lengthOf(2);
    expect(vals).to.have.ordered.members(['v1', 'v2']);
  });
});
