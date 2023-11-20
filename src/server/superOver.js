export let superOver = (deliveryData) => {
  let superOverData = deliveryData.reduce((superOverData, obj) => {
    if (obj["is_super_over"] != "0") {
      if (superOverData[obj.bowler] == undefined) {
        superOverData[obj.bowler] = {};
      }
      if (!superOverData[obj.bowler]["runs"]) {
        superOverData[obj.bowler]["runs"] = 0;
      }
      if (!superOverData[obj.bowler]["ball"]) {
        superOverData[obj.bowler]["ball"] = 0;
      }
      superOverData[obj.bowler]["runs"] =
        superOverData[obj.bowler]["runs"] +
        parseInt(obj.total_runs) -
        parseInt(obj.legbye_runs) -
        parseInt(obj.bye_runs);

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

  if (data) {
    finalData[data[0]] = data[1];
  }

  return finalData;
};
