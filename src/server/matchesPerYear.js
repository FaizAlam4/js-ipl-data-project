import fs from "fs";

export let matchesPerYear = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);

  let numberOfMatches = matchData.reduce((numberOfMatches, object) => {
    if (numberOfMatches[object.season] == undefined) {
      numberOfMatches[object.season] = 0;
    }
    numberOfMatches[object.season]++;

    return numberOfMatches;
  }, {});

  console.log(numberOfMatches);
  fs.writeFileSync(outputPath, JSON.stringify(numberOfMatches, null, 2));
};
