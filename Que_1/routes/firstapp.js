const router = require('express').Router();

router.get('/getdata', (req, res) => {
  res.send('Hello NodeJS!!');
});

module.exports = router;