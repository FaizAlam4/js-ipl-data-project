import fs from "fs";

let matchData = fs.readFileSync("../../data/match.json", "utf-8");
matchData = JSON.parse(matchData);
let result = {};
matchData.forEach((obj) => {
  if (obj.winner == obj.toss_winner) {
    if (result[obj.winner] == undefined) {
        result[obj.winner]=0;
    }
    result[obj.winner]++;
  }
});


console.log(result);
fs.writeFileSync(
  "../../public/output/winTossWinMatch.json",
  JSON.stringify(result, null, 2)
);
