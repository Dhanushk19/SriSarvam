const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema(
{
    Image:Image,
    StockAvail:String,
    Price:Number,
    Quantity:String
})

module.exports = mongoose.model('prods',ProdSchema);