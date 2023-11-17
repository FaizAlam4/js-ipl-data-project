import fs from "fs";

export let winTossWinMatch = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);
  let result = {};

  result = matchData.reduce((acc, obj) => {
    if (obj.winner == obj.toss_winner) {
      if (acc[obj.winner] == undefined) {
        acc[obj.winner] = 0;
      }
      acc[obj.winner]++;
    }
    return acc;
  }, {});

  console.log(result);
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
};
