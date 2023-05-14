import React,{useState} from "react";
import Axios from "axios";
export default function BuyForm(props){
    const [name,setUName] = useState("");
    const [email,setEmail] = useState("");
    const [contactno,setContact] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [pincode,setPincode] = useState("");
    const status="pending";
    const pid=props.pids;
    console.log("product id in buyform",pid);
    const create=async (e)=>
    {
       
        
        e.preventDefault();
        await Axios.post("http://localhost:8080/buyprod",
        {
            name:name,
            email,email,
            contactno,contactno,
            address:address,
            city:city,
            pincode:pincode,
            status:status,
            pid:pid,
        })
        alert("product submited successfully");

    }
    return(
        <>
        <div class="container pt-5">
            <h2 style={{textAlign:'center'}}>Enter the details</h2>
        <form class="forms" onSubmit={create}>
            <div class="form-group ">
                <label for="name" className="mt-3">Name:</label>
                <input type="text" class="form-control" id="name"
                    placeholder="Enter Name" name="name" onChange={(e)=>{setUName(e.target.value)}}/>
            </div>
            <div class="form-group pt-1 mt-3">
                <label for="email">Email Id:</label>
                <input type="email" class="form-control" id="email"
                    placeholder="Enter Email Id" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="form-group pt-1 mt-3">
                <label for="contact">Contact No:</label>
                <input type="text" class="form-control" id="contact"
                    placeholder="Enter Contact Number" name="contact" onChange={(e)=>{setContact(e.target.value)}}/>
            </div>
            <div class="form-group pt-1 mt-3">
                <label for="address">Address:</label>
                <textarea class="form-control" rows="2" id="address" onChange={(e)=>{setAddress(e.target.value)}}></textarea>
            </div>
            <div class="form-group pt-1 mt-3">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city"
                    placeholder="Enter the city" name="city" onChange={(e)=>{setCity(e.target.value)}}/>
            </div>
            <div class="form-group pt-1 mt-3">
                <label for="pincode">Pincode:</label>
                <input type="text" class="form-control" id="pincode"
                    placeholder="Enter the pincode" name="pincode" onChange={(e)=>{setPincode(e.target.value)}}/>
            </div>
            <button type="submit" class="btn bg-success pt-2 mt-3 mb-3"  >
                Submit
            </button>
        </form>
    </div>
        </>
    );
}