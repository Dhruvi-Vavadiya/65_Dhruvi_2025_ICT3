const express = require('express');
const app = express();
app.get('/getdata', (req, res) => {
  res.send('Hello, World!');
});
app.listen(8000);