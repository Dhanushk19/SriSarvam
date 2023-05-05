require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db.js');
var bodyParser = require('body-parser')
const {getAllProdlist,createProdItem}=require('./controller/prod.js')
connection();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(express.json())
app.use(cors());

app.post("/uploads",createProdItem);

const port = process.env.PORT || 8080 ;
app.listen(port, () => console.log(`Listening on port ${port}...`));
