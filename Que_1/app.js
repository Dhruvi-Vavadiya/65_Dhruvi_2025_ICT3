const express = require('express');
const app = express();

app.use(express.static("./static"))

const product_router = require('./routes/firstapp'); //router middleware
app.use('/route', product_router);

app.listen(8000);





