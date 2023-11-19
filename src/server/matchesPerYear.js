export let matchesPerYear = (matchData) => {
  let numberOfMatches = matchData.reduce((numberOfMatches, object) => {
    if (numberOfMatches[object.season] == undefined) {
      numberOfMatches[object.season] = 0;
    }
    numberOfMatches[object.season]++;

    return numberOfMatches;
  }, {});

  return numberOfMatches;
};
