// Reading File in Node.js

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

const readFile = fs.readFileSync(filePath,'utf-8');
console.log(readFile);