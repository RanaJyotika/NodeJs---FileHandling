// Deleting file with fs promises

const fs = require('fs/promises'); // import fs promises
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

//deleting file
fs.unlink(filePath)
    .then(console.log("file deleted"))
    .catch((err) => console.log("error in deleting file", err));