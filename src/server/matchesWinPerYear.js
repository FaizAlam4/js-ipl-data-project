export let matchesWinPerYear = (matchData) => {
  let winMatches = matchData.reduce((winMatches, object) => {
    if (winMatches[object.winner] == undefined) {
      winMatches[object.winner] = {};
    }
    if (winMatches[object.winner][object.season] == undefined) {
      winMatches[object.winner][object.season] = 0;
    }

    winMatches[object.winner][object.season]++;
    return winMatches;
  }, {});

  return winMatches;
};
