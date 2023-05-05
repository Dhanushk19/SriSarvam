import React, { useState } from "react";
import "../css/form.css";
import axios from 'axios';
const url = "http://localhost:8080/uploads";
function Form(){
    const [name,setName]=useState("");
    const [liter,setLiter]=useState("");
    const [price,setPrice]=useState("");
    const [postImage, setPostImage] = useState({myFile : ""})

  
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Uploaded");
        console.log("product name",name,liter,price,postImage);
    
          await fetch("http://localhost:8080/uploads", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              name,
              liter,
              price,
              postImage,
            }),
          })
          .then((res) =>res.json())
          .then((data) => {
            console.log(data, "post send");
            // alert("Post send Successfully")
          });
        };
        const setImage = async (e) =>
        {
          const file = e.target.files[0];
          const base64 = await convertToBase64(file);
          setPostImage({...postImage,myFile:base64})
        }
    return(
        <>
        <h2>Post Form</h2>
        <div className="maindiv">
            <div class="container mt-3">
            <form action="" onSubmit={handleSubmit} >
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
                <input type="file" class="form-control" id="file-upload" accept=".jpeg, .png ,.jpg"  name="image"  onChange={(e)=>{setImage(e)}}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </>
    );
}
export default Form;

function convertToBase64(file){
  return new Promise((resolve,reject)=>
  {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>
    {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) =>
    {
      reject(error)
    }
  })
}