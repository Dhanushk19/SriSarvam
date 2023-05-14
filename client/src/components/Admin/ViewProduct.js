import React, { useState } from "react";
import Axios from "axios";
import "../../css/viewproduct.css";
import logo1 from "../../assets/logo1b.png";
import ScrollToTop from "../top.js";
import AdminNav from "./AdminNav";
import PreLoader from "../PreLoader";

function ViewProduct() {
    const [sell, setSell] = useState([]);
    const [price, setPrice] = useState("");

    Axios.get("https://srisaravamoils.onrender.com/postItem", {
    }).then((res) => {
        const data = res.data
        setSell(data);
    });
    const handleDelete = async (e, id) => {
        e.preventDefault()
        if (window.confirm("Do you want to delete the product") === true) {
        // alert("Do you want to delete the prod uct");
        console.log(id);
        await Axios.delete(`https://srisaravamoils.onrender.com/deleteprod/${id}`);
        }
    }
    const handleUpdate = async (e, id) => {
        e.preventDefault()
        if (window.confirm("Do you want update the product") === true) {
            console.log(id);
            console.log(price);
            await Axios.put(`https://srisaravamoils.onrender.com/update/${id}`,{price:price});
        }

    }


    const Body = sell.map((val, key) => {

        return (

            <div className="allproducts">
                <div className="card" key={key} >
                    <img src={val.image} alt="petp" width="80%" height="130%"></img>
                    <hr></hr>
                    <h5 className="product-name"><b>Name :</b> {val.name}</h5>
                    <h5 className="product-name"><b>Price :</b>Rs. {val.price}</h5>
                    <h5 className="product-name"><b>Liter :</b> {val.liter}</h5>
                    <form class="form-inline"   >
                        <div class="form-group">
                            <input type="text" class="form-control" id="price" placeholder="Enter New Price" onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                    </form>
                    <div className="update-delete-button">
                        <button className="product-add-buttons" onClick={(e) => handleUpdate(e, val._id)}>Update</button>
                        <button className="product-add-buttonss" onClick={(e) => handleDelete(e, val._id)}>Delete</button>
                    </div>
                </div>
                <div>

                </div>
            </div>

        )
    })



    return (
        <>
            <AdminNav />
            <PreLoader />
            <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4>
            <div className="flexing">{Body}</div>
            <div className="backimg2">
                <div className="compdetails text-center">
                    <img src={logo1} alt="compname" className="comname"></img>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h5 className="bottom"> Any Doubts ? :</h5>
                            <h6 className="doubt"><i class="fa-solid fa-phone"></i>&nbsp;9788718180</h6>
                        </div>
                        <div className="col-md-4">
                            <h5 className="bottom">Address :</h5>
                            <h6 className="address"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Sri Vaari Electrical Building,<br></br> Karur main road,<br></br> Kalipalayam Post,<br></br>Dharapuram, Tiruppur District,<br></br> Tamil nadu - 638661.</h6>
                        </div>
                        <div className="col-md-4">
                            <h5 className="bottom">Email :</h5>
                            <h6 className="email"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;srisarvamoils@gmail.com</h6>
                        </div>
                    </div>
                </div>
            </div>

            <ScrollToTop />
        </>

    )
}

export default ViewProduct;