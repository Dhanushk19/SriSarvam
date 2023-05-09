require('dotenv').config();
const express = require('express');
const app = express();
const {Prod}=require('./model/prodserv.js');
const cors = require('cors');
const connection = require('./config/db.js');
const {UserSignup,UserLogin,AddProdSchema,getProduct,AdminInfo,DeleteProduct}=require('./controller/prod.js')
const myParser = require("body-parser");
app.use(myParser.json({limit: '200mb'}));
app.use(myParser.urlencoded({limit: '200mb', extended: true}));

connection();

app.use(express.json())
app.use(cors());



app.get('/postItem',getProduct);

app.post("/uploads",async (req,res)=>{
    console.log(req.body);
    try{
    const name=req.body.name
    const liter=req.body.liter
     const price=req.body.price
     const image=req.body.image
     
 
     const shop=new Prod({
        name:req.body.name,
      liter:req.body.liter,
       price:req.body.price,
         image:req.body.image});
 
         await shop.save();
         console.log(shop);
         res.send("inserted data");
     }
     catch(err)
     {
         console.log(err);
     }
 });
 

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
app.get('/postItem',AddProdSchema);
app.post('/adminLogin',AdminInfo);
app.delete('/deleteprod/:id',DeleteProduct);




const port = process.env.PORT || 8080 ;
app.listen(port, () => console.log(`Listening on port ${port}...`));

