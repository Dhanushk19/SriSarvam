import React from "react";
import "../css/Login.css";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Login()
{
    return(
        <>
        <h5 className="about">Login</h5>
        <div className="fullform">
        <h4 className="admin">Hello Admin !</h4>
        <br></br>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
             
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="success" type="Submit">
             <div  >Login</div> 
            </Button>
          </div>
        </Form>
        </div>
    </>
        
    )
}

export default Login;