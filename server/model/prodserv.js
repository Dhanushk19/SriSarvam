const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema(
{
    Name:String,
    Image:Image,
    Price:Number,
    Quantity:Number,
})

module.exports = mongoose.model('prods',ProdSchema);