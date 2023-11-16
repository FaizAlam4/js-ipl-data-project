import fs from "fs";
let deliveryData = fs.readFileSync("../../data/delivery.json", "utf-8");
deliveryData = JSON.parse(deliveryData);

let matchData = fs.readFileSync("../../data/match.json", "utf-8");
matchData = JSON.parse(matchData);

matchData = matchData.filter((obj) => {
  return obj.season == "2015";
});

matchData = matchData.map((obj) => {
  return obj.id;
});

let set = new Set(matchData);

let result = {};
let result1 = {};

let balls = 0,
  runsGiven = 0,
  overs = 0;

deliveryData.forEach((obj) => {
  if (set.has(obj.match_id)) {
    balls = parseInt(obj.ball);
    runsGiven = parseInt(obj.total_runs);

    if (result[obj.bowler] == undefined) {
      result[obj.bowler] = 0;
    }
    if (result1[obj.bowler] == undefined) {
      result1[obj.bowler] = 0;
    }

    result[obj.bowler] += runsGiven;
    result1[obj.bowler] += balls;
  }
});
// console.log(result1);
let result2 = {};
let myarray=[];
deliveryData.forEach((obj) => {
  if (set.has(obj.match_id)) {
    if (result2[obj.bowler] == undefined) {
      result2[obj.bowler] = 0;
    }
    if (result2[obj.bowler] == 0) {
      result2[obj.bowler] = ((result[obj.bowler] / result1[obj.bowler])*6).toFixed(
        2
      );
      myarray.push(result2[obj.bowler]);
    }
  }
});
// console.log(myarray.sort());
// fs.writeFileSync(
//   "../../public/output/economicalBowler.json",
//   JSON.stringify(result2, null, 2)
// );
