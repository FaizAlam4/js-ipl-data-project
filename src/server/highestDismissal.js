import fs from "fs";

let deliveryData = fs.readFileSync(
  "../data/delivery.json",
  "utf-8"
);
deliveryData = JSON.parse(deliveryData);

// let matchData = fs.readFileSync("../data/match.json", "utf-8");
// matchData = JSON.parse(matchData);

