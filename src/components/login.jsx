import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <nav className="login navbar">
       <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src="footer.jpg" alt="Bootstrap" className="login-logo"/>
        </Link>
      </div>
    </nav>

    
    <div className="d-flex justify-content-center align-items-center">
      <div className="form-box p-4 mt-5 " >
        <h2 className="mb-3 fw-bold text-dark text-start ">Log in</h2>
        <h4 className="lead">
          To log in to your FX Data API or HCC subscription, enter your account’s email address and password below.
        </h4>

        <form>
          
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email*</label>
            <input type="email" className="form-control" id="exampleInputEmail1" required/>
            <div id="emailHelp" className="form-text">Email is Required</div>
          </div>

          
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <div id="PasswordHelp" className="form-text">Password is Required</div>
          </div>

          
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        
        <div className="mt-3">
          <Link href="forgot-password.html" className="forgot-password">Forgot Password?</Link>
        </div>

        
        <p className="info mt-4" >
          Want to log in to your <Link href="#">OANDA Trading account?</Link><br/>
          Note: the Chatbot below can only assist with FX Data Services queries.<br/>
          If you need help with your OANDA Trading account,<br/>
          please email <Link href="mailto:frontdesk@oanda.com">frontdesk@oanda.com</Link>.
        </p>
      </div>
    </div>

    <hr className="line"/>
    
    <div className="login-footer">
      © 2025 OANDA Business Information & Services Inc.
    </div>
    </>
  )
}

export default Login