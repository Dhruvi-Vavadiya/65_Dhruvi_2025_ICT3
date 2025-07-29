const fs = require('fs');

//read file
 try {
      const data = fs.readFileSync("readfile_demo.txt", "utf-8");
      console.log("File content:", data);
    } catch (err) {
      console.error("Read error:", err.message);
    }


//write file
fs.writeFileSync("writefile_demo.txt","Hello,Good morning mahadev");
console.log("File written successfully");
    

//append file
fs.appendFileSync("appendfile_demo.txt","Hello,Good morning mahadev");
console.log("File appended successfully");
   

//rename file

try{
    fs.renameSync("renamefile_demo.txt","renamedfile_demo.txt");
console.log("File renamed successfully");
}catch(err){
    console.error("Rename error:", err.message);
}

//delete file
try{
    fs.unlinkSync("deletefile_demo.txt");
console.log("File deleted successfully");
}catch(err){
    console.error("Delete error:", err.message);
}