import { count } from "console";
import fs from "fs";

export const highestDismissal = (deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  // let matchData = fs.readFileSync(matchPath, "utf-8");
  // matchData = JSON.parse(matchData);
  let finalObject = {
    batsman: { name: "" },
    "dismissed by": { bowler: "", count: 0 },
  };

  console.log(finalObject["count"]);
  let arr = {};
  arr = deliveryData.reduce((acc, obj) => {
    if (obj.player_dismissed != "") {
      if (acc[obj.batsman] == undefined) {
        acc[obj.batsman] = {};
      }

      if (acc[obj.batsman][obj.bowler] == undefined) {
        acc[obj.batsman][obj.bowler] = 0;
      }

      acc[obj.batsman][obj.bowler]++;

      if (acc[obj.batsman][obj.bowler] > finalObject["dismissed by"]["count"]) {
        finalObject["dismissed by"]["count"] = acc[obj.batsman][obj.bowler];
        finalObject["batsman"]["name"] = obj.batsman;
        finalObject["dismissed by"]["bowler"] = obj.bowler;
      } else if (
        acc[obj.batsman][obj.bowler] == finalObject["dismissed by"]["count"]
      ) {
        finalObject["batsman"]["name"] = obj.batsman;
        finalObject["dismissed by"]["bowler"] = obj.bowler;
      }
    }
    return acc;
  }, {});

  console.log(finalObject);

  fs.writeFileSync(outputPath, JSON.stringify(finalObject, null, 2));
};
