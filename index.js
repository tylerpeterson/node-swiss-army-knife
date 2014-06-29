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
  return function (input) {
    return choices.map(function (cur) {
      return input.concat(cur);
    });
  };
}

module.exports = {
  allPermutations: allPermutations,
  permuterFactory: permuterFactory
};