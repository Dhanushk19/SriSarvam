require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
connection();

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 8080 ;
app.listen(port, () => console.log(`Listening on port ${port}...`));
app.post('/postoil',(req,res)=>{
    let newitem=req.body;
    console.log(newitem);
    res.send('created');
})
app.get('/postoil',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
})