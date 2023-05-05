require("../model/prodserv.js");
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

exports.AddProdSchema = async (req,res)=>
{
    try{
        const newprod = req.body;
        console.log(newprod)
        await Prod.create(newprod);
        res.status(200).json(
            {
                msg:'Created'
            }
        )
        res.send({ status: "ok" });
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

exports.UserDetailsScehma=async(req,res)=>{
  const {email, password} = req.body;
  try {
    
    const oldUser = await UserLogin.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    await UserLogin.create({
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error",error: "error" });
  }
}

exports.UserDetailsScehma=async(req,res)=> {
  const { email, password } = req.body;

  const user = await UserLogin.findOne({ email });
  if (!user) {
    return res.json({ error: "email not match" });
  }
  if (await compare(password, user.password)) {
    // const token = jwt.sign({ id: user.id }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok"});
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
}