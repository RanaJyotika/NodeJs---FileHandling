// Appending file with async and await

const fs = require('fs').promises; //another way to import fs module
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

//appending a file
const updateFile = async () => {
    try{
        const data = await fs.appendFile(filePath,
            "\n\n This is an example of appending a file using async and await in Node.js.",
            "utf-8"
        )

        console.log("\n File updated successfully.\n");
    }
    catch(err){
        console.error("Error in updating File: ", err);
    }
}

updateFile(); //calling the function