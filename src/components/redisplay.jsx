import React from "react";
import "./style.css"; 

function Redisplay() {
  return (
    <>
      {/* Section 1 */}
      <div
        className="section redisplay-section1"
        style={{
          height: "450px",
          backgroundColor: "#2b1e4e",
          width: "100%",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                color: "#00d084",
                paddingTop: "65px",
                paddingLeft: "45px",
              }}
            >
              Redisplay solutions
            </h1>
            <br />
            <p style={{color:"white"}}>Looking for a smart way to show local currencies online?</p>
            <p style={{color:"white"}}>
              With OANDA’s redisplay solutions, you can access an API platform
              that provides dynamic pricing, creating a seamless experience for
              your customers. With OANDA’s redisplay solutions, you can access
              an API platform that provides dynamic pricing, creating a seamless
              experience for your customers.
            </p>
            <button
              style={{
                height: "45px",
                color: "#2b1e4e",
                backgroundColor: "#00d084",
                marginLeft: "45px",
                borderRadius: "10px",
                width: "125px",
              }}
            >
              Sign up Now
            </button>
          </div>
          <div className="col-md-6">
            <img src="R1.jpg" height="420px" alt="R1" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container redisplay-container1" style={{ marginTop: "35px" }}>
        <div className="row">
          <div className="col-md-4">
            <img src="R5.jpg" alt="R5" />
            <h3>Manage risk</h3>
            <p>
              Minimise risk by aligning the exchange rate on the website, with
              the rate that your payment processor will use.
            </p>
          </div>
          <div className="col-md-4">
            <img src="R4.jpg" alt="R4" />
            <h3>Central bank rates</h3>
            <p>
              With support for over 100 central banks worldwide, OANDA offers
              the largest selection of central bank data available.
            </p>
          </div>
          <div className="col-md-4">
            <img src="R3.jpg" alt="R3" />
            <h3>Accurate and transparent</h3>
            <p>
              At OANDA, we’re all about prioritising data accuracy. That’s why
              we make sure your customers can access up to date currency
              conversions, guaranteeing a smoother buying experience.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Form */}
      <div
        className="section redisplay-section2"
        style={{ backgroundColor: "lavender", width: "100%", height: "800px" }}
      >
        <h1 style={{ paddingTop: "45px", textAlign: "center" }}>
          Ready to get started?
        </h1>
        <div
          className="container"
          style={{
            width: "90%",
            backgroundColor: "white",
            height: "540px",
            paddingTop: "45px",
            paddingLeft: "15px",
            marginTop: "35px",
          }}
        >
          <div
            className="form"
            style={{
              borderStyle: "groove",
              borderRadius: "15px",
              padding: "30px",
              paddingTop: "35px",
            }}
          >
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Company Email: <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Company Name: <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    First Name: <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Last Name: <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Country: <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" required>
                    <option value="">Select</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Phone Number: <span className="text-danger">*</span>
                  </label>
                  <input type="tel" className="form-control" required />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    *What would you like to ask our experts?:{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="section redisplay-section3"
        style={{ height: "800px", backgroundColor: "#291e4d", width: "100%" }}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src="R2.jpg"
              height="540px"
              alt="R2"
              style={{ marginTop: "35px", marginLeft: "95px" }}
            />
          </div>
          <div className="col-md-6">
            <h2 style={{ color: "#00b36b", marginTop: "175px" }}>
              Smart, straightforward solutions
            </h2>
            <br />
            <p style={{ color: "white" }}>
              When it comes to currency exchange, we like to keep things simple.
              That’s why we use a straightforward REST API with query parameters
              and endpoints.
            </p>
            <p style={{ color: "white" }}>
              No matter what kind of system you use, you’ll be able to
              seamlessly connect.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3
              style={{
                color: "#00b36b",
                textAlign: "center",
                marginTop: "55px",
              }}
            >
              Trusted for a reason
            </h3>
            <p style={{ color: "white", textAlign: "center" }}>
              Looking for a market leader in conversion rates?
            </p>
            <p style={{ color: "white", textAlign: "center" }}>
              With a long-standing reputation for providing accurate and
              reliable foreign exchange data, choosing OANDA for redisplay
              solutions is a smart move.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="section redisplay-section4">
        <img
          src="p7.jpg"
          style={{ width: "100%", height: "350px" }}
          alt="p7"
        />
      </div>
    </>
  );
}

export default Redisplay;
