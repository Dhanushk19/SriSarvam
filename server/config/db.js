const mongoose = require('mongoose');
const connectDB = async () =>
{
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/srisarvam");
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log("error while connecting db");
    }
}
module.exports = connectDB;