const ex = require('express');
const app = ex();

app.use(ex.static("./static"));

app.listen(3000);