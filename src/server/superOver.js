import fs from "fs";

export let superOver = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  let superOverData = deliveryData.reduce((superOverData, obj) => {
    if (obj["is_super_over"] == "1") {
      if (superOverData[obj.bowler] == undefined) {
        superOverData[obj.bowler] = {};
      }
      if (!superOverData[obj.bowler]["runs"]) {
        superOverData[obj.bowler]["runs"] = 0;
      }
      if (!superOverData[obj.bowler]["ball"]) {
        superOverData[obj.bowler]["ball"] = 0;
      }
      superOverData[obj.bowler]["runs"] += parseInt(obj.total_runs);

      if (obj.wide_runs === "0" && obj.noball_runs === "0") {
        superOverData[obj.bowler]["ball"]++;
      }
    }
    return superOverData;
  }, {});

  for (let key in superOverData) {
    superOverData[key] = parseInt(
      ((superOverData[key]["runs"] * 6) / superOverData[key]["ball"]).toFixed(2)
    );
  }

  let data = Object.entries(superOverData);
  data.sort((element1, element2) => element1[1] - element2[1]);

  data = data[0];
  let finalData = {};
  finalData[data[0]] = data[1];
  fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 2));
};
