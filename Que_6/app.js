
const fs = require('fs');

fs.unlink("example_file.txt",
    (err => {
        if (err) console.log(err);
        else {
            console.log("\nDeleted file: example_file.txt");
        }
    }));
