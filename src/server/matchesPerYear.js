import fs from "fs";

export let matchesPerYear = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);
  let answer = {};

  matchData.forEach((obj) => {
    if (answer[obj.season] == undefined) {
      answer[obj.season] = 0;
    }

    answer[obj.season]++;
  });

  // console.log(answer);
  fs.writeFileSync(outputPath, JSON.stringify(answer, null, 2));
};
