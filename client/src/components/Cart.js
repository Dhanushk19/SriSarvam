import React from "react";
import {Link} from "react-router-dom"
import "../css/cart.css";
import Top from "./top.js";
import Whatsapp from "./Whatsapp";

const Cart=(props)=>{
    const TotalPrice=props.cartItems.reduce((price,item) => price + item.quantity * item.price,0);
    return(
        <>
        <h4 className="cart-title">My Cart <i class="fas fa-shopping-cart"/></h4>
            <div className="cart-items">
                
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
                        <div className="cart-items-name">{item.name} - &nbsp;{item.liter}</div>
                        <div className="cart-items-function">
                            {/* <button className="card-items-add" onClick={()=>props.handleAddProdcut(item)}>+</button> */}
                            <button className="cart-items-remove" onClick={()=>props.handleRemoveProduct(item)}>Remove</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * Rs. {item.price}
                        </div>

                    </div>
                ))}
            </div>
            <div className="cart-items-total-price-name">
                    Total price 
                    <div className="cart-items-total-price">&nbsp; Rs. {TotalPrice}</div>
            </div>
            
            </div>
            <Link to="/buyform" className="buy-button"><button className="btn btn-primary bt">Buy</button></Link>
            <Whatsapp/>
            <Top/>
        </>

    )
}
export default Cart;