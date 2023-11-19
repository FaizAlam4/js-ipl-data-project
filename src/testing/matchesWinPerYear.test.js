import { matchesWinPerYear } from "../server/matchesWinPerYear.js";

let sample1 = [
  { season: 2009, winner: "SRH" },
  {
    season: 2009,
    winner: "CSK",
  },
  {
    season: 2009,
    winner: "KKR",
  },
  {
    season: 2009,
    winner: "KKR",
  },
];
test("for one season data only", () => {
  expect(matchesWinPerYear(sample1)).toEqual({
    SRH: {
      2009: 1,
    },
    CSK: {
      2009: 1,
    },
    KKR: {
      2009: 2,
    },
  });
});

let sample2 = [
  { season: 2009, winner: "SRH" },
  {
    season: 2019,
    winner: "SRH",
  },
  {
    season: 2020,
    winner: "SRH",
  },
  {
    season: 2020,
    winner: "SRH",
  },

  {
    season: 2021,
    winner: "SRH",
  },
];

test("for one team in different seasons", () => {
  expect(matchesWinPerYear(sample2)).toEqual({
    SRH: {
      2009: 1,
      2019: 1,
      2020: 2,
      2021: 1,
    },
  });
});

test("No data", () => {
  expect(matchesWinPerYear([])).toEqual({
    //gives empty object
  });
});
