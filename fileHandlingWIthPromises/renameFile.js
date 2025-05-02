// Renaming file with fs promises

const fs = require('fs/promises'); // import fs promises
const path = require('path');
const oldFileName = 'test.txt';
const newFileName = 'updated.txt';

const oldFilePath = path.join(__dirname, oldFileName);
const newFilePath = path.join(__dirname, newFileName);

//renaming file
fs.rename(oldFilePath, newFilePath).then(console.log("file renamed")).catch( (err) => console.log("error in renaming file", err));  