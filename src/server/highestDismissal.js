export const highestDismissal = (deliveryData) => {
  let finalObject = {
    batsman: { name: '' },
    dismissed_by: { bowler: '', count: 0 },
  };

  let arr = {};
  arr = deliveryData.reduce((acc, obj) => {
    if (obj.player_dismissed != '' && obj.dismissal_kind != 'runout') {
      if (acc[obj.batsman] == undefined) {
        acc[obj.batsman] = {};
      }

      if (acc[obj.batsman][obj.bowler] == undefined) {
        acc[obj.batsman][obj.bowler] = 0;
      }

      acc[obj.batsman][obj.bowler]++;

      if (
        acc[obj.batsman][obj.bowler] >= finalObject['dismissed_by']['count']
      ) {
        finalObject['dismissed_by']['count'] = acc[obj.batsman][obj.bowler];
        finalObject['batsman']['name'] = obj.batsman;
        finalObject['dismissed_by']['bowler'] = obj.bowler;
      } else if (
        acc[obj.batsman][obj.bowler] == finalObject['dismissed by']['count']
      ) {
        finalObject['batsman']['name'] = obj.batsman;
        finalObject['dismissed by']['bowler'] = obj.bowler;
      }
    }

    return acc;
  }, {});
  console.log(arr);

  return finalObject;
};
