import React, { useState } from "react";
import "../css/form.css";
import Axios from "axios";
import Button from 'react-bootstrap/Button';
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
  const create = (e) => {
    e.preventDefault();
  console.log("dfyygh")
    uploadImage();
    Axios.post(url, {
      name: name,
      liter: liter,
      price: price,
      image: imageUrl,
    })
  };

  return (
    <>
      <h2>Post Form</h2>
        <div className="maindiv">
            <div class="container mt-3">
            <form  onSubmit={e=>create(e)} >
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
                <input type="file" class="form-control" id="file-upload" accept=".jpeg, .png ,.jpg"  name="image"  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>

    </>
  );
}
export default Form;

