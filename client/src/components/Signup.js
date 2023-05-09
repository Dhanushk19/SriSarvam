import React, { Component } from "react";
import "../css/Login.css";
import {NavLink} from "react-bootstrap";
export default class Signs extends Component {
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
    console.log("function is calling");
    const { email, password } = this.state;
    console.log( email, password);
    fetch("http://localhost:8080/register", {
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
        // console.log(data.error, "userRegister is failed");
        if (data.error === "User Exists") {
          alert("Email Exits");
        }
        // if (data.error === " id Exists ") {
        //   alert("Id Exits");
        // }
        if (data.error === " error ") {
          alert("Cant't able to register");
        }
        if (data.status === "ok") {
          alert("Registered successful");
        }
      });
  }
  render() {
    return (
      // <>
      // <div class="container">


      //   <div class="login-content">
      //     <form onSubmit={this.handleSubmit}>

      //       <h2 class="title">Sign Up</h2>
      //       <div class="input-div one">
      //         <div class="i">
      //           <i class="fas fa-user"></i>
      //         </div>
      //         <div class="div">
                
      //           <input type="email" class="input" name="email" placeholder="Email Id or Phone Number" onChange={(e) => this.setState({ email: e.target.value })}/>
      //         </div>
      //       </div>
      //       <div class="input-div pass">
      //         <div class="i">
      //           <i class="fas fa-lock"></i>
      //         </div>
      //         <div class="div">
                
      //        <input type="password" class="input" name="password"  placeholder="Password" id="myInput" onChange={(e) => this.setState({ password: e.target.value })}/>
      //         </div>
      //       </div>
      //       {/* <a className="anc" href="/login">Forgot Password?</a> */}
      //       <input type="submit" class="btn" value="Register" />
      //       <h5>Already have an account?</h5>
      //       <a  href="/login" className="signuplink">Login</a>
      //     </form>
      //   </div>

      //   </div>
      // </>
      <>
     


      <div className="maindiv">
        <form onSubmit={this.handleSubmit}>

          <h4 className="title">SignUp</h4>
          <div className="container mt-3 mb-3">
            <div className=" mt-3 mb-3 ss__controls">
              <label for="name">Email Id :</label>
          
              <input type="text" id="name" name="email" placeholder="Email Id" size="40"  className="form-control"
               onChange={(e) => this.setState({ email: e.target.value })}/>
            </div>
          
         
           
            <div className="mt-3 mb-3 ss__controls">
            <label for="pass">Password :</label>
              <input type="password" id="pass" name="password" placeholder="Password" className="form-control"
               onChange={(e) => this.setState({ password: e.target.value })}/>
            </div>
          
          {/* <a  href="/signup" className="anc">Forgot Password?</a> */}
          <NavLink><input type="submit" className="btn btn-primary ss__control  mb-3" value="SignUp" /></NavLink>
          <h5>Already Have an Account ?</h5>
          <a  href="/login"  className="signuplink mt-3 mb-3">Login</a>
          </div>
        </form>
      </div>

      
    </>
    );
  }
}