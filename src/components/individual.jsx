import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

function Individual() {
  return (
    <>
      {/* Purple Section */}
      <div className="purple-section">
        <div className="container individual-container1">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <h2 className="purple-text mb-4">
                Access to competitive exchange rates
              </h2>
              <p style={{ fontWeight: "bold" }}>
                Get fast, highly secure personal foreign exchange transactions
                with absolutely no hidden fees.
              </p>
            </div>
            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="i1.jpg"
                className="img-fluid"
                alt="Fairway Image"
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container individual-container2">
        <div className="form-container">
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
                  Currency BUY: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the currency you want to purchase."
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Currency SELL: <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the currency you want to exchange or sell."
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  Transaction Amount: <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Specify the amount involved in the transaction."
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="consent"
                required
              />
              <label className="form-check-label" htmlFor="consent">
                By submitting this form, I consent that my data will be shared
                and processed for the purpose of Fairway Currencies Ltd engaging
                with me regarding my potential client relationship, including
                initiating and completing the onboarding process. I understand
                that my data will be handled according to applicable data
                protection terms and policies of Fairway Currencies.
              </label>
            </div>

            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Image + Text Section */}
      <div className="row">
        {/* First column: Image */}
        <div className="col-md-6">
          <img
            src="i2.jpg"
            style={{ marginTop: "100px", marginLeft: "125px" }}
            alt="Personal FX"
          />
        </div>

        {/* Second column: Text */}
        <div className="col-md-6">
          <h5
            style={{
              marginLeft: "130px",
              marginTop: "150px",
              fontSize: "30px",
            }}
          >
            Experience hassle-free foreign currency management with OANDA.
          </h5>
          <p style={{ marginLeft: "130px", marginTop: "25px" }}>
            Manage your personal multicurrency transfers easier than ever
            before.
          </p>
          <p style={{ marginLeft: "130px" }}>
            Whether you’re an international student, living abroad, an investor,
            or a high net-worth individual, enjoy fast, secure, and transparent
            transfers.
          </p>
          <p style={{ marginLeft: "130px" }}>
            And help mitigate foreign exchange risk.
          </p>
        </div>
      </div>

      <h1 style={{ marginTop: "75px", textAlign: "center" }}>
        Get fast transfers across borders
      </h1>

      {/* Top 4 Features */}
      <div className="container individual-container3 text-center my-5">
        <div className="row g-4" style={{ marginTop: "85px" }}>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="i3.jpg" alt="Convenience" />
            </div>
            <h5 className="fw-bold" style={{ marginTop: "35px" }}>
              Convenience
            </h5>
            <p>
              Quick and straightforward foreign exchange transfers for all your
              personal financial needs.
            </p>
          </div>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="i4.jpg" alt="Transparency" />
            </div>
            <h5 className="fw-bold" style={{ marginTop: "35px" }}>
              Transparency
            </h5>
            <p>Enjoy clear, competitive rates with no hidden fees.</p>
          </div>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="i5.jpg" alt="Security" />
            </div>
            <h5 className="fw-bold" style={{ marginTop: "35px" }}>
              Security
            </h5>
            <p>
              Our reliable and secure transactions ensure your money is
              protected.
            </p>
          </div>
          <div className="col-md-3">
            <div className="feature-icon">
              <img src="i6.jpg" alt="Support" />
            </div>
            <h5 className="fw-bold" style={{ marginTop: "35px" }}>
              Support
            </h5>
            <p>
              Access our dedicated customer service team for assistance with any
              questions or issues.
            </p>
          </div>
        </div>
      </div>

      {/* Purple Section */}
      <div className="purple-section">
        <div className="container individual-container4">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <h2 className="purple-text mb-4">
                Delivering unrivalled global multicurrency transfer performance
                with Fairway Currencies
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check2 text-success me-2"></i>
                  Partnering with Fairway Currencies allows us to provide you
                  with competitive deliverable FX services.
                </li>
                <li>
                  <i className="bi bi-check2 text-success me-2"></i>
                  Fairway Currencies is renowned for its reliable and
                  transparent currency exchange services, ensuring your
                  transactions are handled with the utmost professionalism and
                  security.
                </li>
              </ul>
            </div>
            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="corpoi7.jpg"
                className="img-fluid"
                alt="Fairway Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="section individual-section1"
        style={{ backgroundColor: "#00b36b", height: "250px", width: "100%" }}
      >
        <h1
          style={{
            paddingTop: "45px",
            textAlign: "center",
            color: "#2b1c44",
          }}
        >
          Get hassle-free international personal FX transfers
        </h1>
        <p
          style={{
            paddingTop: "35px",
            textAlign: "center",
            color: "black",
          }}
        >
          Make your personal international transactions simple and secure with
          OANDA.
        </p>
        <button
          style={{
            backgroundColor: "#2b1c44",
            marginLeft: "720px",
            borderRadius: "10px",
            height: "45px",
            width: "125px",
            marginTop: "15px",
            color: "white",
          }}
        >
          Get Started
        </button>
      </div>

      {/* FAQ Section */}
      <div className="quetion text-center my-5">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="container individual-container5 py-5">
        <div className="accordion" id="faqAccordion">
          {/* Question 1 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer1"
              aria-expanded="false"
              aria-controls="answer1"
            >
              <h2 className="question-title">
                Who can use OANDA Individual FX Payments?
                <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                Our service is ideal for international students, retirees living
                abroad, investors, and high net-worth individuals.
              </div>
            </div>
            <hr />
          </div>

          {/* Question 2 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer2"
              aria-expanded="false"
              aria-controls="answer2"
            >
              <h2 className="question-title">
                What are the benefits of using OANDA for personal forex
                transactions?
                <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                Benefits include convenience, transparency, security, and
                dedicated customer support.
              </div>
            </div>
            <hr />
          </div>

          {/* Question 3 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer3"
              aria-expanded="false"
              aria-controls="answer3"
            >
              <h2 className="question-title">
                Are there any hidden fees with OANDA Individual FX Payments?
                <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                OANDA offers clear and competitive rates without any hidden
                fees.
              </div>
            </div>
            <hr />
          </div>

          {/* Question 4 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer4"
              aria-expanded="false"
              aria-controls="answer4"
            >
              <h2 className="question-title">
                How secure are OANDA’s individual FX transactions?
                <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                All transactions are secure, and your funds are protected
                through FCA regulated credit institutions.
              </div>
            </div>
            <hr />
          </div>

          {/* Question 5 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer5"
              aria-expanded="false"
              aria-controls="answer5"
            >
              <h2 className="question-title">
                How can I start using OANDA Individual FX Payments?
                <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer5"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                Contact us to learn more about how our individual foreign
                exchange solutions can simplify your international financial
                transactions.
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Individual;