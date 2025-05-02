//writing files with fs promises

// const fs = require('fs');
const fs = require('fs/promises'); // import fs promises
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

//writing in file
// fs.promises.writeFile(filePath,'Hello world','utf-8').then( console.log("file created")).catch((err) => console.log("error in creating file",err));
fs.writeFile(filePath,'this file is created with fs/promises','utf-8').then( console.log("file created")).catch((err) => console.log("error in creating file",err));