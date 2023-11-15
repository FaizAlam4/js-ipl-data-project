import fs from "fs";

let matchData = fs.readFileSync("../../public/output/match.json", "utf-8");
matchData = JSON.parse(matchData);
let answer = {};

matchData.map((obj) => {
  if (answer[obj.season] == undefined) {
    answer[obj.season] = 0;
  }

  answer[obj.season]++;
});

console.log(answer);
fs.writeFileSync(
  "../../public/output/matchesPerYear.json",
  JSON.stringify(answer, null, 2)
);
