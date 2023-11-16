import fs from "fs";

let matchData = fs.readFileSync("../../data/match.json", "utf-8");
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
fs.writeFileSync(
  "../../public/output/matchesWinPerYear.json",
  JSON.stringify(winMatches, null, 2)
);
