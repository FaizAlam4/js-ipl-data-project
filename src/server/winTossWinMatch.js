import fs from "fs";

export let winTossWinMatch = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);
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

  console.log(result);
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
};
