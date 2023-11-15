import fs from "fs";

let matchData = fs.readFileSync("../../public/output/match.json", "utf-8");
matchData = JSON.parse(matchData);
console.log(matchData);
let winMatches= {};


// fs.writeFileSync(
//   "../../public/output/matchesPerYear.json",
//   JSON.stringify(answer, null, 2)
// );
