import react,{ useState } from "react";
import "../../css/viewproduct.css";
import AdminNav from "./AdminNav";
import axios from "axios";
const ViewProducts=(props)=>

{
    const[price,setPrice]=useState("");
    console.log("item fetched in product",props.newdata);
    const handleDelete =async (e,id)=>{
        e.preventDefault()
        alert("Do you want to delete the product");
        console.log(id);
        await axios.delete(`http://localhost:8080/deleteprod/${id}`);
      }

    const updateUser=(e)=>{
        e.preventDefault();
        let rate={price};
        console.log("new price--->",rate);
    }
    return(
        <>
        <AdminNav/>
        {/* <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4> */}
        <div className="allproductss">
            {props.newdata.map((productItem)=>(
                <div className="cards">
                    <div>
                        <img className="product-images" src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className="product-names">{productItem.name}</h3>
                    </div>
                    <div>
                        <h5 className="product-liters">Liter: {productItem.liter}</h5>
                    </div>
                    <div className="product-prices">${productItem.price}</div>
                    <form class="form-inline"   >
                    <div class="form-group">
                    <input type="number" class="form-control" id="price" placeholder="$" onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className="update-delete-button">
                        <button className="product-add-buttons" onClick={()=>updateUser}>Update</button>
                        <button className="product-add-buttonss" onClick={(e)=>handleDelete(e,productItem._id)}>Delete</button>
                    </div>
                    </form>
                    
                </div>

            ))}
        </div>

        </>
        
    )
            }

export default ViewProducts;