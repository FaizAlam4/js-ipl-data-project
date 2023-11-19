import { count } from "console";
import fs from "fs";

export const highestDismissal = (matchPath, deliveryPath, outputPath) => {
  let deliveryData = fs.readFileSync(deliveryPath, "utf-8");
  deliveryData = JSON.parse(deliveryData);
  

  // let matchData = fs.readFileSync(matchPath, "utf-8");
  // matchData = JSON.parse(matchData);
  let finalObject = { 'batsman': {'name':''}, 'dismissed by':{'bowler': "", 'count': 0} };

  console.log(finalObject['count'])
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

     
      if (acc[obj.batsman][obj.bowler] > finalObject['dismissed by']['count']) {
        finalObject['dismissed by']['count']=acc[obj.batsman][obj.bowler];
        finalObject['batsman']['name']=obj.batsman;
        finalObject['dismissed by']['bowler']=obj.bowler;
      }
      else if(acc[obj.batsman][obj.bowler] == finalObject['dismissed by']['count']){
        finalObject['batsman']['name']=obj.batsman;
        finalObject['dismissed by']['bowler']=obj.bowler;
      }
    }
    return acc;
  },{});

 console.log(finalObject);
  // arr = Object.entries(arr);
  // console.log(arr);
  // for (let element of arr) {
  //   //  console.log(element)
  //   const data = Object.entries(element[1]);
  //   data.sort((a, b) => {
  //     return b[1] - a[1];
  //   });
  //   // console.log(data)
  //   if (finalResult[element[0]] == undefined) {
  //     finalResult[element[0]] = {};
  //   }
  //   if (finalResult[element[0]][0] == undefined) {
  //     finalResult[element[0]][data] = 0;

  //     //   }
  //     finalResult[element[0]][data] = data[0][1];
  //   }
  // }

  // console.log(finalResult)

  // for(let key in )
  // arr.map((element)=>{
  // Object.entries(element[1])
  // })

  // fs.writeFileSync(outputPath,JSON.stringify(arr,null,2));
};
