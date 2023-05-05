const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const prodserv = require('./model/prodserv.js');
const {AdminDetailsScehma,AddProdSchema}=require('./controller/prod.js')
connectDB();
const app = new express();
app.use(bodyParser.json());

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


app.post('/postItem',AddProdSchema);
app.post('/admin',AdminDetailsScehma)