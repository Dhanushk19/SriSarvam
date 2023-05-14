import React, { useState } from "react";
import Axios from "axios";
import "../css/userOrder.css";
function Userorder() {
    const [order, setOrder] = useState([]);
   
    const [email, setEmail] = useState("");
    const [view, setView] = useState("");
    const getProd = async (e) => {
        e.preventDefault();
        await Axios.get("http://localhost:8080/getuserOrder", {
            Email: email
        }).then((res) => {

            const data = res.data
            setView(data.email);
            setOrder(data);
            console.log(data.email);
            console.log(data);

        });
    }

    
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
                    <h5 className="product-name"><b>Items:</b> 
                    <div className="items">{val.item.map((val1, key1) => {
                        return <h6><div className="items1" key={key1}>
                            <div>{val1.name} - {val1.liter} - {val1.quantity}</div>
                        </div></h6>
                    })}
                    </div>
                    </h5>
                </div>
                <div>
                </div>
            </div>
        )
    })
    return (
        <>
            <h4 className="Products"> Orders</h4>
            <h5 className="title6" style={{textAlign:"center",marginTop:"2%"}}>Enter your email Id to view your order</h5>
            <form onSubmit={e => getProd(e)}>
                <div className="ss__control1">
                    
                    
                    <input type="email" name="email" placeholder="Enter Email" className="form-control" id="emailid" onChange={(event) => { setEmail(event.target.value) }} />
                    <button type="submit" className="btn btn-primary  ss__control1_button">Submit</button>
                </div>
            </form>
            {
                view != null ?
                    (
                        <></>
                    ) :
                    (
                        
                            <div className="flexing1">{Body}</div>
                    )
            }
            
        </>
    )
}

export default Userorder;