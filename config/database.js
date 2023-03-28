const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.URL;

try {
    const connect = mongoose.connect(url);
    if(connect) console.log("database connected successfully");
    else console.log("can't connect database");
}
catch(err) {
    console.log("something is wrong...");
    console.log(err.message);
}