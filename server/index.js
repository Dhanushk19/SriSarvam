require('dotenv').config();
const express = require('express');
const app = express();
const { Prod, BuyProd } = require('./model/prodserv.js');
const cors = require('cors');
const connection = require('./config/db.js');
const { UserSignup, UserLogin, AdminInfo, DeleteProduct ,DeleteStatus} = require('./controller/prod.js')
const myParser = require("body-parser");
app.use(myParser.json({ limit: '200mb' }));
app.use(myParser.urlencoded({ limit: '200mb', extended: true }));

connection();

app.use(express.json())
app.use(cors());




app.post("/uploads", async (req, res) => {
    console.log(req.body);
    try {
        const name = req.body.name
        const liter = req.body.liter
        const price = req.body.price
        const image = req.body.image


        const shop = new Prod({
            name: req.body.name,
            liter: req.body.liter,
            price: req.body.price,
            image: req.body.image
        });

        await shop.save();
        console.log(shop);
        res.send("inserted data");
    }
    catch (err) {
        console.log(err);
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await Prod.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        res.status(200).json(
            {
                msg: 'Updated'
            }
        )
    }
    catch (err) {
        return res.status(500).json({
            msg: 'Server interval error'
        })
    }
});

app.put('/updatestatus/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await BuyProd.findByIdAndUpdate(id, req.body);
        console.log(req.body);
        res.status(200).json(
            {
                msg: 'Updated'
            }
        )
    }
    catch (err) {
        return res.status(500).json({
            msg: 'Server interval error'
        })
    }
});

app.post('/register', UserSignup);
app.post('/login-user', UserLogin);
app.post('/adminLogin', AdminInfo);
app.delete('/deleteprod/:id', DeleteProduct);
app.delete('/deletestat/:id', DeleteStatus);
app.get("/postItem", async (req, res) => {
    Prod.find({}).then(function (result) {

        res.json(result);

    })
})

app.post("/buyprod", async (req, res) => {
    console.log(req.body);
    try {
        const buy1 = new BuyProd({
            name: req.body.name,
            email: req.body.email,
            contactno: req.body.contactno,
            address: req.body.address,
            city: req.body.city,
            pincode: req.body.pincode,
            status:req.body.status,
            item:req.body.item,
        
        });

        await buy1.save();
        console.log(buy1);
        res.send("inserted data at buy");
    }
    catch (err) {
        console.log(err);
    }
});

app.get("/getOrder", async (req, res) => {
    BuyProd.find({}).then(function (result) {

        res.json(result);

    })
})

app.get("/getuserOrder", async (req, res) => {
    const email = req.body.email;
    try {
        const details = await BuyProd.find({ Email:email });
        res.json(details);
        console.log(details);
        res.end()
    }
    catch (err) {
        console.log(err);
    }
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

