// deleting file

const fs = require('fs');
const path = require('path');
const fileName = 'updatedTest.txt';
const filePath = path.join(__dirname,fileName);

fs.unlink(filePath, (err) => {[
    err? console.error(err): console.log("file deleted successfully")
]})