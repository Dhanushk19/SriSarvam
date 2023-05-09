import React, { useState } from "react";
import "../css/Login.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

function Login () {
  
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate();

  

const handlesubmit = async (e) => {
  e.preventDefault();
  if ( email !== '' && password !== '') {
      const user1 = {        
          email: email,
          password: password
      }
      console.log(user1)
      const res = await Axios.post('/login-user', user1);
      localStorage.setItem("user1", JSON.stringify(res.user1.result));
      
      if (res) {
        navigate("/")
      }

  }
  else {
      alert('Please check the values again!')
  }
}
  
    return (
      <>
     


        <div className="maindiv">
          <form onSubmit={handlesubmit}>

            <h4 className="title">Login</h4>
            <div className="container mt-3 mb-3">
              <div className=" mt-3 mb-3 ss__controls">
                <label for="name">Username :</label>
            
                <input type="text" id="name" name="email" placeholder="Email Id " size="40"  className="form-control"
                 onChange={(e) => setemail({ email: e.target.value })}/>
              </div>
            
           
             
              <div className="mt-3 mb-3 ss__controls">
              <label for="pass">Password :</label>
                <input type="password" id="pass" name="password" placeholder="Password" className="form-control"
                 onChange={(e) => setpassword({ password: e.target.value })}/>
              </div>
            
            {/* <a  href="/signup" className="anc">Forgot Password?</a> */}
            <Link to='/'><input type="submit" className="btn btn-primary ss__control  mb-3" value="Login" onClick={handlesubmit} /></Link>
            <h5>Don't Have an Account ?</h5>
            <a  href="/signup"  className="signuplink mt-3 mb-3">Sign Up</a>
            </div>
          </form>
        </div>

        
      </>
    );
  }
  export default Login;