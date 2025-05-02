//async way to write to a file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

fs.writeFile(filePath,
    "initial file content",
    'utf-8',
    (err)=>{
        if(err){
            console.error(err);

        }
        else{
            console.log("file written successfully");
        }
    }
)