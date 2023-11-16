import fs from "fs";

let deliveryData = fs.readFileSync(
  "../../public/output/delivery.json",
  "utf-8"
);
deliveryData = JSON.parse(deliveryData);

let matchData = fs.readFileSync("../../public/output/match.json", "utf-8");
matchData = JSON.parse(matchData);

let answer = {};
matchData = matchData.filter((obj) => {
  return obj.season == "2016";
});
matchData = matchData.map((element) => {
  return element["id"];
});
const set = new Set(matchData);

deliveryData.map((obj) => {
  if (set.has(obj.match_id)) {
    if (answer[obj.bowling_team] == undefined) {
      answer[obj.bowling_team] = 0;
    }
    answer[obj.bowling_team] += parseInt(obj.extra_runs);
  }
});
console.log(answer);
fs.writeFileSync(
  "../../public/output/extraRunsConcede.json",
  JSON.stringify(answer, null, 2)
);
