import "../css/Products.css";
const Products=(props)=>

{
    console.log(props.productItems);
    return(
        <>
       
        <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4>
        <div className="allproducts">
            {props.productItems.map((productItem)=>(
                <div className="card">
                    <div>
                        {console.log("data"+productItem.image)}
                        <img className="product-image" src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className="product-name">{productItem.name}</h3>
                    </div>
                    <div>
                        <h5 className="product-liter">Liter: {productItem.liter}</h5>
                    </div>
                    <div className="product-price">${productItem.price}</div>
                    <div>
                        <button className="product-add-button" onClick={()=>props.handleAddProduct(productItem)}>Add to Cart</button>
                    </div>
                </div>

            ))}
        </div>

        </>
        
    )
            }

export default Products;