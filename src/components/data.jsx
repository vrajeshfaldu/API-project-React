import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Data() {
  return (
    <>
      {/* First Row */}
      <div className="row">
        {/* Text Column */}
        <div className="col-md-6">
          <h1 style={{ marginLeft: "70px", marginTop: "130px" }}>
            Protect your company's bottom line
          </h1>
          <p
            style={{
              marginLeft: "70px",
              marginTop: "35px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Direct access to accurate, real-time FX data from a globally
            recognised market
            <br />
            maker.
          </p>
          <p
            style={{
              marginLeft: "70px",
              marginTop: "35px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            We have direct access to real-time FX data from all major
            participants in the
            <br />
            interbank market. We are directly connected to over 20 top
            foreign-exchange banks.
          </p>
          <p
            style={{
              marginLeft: "70px",
              marginTop: "35px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Our technology compiles this data and applies a series of
            algorithms to remove
            <br />
            outliers and achieve the highest degree of accuracy.
          </p>
          <Link to="contact.html">
            <button
              style={{
                marginLeft: "80px",
                backgroundColor: "#00d084",
                borderRadius: "10px",
                height: "45px",
                width: "115px",
                marginTop: "35px",
              }}
            >
              Contact Us
            </button>
          </Link>
          <Link to="Free.html">
            <button
              style={{
                marginLeft: "10px",
                borderRadius: "10px",
                height: "45px",
                width: "115px",
              }}
            >
              Free Trial
            </button>
          </Link>
        </div>

        {/* Image Column */}
        <div className="col-md-6">
          <img
            src="Data.jpg"
            alt="FX Data"
            style={{
              marginLeft: "60px",
              marginTop: "20px",
              maxWidth: "75%",
            }}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="row" style={{ marginTop: "130px" }}>
        <div className="col-md-4">
          <img
            src="icon4.jpg"
            style={{ marginLeft: "190px" }}
            alt="icon4"
          />
          <h4 style={{ marginLeft: "170px" }}>100+ sources of market rates</h4>
          <p style={{ marginLeft: "150px" }}>
            Our rates are algorithmically determined from actual market rates
            and trusted and redundant sources, including interbank market
            participants and rates from 100+ Central Banks.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="icon5.jpg"
            style={{ marginLeft: "190px" }}
            alt="icon5"
          />
          <h4 style={{ marginLeft: "190px" }}>Aggregated data</h4>
          <p style={{ marginLeft: "120px" }}>
            We aggregate all the data points from one trading day, calculate a
            time-weighted average price (or TWAP) and deliver FX data
            automatically via API, as well as through our cloud-based
            Historical Currency Converter.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="icon6.jpg"
            style={{ marginLeft: "190px" }}
            alt="icon6"
          />
          <h4 style={{ marginLeft: "190px" }}>Reliable</h4>
          <p style={{ marginLeft: "120px" }}>
            OANDA data has been relied upon by corporations and consumers
            globally for over 25 years. Our FX converter tool receives over 12
            million unique visitors monthly, making it one of the most used
            currency conversion tools in the world.
          </p>
        </div>
      </div>

      {/* Section */}
      <div
        className="section"
        style={{
          marginTop: "50px",
          backgroundColor: "lavender",
          height: "850px",
          width: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "xx-large",
            paddingTop: "55px",
            paddingBottom: "40px",
          }}
        >
          Accurate FX data you can trust
        </h1>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              marginLeft: "30px",
              backgroundColor: "white",
              height: "240px",
            }}
          >
            <h4 style={{ paddingLeft: "5px", paddingTop: "15px" }}>
              How we source our pricing
            </h4>
            <p style={{ paddingLeft: "6px", paddingTop: "10px" }}>
              We examine and interpret prices from each bank in isolation. An
              algorithm then assigns a trust level to each tick or price and
              performs a first-order elimination of outliers.
            </p>
            <p style={{ paddingTop: "5px" }}>
              A separate algorithm synthesises trusted ticks from rate
              providers through a second-order elimination of outliers (stale
              ticks, off market banks, etc). All trusted ticks are gathered
              together to create OANDA’s market (or tradable) price. This means
              that the published price is seldom generated from a single-source
              price.
            </p>
          </div>

          <div
            className="col"
            style={{
              marginLeft: "40px",
              backgroundColor: "white",
              height: "240px",
              maxWidth: "44%",
            }}
          >
            <h4 style={{ paddingLeft: "5px", paddingTop: "15px" }}>
              How rate aggregators source their pricing
            </h4>
            <p style={{ paddingLeft: "6px", paddingTop: "10px" }}>
              Rates aggregators do not construct their own transactable price.
              They offer an indicative price, which may not accurately reflect
              the real FX market.
            </p>
            <p style={{ paddingTop: "5px" }}>
              This use of non-traded prices lends itself to the occurrence of
              off-market prices and price spikes that cause distortions when
              passed to end users. As a market maker and active participant in
              the electronic FX market, we create transactable prices based on
              real trading to ensure the most accurate data possible.
            </p>
          </div>
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "xx-large",
            fontWeight: "bold",
            marginTop: "65px",
          }}
        >
          Protect your business. Reassure your auditors
        </h1>
        <p style={{ textAlign: "center" }}>
          We provide rates that originate from real FX transactions, meaning
          our data is a true reflection of the market at any time. This means
          that businesses leveraging OANDA Rates don't need to worry about data
          throwing off their valuations and raising concerns with their
          auditors.
        </p>

        <div className="row">
          <div className="col-md-4">
            <h4
              style={{
                paddingLeft: "25px",
                color: "#00d084",
                paddingTop: "50px",
              }}
            >
              2 ways to connect to our API
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              Build your own API integration or select from our pre-built
              integrations and connectors that can be up and running in no
              time.
            </p>
            <Link to="#"
              style={{ marginLeft: "20px", textDecoration: "none", color: "black" }}
            >
              Learn More <span style={{ color: "#00d084" }}>--&gt;</span>
            </Link>
          </div>

          <div className="col-md-4">
            <h4
              style={{
                paddingLeft: "25px",
                color: "#00d084",
                paddingTop: "50px",
              }}
            >
              Easy-to-integrate API
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              Connect our API to your existing system and get instant access to
              live rates on 200+ currencies, commodities and precious metals.
            </p>
            <Link
              to="#"
              style={{ marginLeft: "20px", textDecoration: "none", color: "black" }}
            >
              Start Free Trial <span style={{ color: "#00d084" }}>--&gt;</span>
            </Link>
          </div>

          <div className="col-md-4">
            <h4
              style={{
                paddingLeft: "25px",
                color: "#00d084",
                paddingTop: "50px",
              }}
            >
              API integration matrix
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              Our range of pre-built integrations make it possible for you to
              seamlessly integrate our API into your existing platform or
              system.
            </p>
            <Link
              to="#"
              style={{ marginLeft: "20px", textDecoration: "none", color: "black" }}
            >
              See resource <span style={{ color: "#00d084" }}>--&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;