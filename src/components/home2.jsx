import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function Home() {
  const [fromCurrency, setFromCurrency] = useState("gbp");
  const [toCurrency, setToCurrency] = useState("inr");
  const [currencies, setCurrencies] = useState({})
  const apiUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(0);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => { setCurrencies(res) })
  }, []);

  useEffect(() => {    
    if (fromCurrency || toCurrency) {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then((res) => res.json())
        .then((res) => {
          const newRate = res[fromCurrency][toCurrency];
          setConverted((amount * newRate));
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConverted(amount)
    setAmount(converted)
  }

  return (
    <>
      <div className="section">
        <div className="container my-1">
          <h6 className="text-uppercase text-secondary fw-bold mt-5">OANDA Currency Converter</h6>
          <h2 className="fw-bold" style={{ marginTop: "25px", fontSize: "40px", color: "black" }} id="MyH1">{fromCurrency} to {toCurrency}</h2>
          <div className="container">
            <div className="row g-4 align-items-stretch h-100">
              <div className="col-lg-8 col-md-12">
                <div className="converter-box ">
                  <div className="row g-3 col-md-12 h-100 ">
                    <div className="col-md-5">
                      <label className="form-label" style={{ fontSize: "xxLarge", marginTop: "25px" }}>From</label>
                      {/* <div className="dropdown w-100">
                        <button className="btn btn-outline-secondary dropdown-toggle w-100 d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                          <img src="https://flagcdn.com/w20/gb.png" alt="GBP" />{" "}GBP - British Pound</button>
                        <ul className="dropdown-menu w-100">
                          <li>
                            <Link className="dropdown-item d-flex align-items-center" to="#" >
                              <img src="https://flagcdn.com/w20/gb.png" alt="GBP" />{" "}GBP - British Pound </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item d-flex align-items-center" to="#" >
                              <img src="https://flagcdn.com/w20/us.png" alt="USD" />{" "}USD - US Dollar
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item d-flex align-items-center" to="#" >
                              <img src="https://flagcdn.com/w20/in.png" alt="INR" />{" "}INR - Indian Rupee
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item d-flex align-items-center" to="#" >
                              <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  marginRight: "8px",
                                }} />{" "}BTC - Bitcoin
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      <button className="btn btn-outline-secondary dropdown-toggle w-100 d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                        {fromCurrency}
                      </button>
                      <ul className="dropdown-menu header-drop w-100">
                        {Object.entries(currencies).map(([code, name], index) => (
                          <li key={index}>
                            <button
                              className="dropdown-item d-flex align-items-center"
                              onClick={() => setFromCurrency(code)}
                            >
                              {code} - {name}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <input 
                      type="number" 
                      className="form-control mt-2" 
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)}
                      />
                      <div className="mt-2 d-flex gap-1">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => setFromCurrency('eur')}>EUR</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setFromCurrency('gbp-British Pound') }}>GBP</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setFromCurrency('inr-Indian Rupee') }}>INR</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setFromCurrency('btc-Bitcoin') }}>BTC</button>
                      </div>
                    </div>
                    <div className="col-md-2 text-center">
                      <button className="exchange-arrow btn btn-success"
                        style={{
                          marginTop: "72px",
                          fontSize: "25px",
                        }}
                        onClick={()=>{swap()}}
                      >⇄</button>
                    </div>
                    <div className="col-md-5 h-100">
                      <label className="form-label" style={{ fontSize: "xLarge", marginTop: "25px" }}>To</label>
                      {/* <div className="dropdown w-100">
                        <button className="btn btn-outline-secondary dropdown-toggle w-100 d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                          <img src="https://flagcdn.com/w20/in.png" alt="INR" />{" "}INR - Indian Rupee</button>
                        <ul className="dropdown-menu w-100">
                          <li>
                            <Link className="dropdown-item d-flex align-items-center" to="#" >
                              <img src="https://flagcdn.com/w20/in.png" alt="INR" />{" "}INR - Indian Rupee
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item d-flex align-items-center"
                              to="#"
                            >
                              <img
                                src="https://flagcdn.com/w20/us.png"
                                alt="USD"
                              />{" "}
                              USD - US Dollar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item d-flex align-items-center"
                              to="#"
                            >
                              <img
                                src="https://flagcdn.com/w20/gb.png"
                                alt="GBP"
                              />{" "}
                              GBP - British Pound
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item d-flex align-items-center"
                              to="#"
                            >
                              <img
                                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                                alt="ETH"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  marginRight: "8px",
                                }}
                              />{" "}
                              ETH - Ethereum
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      <button className="btn btn-outline-secondary dropdown-toggle w-100 d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                        {toCurrency}
                      </button>
                      <ul className="dropdown-menu header-drop w-100">
                        {Object.entries(currencies).map(([code, name], index) => (
                          <li key={index}>
                            <button
                              className="dropdown-item d-flex align-items-center"
                              onClick={() => setToCurrency(code)}
                            >
                              {code} - {name}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <input
                        type="number"
                        className="form-control mt-2"
                        value={converted}
                        readOnly
                      />
                      <div className="mt-2 d-flex gap-1">
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setToCurrency('eur-Euro') }}>
                          EUR
                        </button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setToCurrency('gbp-British Pound') }}>
                          GBP
                        </button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setToCurrency('inr-Indian Rupee') }}>
                          INR
                        </button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={() => { setToCurrency('btc-Bitcoin') }}>
                          BTC
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5 align-items-center">
                    <div className="col-md-6 d-flex align-items-center gap-2">
                      <label className="me-2">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        defaultValue="2025-08-18"
                        style={{ width: "175px" }}
                      />
                    </div>

                    <div className="col-md-6 d-flex align-items-center gap-2">
                      <label className="me-2">Preview interbank rate</label>
                      <select className="form-select w-auto">
                        <option>+/- 1%</option>
                        <option>+/- 2%</option>
                        <option>+/- 3%</option>
                      </select>
                      <i
                        className="bi bi-question-circle"
                        style={{ fontSize: "18px", cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <Link to="#" className="btn btn-link">
                      Hide Advanced Currency Data
                    </Link>
                    <button className="btn btn-outline-secondary">Print</button>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-12 my-5"
                style={{ height: "440px" }}
              >
                <div className="card card-custom-header p-4 h-100">
                  <div className="graph-box mb-2"></div>

                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <button className="btn btn-outline-dark btn-sm">30D</button>
                    <button className="btn btn-outline-dark btn-sm">60D</button>
                    <button className="btn btn-outline-dark btn-sm">90D</button>
                  </div>

                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>
                          Bid
                          <br />
                          <small>Sell 1 EUR</small>
                        </th>
                        <th>
                          Ask
                          <br />
                          <small>Buy 1 EUR</small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Min</td>
                        <td>1.16557</td>
                        <td>1.16571</td>
                      </tr>
                      <tr>
                        <td>Avg</td>
                        <td>1.16803</td>
                        <td>1.16819</td>
                      </tr>
                      <tr>
                        <td>Max</td>
                        <td>1.17097</td>
                        <td>1.17114</td>
                      </tr>
                    </tbody>
                  </table>

                  <p style={{ fontSize: "10px" }}>
                    EUR/USD for the 24Hour period ending Monday, Aug 18, 2025
                    23:59 UTC
                    <br />
                    These values represent the daily average of the Bid and Ask
                    rates OANDA receives from many data sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 p-2">
        <div className="row">
          {/* <!-- First Currency Card --> */}
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="card card-custom-header py-4 h-100 p-4">
              <h4>Convert US Dollar to Indian Rupee</h4>

              {/* <!-- Flag + Currency Codes --> */}
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <div>
                  <img src="https://flagcdn.com/w20/us.png" alt="USD" />{" "}
                  <strong>USD</strong>
                </div>

                <div>
                  <img src="https://flagcdn.com/w20/in.png" alt="INR" />{" "}
                  <strong>INR</strong>
                </div>

              </div>

              {/* <!-- Conversion List --> */}
              <div className="currency-row">
                <Link to="#">1 USD</Link> <span>87.37000 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">5 USD</Link> <span>436.8500 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">10 USD</Link> <span>873.7000 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">25 USD</Link> <span>2,184.250 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">50 USD</Link> <span>4,368.500 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">100 USD</Link> <span>8,737.000 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">500 USD</Link> <span>43,685.00 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">1,000 USD</Link> <span>87,370.00 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">5,000 USD</Link> <span>436,850.0 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">10,000 USD</Link> <span>873,700.0 INR</span>
              </div>
              <div className="currency-row">
                <Link to="#">50,000 USD</Link> <span>4,368,500 INR</span>
              </div>
            </div>
          </div>

          {/* <!-- Second Currency Card --> */}
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="card card-custom-header p-4 h-100">
              <h4>Convert Indian Rupee to US Dollar</h4>

              {/* <!-- Flag + Currency Codes --> */}
              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <div>
                  <img src="https://flagcdn.com/w20/in.png" alt="INR" />{" "}
                  <strong>INR</strong>
                </div>

                <div>
                  <img src="https://flagcdn.com/w20/us.png" alt="USD" />{" "}
                  <strong>USD</strong>
                </div>

              </div>

              {/* <!-- Conversion List --> */}
              <div className="currency-row">
                <Link to="#">1 INR</Link> <span>0.011446 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">5 INR</Link> <span>0.057228 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">10 INR</Link> <span>0.114456 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">25 INR</Link> <span>0.286139 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">50 INR</Link> <span>0.572279 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">100 INR</Link> <span>1.144558 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">500 INR</Link> <span>5.722788 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">1,000 INR</Link> <span>11.44558 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">5,000 INR</Link> <span>57.22788 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">10,000 INR</Link> <span>114.4558 USD</span>
              </div>
              <div className="currency-row">
                <Link to="#">50,000 INR</Link> <span>572.2788 USD</span>
              </div>
            </div>
          </div>

          {/* <!-- Third Currency Card --> */}
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="card card-custom-header p-4 mb-3">
              <h4>FX Data API</h4>
              <p>
                Our API can be integrated into your ERP, <br />
                giving you access to accurate, historical FX data
                <br /> and rates.
              </p>
              <Link to="#">More About API</Link>
            </div>
            {/* <!-- Fourth Card --> */}
            <div className="card card-custom-header p-4">
              <h4>Historical FX Data API</h4>
              <p>
                Download our data into a CSV file or access it via our
                cloudBased converter.
              </p>
              <Link to="#">See Your Converter</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4 p-3">
          {/* <!-- Euro Card --> */}
          <div className="col-md-6 ">
            <div className="card shadow-sm border-0 h-100">
              <div
                className="card-body bg-light"
                style={{ borderRadius: "25px" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                    width="28"
                    className="me-2"
                  />
                  <h5 className="card-title fw-bold mb-0">EUR - Euro</h5>
                </div>
                <p className="card-text">
                  The euro (EUR) is the official currency of 19 of the 27 member
                  states of the European Union. As of the first quarter of 2021,
                  the European Union, also known as the eurozone, consists of 27
                  member countries. The following countries have adopted the
                  euro: "Austria", Belgium, Cyprus, Estonia, Finland, France,
                  Germany, Greece, Ireland, Italy, Latvia, Lithuania,
                  Luxembourg, Malta, the Netherlands, Portugal, Slovakia,
                  Slovenia and Spain.
                </p>
                <Link to="#" className="text-primary">
                  More Euro info
                </Link>
              </div>
            </div>
          </div>
          {/* 
    <!-- USD Card --> */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div
                className="card-bodycard-body m-3"
                style={{ borderRadius: "25px" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    width="28"
                    className="me-2"
                  />
                  <h5 className="card-title fw-bold mb-0">USD - US Dollar</h5>
                </div>
                <p className="card-text">
                  The US dollar (USD) is the official currency of the United
                  States of America. It is the world’s most widely traded
                  currency.
                </p>
                <Link to="#" className="text-primary">
                  More US Dollar info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          {/* <!-- Live Rates --> */}
          <div className="col-md-6">
            <h4>Live Rates</h4>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Bid</th>
                  <th>Ask</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EUR/USD</td>
                  <td className="up">1.16758</td>
                  <td className="up">1.16772</td>
                </tr>
                <tr>
                  <td>USD/EUR</td>
                  <td className="down">0.85637</td>
                  <td className="down">0.85647</td>
                </tr>
                <tr>
                  <td>USD/JPY</td>
                  <td className="up">147.808</td>
                  <td className="up">147.822</td>
                </tr>
                <tr>
                  <td>JPY/USD</td>
                  <td className="down">0.00676</td>
                  <td className="down">0.00677</td>
                </tr>
                <tr>
                  <td>XAU/USD</td>
                  <td className="down">3335.330</td>
                  <td className="down">3335.890</td>
                </tr>
                <tr>
                  <td>USD/XAU</td>
                  <td className="up">0.00030</td>
                  <td className="up">0.00030</td>
                </tr>
                <tr>
                  <td>BTC/USD</td>
                  <td className="neutral">115521.8</td>
                  <td className="neutral">115573.3</td>
                </tr>
                <tr>
                  <td>USD/BTC</td>
                  <td className="neutral">0.00001</td>
                  <td className="neutral">0.00001</td>
                </tr>
              </tbody>
            </table>
            <Link to="#" className="text-primary">
              View More
            </Link>
          </div>

          {/* <!-- Popular Conversions --> */}
          <div className="col-md-6">
            <h4>Popular conversions</h4>
            <div className="row row-cols-2 g-2">
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to USD
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to CHF
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to JPY
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to CNY
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to GBP
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to HKD
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to AUD
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to NZD
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to CAD
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-secondary w-100">
                  1 EUR to SEK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h3 className="fw-bold mb-4">Find other currencies</h3>
        <div className="row">
          <div className="col-md-4">
            <p>
              <strong>AED</strong> <Link to="#">Utd. Arab Emir. Dirham</Link>
            </p>
            <p>
              <strong>CHF</strong> <Link to="#">Swiss Franc</Link>
            </p>
            <p>
              <strong>GBP</strong> <Link to="#">British Pound</Link>
            </p>
            <p>
              <strong>JPY</strong> <Link to="#">Japanese Yen</Link>
            </p>
            <p>
              <strong>PHP</strong> <Link to="#">Philippine Peso</Link>
            </p>
            <p>
              <strong>SGD</strong> <Link to="#">Singapore Dollar</Link>
            </p>
            <p>
              <strong>ZAR</strong> <Link to="#">South African Rand</Link>
            </p>
          </div>

          <div className="col-md-4">
            <p>
              <strong>AUD</strong> <Link to="#">Australian Dollar</Link>
            </p>
            <p>
              <strong>CNY</strong> <Link to="#">Chinese Yuan Renminbi</Link>
            </p>
            <p>
              <strong>HKD</strong> <Link to="#">Hong Kong Dollar</Link>
            </p>
            <p>
              <strong>MXN</strong> <Link to="#">Mexican Peso</Link>
            </p>
            <p>
              <strong>SAR</strong> <Link to="#">Saudi Riyal</Link>
            </p>
            <p>
              <strong>THB</strong> <Link to="#">Thai Baht</Link>
            </p>
          </div>

          <div className="col-md-4">
            <p>
              <strong>BRL</strong> <Link to="#">Brazilian Real</Link>
            </p>
            <p>
              <strong>EUR</strong> <Link to="#">Euro</Link>
            </p>
            <p>
              <strong>INR</strong> <Link to="#">Indian Rupee</Link>
            </p>
            <p>
              <strong>MYR</strong> <Link to="#">Malaysian Ringgit</Link>
            </p>
            <p>
              <strong>SEK</strong> <Link to="#">Swedish Krona</Link>
            </p>
            <p>
              <strong>USD</strong> <Link to="#">US Dollar</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body" style={{ marginBottom: "45px" }}>
          <p style={{ color: "#00d084" }}>
            ------------------------------------------------
          </p>
          <h6 className="text-uppercase text-secondary fw-bold mt-3">
            Convert on THE GO
          </h6>

          <h5 className="card-title">
            Download the OANDA Currency Converter app
          </h5>
          <p className="card-text">
            With supporting text below as a natural leadIn to additional
            content.
          </p>
          <div className="social-icons col-lg-2">
            <div
              className="app-buttons"
              style={{ display: "flex", gap: "15px", marginLeft: "600px" }}
            >
              {/* Google Play Badge */}
              <Link
                to="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </Link>

              {/* Apple App Store Badge */}
              <Link
                to="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=200x66"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </>
);
}
