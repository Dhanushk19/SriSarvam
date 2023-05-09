import React,{Component} from "react";
import '../../css/adminlogin.css'
export default class Admin extends Component {
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
      fetch("http://localhost:8080/adminLogin", {
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
        //   console.log(data, "userRegister");
          if (data.status == "ok") {
            // window.localStorage.setItem("token", data.data);
            window.location.href = "./addproduct";
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
    return(
        <>
        <form className="form" onSubmit={this.handleSubmit}>
        <h2>Admin Login</h2>
        <div class="row g-3">
        <div class="row-sm-5">
            <div class="form-outline">
            <label class="form-label" for="email">Email address</label>
            <input type="email" id="email" class="form-control" 
            onChange={(e) => this.setState({ email: e.target.value })}
            />
            </div>
        </div>
        <div class="col-sm">
            <div class="form-outline">
            <label class="form-label" for="email">Password</label>
            <input type="password" id="email" class="form-control" 
            onChange={(e) => this.setState({ password: e.target.value })}
            />
            </div>
        </div>
        <button type="subit" class="btn btn-primary btn-sm">Sign in</button>
        </div>
        </form>
        </>
    );
    }
}