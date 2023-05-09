const {Prod,User}=require("../model/prodserv.js");
const Admin=require('../model/admin.js');
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


exports.AddProdSchema = async (req,res)=>
{
    try{
        
        const {name,liter,price,image} = req.body;
        console.log(req.body);
        console.log(name,liter,price,image)
        await Prod.create(req.body);
        
        
          
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json(
            {
                msg:'Server Error Internal'
            }
        )
    }
}

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


exports.getProduct = async (req,res)=>{
  try{
    // console.log("get product is working");
    const all = await Prod.find();
    // res.json({ status: 'success' });
    // return console.log(allData);
    
    res.status(200).json(all)
  }
  catch(error){
    console.log("product fetching error -> "+error);
  }
}
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

exports.UserSignup=async(req,res)=>{
  const {email, password} = req.body;
  console.log(email,password);
  try {
    
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    await User.create({
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error",error: "error" });
  }
}

exports.UserLogin=async(req,res)=> {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.json({ error: "email not match" });
  }
  // console.log(compare(password, User.password));
  if (true) {
    // const token = jwt.sign({ id: user.id }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok"});
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
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