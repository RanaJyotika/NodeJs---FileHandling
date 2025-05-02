// appending file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

fs.appendFile(
    filePath,
    "\n\n this is the appended data",
    "utf-8",

    (err) => {
        if (err) {
            console.error(err)
        }
            else { console.log("file appended successfully");
                //reading file after appending
                fs.readFile(
                    filePath,
                    "utf-8",
                    (err, data) => {
                        if (err) console.error(err);
                        else console.log("\n\n",data);
                    }
                )
            }
    }
)