import fs from "fs";

export let highestDismissal = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  // let matchData = fs.readFileSync(matchPath, "utf-8");
  // matchData = JSON.parse(matchData);
  let arr = {};
  deliveryData.forEach((obj) => {
    if (obj.player_dismissed != "") {
      if (arr[obj.batsman] == undefined) {
        arr[obj.batsman] = {};
      }

      if (arr[obj.batsman][obj.bowler] == undefined) {
        arr[obj.batsman][obj.bowler] = 0;
      }
      arr[obj.batsman][obj.bowler]++;
    }
  });
  

  arr=Object.entries(arr);
  console.log(arr)
arr.map((element)=>{
Object.entries(element[1])
})
  
  // fs.writeFileSync(outputPath,JSON.stringify(arr,null,2));
};
