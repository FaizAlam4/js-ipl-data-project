import { mostPOM } from "../server/mostPOM.js";

let sample1 = [
  {
    id: "636",
    season: "2016",
    team1: "SRH",
    team2: "RCB",
    player_of_match: "Shahrukh Khan",
  },
  {
    id: "639",
    season: "2016",
    team1: "KKR",
    team2: "RCB",
    player_of_match: "SHAHRUKH KHAN",
  },
  {
    id: "782",
    season: "2016",
    team1: "CSK",
    team2: "MI",
    player_of_match: "Rohit Sharma",
  },
  {
    id: "762",
    season: "2016",
    team1: "RCB",
    team2: "MI",
    player_of_match: "Rohit Sharma",
  },
];
test("Case Sensitivity but branch coverage 75% as it doesn't go to next year", () => {
  expect(mostPOM(sample1)).toEqual({ 2016: { "Rohit Sharma": 2 } });
});

let sample2 = [
  {
    id: "639",
    season: "2016",
    team1: "SRH",
    team2: "RCB",
    player_of_match: "Faiz",
  },
  {
    id: "667",
    season: "2016",
    team1: "KKR",
    team2: "MI",
    player_of_match: "Pollard",
  },
  {
    id: "682",
    season: "2017",
    team1: "GT",
    team2: "MI",
    player_of_match: "Anmol",
  },
  {
    id: "761",
    season: "2017",
    team1: "KKR",
    team2: "GT",
    player_of_match: "Anmol",
  },
];
test("Branch coverage 100%", () => {
  expect(mostPOM(sample2)).toEqual({ 2016: { Faiz: 1 }, 2017: { Anmol: 2 } });
});

test("Nothing passed", () => {
  expect(mostPOM([])).toEqual({});
});
