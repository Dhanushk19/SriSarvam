const mongoose = require('mongoose');

const AddProdSchema = new mongoose.Schema(
    {
    Name:String,
    Image:Image,
    Price:Number,
    Quantity:Number,
    })

    module.exports = mongoose.model('prods',AddProdSchema);

const AdminDetailsScehma = new mongoose.Schema(
    {
      email: { type: String },
      password: String, 
    });
  
    module.exports = mongoose.model('AdminInfo', AdminDetailsScehma);