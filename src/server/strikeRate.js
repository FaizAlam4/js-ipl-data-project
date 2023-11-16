import fs from "fs";
let deliveryData = fs.readFileSync("../data/delivery.json", "utf-8");
deliveryData = JSON.parse(deliveryData);
let matchData = fs.readFileSync("../data/match.json", "utf-8");
matchData = JSON.parse(matchData);

let myResult = {};
matchData.forEach((obj) => {
  if (myResult[obj.season] == undefined) {
    myResult[obj.season] = [];
  }
  myResult[obj.season].push(obj.id);
});
let totRuns = {},
  ballFaced = {};
for (let key in myResult) {
  let set = new Set(myResult[key]);

  deliveryData.forEach((obj) => {
    if (set.has(obj.match_id)) {
      if (totRuns[key] == undefined) {
        totRuns[key] = {};
      }
      if (totRuns[key][obj.batsman] == undefined) {
        totRuns[key][obj.batsman] = 0;
      }

      totRuns[key][obj.batsman] += parseInt(obj.batsman_runs);

      if (ballFaced[key] == undefined) {
        ballFaced[key] = {};
      }
      if (ballFaced[key][obj.batsman] == undefined) {
        ballFaced[key][obj.batsman] = 0;
      }
      if (obj.wide_runs == 0 && obj.noball_runs == 0) {
        ballFaced[key][obj.batsman] += 1;
      }
    }
  });
}

let finalAns = {};
for (let key in myResult) {
  let set = new Set(myResult[key]);

  deliveryData.forEach((obj) => {
    if (set.has(obj.match_id)) {
      if (finalAns[key] == undefined) {
        finalAns[key] = {};
      }
      if (finalAns[key][obj.batsman] == undefined) {
        finalAns[key][obj.batsman] = 0;
      }
      if (finalAns[key][obj.batsman] == 0) {
        finalAns[key][obj.batsman] = (
          (totRuns[key][obj.batsman] * 100) /
          ballFaced[key][obj.batsman]
        ).toFixed(2);
      }
    }
  });
}
console.log(finalAns);
fs.writeFileSync(
  "../public/output/strikeRate.json",
  JSON.stringify(finalAns, null, 2)
);
