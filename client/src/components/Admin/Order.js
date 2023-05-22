import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Axios from "axios";
import "../../css/order.css";
export default function Order() {
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState("");

    Axios.get("https://srisaravamoils.onrender.com/getOrder", {

    }).then((res) => {

        const data = res.data
        setOrder(data);
        console.log(data);


    });
    const handleUpdate = async (e, id) => {
        e.preventDefault()
        if (window.confirm("Do you want update the product") === true) {
            console.log(id);
            console.log(status);
            await Axios.put(`https://srisaravamoils.onrender.com/updatestatus/${id}`, { status: status });
        }

    }
    const handleDelete = async (e, id) => {
        e.preventDefault()
        if (window.confirm("Do you want to delete the product") === true) {
            // alert("Do you want to delete the prod uct");
            console.log(id);
            await Axios.delete(`https://srisaravamoils.onrender.com/deletestat/${id}`);
        }
    }
    const Body = order.map((val, key) => {
        return <>
            <div className="allproducts1">
                <div className="card5" key={key} >
                    <h5 className="product-name"><b>Name :</b> {val.name}</h5>
                    <h5 className="product-name"><b>Email :</b> {val.email}</h5>
                    <h5 className="product-name"><b>Contact Number :</b> {val.contactno}</h5>
                    <h5 className="product-name"><b>Address :</b> {val.address}</h5>
                    <h5 className="product-name"><b>City :</b> {val.city}</h5>
                    <h5 className="product-name"><b>Pincode :</b> {val.pincode}</h5>
                    <h5 className="product-name"><b>Status :</b> {val.status}</h5>
                    <h5 className="product-name"><b>Items:</b> 
                    <div className="items">{val.item.map((val1, key1) => {
                        return <h6><div className="items1" key={key1}>
                            <div>{val1.name} - {val1.liter} - {val1.quantity}</div>
                        </div></h6>
                    })}
                    </div>
                    
                    </h5>
                    
                    <form class="form-inline"   >
                        <div class="form-group">
                            <input type="text" class="form-control" id="price" placeholder="Update Status" onChange={(e) => { setStatus(e.target.value) }} />
                        </div>
                    </form>
                    <div>
                        <button className="product-add-buttons" onClick={(e) => handleUpdate(e, val._id)}>Update</button>
                        <button className="product-add-buttonss" onClick={(e) => handleDelete(e, val._id)}>Delete</button>
                    </div>
                </div>



                <div>
                </div>
            </div>
        </>

    })



    return (
        <>
            <AdminNav />
            <h4 className="Products"> Orders</h4>
            <div className="flexing1">{Body}</div>




        </>

    )
}