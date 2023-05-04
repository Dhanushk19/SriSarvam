const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const prodserv = require('./model/prodserv.js');
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

app.listen(3000,async ()=>
{
    console.log("Server is running");
})