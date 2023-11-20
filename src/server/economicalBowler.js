export let economicalBowler = (matchData, deliveryData) => {
  matchData = matchData.map((obj) => {
    if (obj.season == '2015') {
      return obj.id;
    }
  });

  let set = new Set(matchData);

  let result = {};

  result = deliveryData.reduce((acc, obj) => {
    if (set.has(obj.match_id)) {
      if (acc[obj.bowler] == undefined) {
        acc[obj.bowler] = {};
      }
      if (acc[obj.bowler]['runs'] == undefined) {
        acc[obj.bowler]['runs'] = 0;
      }

      if (acc[obj.bowler]['balls'] == undefined) {
        acc[obj.bowler]['balls'] = 0;
      }

      if (obj.noball_runs === '0' && obj.wide_runs === '0') {
        acc[obj.bowler]['balls']++;
      }

      acc[obj.bowler]['runs'] =
        acc[obj.bowler]['runs'] +
        parseInt(obj.total_runs) -
        parseInt(obj.legbye_runs) -
        parseInt(obj.bye_runs);
    }
    return acc;
  }, {});

  let newResult2 = {};

  for (let key in result) {
    if (newResult2[key] == undefined) {
      newResult2[key] = {};
    }
    if (newResult2[key]['economy'] == undefined) {
      newResult2[key]['economy'] = 0;
    }
    newResult2[key]['economy'] = Number(
      ((result[key]['runs'] * 6) / result[key]['balls']).toFixed(2)
    );
  }
  newResult2 = Object.entries(newResult2);

  newResult2 = newResult2.sort((element1, element2) => {
    return element1[1]['economy'] - element2[1]['economy'];
  });

  let num = 0;
  // eslint-disable-next-line no-unused-vars
  newResult2 = newResult2.filter((element) => {
    num++;
    if (num < 10) {
      return true;
    } else {
      return false;
    }
  });

  return newResult2;
};
