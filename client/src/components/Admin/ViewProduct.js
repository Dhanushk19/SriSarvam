import "../../css/viewproduct.css";
import AdminNav from "./AdminNav";
const ViewProducts=(props)=>

{
    console.log("item fetched in product",props.newdata);
    return(
        <>
        <AdminNav/>
        {/* <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4> */}
        <div className="allproductss">
            {props.newdata.map((productItem)=>(
                <div className="cards">
                    <div>
                        {console.log("data"+productItem.image)}
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
                    <input type="email" class="form-control" id="email" placeholder="$" name="email"/>
                    </div>
                    </form>
                    <div className="update-delete-button">
                        <button className="product-add-buttons" onClick={()=>props.handleAddProduct(productItem)}>Update</button>
                        <button className="product-add-buttonss" onClick={()=>props.handleAddProduct(productItem)}>Delete</button>

                    </div>
                </div>

            ))}
        </div>

        </>
        
    )
            }

export default ViewProducts;