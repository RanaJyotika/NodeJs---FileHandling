//appending file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

const appendFile = fs.appendFileSync(
    filePath,
    "\n\nfile appended successfully",
    'utf-8'
)
console.log(appendFile);

//reading file after appending
const readFile = fs.readFileSync(filePath,'utf-8');
console.log(readFile);