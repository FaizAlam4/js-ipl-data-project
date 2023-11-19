import { economicalBowler } from "./src/server/economicalBowler.js";
import { extraRunsConcede } from "./src/server/extraRunsConcede.js";
import { matchesPerYear } from "./src/server/matchesPerYear.js";
import { matchesWinPerYear } from "./src/server/matchesWinPerYear.js";
import { mostPOM } from "./src/server/mostPOM.js";
import { strikeRate } from "./src/server/strikeRate.js";
import { superOver } from "./src/server/superOver.js";
import { winTossWinMatch } from "./src/server/winTossWinMatch.js";
import { highestDismissal } from "./src/server/highestDismissal.js";

import pkg from "readline-sync";
import fs from "fs";

let matchFilePath = "./src/data/match.json";
let deliveryFilePath = "./src/data/delivery.json";

let matchData = fs.readFileSync(matchFilePath, "utf-8");
matchData = JSON.parse(matchData);

let deliveryData = fs.readFileSync(deliveryFilePath, "utf-8");
deliveryData = JSON.parse(deliveryData);

let data1 = superOver(deliveryData);
fs.writeFileSync(
  "./src/public/output/superOver.json",
  JSON.stringify(data1, null, 2)
);

let data2 = winTossWinMatch(matchData);
fs.writeFileSync(
  "./src/public/output/winTossWinMatch.json",
  JSON.stringify(data2, null, 2)
);

let data3 = mostPOM(matchData);
fs.writeFileSync(
  "./src/public/output/mostPOM.json",
  JSON.stringify(data3, null, 2)
);

let data4 = matchesWinPerYear(matchData);
fs.writeFileSync(
  "./src/public/output/matchesWinPerYear.json",
  JSON.stringify(data4, null, 2)
);

let data5 = matchesPerYear(matchData);
fs.writeFileSync(
  "./src/public/output/matchesPerYear.json",
  JSON.stringify(data5, null, 2)
);

let data6 = extraRunsConcede(matchData, deliveryData);
fs.writeFileSync(
  "./src/public/output/extraRunsConcede.json",
  JSON.stringify(data6, null, 2)
);

let data7 = economicalBowler(matchData, deliveryData);
fs.writeFileSync(
  "./src/public/output/economicalBowlers.json",
  JSON.stringify(data7, null, 2)
);

let data8 = highestDismissal(deliveryData);
fs.writeFileSync(
  "./src/public/output/highestDismissal.json",
  JSON.stringify(data8, null, 2)
);

// ---- Taking argument from console for strikeRate -----
let batsmanName = pkg.question("Enter the batsman:");
let data9 = strikeRate(matchData, deliveryData, batsmanName);
fs.writeFileSync(
  "./src/public/output/strikeRate.json",
  JSON.stringify(data9, null, 2)
);
