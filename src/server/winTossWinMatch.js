export let winTossWinMatch = (matchData) => {
  let result = {};

  result = matchData.reduce((accumulator, obj) => {
    if (obj.winner == obj.toss_winner) {
      if (accumulator[obj.winner] == undefined) {
        accumulator[obj.winner] = 0;
      }
      accumulator[obj.winner]++;
    }
    return accumulator;
  }, {});

  return result;
};
