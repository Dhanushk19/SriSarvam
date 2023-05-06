const mongoose = require('mongoose');

const AddProdSchema = new mongoose.Schema(
    {
    name:String,
    image:String,
    price:Number,
    liter:Number,
    })

    module.exports.prod = mongoose.model('prods',AddProdSchema);

const UserDetailsScehma = new mongoose.Schema(
    {
      email: { type: String },
      password: String, 
    });
  
    module.exports.User = mongoose.model('UserLogin', UserDetailsScehma);