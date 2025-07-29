const express = require('express');
const app = express();
app.get('/getdata', (req, res) => {
  res.send('Hello, World!');
});
console.log(a); 
app.listen(8000);