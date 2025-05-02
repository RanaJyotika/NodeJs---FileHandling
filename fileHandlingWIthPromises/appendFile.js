//appending file with fs promises

const fs = require('fs/promises'); // import fs promises
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

//appending/updating file
fs.appendFile(
    filePath,
    "\n\n this is the appended data\n",
    "utf-8",
)
.then( console.log("file updated\n\n"))
.catch((err) => {console.log("error in updating file. \n",err)});

//reading file after appending/updating
fs.readFile(
    filePath,
    "utf-8",
)
.then ( (data) =>  console.log(data))
.catch((err) => console.log("error in reading file. \n",err));