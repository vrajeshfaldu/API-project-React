import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Free() {
  return (
    <>
      <div className="section free-section1" style={{textAlign:" center"}}>
    <h1 style={{marginTop: "25px"}}>Instantly access exchange rates</h1>
    <p style={{marginTop: "15px",fontSize: "large"}}>A free trial account gives you instant access to exchange rates for unlimited quote currencies for 7 days.</p>
    <p  style={{marginTop:"12px",fontSize:" large",marginBottom:" 50px"}}>It is easy to integrate our API into your company's system, software or app. Once you fill in the form,<br/> we will send you an API key that will let you try out the OANDA Rates API for 7 days.</p>
</div>

<div className="container free-container1">
  <div className="row justify-content-center">
    <div className="col-md-6" > 
      
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="First Name"style={{height:"50px"}} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Last Name" style={{height:"50px"}}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Email" style={{height:"50px"}}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Compny Name" style={{height:"50px"}}/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Password" style={{height:"50px"}}/>
        <p>Please choose a strong password (minimum 10 characters, maximum 100 characters). </p>
          </div>
          <div className="row">
        <div className="col mb-3">
    <select className="form-select" aria-label="Default select example">
  <option selected>Compny Code</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
       <div className="col mb-3">
        <input type="text" className="form-control" placeholder="Mobile Number" style={{height:"50px"}}/>
      </div>
    </div>

     <div className="mb-3">
        <input type="text" className="form-control" placeholder="job" style={{height:"50px"}}/>
      </div>

       <div className="mb-3">
        <input type="text" className="form-control" placeholder="Country" style={{height:"50px"}}/>
      </div>

       <div className="mb-3">
        <input type="text" className="form-control" placeholder="ERP" style={{height:"50px"}}/>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
  <label className="form-check-label" for="checkDefault">
   By starting your free trial, you agree to these terms of service*
  </label>
</div>
      </div>
    </div>
  </div>
</div>
<button style={{marginLeft: "1100px",borderRadius:"15px",height: "40px",width:" 115px",backgroundColor:" blue"}}>Submite</button>
<div className="Learn" style={{backgroundColor: "lavender",height:" 210px",width: "100%", marginTop:" 15px"}}>
    <h1 style={{textAlign: "center",paddingTop:"60px"}}>Discover how businesses use FX Data Services</h1>
     <button
        style={{
          backgroundcolor:" #00d084",
          borderRadius: "10px",
          height: "45px",
          width: "145px",
          marginLeft: "700px",
          marginTop: "15px",
        
        }}
      >
      Learn More
      </button>
</div>
</>
  )
}


export default Free