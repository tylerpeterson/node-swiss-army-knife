function allPermutations(choices, sequenceLength) {
  if (!(sequenceLength > 0)) {
    return [];
  }
  
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

module.exports = {
  allPermutations: allPermutations
};