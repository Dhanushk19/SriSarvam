import React, { Component } from "react";
import "../css/Login.css";
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

// function Login() {
//   return (
//     <>

//       <div class="container">


//         <div class="login-content">
//           <form>

//             <h2 class="title">Sign Up</h2>
//             <div class="input-div one">
//               <div class="i">
//                 <i class="fas fa-user"></i>
//               </div>
//               <div class="div">
                
//                 <input type="text" class="input" placeholder="Email Id or Phone Number" />
//               </div>
//             </div>
//             <div class="input-div pass">
//               <div class="i">
//                 <i class="fas fa-lock"></i>
//               </div>
//               <div class="div">
                
//                 <input type="password" class="input" placeholder="Password" id="myInput"/>
//               </div>
//             </div>
//             {/* <a className="anc" href="/login">Forgot Password?</a> */}
//             <input type="submit" class="btn" value="Register" />
//             <h5>Already have an account?</h5>
//             <a  href="/login" className="signuplink">Login</a>
//           </form>
//         </div>
        
//       </div>
//     </>

//   )
// }

// export default Login;





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
        console.log(data.error, "userRegister");
        if (data.error === "Email Exists") {
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
                
                <input type="email" class="input" placeholder="Email Id or Phone Number" onChange={(e) => this.setState({ email: e.target.value })}/>
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                
             <input type="password" class="input" placeholder="Password" id="myInput" onChange={(e) => this.setState({ password: e.target.value })}/>
              </div>
            </div>
            {/* <a className="anc" href="/login">Forgot Password?</a> */}
            <input type="submit" class="btn" value="Register" />
            <h5>Already have an account?</h5>
            <a  href="/login" className="signuplink">Login</a>
          </form>
        </div>

        </div>
      </>
    );
  }
}