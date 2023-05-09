const mongoose = require('mongoose');
const AdminDetailsScehma = new mongoose.Schema(
    {
      email: { type: String },
      password: String, 
    }
  );
  
  module.exports=mongoose.model("AdminInfo", AdminDetailsScehma);