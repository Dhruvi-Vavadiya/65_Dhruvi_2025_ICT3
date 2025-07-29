// For Node.js version < 18
const fetch = require('node-fetch');
const fs = require('fs'); // Built-in module to handle file operations

async function fetchGoogleHomePage() {
    try {
        const response = await fetch('https://www.google.com');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text(); // Get HTML content

        // Save to google.html
        fs.writeFileSync('google.html', html);
        console.log('✅ Google HTML saved to google.html');

    } catch (err) {
        console.error('❌ Failed to fetch Google page:', err.message);
    }
}

fetchGoogleHomePage();
