import React from "react";
export default function BuyForm(){
    return(
        <>
        <div class="container pt-5">
            <h2 style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Enter the details</h2>
        <form class="forms">
            <div class="form-group pt-2">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name"
                    placeholder="Enter Name" name="name"/>
            </div>
            <div class="form-group pt-1">
                <label for="email">Email Id:</label>
                <input type="email" class="form-control" id="email"
                    placeholder="Enter Email Id" name="email"/>
            </div>
            <div class="form-group pt-1">
                <label for="contact">Contact No:</label>
                <input type="text" class="form-control" id="contact"
                    placeholder="Enter Contact Number" name="contact"/>
            </div>
            <div class="form-group pt-1">
                <label for="address">Address:</label>
                <textarea class="form-control" rows="2" id="address"></textarea>
            </div>
            <div class="form-group pt-1">
                <label for="city">City:</label>
                <input type="text" class="form-control" id="city"
                    placeholder="Enter the city" name="city"/>
            </div>
            <div class="form-group pt-1">
                <label for="pincode">Pincode:</label>
                <input type="text" class="form-control" id="pincode"
                    placeholder="Enter the pincode" name="pincode"/>
            </div>
            <button type="submit" class="btn bg-success pt-2">
                Submit
            </button>
        </form>
    </div>
        </>
    );
}