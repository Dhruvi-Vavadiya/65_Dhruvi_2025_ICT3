const fs = require('fs');
const zlib = require('zlib');

try{
fs.createReadStream('./file1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('./file1.txt.gz'));
  
console.log("File Compressed.");
}catch(err){
    console.error("Compression error:", err.message);
}


