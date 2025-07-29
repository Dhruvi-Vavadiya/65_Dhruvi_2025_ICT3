const fetch = require('node-fetch');

async function fetchGoogleHTML() {
  try {    
    const response = await fetch('https://www.google.com/');
    const html = await response.text();
    console.log("Google HTML code:", html.substring(0, 300));
    return html; 
  } catch (err) {
    console.error("Error :", err.message);
  }
}

fetchGoogleHTML();
