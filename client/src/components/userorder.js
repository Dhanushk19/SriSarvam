import React, { useState } from "react";
import Axios from "axios";

 function Userorder() {
    const [order, setOrder] = useState([]);

    Axios.get("http://localhost:8080/getOrder", {

    }).then((res) => {
        const data = res.data
        setOrder(data);
        console.log(data);
    });
    const Body = order.map((val, key) => {
        return (
            <div className="allproducts1">
                <div className="card5" key={key} >
                    <h5 className="product-name"><b>Name :</b> {val.name}</h5>
                    <h5 className="product-name"><b>Email :</b> {val.email}</h5>
                    <h5 className="product-name"><b>Contact Number :</b> {val.contactno}</h5>
                    <h5 className="product-name"><b>Address :</b> {val.address}</h5>
                    <h5 className="product-name"><b>City :</b> {val.city}</h5>
                    <h5 className="product-name"><b>Pincode :</b> {val.pincode}</h5>
                    <h5 className="product-name"><b>Status :</b> {val.status}</h5>
                </div>
                <div>
                </div>
            </div>
        )
    })
    return (
        <>
            <h4 className="Products"> Orders</h4>
            <div className="flexing1">{Body}</div>
        </>
    )
}

export default Userorder;