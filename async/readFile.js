//reading file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

fs.readFile(
    filePath,
    "utf-8",
    (err, data) => {
        if(err) console.error(err);
        else console.log(data);

    }

)