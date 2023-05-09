import React, { useState } from "react";
import "../css/form.css";
import Axios from "axios";
import AdminNav from "./Admin/AdminNav";
const url = "http://localhost:8080/uploads";
function Form() {
  const [name, setName] = useState("");
  const [liter, setLiter] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageurl] = useState("")
  const uploadImage = async () => {
    const files = document.getElementById("file-upload").files;
    console.log(files);
    const data = new FormData()
    data.append('file', files[0])
    console.log(files[0]);

    data.append('upload_preset', 'srisarvamimages')

    const res = await fetch("https://api.cloudinary.com/v1_1/dupbwy7pi/image/upload",
      {
        method: 'POST',
        body: data
      })

    const file = await res.json()
    console.log(file)
    console.log(file.url)
    setImageurl(file.url)


  }
  const create = async(e) => {
    e.preventDefault();
  console.log("dfyygh")
    await uploadImage();
    Axios.post(url, {
      name: name,
      liter: liter,
      price: price,
      image: imageUrl,
    })
  };

  return (
    <>
      <AdminNav/>
      <h2>Add New Product</h2>
        <div className="maindiv">
            <div className="container mt-3">
            <form  onSubmit={e=>create(e)} >
            <div className="mb-3 mt-3 ss__control">
                <label for="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name of oil" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="mb-3 mt-3 ss__control">
                <label for="liter">Liter:</label>
                <input type="text" className="form-control" id="liter" placeholder="Enter Quantity with ml or liter" name="liter" value={liter} onChange={(e)=>{setLiter(e.target.value)}}/>
                </div>
                <div className="mb-3 mt-3  ss__control">
                <label for="price">Price:</label>
                <input type="number" className="form-control" id="price" placeholder="Enter price" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className="mb-3 mt-3  ss__control">
                <label for="image">Image:</label>
                <input type="file" className="form-control" id="file-upload" accept=".jpeg, .png ,.jpg"  name="image"  />
                </div>
                <button type="submit" className="btn btn-primary  ss__control">Submit</button>
            </form>
            </div>
        </div>

    </>
  );
}
export default Form;

