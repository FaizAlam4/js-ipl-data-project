import fs from "fs";

export let extraRunsConcede = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  let matchData = fs.readFileSync(matchPath, "utf-8");
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
  fs.writeFileSync(outputPath, JSON.stringify(answer, null, 2));
};
