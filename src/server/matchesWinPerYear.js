import fs from "fs";

export let matchesWinPerYear = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);

  let winMatches = {};
  matchData.forEach((obj) => {
    if (winMatches[obj.winner] == undefined) {
      winMatches[obj.winner] = {};
    }
    if (winMatches[obj.winner][obj.season] == undefined) {
      winMatches[obj.winner][obj.season] = 0;
    }

    winMatches[obj.winner][obj.season]++;
  });
  console.log(winMatches);
  fs.writeFileSync(outputPath, JSON.stringify(winMatches, null, 2));
};
