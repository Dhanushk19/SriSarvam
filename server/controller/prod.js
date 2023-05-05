const Prods = require("../model/prodserv.js");

exports.getAllProdlist = async(req,res)=>
{
    try{
        const prods1 = await Prods.find();
        return res.status(200).json({
            data:prods1,
            length:prods1.length
        })
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json(
            {
                msg:'Server internal error'    
            }
        )
    }
}

exports.createProdItem = async (req,res)=>
{
    // const Name1 = req.body.Name;
    // console.log(Name1);
    // const Liter1 = req.body.Liter;
    // const Price1 = req.body.price;
    // const Image1 = req.body.Image;
    // const details = new Prods({Name:Name1,Liter:Liter1,Price:Price1,Image:Image1});
    const body1 = req.body;
    try{
        await body1.save();
        res.status(201).json({msg:"new image uploaded...!"})
    }
    catch(err)
    {
        
        res.status(500).json(
            {
                msg:'Server Error Internal'
            }
        )
        console.log(err);
    }
}

exports.getOneProd = async (req,res)=>
{
    try{
        const prod1 = await Prod.findById(req.params.id);
        res.status(200).json(
            {
                data:prod1
            }
        )
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

exports.deletetodo = async (req,res)=>
{
    try{
        await Prod.findByIdAndDelete(req.params.id);
        res.status(200).json(
            {
                msg:'Deleted'
            }
        )
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

exports.Updatetodo = async (req,res)=>
{
    try{
        await Todo.findByIdAndUpdate(req.params.id,{...req.body});
        res.status(200).json(
            {
                msg:'updated'
            }
        )
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