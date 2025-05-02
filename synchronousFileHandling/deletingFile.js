//deleting a file

const fs = require('fs');
const path = require('path');
const fileName = 'test.txt';
const filePath = path.join(__dirname,fileName);

try{

const fileDelete = fs.unlinkSync(filePath);
console.log(fileDelete);
console.log("File deleted successfully");
}catch(err){
    console.log("File does'nt exist");

}