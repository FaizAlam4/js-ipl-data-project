import fs from "fs";

export let superOver = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
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

      if (obj.wide_runs === "0" && obj.noball_runs === "0") {
        acc[obj.bowler]["ball"]++;
      }
    }
    return acc;
  }, {});

  for (let key in superOverData) {
    superOverData[key] = parseInt(
      ((superOverData[key]["runs"] * 6) / superOverData[key]["ball"]).toFixed(2)
    );
  }

  let data = Object.entries(superOverData);
  data.sort((a, b) => a[1] - b[1]);

  data = data[0];
  let finalData = {};
  finalData[data[0]] = data[1];
  fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
};
