import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


function Faqs() {
  return (
    <>
        <nav className="navbar Faq-nav">
    <div className="container Faq-container1">
      <Link className="navbar-brand" to="#">
        <img src="FaQs.jpg" alt="Bootstrap" width="200" height="80" style={{marginLeft: "500px"}}/>
      </Link>
    </div>
  </nav>

  
  <div className="container Faq-container2">
    <div className="h1" style={{ color: "white", textAlign: "center", paddingTop : "120px" }}>Help Is Here</div>
    <div style={{textAlign: "center", marginTop: "10px"}}>
      <input type="text" style={{width: "600px", height: "60px"}}/>
      <button style={{backgroundColor: "forestgreen", width: "150px", height: "60px", color: "white"}}>Search</button>
    </div>
  </div>

  <div className="container Faq-container3">
  <div className="card Faq-card"> <div className="card-icon">👤</div> <h3>Currency Converter</h3> </div>
  <div className="card Faq-card"> <div className="card-icon">👤</div> <h3>FX Payments Services</h3> </div>
  <div className="card Faq-card"> <div className="card-icon" >👤</div> <h3>API + HCC Subscription Services</h3> </div>
  <div className="card4 Faq-card4">
    <div className="card Faq-card" >
      <div className="card-icon">👤</div>
      <h3>Frequently Asked Questions</h3>
    </div>
  </div>
</div>

<div className="container Faq-container4 my-5">

  <h4 className="text-center fw-bold mb-4" style={{color: "#002f5d"}}>Recent items</h4>

  <div className="row border-bottom py-3 align-items-center">
    <div className="col-md-9">
     <Link to="" style={{textDecoration: "none",color: "#002f5d"}}> <h5 className="fw-bold mb-1">How can I start using OANDA Individual FX Payments?</h5></Link>
      <small className="text-muted">Individual</small>
    </div>
    <div className="col-md-3 text-md-end">
      <small className="text-muted">Article created 2025-04-16</small>
    </div>
  </div>

  <div className="row border-bottom py-3 align-items-center">
    <div className="col-md-9">
     <Link to="" style={{textDecoration: "none",color: "#002f5d"}}> <h5 className="fw-bold mb-1">How secure are OANDA's individual forex transactions?</h5></Link>
      <small className="text-muted">Individual</small>
    </div>
    <div className="col-md-3 text-md-end">
      <small className="text-muted">Article created 2025-04-16</small>
    </div>
  </div>

  <div className="row border-bottom py-3 align-items-center">
    <div className="col-md-9">
     <Link to=" " style={{textDecoration: "none",color: "#002f5d"}}> <h5 className="fw-bold mb-1">Are there any hidden fees with OANDA Individual FX Payments?</h5></Link>
      <small className="text-muted">Individual</small>
    </div>
    <div className="col-md-3 text-md-end">
      <small className="text-muted">Article created 2025-04-16</small>
    </div>
  </div>


  <div className="text-center mt-5">
    <button className="btn btn-dark fw-bold">Load More</button>
  </div>

  <div className="Faq-footer footer mt-3">
    OANDA Business Information and Services Inc. (trading as OANDA FX Data Services). A Delaware company located at 17 State Street, Suite 300, New York, NY 10004-1501.
  </div>

</div>


    </>
  )
}

export default Faqs