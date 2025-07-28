const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const zipFilePath = path.join(__dirname, 'source.zip'); // Path to the zip file
const outputFolder = path.join(__dirname, 'unzipped');

// Create output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Run system unzip command
exec(`unzip "${zipFilePath}" -d "${outputFolder}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error extracting zip file: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ stderr: ${stderr}`);
        return;
    }
    console.log(`✅ ZIP file extracted successfully to ${outputFolder}`);
});
