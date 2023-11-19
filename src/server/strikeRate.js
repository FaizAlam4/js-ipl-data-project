
export let strikeRate = (matchData, deliveryData, argument) => {


  let batsmanId = matchData.reduce((batsmanId, object) => {
    if (batsmanId[object.season] == undefined) {
      batsmanId[object.season] = [];
    }
    batsmanId[object.season].push(object.id);

    return batsmanId;
  }, {});

  let myObject = {},
    myEconomy = {};

  for (let key in batsmanId) {
    let set = new Set(batsmanId[key]);

    let accumulator = deliveryData.reduce((accumulator, obj) => {
      if (set.has(obj.match_id)) {
        if (accumulator[obj.batsman] == undefined) {
          accumulator[obj.batsman] = {};
        }
        if (accumulator[obj.batsman]["runs"] == undefined) {
          accumulator[obj.batsman]["runs"] = 0;
        }
        if (accumulator[obj.batsman]["ballFaced"] == undefined) {
          accumulator[obj.batsman]["ballFaced"] = 0;
        }
        accumulator[obj.batsman]["runs"] += parseInt(obj.batsman_runs);
        if (obj.wide_runs == 0 && obj.noball_runs == 0) {
          accumulator[obj.batsman]["ballFaced"]++;
        }
      }

      return accumulator;
    }, {});
    if (myEconomy[key] == undefined) {
      myEconomy[key];
    }

    if (myObject[key] == undefined) {
      myObject[key] = {};
    }

    for (let innerKey in accumulator) {
      accumulator[innerKey] =
        (accumulator[innerKey]["runs"] * 100) /
        accumulator[innerKey]["ballFaced"].toFixed(2);
    }
    myObject[key] = accumulator;
  }
  let answer = {};
  // console.log(argument)

  for (let season in myObject) {
    if (myObject[season][argument]) {
      if (answer[season] == undefined) {
        answer[season] = {};
      }
      if (answer[season][argument] == undefined) {
        answer[season][argument] = "";
      }
      answer[season][argument] = myObject[season][argument];
    } else {
      if (answer[season] == undefined) {
        answer[season] = {};
      }
      if (answer[season][argument] == undefined) {
        answer[season][argument] = "";
      }

      answer[season][argument] = "Player didn't play this season!";
    }
  }
  return answer;
};
