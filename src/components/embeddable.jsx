import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Embeddable() {
  const [currencyNames, setCurrencyNames] = useState({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("cad");
  const [amount, setAmount] = useState(1);
  const [convertedValue, setConvertedValue] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch list of currency names
  useEffect(() => {
    async function fetchNames() {
      try {
        const res = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json"
        );
        const names = await res.json();
        setCurrencyNames(names);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching currencies:", err);
        setLoading(false);
      }
    }
    fetchNames();
  }, []);

  // currency na rate vadi link
  useEffect(() => {
    async function fetchRate() {
      if (!fromCurrency || !toCurrency) return;

      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`
        );
        const data = await res.json();
        const rate = data[fromCurrency][toCurrency];
        setConvertedValue((amount * rate).toFixed(4));
      } catch (err) {
        console.error("Error fetching conversion:", err);
        setConvertedValue(null);
      }
    }
    fetchRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <>
      <div className="container embeddable-container1 main py-5">
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#1b1f24", fontSize: "40px" }}
        >
          Embeddable Currency Converter Widget
        </h2>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="widget">
              <img className="logomid" src="e1.jpg" alt="" />
              <h5>
                Currency Converter
                <br />
                <small className="text-muted">By OANDA</small>
              </h5>

              {/* From Currency */}
              <div className="mb-3">
                <label htmlFor="from" className="form-label">
                  From:
                </label>
                <input
                  type="number"
                  id="from"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <select
                  className="form-select mt-2"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Object.entries(currencyNames).map(([code, name]) => (
                      <option key={code} value={code}>
                        {code.toUpperCase()} - {name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="arrow">⇅</div>

              {/* To Currency */}
              <div className="mb-3">
                <label htmlFor="to" className="form-label">
                  To:
                </label>
                <input
                  type="text"
                  id="to"
                  className="form-control"
                  value={convertedValue ?? "..."}
                  readOnly
                />
                <select
                  className="form-select mt-2"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Object.entries(currencyNames).map(([code, name]) => (
                      <option key={code} value={code}>
                        {code.toUpperCase()} - {name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="date">
                {new Date().toLocaleDateString()} |{" "}
                <Link to="#">Change Date</Link>
              </div>
            </div>
          </div>

          {/* Description box */}
          <div className="col-lg-6 col-md-6">
            <div className="desc-box">
              <p>
                Embed the <strong>OANDA Currency Converter Widget</strong> in
                your website, and get access to the power of OANDA.
              </p>
              <p>Enjoy these benefits:</p>
              <ul>
                <li> Free to use</li>
                <li> Conversion rates are always up to date</li>
                <li> Instant conversions</li>
                <li>
                  Access over 100 currencies including cryptocurrencies and
                  metals!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Embed Code Section */}
      <div className="mb-5 mt-5 text-center">
        <h4 className="fw-bold">
          Copy the following code into your web page to give your visitors
          access to over 100 currencies!
        </h4>

        <div className="position-relative">
          {/* Code Box */}
          <div className="code-box mt-3">
            <img src="e2.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container embeddable-container2 my-5">
        <h3 className="fw-bold text-center mb-4">Frequently Asked Questions</h3>

        <div className="accordion" id="faqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item border-0 mb-2">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <span className="me-2 text-success fw-bold">+</span>
                Why would I add this to my site?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Adding this widget helps your visitors easily convert currencies
                without leaving your site, making your content more engaging and
                useful.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item border-0 mb-2">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <span className="me-2 text-success fw-bold">+</span>
                What benefits does this offer my users?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Users can get instant access to up-to-date exchange rates across
                100+ currencies including cryptocurrencies and metals,
                improving trust and usability.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item border-0">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed d-flex align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                <span className="me-2 text-success fw-bold">+</span>
                Will this slow down my site?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No, the widget loads asynchronously and won't affect your site's
                speed or performance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Embeddable;
