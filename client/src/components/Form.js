import React, { useState } from "react";
import "../css/form.css";

function Form(){
    const [name,setName]=useState("");
    const [liter,setLiter]=useState("");
    const [price,setPrice]=useState("");
    const [image,setImage]=useState("");
    function newPost(e){
        e.preventDefault();
        console.log(name,liter,price,image);
        
    }
    return(
        <>
        <h2>Post Form</h2>
        <div className="maindiv">
            <div class="container mt-3">
            <form action="/action_page.php" >
                <div class="mb-3 mt-3">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name of oil" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div class="mb-3 mt-3">
                <label for="liter">Liter:</label>
                <input type="number" class="form-control" id="liter" placeholder="Enter capacity" name="liter" value={liter} onChange={(e)=>{setLiter(e.target.value)}}/>
                </div>
                <div class="mb-3 mt-3">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price" placeholder="Enter price" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div class="mb-3 mt-3">
                <label for="image">Image:</label>
                <input type="text" class="form-control" id="image" placeholder="Enter URL" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={newPost}>Submit</button>
            </form>
            </div>
        </div>
        </>
    );
}
export default Form;