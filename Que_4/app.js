const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const sourceDir = path.join(__dirname, 'source');      // Folder to compress
const targetDir = path.join(__dirname, 'compressed');  // Output folder for .gz files


if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}


fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(targetDir, file + '.gz');

        const input = fs.createReadStream(srcPath);
        const output = fs.createWriteStream(destPath);
        const gzip = zlib.createGzip();

        input.pipe(gzip).pipe(output);

        console.log(`Compressed: ${file} -> ${file}.gz`);
    });
});
