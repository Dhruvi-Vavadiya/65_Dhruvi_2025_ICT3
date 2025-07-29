const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const unlinkFile = Promise.promisify(require("fs").unlink);

unlinkFile("./example_file.txt")
  .then(() => {
    console.log("example_file.txt deleted successfully.");
  })
  .catch((err) => {
    console.error("Error deleting file:", err.message);
  });
