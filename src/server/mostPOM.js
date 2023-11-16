import fs from "fs";
let deliveryData = fs.readFileSync("../../data/delivery.json", "utf-8");
deliveryData = JSON.parse(deliveryData);

let matchData = fs.readFileSync("../../data/match.json", "utf-8");
matchData = JSON.parse(matchData);
let myResult = {};
let years = [];
matchData.forEach((obj) => {
  if (myResult[obj.season] == undefined) {
    myResult[obj.season] = {};
    years.push(obj.season);
  }
  if (myResult[obj.season][obj.player_of_match] == undefined) {
    myResult[obj.season][obj.player_of_match] = 1;
  }

  myResult[obj.season][obj.player_of_match]++;
});
// console.log(myResult);


let newResult={};
let maxNum=0;
let myKey='';
let myRes=Object.entries(myResult);
// console.log(myRes);
for(let key of myRes){
    for(let innerKey in key[1]){
        if(key[1][innerKey]>maxNum)
     {
        maxNum=key[1][innerKey];
        myKey=innerKey;
     }
    }
  
    if(newResult[key[0]]==undefined)
    {
      newResult[key[0]]={};
    }
    if(newResult[key[0]][myKey]==undefined){

      newResult[key[0]][myKey]=0;
    }
  
    newResult[key[0]][myKey]=maxNum;
    myKey='';
    maxNum=0;
}

console.log(newResult);

