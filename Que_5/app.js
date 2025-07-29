const fs = require('fs');
const zlib = require('zlib');

try {
  fs.createReadStream('./file1.txt.gz') 
    .pipe(zlib.createGunzip())          
    .pipe(fs.createWriteStream('./file1_decompressed.txt')); 

  console.log("File Decompressed.");
} catch (err) {
  console.error("Decompression error:", err.message);
}
