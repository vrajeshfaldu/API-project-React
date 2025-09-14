import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

function Logo() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left text */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="hero-title">Simplify FX workflows</h2>
              <p className="hero-text">
                From precise currency data to fast and secure payments, OANDA is
                the gold standard in corporate currency management.
              </p>
              <Link to="#" className="btn btn-custom">
                Get started
              </Link>
            </div>

            {/* Right image with shapes */}
            <div className="col-lg-6 text-center">
              <div className="image-wrapper">
                <img
                  src="manwithtablet.png"
                  alt="Man with tablet"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#0b2852" }}>
            Trusted by leading global brands
          </h2>
          <div className="row justify-content-center align-items-center g-4">
            <img src="fivelogo.png" alt="Logos" />
          </div>
        </div>
      </section>

      {/* 3 Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <img
                    src="card1gilisun.png"
                    alt="Brand logo"
                    className="mb-3 threecard"
                  />
                  <p className="fw-semibold">
                    "While other options were discussed, there was no serious
                    consideration beyond OANDA. For us, the uniqueness of OANDA
                    is their broad use and universal acceptance as a go-to for
                    FX data."
                  </p>
                  <p className="text-muted small mb-0">
                    Brian Osborn, Corporate Controller
                  </p>
                  <p className="text-muted small">Gibson Brands Inc</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <img
                    src="card2ebay.png"
                    alt="Brand logo"
                    className="mb-3 threecard"
                  />
                  <p className="fw-semibold">
                    "The OANDA team was quick to respond to questions we had,
                    provided test API keys, and has been very responsive to the
                    items and questions we had around the subscription
                    agreement."
                  </p>
                  <p className="text-muted small mb-0">
                    Felix Sun, Global Payments
                  </p>
                  <p className="text-muted small">eBay</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                  <img
                    src="card3natootan.png"
                    alt="Brand logo"
                    className="mb-3 threecard"
                  />
                  <p className="fw-semibold">
                    "The Exchange Rates API provided us with accurate and
                    reliable foreign exchange rates, so we can run our
                    operations with confidence in our numbers. Implementation
                    was seamless, and the experts were there to help every step
                    of the way."
                  </p>
                  <p className="text-muted small mb-0">
                    Joyce Barbarich, Treasurer
                  </p>
                  <p className="text-muted small">NATO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Rate Section */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="fw-bold" style={{ color: "#0b2852" }}>
            Get effortless integration for precise currency data <br />
            with the OANDA exchange rates API
          </h2>
          <p className="mt-3 text-muted">
            Plug the gold standard in global exchange rates into your financial
            and accounting workflows.
          </p>
        </div>
      </section>

      {/* Exchange Cards */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 text-center">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <img
                      src="excard1logo.png"
                      alt="Icon 1"
                      style={{ maxHeight: "90px" }}
                    />
                  </div>
                  <h5 className="fw-bold" style={{ color: "#0b2852" }}>
                    The authority in FX data, at your fingertips
                  </h5>
                  <p className="text-muted">
                    Get 32 years of precise historical data for over 38,000
                    forex pairs and rates from over 200 currencies, commodities
                    and precious metals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <img
                      src="excard2logo.png"
                      alt="Icon 2"
                      style={{ maxHeight: "90px" }}
                    />
                  </div>
                  <h5 className="fw-bold" style={{ color: "#0b2852" }}>
                    Seamless integration
                  </h5>
                  <p className="text-muted">
                    Our API is designed for fast and easy integration with
                    existing accounting and financial systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <img
                      src="excard3logo.png"
                      alt="Icon 3"
                      style={{ maxHeight: "90px" }}
                    />
                  </div>
                  <h5 className="fw-bold" style={{ color: "#0b2852" }}>
                    Endless applications
                  </h5>
                  <p className="text-muted">
                    Power all kinds of use cases, from accounting and invoicing
                    to global payments, ERP systems, online pricing, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-5">
            <Link to="#" className="btn btn-success px-4 py-2">
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Global Payment */}
      <section className="py-5" style={{ backgroundColor: "#f7fbfd" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6 text-center">
              <img
                src="globalpayphoto.png"
                alt="Payments illustration"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold" style={{ color: "#0b2852" }}>
                Make global payments with ease <br />
                and speed in any currency pair
              </h2>
              <p className="mt-3 text-muted">
                Simplify and streamline payment workflows across borders in 35
                currencies.
              </p>

              {/* Features */}
              <div className="d-flex mb-3">
                <span className="fw-bold me-2 text-success">+</span>
                <div>
                  <p className="fw-bold mb-1" style={{ color: "#0b2852" }}>
                    The standard in money transfer security
                  </p>
                  <p className="text-muted small">
                    OANDA partners with trusted providers like Fairway
                    Currencies, which utilise an accredited FCA-regulated
                    facility to deliver secure and compliant payment solutions.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <span className="fw-bold me-2 text-success">+</span>
                <div>
                  <p className="fw-bold mb-1" style={{ color: "#0b2852" }}>
                    Tailored to your needs
                  </p>
                  <p className="text-muted small">
                    OANDA's team works with you to design a unique payment plan
                    tailored to your specific needs. From supplier payments to
                    settling funds into local currencies overseas and more,
                    OANDA enables you to streamline cash flow, minimize currency
                    risk, and manage foreign exchange payments.
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <span className="fw-bold me-2 text-success">+</span>
                <div>
                  <p className="fw-bold mb-1" style={{ color: "#0b2852" }}>
                    Manage currency risk with FX tools
                  </p>
                  <p className="text-muted small">
                    Reduce currency volatility without the complications. OANDA
                    provides simple, effective hedging strategies and
                    instruments to optimize cash flow and protect against
                    downside market risk. These include spot and forward
                    contracts, limit and stop orders, and more.
                  </p>
                </div>
              </div>

              <Link to="#" className="btn custom-btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="fw-bold" style={{ color: "#0b2852" }}>
            Discover why the world's leading brands choose <br /> OANDA
          </h2>
        </div>
      </section>

      <div style={{ width: "100%" }}>
        <img src="secfivelogo.png" alt="Logos" />
      </div>

      {/* Features Boxes */}
      <section className="features-section">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-4 feature-box">
              <i className="bi bi-trophy"></i>
              <h4>Unmatched reliability</h4>
              <p>A trusted partner in currency services for over 25 years.</p>
            </div>

            <div className="col-md-4 feature-box">
              <i className="bi bi-globe2"></i>
              <h4>Global reach</h4>
              <p>
                OANDA partners with businesses and individuals across more than
                190 countries.
              </p>
            </div>

            <div className="col-md-4 feature-box">
              <i className="bi bi-shield-lock"></i>
              <h4>Security first</h4>
              <p>
                FCA-regulated solutions and cutting-edge security protocols that
                you can count on.
              </p>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-6 feature-box">
              <i className="bi bi-arrow-right-circle"></i>
              <h4>Comprehensiveness, convenience, and ease</h4>
              <p>
                OANDA is your go-to foreign exchange data solutions gateway,
                covering all your currency requirements with a wide range of
                financial and accounting applications.
              </p>
            </div>

            <div className="col-md-6 feature-box">
              <i className="bi bi-wrench"></i>
              <h4>Dedicated support</h4>
              <p>
                OANDA operates as an extension of your organization, with FX
                solutions and technical support whenever you need it.
              </p>
            </div>
          </div>

          <Link to="#" className="btn">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Question Section */}
      <section className="que container-fluid">
        <div className="text-content">
          <h1>Get comprehensive FX data currency workflows</h1>
          <p>
            Cover all your FX data needs with a wide range of corporate
            solutions.
          </p>

          <div className="feature">
            <i className="bi bi-graph-up"></i>
            <span>
              Plug the world's leading FX data source into your workflows
            </span>
          </div>
          <div className="feature">
            <i className="bi bi-arrow-right"></i>
            <span>
              Make highly secure, ultra-fast payments across the globe
            </span>
          </div>
          <div className="feature">
            <i className="bi bi-bar-chart-line"></i>
            <span>
              Protect against currency fluctuations with a custom FX hedging
              strategy
            </span>
          </div>
          <div className="feature">
            <i className="bi bi-clipboard-data"></i>
            <span>
              Harness data analytics and reporting tools for actionable insights
            </span>
          </div>
          <div className="feature">
            <i className="bi bi-gear"></i>
            <span>
              Get expert support with your dedicated, on-hand account manager
            </span>
          </div>

          <Link to="#" className="btn">
            Sign up
          </Link>
        </div>

        <div className="image-content">
          <img
            src="manwithdataphoto.png"
            alt="Happy man with data"
          />
        </div>
      </section>

      {/* Final Section */}
      <div className="section text-center mt-5 mb-5">
        <h1>Get the market standard in corporate FX data solutions</h1>
        <p>
          Power enhanced financial and accounting performance with a wide range
          of market-leading currency data services.
        </p>
        <Link to="#" className="btn">
          Get in touch
        </Link>
      </div>
    </>
  );
}

export default Logo;