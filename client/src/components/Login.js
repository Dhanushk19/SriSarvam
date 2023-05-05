import React, { Component } from "react";
import "../css/Login.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/admin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          // window.localStorage.setItem("token", data.data);
          window.location.href = "./form";
          alert("login successfull");
        }
        if(data.error==="User"){
          alert("user not match");
        }
        if(data.error==="password not"){
          alert("password not match");
        }
      });
  }
  render() {
    return (
      <>
      <div class="container">


        <div class="login-content">
          <form onSubmit={this.handleSubmit}>

            <h2 class="title">LOGIN</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                
            
                <input type="text" class="input" name="email" placeholder="Email Id or Phone Number" 
                 onChange={(e) => this.setState({ email: e.target.value })}/>
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                
                <input type="password" class="input" name="password" placeholder="Password" id="myInput"
                 onChange={(e) => this.setState({ password: e.target.value })}/>
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
    );
  }
}