
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer">
      <div className="container ">
      <div className="row"> 
        <img src="footer.jpg" className="footer-logo"/>
        <div className="social-icons col-lg-2">
          <div className="app-buttons">
            <Link to="#"><i className="bi bi-linkedin"></i></Link>
            <Link to="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/></Link>
            <Link to="#">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"/></Link>
          </div>
        </div>
       
        <hr className="line"/>
        <div className="col-lg-2 col-md-6 mb-4">
          <h5>Currency Converter</h5>
          <Link to="#">Currency Converter</Link>
          <Link to="#">Embeddable Converter</Link>
          <Link to="#">Historical Converter</Link>
        </div>
        
        <div className="col-lg-2 col-md-6 mb-4">
          <h5>Exchange Rates API</h5>
          <Link to="#">Free Trial</Link>
          <Link to="#">API Plans</Link>
          <Link to="#">Data Accuracy</Link>
          <Link to="#">Integration Matrix</Link>
          <Link to="#">Developer Resources</Link>
        </div>
        
        <div className="col-lg-2 col-md-6 mb-4">
          <h5>FX Payments</h5>
          <Link to="#">FX Payments</Link>
          <Link to="#">Corporate Payments</Link>
          <Link to="#">Individual Payments</Link>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4">
          <h5>About</h5>
          <Link to="#">OANDA Group</Link>
          <Link to="#">Become a Partner</Link>
          <Link to="#">Our Blog</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">Legal</Link>
          <Link to="#">Cookies Settings</Link>
        </div>
      </div>
      
      <div className="footer-bottom text-center mt-4"> © 2025 OANDA Business Information and Services Inc. | All Rights Reserved. </div>
    </div>
  </footer>
    </>
  )
}

export default Footer