const express = require('express')

const app = express();

require('./connection/db')

const path = require('path')

require('dotenv').config()

const routes = require('./routes/route')

app.use('/',routes)
const port = process.env.PORT || 3000


// const name = xlsx.utils.sheet_to_json(data.Sheets[sheet_name], { header: ['Name',,'Marks']})


app.listen(port, () => {
    console.log(`shuru ho gaya ${port} pe`)
})