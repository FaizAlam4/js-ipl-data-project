export const highestDismissal = (deliveryData) => {
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

  return finalObject;
};
