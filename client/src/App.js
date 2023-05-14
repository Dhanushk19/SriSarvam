import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar1";
import Home from "../src/components/Home";
import Products from "./components/Products";
import Contact from "../src/components/Contact";
import About from "../src/components/About";

import NoPage from "../src/components/NoPage";

import Cart from './components/Cart';
import Form from "./components/Form";
import "./index.css";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { UserAuthContextProvider } from "./components/UserAuthContext";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminNav from "./components/Admin/AdminNav";
import ViewProducts from "./components/Admin/ViewProduct";
import Order from "./components/Admin/Order";
import BuyForm from "./components/BuyForm";
import Userorder  from "./components/userorder";
function App() {
  
  const [cartItems,setCartItems]=useState([]);
  const [final,setFinal]=useState([]);
  const handleAddProduct=(product)=>{
    alert("Product is add to the cart");
    const ProductExist=cartItems.find((item)=>item._id===product._id);
    console.log("product id",product._id,ProductExist);
    // setPids(product._id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item)=>
        item._id===product._id
          ?{ ...ProductExist, quantity:ProductExist.quantity+1}:item)
      );
      
    }else{
        setCartItems([...cartItems,{ ...product,quantity:1}]);
      }
      
    };

    const handleRemoveProduct=(product)=>{
      const ProductExist=cartItems.find((item)=>item._id===product._id);
      if(ProductExist){
        setCartItems(cartItems.filter((item)=>item._id !==product._id));
      }else{
        setCartItems(
        cartItems.map((item)=>
          item._id===product._id
          ? { ...ProductExist,quantity:ProductExist.quantity-1}:item
        )

        );
      }
    }

    

    const handleCartClearance=()=>{
      
      setCartItems([]);
    }
    



    
  return (
    <>
    <BrowserRouter>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Navbar2 cartItems={cartItems} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products  handleAddProduct={handleAddProduct}/>} loading />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
          <Route path="*" element={<NoPage />} />
          <Route path="buyform" element={<BuyForm cartItems={cartItems}/>}/>
          <Route path="userorder" element={<Userorder/>}/>
        </Route>
          <Route path="form" element={<ProtectedRoute><Form/></ProtectedRoute>} />
          <Route path="admin" element={<AdminLogin/>}/>
          <Route path="adminNav" element={<ProtectedRoute><AdminNav/></ProtectedRoute>}/>
          <Route path="viewproduct" element={<ProtectedRoute><ViewProducts/> </ProtectedRoute>}/>
          <Route path="order" element={<ProtectedRoute><Order/></ProtectedRoute>}/> 
          


        
      </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
    
    </>
  );
}


export default App;
