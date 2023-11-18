import fs from "fs";

export let extraRunsConcede = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);

  matchData = matchData.filter((obj) => {
    return obj.season == "2016";
  });
  matchData = matchData.map((element) => {
    return element["id"];
  });
  const set = new Set(matchData);

  let extraRuns = deliveryData.reduce((extraRuns, object) => {
    if (set.has(object.match_id)) {
      if (extraRuns[object.bowling_team] == undefined) {
        extraRuns[object.bowling_team] = 0;
      }
      extraRuns[object.bowling_team] =
        extraRuns[object.bowling_team] + parseInt(object.extra_runs);
    }
    return extraRuns;
  }, {});
  console.log(extraRuns);

  fs.writeFileSync(outputPath, JSON.stringify(extraRuns, null, 2));
};
