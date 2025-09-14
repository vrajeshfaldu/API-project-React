import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  const [currencyNames, setCurrencyNames] = useState({});
  const [fromCurrency, setFromCurrency] = useState("eur");
  const [toCurrency, setToCurrency] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [convertedValue, setConvertedValue] = useState(null);
  const [loading, setLoading] = useState(true);

  //  currency names 
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

  //   conversion mate rates currency na
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
      <div className="container home-container1 mt-4">
        <p className="text-uppercase text-secondary fw-2 mt-3 mb-3">OANDA Currency Converter</p>
        <h2 className="converter-title mb-4">
          {amount} {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </h2>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="converter-card">
              <div className="row g-3 align-items-center">
                
                {/* From Currency */}
                <div className="col-md-6">
                  <div className="input-group">
                    <select
                      className="form-select currency-select"
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
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control mt-2 exchange-input"
                  />
                </div>

                {/* To Currency */}
                <div className="col-md-6">
                  <div className="input-group">
                    <select
                      className="form-select currency-select"
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
                  <input
                    type="text"
                    value={convertedValue ?? "..."}
                    className="form-control mt-2 exchange-input"
                    readOnly
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="date"
                    style={{ height: "50px" }}
                    className="form-control"
                    defaultValue="2025-08-31"
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <p className="mb-0 small">
                    Preview interbank rate <strong>+/- 0%</strong>
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <Link to="#" className="text-decoration-none small fw-bold">
                  Hide Advanced Currency Data
                </Link>
                <p className="small text-muted mt-2">
                  OANDA's currency calculator tools use OANDA Rates™, the
                  touchstone FX rates compiled from leading market data
                  contributors.
                </p>
              </div>
            </div>
          </div>
           <div className="col-lg-4">
        <div className="chart-card">
          <div className="chart-placeholder mb-3">
            <img src="graph.jpg" alt="" />
            <span className="text-muted"></span>
          </div>

          <div className="mb-3">
            <button className="period-btn active">30D</button>
            <button className="period-btn">60D</button>
            <button className="period-btn">90D</button>
          </div>

          <table className="table table-sm stats-table">
            <tbody>
            <tr>
              <td>Bid Sell 1 EUR</td>
              <td>Ask Buy 1 EUR</td>
            </tr>
            <tr>
              <td>Min 1.16840</td>
              <td>1.16877</td>
            </tr>
            <tr>
              <td>Avg 1.16840</td>
              <td>1.16877</td>
            </tr>
            <tr>
              <td>Max 1.16840</td>
              <td>1.16877</td>
            </tr>
            </tbody>
          </table>

          <p className="text-small-muted">
            EUR/USD for the 24-hour period ending Saturday, Aug 30, 2025 23:59 UTC <br/>
            These values represent the daily average of the Bid and Ask rates OANDA receives from many data sources.
          </p>
        </div>
      </div>

        </div>
      </div>
       <div className="container home-container2 py-5">
          <div className="row g-4">
           
            <div className="col-lg-4">
              <div className="conversion-card">
                <h5>Convert Euro to US Dollar</h5>
                <div className="d-flex align-items-center mb-3">
                  <img src="https://flagcdn.com/w40/eu.png" className="me-2" alt="EUR Flag"/> <strong>EUR</strong>
                  <span className="mx-2">=</span>
                  <img src="https://flagcdn.com/w40/us.png" className="me-2" alt="USD Flag"/> <strong>USD</strong>
                </div>
                <table className="table rates table-borderless table-sm">
                  <tbody>
                    <tr><td><Link to="#">1 EUR</Link></td><td>1.168400 USD</td></tr>
                    <tr><td><Link to="#">5 EUR</Link></td><td>5.842000 USD</td></tr>
                    <tr><td><Link to="#">10 EUR</Link></td><td>11.684000 USD</td></tr>
                    <tr><td><Link to="#">25 EUR</Link></td><td>29.210000 USD</td></tr>
                    <tr><td><Link to="#">50 EUR</Link></td><td>58.420000 USD</td></tr>
                    <tr><td><Link to="#">100 EUR</Link></td><td>116.840000 USD</td></tr>
                    <tr><td><Link to="#">500 EUR</Link></td><td>584.200000 USD</td></tr>
                    <tr><td><Link to="#">1,000 EUR</Link></td><td>1,168.400000 USD</td></tr>
                    <tr><td><Link to="#">5,000 EUR</Link></td><td>5,842.000000 USD</td></tr>
                    <tr><td><Link to="#">10,000 EUR</Link></td><td>11,684.000000 USD</td></tr>
                    <tr><td><Link to="#">50,000 EUR</Link></td><td>58,420.000000 USD</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
      
           
            <div className="col-lg-4">
              <div className="conversion-card">
                <h5>Convert US Dollar to Euro</h5>
                <div className="d-flex align-items-center mb-3">
                  <img src="https://flagcdn.com/w40/us.png" className="me-2" alt="USD Flag"/> <strong>USD</strong>
                  <span className="mx-2">=</span>
                  <img src="https://flagcdn.com/w40/eu.png" className="me-2" alt="EUR Flag"/> <strong>EUR</strong>
                </div>
                <table className="table rates table-borderless table-sm">
                  <tbody>
                    <tr><td><Link to="#">1 USD</Link></td><td>0.855871 EUR</td></tr>
                    <tr><td><Link to="#">5 USD</Link></td><td>4.279356 EUR</td></tr>
                    <tr><td><Link to="#">10 USD</Link></td><td>8.558713 EUR</td></tr>
                    <tr><td><Link to="#">25 USD</Link></td><td>21.396878 EUR</td></tr>
                    <tr><td><Link to="#">50 USD</Link></td><td>42.79356 EUR</td></tr>
                    <tr><td><Link to="#">100 USD</Link></td><td>85.58713 EUR</td></tr>
                    <tr><td><Link to="#">500 USD</Link></td><td>427.9356 EUR</td></tr>
                    <tr><td><Link to="#">1,000 USD</Link></td><td>855.8713 EUR</td></tr>
                    <tr><td><Link to="#">5,000 USD</Link></td><td>4,279.356 EUR</td></tr>
                    <tr><td><Link to="#">10,000 USD</Link></td><td>8,558.713 EUR</td></tr>
                    <tr><td><Link to="#">50,000 USD</Link></td><td>42,793.56 EUR</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
      
           
            <div className="col-lg-4">
              <div className="api-card">
                <h5>FX data API</h5>
                <p>Our API can be integrated into your ERP, giving you access to accurate, historical FX data and rates.</p>
                <Link to="#" className="fw-semibold">More about our API</Link>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container home-container3 py-5">
          <div className="row g-4">
            
            <div className="col-md-4">
              <div className="card p-3">
                <div className="currency-title">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EUR Flag"/>
                  <h5 className="mb-0">EUR - Euro</h5>
                </div>
                <p className="mt-3">
                  The euro (EUR) is the official currency of 19 of the 27 member states of the European Union. 
                  As of the first quarter of 2021, the European Union, also known as the eurozone, consists of 27 member countries. 
                  The following countries have adopted the euro: Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, 
                  Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, the Netherlands, Portugal, Slovakia, Slovenia and Spain.
                </p>
                <Link to="#" className="text-primary">More Euro info</Link>
              </div>
            </div>
      
           
            <div className="col-md-4">
              <div className="card p-3">
                <div className="currency-title">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USD Flag"/>
                  <h5 className="mb-0">USD - US Dollar</h5>
                </div>
                <p className="mt-3">
                  The US dollar (USD) is the official currency of the United States of America. 
                  It is the world’s most widely traded currency.
                </p>
                <Link to="#" className="text-primary">More US Dollar info</Link>
              </div>
            </div>
      
         
            <div className="col-md-4">
              <div className="card p-3">
                <h5>Historical FX rates</h5>
                <p>
                  Download our data into a CSV file or access it via our cloud-based converter.
                </p>
                <Link to="#" className="text-primary">See our converter</Link>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container home-container4 py-5">
          <div className="row">
          
            <div className="col-md-6 mb-4">
              <h4 className="mb-3">Live Rates</h4>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
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
                      <td>1.1715³</td>
                      <td>1.1720⁷</td>
                    </tr>
                    <tr>
                      <td>USD/EUR</td>
                      <td>0.8531⁹</td>
                      <td>0.8535⁸</td>
                    </tr>
                    <tr>
                      <td>USD/JPY</td>
                      <td>147.38²</td>
                      <td>147.45⁴</td>
                    </tr>
                    <tr>
                      <td>JPY/USD</td>
                      <td>0.0067⁸</td>
                      <td>0.0067⁹</td>
                    </tr>
                    <tr>
                      <td>XAU/USD</td>
                      <td>3586.07⁰</td>
                      <td>3587.02⁰</td>
                    </tr>
                    <tr>
                      <td>USD/XAU</td>
                      <td>0.0002⁸</td>
                      <td>0.0002⁸</td>
                    </tr>
                    <tr>
                      <td>BTC/USD</td>
                      <td>111591.5</td>
                      <td>111637.3</td>
                    </tr>
                    <tr>
                      <td>USD/BTC</td>
                      <td>0.00001</td>
                      <td>0.00001</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link to="#" className="text-primary">View More</Link>
            </div>
      
      
            <div className="col-md-6">
              <h4 className="mb-3">Popular conversions</h4>
              <div className="row">
                <div className="col-md-6">
                  <button className="conversion-btn">
                    <span>1 EUR to USD</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to JPY</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to GBP</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to AUD</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to CAD</span> <span>›</span>
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="conversion-btn">
                    <span>1 EUR to CHF</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to CNY</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to HKD</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to NZD</span> <span>›</span>
                  </button>
                  <button className="conversion-btn">
                    <span>1 EUR to SEK</span> <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
      
      <div className="container home-container5 py-5 find-currencies">
        <h4 className="fw-bold mb-4">Find other currencies</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
          <div className="col">
            <ul className="list-unstyled">
              <li><img src="https://flagcdn.com/w20/ae.png" alt="AED"/> <strong>AED</strong> <Link to="#">Utd. Arab Emir. Dirham</Link></li>
              <li><img src="https://flagcdn.com/w20/ch.png" alt="CHF"/> <strong>CHF</strong> <Link to="#">Swiss Franc</Link></li>
              <li><img src="https://flagcdn.com/w20/gb.png" alt="GBP"/> <strong>GBP</strong> <Link to="#">British Pound</Link></li>
              <li><img src="https://flagcdn.com/w20/jp.png" alt="JPY"/> <strong>JPY</strong> <Link to="#">Japanese Yen</Link></li>
              <li><img src="https://flagcdn.com/w20/ph.png" alt="PHP"/> <strong>PHP</strong> <Link to="#">Philippine Peso</Link></li>
              <li><img src="https://flagcdn.com/w20/sg.png" alt="SGD"/> <strong>SGD</strong> <Link to="#">Singapore Dollar</Link></li>
              <li><img src="https://flagcdn.com/w20/za.png" alt="ZAR"/> <strong>ZAR</strong> <Link to="#">South African Rand</Link></li>
            </ul>
          </div>
      
          
          <div className="col">
            <ul className="list-unstyled">
              <li><img src="https://flagcdn.com/w20/au.png" alt="AUD"/> <strong>AUD</strong> <Link to="#">Australian Dollar</Link></li>
              <li><img src="https://flagcdn.com/w20/cn.png" alt="CNY"/> <strong>CNY</strong> <Link to="#">Chinese Yuan Renminbi</Link></li>
              <li><img src="https://flagcdn.com/w20/hk.png" alt="HKD"/> <strong>HKD</strong> <Link to="#">Hong Kong Dollar</Link></li>
              <li><img src="https://flagcdn.com/w20/mx.png" alt="MXN"/> <strong>MXN</strong> <Link to="#">Mexican Peso</Link></li>
              <li><img src="https://flagcdn.com/w20/sa.png" alt="SAR"/> <strong>SAR</strong> <Link to="#">Saudi Riyal</Link></li>
              <li><img src="https://flagcdn.com/w20/th.png" alt="THB"/> <strong>THB</strong> <Link to="#">Thai Baht</Link></li>
            </ul>
          </div>
      
         
          <div className="col">
            <ul className="list-unstyled">
              <li><img src="https://flagcdn.com/w20/br.png" alt="BRL"/> <strong>BRL</strong> <Link to="#">Brazilian Real</Link></li>
              <li><img src="https://flagcdn.com/w20/eu.png" alt="EUR"/> <strong>EUR</strong> <Link to="#">Euro</Link></li>
              <li><img src="https://flagcdn.com/w20/in.png" alt="INR"/> <strong>INR</strong> <Link to="#">Indian Rupee</Link></li>
              <li><img src="https://flagcdn.com/w20/my.png" alt="MYR"/> <strong>MYR</strong> <Link to="#">Malaysian Ringgit</Link></li>
              <li><img src="https://flagcdn.com/w20/se.png" alt="SEK"/> <strong>SEK</strong> <Link to="#">Swedish Krona</Link></li>
              <li><img src="https://flagcdn.com/w20/us.png" alt="USD"/> <strong>USD</strong> <Link to="#">US Dollar</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      
       <div className="download-section">
          <div className="download-box">
            <h6>Convert on the go</h6>
            <hr className='home-line'/>
            <h4>Download the OANDA Currency Converter app</h4>
            <div className="store-btn">
              <Link to="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"/></Link>
              <Link to="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"/></Link>
            </div>
          </div>
        </div>
      
       

      
    </>
  )
}

export default Home
