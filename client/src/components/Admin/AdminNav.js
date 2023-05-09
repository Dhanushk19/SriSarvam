import React from "react";
import "../../css/adminnav.css";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1b.png";
export default function AdminNav(){
    return(
        <>
        <header>
        <div class="container-fluid">

            <div class="navb-logo">
                <img src={logo1} alt="Logo" />
            </div>

            <div class="navb-items nav-items d-none d-xl-flex">

                <div class="item">
                    <NavLink to="/form"  >Add Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/viewproduct"  >View Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/order" >Orders</NavLink>
                </div>
            </div>

        </div>
        </header>
        {/* <h3 style={{textAlign:"center",color:"red",paddingTop:"15%",fontFamily:"Times New Roman', Times, serif",fontSize:"30px"}} >This page is maintained by admin</h3> */}
        </>
    );
}