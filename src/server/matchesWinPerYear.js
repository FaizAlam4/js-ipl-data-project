import fs from "fs";

export let matchesWinPerYear = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);

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
  console.log(winMatches);
  fs.writeFileSync(outputPath, JSON.stringify(winMatches, null, 2));
};
