import fs from 'fs';

let deliveryData = fs.readFileSync("../data/delivery.json", "utf-8");
deliveryData = JSON.parse(deliveryData);

let matchData = fs.readFileSync("../data/match.json", "utf-8");
matchData = JSON.parse(matchData);
let myResult = {};

matchData.forEach((obj)=>{
    if(myResult[obj.season]==undefined)
    {
        myResult[obj.season]=[];
    }
    myResult[obj.season].push(obj.id);
})
console.log(myResult);

for(let key in myResult){
    deliveryData.forEach((ele)=>{

    })
}