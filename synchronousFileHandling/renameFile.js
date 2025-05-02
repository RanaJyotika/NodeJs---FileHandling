//renaming a file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

const newFileName = 'updatedTest.txt';
const newFilePath = path.join(__dirname,newFileName);

const renameFile = fs.renameSync(filePath,newFilePath);
console.log(renameFile
)
console.log("file renamed");