import React from "react";
import "../css/Login.css";
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Login() {
  return (
    <>

      <div class="container">


        <div class="login-content">
          <form>

            <h2 class="title">Sign Up</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                
                <input type="text" class="input" placeholder="Email Id or Phone Number" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                
                <input type="password" class="input" placeholder="Password" id="myInput"/>
              </div>
            </div>
            <a className="anc" href="#">Forgot Password?</a>
            <input type="submit" class="btn" value="Register" />
            <h5>Already have an account?</h5>
            <a  href="/login" className="signuplink">Login</a>
          </form>
        </div>
        
      </div>
    </>

  )
}

export default Login;