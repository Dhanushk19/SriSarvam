require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db.js');
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
connection();

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 8080 ;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.listen(5000,()=>{
    console.log('server is connected')
})