var expect = require('chai').expect;
var allPermutations = require('../index').allPermutations;

describe('allPermutations', function () {
  it('should return empty list when called with nothing', function () {
    expect(allPermutations()).to.be.an('array');
  });

  it('should do a defensive copy', function () {
    var options = ['a', 'b'];
    expect(allPermutations(options, 1)).to.not.equal(options);
  });

  it('should return the original options for length 1', function () {
    var options = ['a', 'b'];
    expect(allPermutations(options, 1)).to.eql(options);
  });
});