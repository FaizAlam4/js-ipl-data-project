import { economicalBowler } from "./src/server/economicalBowler.js";
import { extraRunsConcede } from "./src/server/extraRunsConcede.js";
import { matchesPerYear } from "./src/server/matchesPerYear.js";
import { matchesWinPerYear } from "./src/server/matchesWinPerYear.js";
import { mostPOM } from "./src/server/mostPOM.js";
import { strikeRate } from "./src/server/strikeRate.js";
import  {superOver}  from "./src/server/superOver.js";
import { winTossWinMatch } from "./src/server/winTossWinMatch.js";
import {highestDismissal} from "./src/server/highestDismissal.js"

import pkg from 'readline-sync';

let matchFilePath="./src/data/match.json";
let deliveryFilePath="./src/data/delivery.json";


// superOver(matchFilePath,deliveryFilePath,'./src/public/output/superOver.json');
// winTossWinMatch(matchFilePath,deliveryFilePath,'./src/public/output/winTossWinMatch.json');
// mostPOM(matchFilePath,deliveryFilePath,'./src/public/output/mostPOM.json');
// matchesWinPerYear(matchFilePath,deliveryFilePath,'./src/public/output/matchesWinPerYear.json');
// matchesPerYear(matchFilePath,deliveryFilePath,'./src/public/output/matchesPerYear.json');
// extraRunsConcede(matchFilePath,deliveryFilePath,'./src/public/output/extraRunsConcede.json');
// economicalBowler(matchFilePath,deliveryFilePath,'./src/public/output/economicalBowlers.json');
highestDismissal(matchFilePath,deliveryFilePath,'./src/public/output/highestDismissal.json');


//---- Taking argument from console for strikeRate -----
// let batsmanName=pkg.question("Enter the batsman:")
// strikeRate(matchFilePath,deliveryFilePath,batsmanName,'./src/public/output/strikeRate.json');