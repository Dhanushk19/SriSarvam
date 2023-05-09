import React,{useState} from "react";
import '../../css/adminlogin.css';
import {useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext";
export default function AdminLogin()
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/form");
    } catch (err) {
      setError(err.message);
      
    }
  }
  return(
    <>
    <div className="whole">

    
    <div className="maindiv1">
    <form  onSubmit={handleSubmit}>
    <div>{error && <h5 variant="danger">{error}</h5>}</div>
    <h4 className="ad_title">Admin Login</h4>
    <div className="container mt-3">
        <div className="ss__control mt-3">
        <label className="form-label " for="email">Email address</label>
        <input type="email" id="email" className="form-control" 
        onChange={(e) => setEmail(  e.target.value )}
        />
        </div>
    
    <div class="ss__control mt-3">
        <div class="form-outline">
        <label class="form-label" for="email">Password</label>
        <input type="password" id="email" class="form-control" 
        onChange={(e) => setPassword( e.target.value )}
        />
        </div>
        <button type="submit" class="btn btn-primary btn-md mt-3">Sign in</button>
     </div>
    </div>
    
    </form>
    </div>
    </div>
    </>
  )
}