// writing file with async and await

const fs = require('fs').promises; //another way to import fs module
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName); 

//writing a file

const writeFile = async () => {
    try{
        const res = await fs.writeFile(filePath,
            'This is an example of writing a file using async and await in Node.js.',
            'utf-8',
        )

        console.log("File created successfully.");
    }
    catch(err){
        console.log("Error in creating file: ", err);   
    }

}

//calling the function
writeFile();