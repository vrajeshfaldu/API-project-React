import React from "react"
import { Link } from 'react-router-dom'
import './style.css'

function Integration() {
  return (
    <>
    <div className="container integration-container1">
    <div className="row">
  {/* Text Column  */}
  <div className="col-md-6">
    <h1 style={{marginLeft: "70px", marginTop:"130px"}}>
     Our integration partners
    </h1>
    <p className="textcolm" >
     The OANDA Rest API integrates easily with your ERP, e-commerce platform, accounting and integration software. Our integration matrix offers a full list of integration partners and resources, along with installation instructions..
    </p>
    <p className="textcolm">
    Can’t find your system in our pre-built integration matrix? Don’t worry. Our developers portal is packed with resources to help your developers easily and seamlessly integrate our rates API into your existing system, tool or website. Take advantage of integration documentation, sample code, handy guides and more.
    </p>
    
    <button className="freetrial">
       Start Your Free Trial
      </button>
     
    </div>
   

   {/* Image Column  */}
  <div className="col-md-6">
    <img src="matrix1.jpg" className="firstimage" alt="FX Data" />
  </div>
</div>
</div>

<div className="container integration-container2">
  <div className="row ">
    <div className="col-md-12" style={{borderColor:" #000"}}> 
      
      <div className="mb-3">
        <label><h6>First Name</h6></label>
        <input type="text" className="form-control forminput" placeholder="First Name"/>
      </div>
      <div className="mb-3">
        <label><h6>Last Name</h6></label>
      <input type="text" className="form-control forminput" placeholder="Last Name" />
      </div>

      <div className="mb-3">
      <label><h6>Email Address</h6></label>
      <input type="text" className="form-control forminput" placeholder="Email" />
      </div>
      <div className="mb-3">
      <label><h6>Telephone</h6></label>
     <input type="text" className="form-control forminput" placeholder="Telephone" />
      </div>
      <div className="mb-3">
      <label><h6>Job</h6></label>
      <input type="text" className="form-control forminput" placeholder="Job" />
      </div>
          

       <div className="col mb-3">
        <label><h6>Countr</h6></label>
      <input type="text" className="form-control forminput" placeholder="Country" />
      </div>
    </div>
    <div className="mb-3">
    <label><h6>ERP</h6></label>
    <input type="text" className="form-control forminput" placeholder="ERP" />
      </div>
    </div>
  </div>

<button className="guidebtn" >Send Me the Guide</button>
<div className="section integration-section1 disdiv">
  <h1 style={{textAlign:"center", paddingTop:" 25px"}}>Discover how businesses use FX Data Services</h1>
  <button className="learnbtn">Learn More</button>
</div>

    </>
  )
}

export default Integration