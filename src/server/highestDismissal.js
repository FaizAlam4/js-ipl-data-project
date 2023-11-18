import fs from "fs";

export let highestDismissal = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);

  // let matchData = fs.readFileSync(matchPath, "utf-8");
  // matchData = JSON.parse(matchData);
  let arr = {};
  let acc=deliveryData.reduce((acc, obj) => {
    if (obj.player_dismissed != "") {
      if (acc[obj.batsman] == undefined) {
        acc[obj.batsman] = {};
      }

      if (acc[obj.batsman][obj.bowler] == undefined) {
        acc[obj.batsman][obj.bowler] = 0;
      }
      acc[obj.batsman][obj.bowler]++;
    }
    return acc;
  });

  let finalResult={};
  acc = Object.entries(acc);
  console.log(acc);
  for(let element of acc){
    let data=Object.entries(element[1]);
    data.sort((a,b)=>{return a[1]-b[1]});
    
  }

  // for(let key in )
  // arr.map((element)=>{
  // Object.entries(element[1])
  // })

  // fs.writeFileSync(outputPath,JSON.stringify(arr,null,2));
};
