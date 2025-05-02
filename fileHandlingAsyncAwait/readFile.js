// Reading file with async and await

const fs = require('fs').promises; 
const { read } = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

const readFile = async () => {
    try{
        const data = await fs.readFile(filePath, 'utf-8')
        console.log(data); // print the data to console

    }
    catch(err){
        console.log("Error in reading file: ", err);   
    }
}

readFile();