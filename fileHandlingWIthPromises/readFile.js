//Reading file using fs promises

const fs = require('fs/promises'); // import fs promises
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

//reading file
fs.readFile(
    filePath,
    "utf-8",
)
.then( (data) => console.log("Content written in file : \n\n",data))
.catch((err) => console.log("error in reading file. \n",err));