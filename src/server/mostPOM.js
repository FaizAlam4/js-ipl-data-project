import fs from "fs";

export let mostPOM = (matchPath, deliveryPath, outputPath) => {
  let matchData = fs.readFileSync(matchPath, "utf-8");
  matchData = JSON.parse(matchData);
  let myResult = {};

  myResult = matchData.reduce((myResult, object) => {
    if (myResult[object.season] == undefined) {
      myResult[object.season] = {};
    }
    if (myResult[object.season][object.player_of_match] == undefined) {
      myResult[object.season][object.player_of_match] = 1;
    }
    myResult[object.season][object.player_of_match]++;

    return myResult;
  }, {});

  let mostAwards = {};
  for (let key in myResult) {
    let myObject = myResult[key];
    myObject = Object.entries(myObject);
    myObject.sort((element1, element2) => {
      return element2[1] - element1[1];
    });
    if (mostAwards[key] == undefined) {
      mostAwards[key] = {};
    }
    if (mostAwards[key][myObject[0]] == undefined) {
      mostAwards[key][myObject[0]] == 0;
    }
    mostAwards[key][myObject[0][0]] = myObject[0][1];
  }
  console.log(mostAwards);

  fs.writeFileSync(outputPath, JSON.stringify(mostAwards, null, 2));
};
