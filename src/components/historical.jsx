import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Historical() {
  return (
    <>
      
  <div className="container historical-container1 my-5">
  <div className="row align-items-center">
     {/* Left content */}
    <div className="col-md-6">
      <h1>Over 32 years of trusted FX rate data</h1>
      <p>
        Are you in need of historical FX data? OANDA's comprehensive historical
        currency converter provides authoritative exchange rate information for
        over 38,000 currency pairs, dating back to 1990.
      </p>
      <Link to="contact.html" class="btn btn-success me-2">Contact Us</Link>
      <Link to="Free.html" class="btn btn-outline-success">Free Trial</Link>
    </div>

     {/* Right image  */}
    <div class="col-md-6 text-center">
      <img src="historical1.jpg" className="img-fluid rounded" alt="FX Data Image"/>
    </div>
  </div>
</div>

      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Here are three effective ways to access data
      </h1>

      <div className="row mt-5">
        {/* Free Card */}
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card historical-card">
            <div className="card-body">
              <h4 className="card-title">Free</h4>
              <h6>No sign up required</h6>
              <p className="card-text">
                🪧Try our historical currency converter for free and get up to 180
                days of historical exchange rates. <br />
                <br />
                🪧You can also: Compare quotes for up to 10 currencies
                <br />
                <br />
                🪧Retrieve rates by custom frequencies (includes daily, weekly
                and monthly)
              </p>
              <button type="button" className="btn btn-success">
                Try Now
              </button>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="col-sm-4">
          <div className="card historical-card">
            <div className="card-body">
              <h4 className="card-title">Pro</h4>
              <h6>$100 monthly or $1,000 annually*</h6>
              <p className="card-text">
                🪧Compare quotes for up to 10 currencies <br />
                <br />
                🪧Retrieve rates by custom frequencies (includes quarterly and
                annually) <br />
                <br />
                🪧Download historical data to CSV file <br />
                <br />
                🪧Make use of over 32 years' historical data <br />
                <br />
                🪧Get exchange rates from over 100+ central banks <br />
                <br />*Save $200 per year
              </p>
              <button type="button" className="btn btn-success">
                Sign Up
              </button>
              <p style={{ marginTop: "10px" }}>
                You can download data to CSV once during the 30-day trial period.
              </p>
            </div>
          </div>
        </div>

        {/* Pro Teams Card */}
        <div className="col-sm-4">
          <div className="card historical-card">
            <div className="card-body">
              <h4 className="card-title">Pro Teams</h4>
              <h6>25% discount for 5 licenses/seats</h6>
              <p className="card-text">
                🪧Compare quotes for up to 10 currencies <br />
                <br />
                🪧Retrieve rates by custom frequencies (includes quarterly and
                annually) <br />
                <br />
                🪧Download historical data to CSV file <br />
                <br />
                🪧Make use of over 32 years' historical data <br />
                <br />
                🪧Get exchange rates from over 100+ central banks <br />
                <br />
                🪧Add multiple members and accounts
              </p>
              <button type="button" className="btn btn-success">
                Request Quotes
              </button>
              <p style={{ marginTop: "10px" }}>
                Multi-seat discount available on the price of five or more users
                within the company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View & Compare Section */}

         {/* Left Content  */}
            <div className="container historical-container2 my-5">
  <div className="row align-items-center">
    <div className="col-md-6">
      <h1>View and compare up to ten currency quotes absolutely free</h1>
      <p className="mt-4">
        Stay on top of the ever-changing currency market with our user-friendly
        platform. Easily view and compare quotes for up to 10 currencies, all at
        no cost. Whether you’re a business, trader, or just curious about
        exchange rates, we’ve got you covered.
      </p>
    </div>

     {/* Right Image  */}
    <div class="col-md-6 text-center">
      <img src="historical2.jpg" class="img-fluid rounded" alt="Currency Compare"/>
    </div>
  </div>
</div>
      {/* Why Choose Us Section */}
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6">
          <h1 style={{ marginLeft: "80px" }}>Why Choose Us?</h1>
          <br />
          <br />

          <span style={{ fontWeight: "bold", marginLeft: "80px" }}>
            ✔ Real-Time Update:
          </span>
          <p style={{ marginLeft: "80px" }}>
            Get the most accurate and up-to-date currency quotes.
          </p>

          <span style={{ fontWeight: "bold", marginLeft: "80px" }}>
            ✔ User-Friendly Interface:
          </span>
          <p style={{ marginLeft: "80px" }}>
            Quickly compare multiple currencies with just a few clicks.
          </p>

          <span style={{ fontWeight: "bold", marginLeft: "80px" }}>
            ✔ Comprehensive Insights:
          </span>
          <p style={{ marginLeft: "80px" }}>
            Access detailed information and historical data to inform your
            decisions.
          </p>

          <br />

          <p style={{ marginLeft: "80px" }}>
            We provide you with access to reliable and comprehensive currency
            exchange rate <br />
            data. Our extensive database spans over 32 years, ensuring you have
            the historical <br />
            insights and current trends you need for informed decision-making.
          </p>

          <button
            type="button"
            className="btn btn-success"
            style={{ marginLeft: "80px", height: "45px", width: "125px" }}
          >
            Contact Us
          </button>
        </div>

        <div className="col-md-6">
          <img
            src="historical3.jpg"
            style={{ height: "505px" }}
            alt="Historical 3"
          />
        </div>
      </div>

      {/* Get Started Section */}
      <div className="section historical-section1" style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Get Started Today</h1>
        <p style={{ marginTop: "15px" }}>
          Explore our features, compare currency quotes for free, or sign up for
          our API services to enhance your financial operations. Experience the
          convenience and efficiency of accurate <br />
          currency data at your fingertips.
        </p>

        <Link to="contact.html" className="btn btn-contact">
          Contact Us
        </Link>

        <Link to="Free.html" className="btn btn-Free">
          Free Trial
        </Link>
      </div>

      {/* FAQ Section */}
      <div className="quetion text-center my-5">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="container historical-container3 py-5">
        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer1"
              aria-expanded="false"
              aria-controls="answer1"
            >
              <h2 className="question-title">
                How does OANDA calculate daily averages? <br />
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
                OANDA calculates daily averages based on the average of bid and ask
                prices collected from various data sources over a 24-hour period.
              </div>
            </div>
            <hr />
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer2"
              aria-expanded="false"
              aria-controls="answer2"
            >
              <h2 className="question-title">
                Does OANDA offer a competitive package? <br />
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
                Absolutely! We provide customized quotes tailored to your needs.
                Contact us today to learn more about our offerings.
              </div>
            </div>
            <hr />
          </div>

          {/* FAQ Item 3 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer3"
              aria-expanded="false"
              aria-controls="answer3"
            >
              <h2 className="question-title">
                How can I compare more than 5 quote currencies at once? <br />
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
                To compare more than five quote currencies, simply click the "+"
                button next to the last selected currency. You can view and compare
                up to 10 at once.
              </div>
            </div>
            <hr />
          </div>

          {/* FAQ Item 4 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer4"
              aria-expanded="false"
              aria-controls="answer4"
            >
              <h2 className="question-title">
                Can I download historical exchange rate data? <br />
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
                Yes, OANDA provides access to historical exchange rates that you can
                download for financial analysis and reporting.
              </div>
            </div>
            <hr />
          </div>

          {/* FAQ Item 5 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer5"
              aria-expanded="false"
              aria-controls="answer5"
            >
              <h2 className="question-title">
                Is there a limit to the free API usage? <br />
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
                Free API plans have limits on the number of requests per day. For
                higher limits, you can upgrade to a paid plan.
              </div>
            </div>
            <hr />
          </div>

          {/* FAQ Item 6 */}
          <div className="accordion-item border-0">
            <div
              className="d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#answer6"
              aria-expanded="false"
              aria-controls="answer6"
            >
              <h2 className="question-title">
                How do I contact OANDA support? <br />
                <br />
              </h2>
              <div className="plus-icon">+</div>
            </div>
            <div
              id="answer6"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="answer-text">
                You can reach OANDA support through live chat, email, or by
                submitting a request on the official support page.
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Historical;