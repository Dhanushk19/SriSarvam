const mongoose = require('mongoose');

const AddProdSchema = new mongoose.Schema(
    {
    Name:String,
    Liter:Number,
    Price:Number,
    Image:String,
})

module.exports = mongoose.model('Prods',ProdSchema);