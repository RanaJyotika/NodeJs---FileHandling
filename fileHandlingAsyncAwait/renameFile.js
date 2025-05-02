// Renaming File with async and await

const fs = require('fs').promises; //another way to import fs module
const path = require('path');
const oldFileName = 'test.txt'; //old file name
const newFileName = 'updated.txt';
const oldFilePath = path.join(__dirname, oldFileName); //old file path
const newFilePath = path.join(__dirname, newFileName); //new file path

const renameFile = async () => {
    try{
        await fs.rename(oldFilePath, newFilePath);
        console.log("File renamed successfully.");
    }
    catch(err) {
        console.error("Error in renaming file: ", err);
    }
}

renameFile();