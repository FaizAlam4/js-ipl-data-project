import fs from "fs";

export let economicalBowler = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  let matchData = fs.readFileSync(matchPath, "utf-8");
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

  let runsGiven = 0;

  deliveryData.forEach((obj) => {
    if (set.has(obj.match_id)) {
      runsGiven = parseInt(obj.total_runs);

      if (result[obj.bowler] == undefined) {
        result[obj.bowler] = 0;
      }
      if (result1[obj.bowler] == undefined) {
        result1[obj.bowler] = 0;
      }

      result[obj.bowler] += runsGiven;
      if (obj.noball_runs === "0" && obj.wide_runs === "0") {
        result1[obj.bowler] += 1;
      }
    }
  });
  // console.log(result1);
  let result2 = {};
  deliveryData.forEach((obj) => {
    if (set.has(obj.match_id)) {
      if (result2[obj.bowler] == undefined) {
        result2[obj.bowler] = 0;
      }
      if (result2[obj.bowler] == 0) {
        result2[obj.bowler] = (
          (result[obj.bowler] / result1[obj.bowler]) *
          6
        ).toFixed(2);
      }
    }
  });
  let economy = Object.entries(result2);

  economy.sort((a, b) => {
    return a[1] - b[1];
  });
  let num = 0;
  let ans = economy.filter((ele) => {
    num++;
    if (num > 10) {
      return false;
    }
    return true;
  });
  console.log(ans);

  fs.writeFileSync(
    outputPath,
    JSON.stringify(Object.fromEntries(ans), null, 2)
  );
};
