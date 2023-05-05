import React from "react";
import "../css/cart.css";

const Cart=(props)=>{
    const TotalPrice=props.cartItems.reduce((price,item) => price + item.price,0);
    return(
        <>
            <div className="cart-items">
                <h2 className="cart-items-header">Carts Items</h2>
                <div className="clear-cart">
                    {props.cartItems.length>=1&&(
                        <button className="clear-cart-button" onClick={props.handleCartClearance}>Clear</button>
                    )}
                </div>
                {props.cartItems.length===0&&(
                    <div className="cart-items-empty">No items are added.</div>
                )}
                <div>
                {props.cartItems.map((item)=>(
                    <div key={item.id} className="cart-items-list">
                        <img 
                            className="cart-items-image"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            {/* <button className="card-items-add" onClick={()=>props.handleAddProdcut(item)}>+</button> */}
                            <button className="cart-items-remove" onClick={()=>props.handleRemoveProduct(item)}>Remove</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ${item.price}
                        </div>

                    </div>
                ))}
            </div>
            <div className="cart-items-total-price-name">
                    Total price
                    <div className="cart-items-total-price">${TotalPrice}</div>
            </div>
            </div>
            
        </>

    )
}
export default Cart;