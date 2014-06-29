var debug = require('debug')('node-swiss-army-knife');

function allPermutations(choices, sequenceLength) {
  if (!(sequenceLength > 0)) return [];

  var i;
  var permutations = choices.slice();

  function permute(resultList, currentReplacement) {
    return resultList.concat(permutations.map(function (currentStem) {
      return currentReplacement + currentStem;
    }));
  }

  for (i = 1; i < sequenceLength; ++i) {
    permutations = choices.reduce(permute, []);
  }

  return permutations;
}

function permuterFactory(choices) {
  return function (arg1, arg2) {
    var input, prev;
    if (arguments.length > 1) {
      debug('called in reduce');
      prev = arg1;
      input = arg2;
    } else {
      debug('called alone');
      input = arg1;
      prev = [];
    }
    return prev.concat(choices.map(function (cur) {
      return input.concat(cur);
    }));
  };
}

module.exports = {
  allPermutations: allPermutations,
  permuterFactory: permuterFactory
};