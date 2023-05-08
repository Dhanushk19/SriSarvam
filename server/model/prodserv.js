const mongoose = require('mongoose');

const AddProdSchema = new mongoose.Schema(
    {
    name:String,
    price:Number,
    liter:String,
    image:String,
   
    })

    module.exports.Prod = mongoose.model('prods',AddProdSchema);

const UserDetailsScehma = new mongoose.Schema(
    {
      email: { type: String },
      password: String, 
    });
  
    module.exports.User = mongoose.model('UserLogin', UserDetailsScehma);