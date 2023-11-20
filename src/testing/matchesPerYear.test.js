import { matchesPerYear } from '../server/matchesPerYear.js';

test('no object is passed', () => {
  expect(matchesPerYear([])).toEqual({});
});

let sample1 = [
  { match_id: 1, season: 2018, team1: 'CSK', team2: 'RCB' },
  {
    match_id: 2,
    season: 2018,
    team1: 'KKR',
    team2: 'DD',
  },
  {
    match_id: 16,
    season: 2019,
    team1: 'KKR',
    team2: 'DD',
  },
];

test('Checking only deciding factor is season and not match id', () => {
  expect(matchesPerYear(sample1)).toEqual({ 2018: 2, 2019: 1 });
});

let sample2 = [
  { match_id: 1, team1: 'CSK', team2: 'RCB' },
  {
    match_id: 2,
    season: 2018,
    team1: 'KKR',
    team2: 'DD',
  },
  {
    match_id: 16,
    season: 2019,
    team1: 'KKR',
    team2: 'DD',
  },

  { match_id: 23, team1: 'CSK', team2: 'RCB' },
];

test('Season is not sent in data', () => {
  expect(matchesPerYear(sample2)).toEqual({ 2018: 1, 2019: 1, undefined: 2 });
});
