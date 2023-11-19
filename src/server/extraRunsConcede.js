export let extraRunsConcede = (matchData, deliveryData) => {
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

  return extraRuns;
};
