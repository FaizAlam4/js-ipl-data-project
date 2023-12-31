import csvtojson from 'csvtojson';
import fs from 'fs';
const csvFilePath =
  '/home/faiz/Documents/mb/MB_Javascript/IPL/src/data/matches.csv';
const jsonFilePath =
  '/home/faiz/Documents/mb/MB_Javascript/IPL/src/data/match.json';

csvtojson()
  .fromFile(csvFilePath)
  .then((jsonArrayObj) => {
    console.log(jsonArrayObj);
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
    console.log('exported to file!');
  })
  .catch((error) => {
    console.error('CSV parsing error:', error.message);
  });
