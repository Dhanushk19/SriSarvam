require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/db.js');
const {UserSignup,UserLogin,AddProdSchema}=require('./controller/prod.js')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
connection();

app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>
{
    try{
        
        res.json("Home route")
    }catch(err)
    {
        res.json({err})
    }
})

app.post("/uploads",async(req,res)=>
{
    const body = req.body;
    try{
        const newImage = await prods.create(body);
        newImage.save();
        res.status(201).json({msg:"new image uploaded...!"})
    }catch(error)
    {
        res.status(409).json({message:error.message})
    }
})

// app.post('/postoil',(req,res)=>{
//     let newitem=req.body;
//     console.log(newitem);
//     res.send('created');
// })
// app.get('/postoil',(req,res)=>{
//     res.send(req.body);
//     console.log(req.body);
// })

app.post('/register',UserSignup);
app.post('/login-user',UserLogin);
app.post('/postItem',AddProdSchema);





const port = process.env.PORT || 8080 ;
app.listen(port, () => console.log(`Listening on port ${port}...`));

