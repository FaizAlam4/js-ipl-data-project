import fs from "fs";

let deliveryData = fs.readFileSync("../data/delivery.json", "utf-8");
deliveryData = JSON.parse(deliveryData);

let superOverData = deliveryData.reduce((acc, obj) => {
  if (obj["is_super_over"] == "1") {
    if (acc[obj.bowler] == undefined) {
      acc[obj.bowler] = {};
    }
    if (!acc[obj.bowler]["runs"]) {
      acc[obj.bowler]["runs"] = 0;
    }
    if (!acc[obj.bowler]["ball"]) {
      acc[obj.bowler]["ball"] = 0;
    }
    acc[obj.bowler]["runs"] += parseInt(obj.total_runs);

    if (obj.wide_runs == 0 || obj.noball_runs == 0) {
      acc[obj.bowler]["ball"]++;
    }
  }
  return acc;
}, {});
for (let key in superOverData) {
  superOverData[key] = (
    (superOverData[key]["runs"] * 6) /
    superOverData[key]["ball"]
  ).toFixed(2);
}
console.log(superOverData);

fs.writeFileSync(
  "../public/output/superOver.json",
  JSON.stringify(superOverData, null, 2)
);
