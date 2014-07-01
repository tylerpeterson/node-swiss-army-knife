var expect = require('chai').expect;
var permuterFactory = require('../index').permuterFactory;

describe('permuter', function () {
  it('should work stand-alone', function () {
    var permuter = permuterFactory(['a','b']);
    expect(permuter(['x'])).to.eql([
        ['x', 'a'],
        ['x', 'b']
      ]);
  });
  it('should work with reduce', function () {
    var permuter = permuterFactory(['a', 'b']);
    expect([['x']].reduce(permuter, [])).to.eql([
        ['x', 'a'],
        ['x', 'b']
      ]);
  });
  it('can be used to compute swedish ancestor names', function () {
    var parents = ['mor', 'far'];
    var permuter = permuterFactory(parents);

    expect([['']]
      .reduce(permuter, [])
      .reduce(permuter, [])
      .map(function (cur) {return cur.join('');})).to.eql([
        'mormor',
        'morfar',
        'farmor',
        'farfar'
      ]);
  });
});