import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="container-fluid menu-bar1">
    <div className="row">
      <div className="col text-end">
        <Link to="/login">Data Services Login</Link>
        <span>|</span>
        <Link to="/faqs">FAQs</Link>
        <span >|</span>
        <Link to="/partner">Partners</Link>
        <span>|</span>
        <Link to="/EN"><i className="bi bi-globe"></i> EN</Link>
      </div>
    </div>
  </div>

  
  <nav className="navbar navbar-expand-lg shadow-sm">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/logo">
        <img src="header.jpg" className="logo" alt="Logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/home" data-bs-toggle="dropdown">Currency Converter</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/embeddable">Embeddable Converter</Link></li>
              <li><Link className="dropdown-item" to="/historical">Historical Converter</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Exchange Rates API</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/free">Free Trial</Link></li>
              <li><Link className="dropdown-item" to="/api">API Plans</Link></li>
              <li><Link className="dropdown-item" to="/integration">Integration Matrix</Link></li>
              <li><Link className="dropdown-item" to="/data">Data Accuracy</Link></li>
              <li><Link className="dropdown-item" to="/developer">Developer Resources</Link></li>
              <li><Link className="dropdown-item" to="/redisplay">Redisplay Solutions</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">FX Payments</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/corporate">Corporate Payments</Link></li>
              <li><Link className="dropdown-item" to="/individual">Individual Payments</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">About Us</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/partner">Become a Partner</Link></li>
              <li><Link className="dropdown-item" to="/blog">Our Blogs</Link></li>
              <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
              <li><Link className="dropdown-item" to="/Faqs">FAQs</Link></li>
            </ul>
          </li>
        </ul>
        <Link to="/contact" className="btn btn-contact ">Contact us</Link>
      </div>
    </div>
  </nav> 
    </>
  )
}

export default Nav