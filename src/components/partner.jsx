import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Partner() {
  return (
    <>
      <div class="partner">
      <div
        className="section Partner-section1"
        style={{
          backgroundColor: "#231942",
          height: "600px",
          width: "100%",
          marginTop: "25px",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                color: "white",
                marginTop: "45px",
                marginLeft: "75px",
              }}
            >
              Become a partner and earn up to $5,000 per referral
            </h1>
            <p
              style={{
                color: "white",
                marginTop: "35px",
                marginLeft: "75px",
              }}
            >
              At OANDA, we want you to maximize your revenue. That’s why when you
              join as a partner, you can earn up to $5,000 when you refer new
              clients. Sounds pretty good, right?
            </p>
            <p
              style={{
                color: "white",
                marginTop: "35px",
                marginLeft: "75px",
              }}
            >
              When you become a partner with OANDA you’ll have access to our
              Online Currency Converter, Historical Currency Converter, and
              Exchange Rates API. Regularly used by the big four audit firms and
              thousands of global businesses, these products provide trusted FX
              and Digital asset data.
            </p>
            <p
              style={{
                color: "white",
                marginTop: "25px",
                marginLeft: "75px",
              }}
            >
              What will a partnership do for your business?
            </p>
            <Link
              to="#"
              className="btn btn-contact"
              style={{ marginLeft: "75px" , width:"200px"}}
            >
              Become a Partner
            </Link>
          </div>

          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1365527907/photo/portrait-of-smiling-mature-teacher-with-laptop-in-the-classroom.jpg?s=612x612&w=0&k=20&c=9Zgf2IEHkNV7LTEcmFLgOTqY8jaX0K5P-8IYmsyafA4="
              style={{
                height: "499px",
                width: "90%",
                marginTop: "35px",
              }}
              alt="partner"
            />
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          color: "#231942",
          marginTop: "65px",
        }}
      >
        Benifites
      </h1>
      <p style={{ textAlign: "center" }}>
        There’s never been a better time to join the Partner team at OANDA. Here
        are some of the benefits you can expect as a partner:
      </p>

      <div className="container partner-container1 text-center my-5">
        <div className="row g-4" style={{ marginTop: "85px" }}>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="p1.jpg" alt="p1" />
            </div>
            <p>
              Develop your global customer base and maximize your revenue up to
              $5,000 per referral.
            </p>
          </div>
          <div className="col-md-3 ">
            <div className="feature-icon">
              <img src="p2.jpg" style={{ marginTop: "9px" }} alt="p2" />
            </div>
            <p>
              Access auditor-trusted foreign exchange rates for you and your
              clients.
            </p>
          </div>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="p3.jpg" style={{ marginTop: "15px" }} alt="p3" />
            </div>
            <p>
              Compare existing products or functionality with globally trusted
              rates.
            </p>
          </div>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="p4.jpg" alt="p4" />
            </div>
            <p>
              Utilise products and tools by FX Data Services, who have been
              providing accurate and reliable data for over 30 years.
            </p>
          </div>
        </div>
      </div>

      <div
        className="section partner-section2"
        style={{ backgroundColor: "#231942", height: "700px", width: "100%" }}
      >
        <h2 style={{ color: "white", paddingTop: "35px" }}>
          Become a partner
        </h2>

        <div className="form-container">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Company Email: <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter company email"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Company Name: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  First Name: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Last Name: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Country: <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option defaultValue>Select</option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="3">UK</option>
                  <option value="4">Canada</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Phone Number: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                What would you like to ask our experts?:{" "}
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your message"
              />
            </div>

            <button type="submit" className="btn btn-submit px-4">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="section partner-section3" style={{ width: "100%" }}>
        <img src="p7.jpg" style={{ width: "100%" }} alt="p7" />
      </div>

      <div
        className="row"
        style={{ backgroundColor: "rgb(241, 240, 240)" }}
      >
        <div className="col-md-6">
          <img
            src="p5.jpg"
            style={{ marginTop: "25px", height: "400px" }}
            alt="p5"
          />
        </div>
        <div className="col-md-6 ">
          <h2
            className="fw-bold"
            style={{ color: "#231942" }}
          >
            Automated FX currency conversion for Oracle ERP systems
          </h2>
          <p className="mt-3">
            Companies that use Oracle ecosystems face a unique set of challenges
            when it comes to foreign exchange data.
          </p>
          <p>
            See how FXLoader and OANDA’s partnership helps businesses using
            Oracle ERPs. Businesses such as E-Business Suite, JD Edwards, Cloud
            (Fusion), and Peoplesoft, easily automate their multi-currency
            functionality.
          </p>
          <button className="btn btn-dark mt-3">Read case study</button>
        </div>
      </div>

      <div
        className="section partner-section4 text-center py-5"
        style={{ backgroundColor: "#00d084" }}
      >
        <h2 className="fw-bold mb-5">Partnership opportunities</h2>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="card card-custom">
              <div className="icon-circle">
                <i className="bi bi-gear"></i>
              </div>
              <h5>Technical</h5>
              <p>
                Provide complementary products and services to customers who can
                benefit from an embedded OANDA data feed within their existing
                offering.
              </p>
              <Link to="#" className="explore-link">
                Explore technical →
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div className="icon-circle">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <h5>Channel</h5>
              <p>
                ERP systems integrators, solution providers, consultants, and
                developers who want to integrate our Exchange Rates API or
                recommend OANDA as their preferred foreign exchange rates
                provider.
              </p>
              <Link to="#" className="explore-link">
                Explore channel →
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-custom">
              <div className="icon-circle">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h5>Custom</h5>
              <p>
                Have a unique idea for partnership? Let’s talk about it. We’re
                always open to new ways to partner and power new projects.
              </p>
              <Link to="#" className="explore-link">
                Explore custom →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container partner-container2 my-5">
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#000" }}
        >
          What our clients are saying about us
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="testimonial-card p-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
                alt="eBay"
                className="testimonial-logo img-fluid mx-auto d-block"
              />
              <p className="testimonial-text">
                "The OANDA team was quick to respond to questions we had,
                provided test API keys, and has been very responsive to the
                items and questions we had around the subscription agreement."
              </p>
              <p className="testimonial-author">
                Felix Sun, Global Payments, eBay
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card p-4">
              <img
                src="p6.jpg"
                alt="NATO"
                className="testimonial-logo img-fluid mx-auto d-block"
              />
              <p className="testimonial-text">
                "The Exchange Rates API provided us with accurate and reliable
                foreign exchange rates, so we can run our operations with
                confidence in our numbers. Implementation of the API was
                seamless, and the OANDA experts were there to help us every step
                of the way."
              </p>
              <p className="testimonial-author">
                Joyce Barbarich, Treasurer at NATO
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card p-4">
              <img
                src="p7.jpg"
                alt="Gibson"
                className="testimonial-logo img-fluid mx-auto d-block"
              />
              <p className="testimonial-text">
                "While other options were discussed, there was no serious
                consideration beyond OANDA. For us, the uniqueness of OANDA is
                their broad use and universal acceptance as a go-to for FX
                data."
              </p>
              <p className="testimonial-author">
                Brian Osborn, Corporate Controller, Gibson Brands Inc
              </p>
            </div>
          </div>
        </div>
      </div>
       </div>
    </>
  )
}

export default Partner
