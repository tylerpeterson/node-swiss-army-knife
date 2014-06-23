var expect = require('chai').expect;
var allPermutations = require('../index').allPermutations;

describe('allPermutations', function () {
  it('should return empty list when called with nothing', function () {
    expect(allPermutations()).to.be.an('array');
  });
});