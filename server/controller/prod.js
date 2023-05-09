const {Prod,User}=require("../model/prodserv.js");
// exports.getAllProdlist = async(req,res)=>
// {
//     try{
//         const prods = await Prod.find();
//         return res.status(200).json({
//             data:prods,
//             length:prods.length
//         })
//     }
//     catch(err)
//     {
//         console.log(err);
//         return res.status(500).json(
//             {
//                 msg:'Server internal error'    
//             }
//         )
//     }
// }

// exports.AddProdSchema = async (req,res)=>
// {
//     try{
        
//         const {name,liter,price,image} = req.body;
//         console.log(req.body);
//         console.log(name,liter,price,image)
//         await prod.create(req.body);
        
        
          
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json(
//             {
//                 msg:'Server Error Internal'
//             }
//         )
//     }
// }

// exports.getOneProd = async (req,res)=>
// {
//     try{
//         const prod1 = await Prod.findById(req.params.id);
//         res.status(200).json(
//             {
//                 data:prod1
//             }
//         )
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json(
//             {
//                 msg:'Server Error Internal'
//             }
//         )
//     }
    
// }

// exports.deletetodo = async (req,res)=>
// {
//     try{
//         await Prod.findByIdAndDelete(req.params.id);
//         res.status(200).json(
//             {
//                 msg:'Deleted'
//             }
//         )
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json(
//             {
//                 msg:'Server Error Internal'
//             }
//         )
//     }
    
// }



    
// exports.Updatetodo = async (req,res)=>
// {
//     try{
//         await Todo.findByIdAndUpdate(req.params.id,{...req.body});
//         res.status(200).json(
//             {
//                 msg:'updated'
//             }
//         )
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json(
//             {
//                 msg:'Server Error Internal'
//             }
//         )
//     }
    
// }
exports.AdminInfo = async (req,res)=>{
  const {email, password} = req.body;
  const user = await Admin.findOne({ email});
  const pass = await Admin.findOne({ password});
  if (!user) {
    return res.json({ error: "User not found" });
  }

  if(!pass){
    return res.send({error: "password not match"})
  }
  if(pass){
    if (res.status(201)) {
      return res.json({ status: "ok" });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Password" });
}

exports.UserSignup=async(req,res)=>{
  const {email, password} = req.body;
  console.log(email,password);
  try {
    
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    else{
      await User.create({
      email,
      password,
    });
    }
    
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error",error: "error" });
  }
}

exports.UserLogin=async(req,res)=> {
  
  try {
      const existinguser = await User.findOne({ ...req.body })
      if (!existinguser) {
          console.log("User not found...");
          return res.status(404).json({ message: "User not found..." })
      }
      console.log(existinguser);
      res.status(200).json({ result: existinguser })

  } catch (err) {
      console.log(err.message)
      res.status(500).json(err.message)
  }
}

exports.DeleteProduct=async(req,res)=>{
  try{
    console.log(req.params.id);
  const all = await Prod.findByIdAndDelete(req.params.id);
  console.log(id);
  res.status(200).json(all)
  return res.json({status: "ok" });
  }
  catch(error){
    console.log("id not deleting ->"+error);
  }
}