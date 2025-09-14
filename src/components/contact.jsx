import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <section className="py-5">
    <div className="container" style={{backgroundColor:"#F6F9FB",width: "100%"}}>
      
      <div className="text-center" style={{height: "300px",paddingTop: "60px", marginBottom: "15px"}}>
        <h2 className="fw-bold">How can we help you?</h2>
        <p className="text-muted">For any questions about our products, services, pricing and to request a free trial, just fill out the contact form below.</p>
        <p className="text-muted">A member of our team will be in touch as soon as possible.</p>
        <p className="text-muted">For more information on trading, <Link to="#">click here</Link>.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label fw-semibold">Telephone</label>
                  <input type="tel" className="form-control" id="telephone" placeholder="Enter your phone number"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Work Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                </div>
                
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label fw-semibold">Country</label>
                        <select id="country" className="form-select" defaultValue="">
                            <option disabled>Select...</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="SG">Singapore</option>
                        </select>
                    </div>
                </div>

                <div className="container"> 
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label fw-semibold">Product-Service Interset</label>
                        <select id="country" className="form-select" defaultValue="">
                            <option disabled>Select...</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="SG">Singapore</option>
                        </select>
                    </div>
                </div> 

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="your message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact