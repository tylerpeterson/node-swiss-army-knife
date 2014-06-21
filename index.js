function allPermutations(choices, sequenceLength) {
  if (sequenceLength === 0) {
    return [];
  }

  var permutations = choices.slice();

  while (permutations.length != Math.pow(choices.length, sequenceLength)) {
    permutations = choices.reduce(function (wip2, currentReplacement) {
      return wip2.concat(permutations.map(function (currentStem) {
        return currentReplacement + currentStem;
      }));
    }, []);
  }

  return permutations;
}

module.exports = {
  allPermutations: allPermutations
};