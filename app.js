const express = require('express');
const app = express();
require('./config/database');

app.use('/api', require('./routes/index'));

app.listen(process.env.PORT, () => console.log('listening at port'))  