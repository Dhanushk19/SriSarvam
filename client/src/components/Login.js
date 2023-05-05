import React from "react";
import "../css/Login.css";
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

function Login() {
  return (
    <>

      <div class="container">


        <div class="login-content">
          <form>

            <h2 class="title">LOGIN</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                
                <input type="text" class="input" name="email" placeholder="Email Id or Phone Number" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                
                <input type="password" class="input" name="password" placeholder="Password" id="myInput"/>
              </div>
            </div>
            {/* <a  href="/signup" className="anc">Forgot Password?</a> */}
            <input type="submit" class="btn" value="Login" />
            <h5>Don't Have an Account ?</h5>
            <a  href="/signup"  className="signuplink">Sign Up</a>
          </form>
        </div>
        
      </div>
    </>

  )
}

export default Login;