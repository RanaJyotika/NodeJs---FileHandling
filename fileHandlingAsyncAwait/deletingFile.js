// Deleting File with async and await in node js

const fs =  require('fs/promises');
const path = require('path');
const fileName = 'updated.txt';
const filePath = path.join(__dirname, fileName);

const deleteFile = async () => {
    try{
        fs.unlink(filePath)
        console.log("File Deleted successfully");
    }
    catch(err) {
        console.error("error in deleting file " , err);
    }
}

deleteFile();