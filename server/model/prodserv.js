const mongoose = require('mongoose');

const AddProdSchema = new mongoose.Schema(
    {
    name:String,
    price:Number,
    liter:String,
    image:String,
   
    })

    module.exports.Prod = mongoose.model('prods',AddProdSchema);

    const BuyProdSchema = new mongoose.Schema(
      {
        name:String,
        email:String,
        contactno:Number,
        address:String,
        city:String,
        pincode:String,
        status:String ,
        pid:String,
      })
  
      module.exports.BuyProd = mongoose.model('buyprods',BuyProdSchema);

const UserDetailsScehma = new mongoose.Schema(
    {
      email: { type: String },
      password: String, 
    });
  
    module.exports.User = mongoose.model('UserLogin', UserDetailsScehma);