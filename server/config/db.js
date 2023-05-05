const mongoose = require('mongoose');
const connectDB = async () =>
{
    try{
        const connection = await mongoose.connect("mongodb+srv://dhanushk:srisarvamoils@srisarvamoils.u9lzr1t.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log(err,"error while connecting db");
    }
}
module.exports = connectDB;