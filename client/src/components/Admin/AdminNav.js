import React from "react";
import "../../css/Navbar1.css";
import { NavLink, Outlet } from "react-router-dom";
import logo1 from "../../assets/logo1b.png";
import { useNavigate } from "react-router";
import { useUserAuth } from "../UserAuthContext";
export default function AdminNav(){
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        // console.log(error.message);
      }
    };  
    return(
        <>
        <header>
        <div class="container-fluid">

            <div class="navb-logo">
                <img src={logo1} alt="Logo" />
            </div>

            <div class="navb-items nav-items d-none d-xl-flex">

                <div class="item">
                    <NavLink to="/form"  >Add&nbsp;Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/viewproduct"  >Edit&nbsp;Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/order" >Orders</NavLink>
                </div>
                <div className="item1" style={{marginLeft:"50px"}}>
                <button type="button" className="btn btn-danger" onClick={handleLogout} style={{fontSize:"20px",paddingLeft:"20px",paddingRight:"20px"}}>Logout</button>
                </div>
            </div>

        </div>
        <div class="mobile-toggler d-xl-none">
                        <a href="/home" data-bs-toggle="modal" data-bs-target="#navbModal">
                        <i class="fa fa-solid fa-bars fontbars"></i>
                        </a>
                    </div>


                    <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <img src={logo1} alt="Logo" />
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-xmark"></i></button>
                                </div>

                                <div class="modal-body">

                                    <div class="modal-line">
                                    <i class="fa fa-plus" aria-hidden="true"></i><a href="/form">Add Product</a>
                                    </div>

                                    <div class="modal-line">
                                    <i class="fa-solid fa-droplet"></i> <a href="/viewproduct">View Products</a>
                                    </div>

                                    <div class="modal-line">
                                    <i class="fa-solid fa-phone"></i> <a href="/order">Orders</a>
                                    </div>

                                    

                                    <a href="/" class="navb-button" type="button" onClick={handleLogout}>Logout</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                
        </header>
        <Outlet/>
        {/* <h3 style={{textAlign:"center",color:"red",paddingTop:"15%",fontFamily:"Times New Roman', Times, serif",fontSize:"30px"}} >This page is maintained by admin</h3> */}
        </>
    );
}