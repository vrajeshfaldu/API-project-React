import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Api() {
    return (
    <>
            <div className="container api-container1 my-5">
                <div className="row align-items-center">

                    {/* Left Side  */}
                    <div className="col-md-6">
                        <h1 className="mb-4">Flexible API pricing plans</h1>
                        <p>
                            Our API offers seamless integration and implementation support, which means you
                            can leverage solutions efficiently and effectively for your business. Not sure which API
                            plan to choose from? Contact our team for more information and options to suit your needs.
                        </p>
                        <button className="btn btn-success mt-3 px-4 py-2 rounded">
                            Contact Today
                        </button>
                    </div>

                    {/* Right Side  */}
                    <div className="col-md-6 text-center">
                        <img src="Api1.jpg" className="img-fluid" style={{ maxWidth: "550px", height:"450px" }} alt="API Image" />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card card-custom p-4 h-100">
                        <h4>Standard</h4>

                        <p><span >✔</span>100,000 quotes per month</p>
                        <p><span >✔</span>Daily average rate: bid, ask, and mid-point</p>
                        <p><span >✔</span>ECB rates</p>

                    </div>
                </div>

                {/* Second Currency Card  */}
                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card card-custom p-4 h-100">
                        <h4>Aedvanced</h4>
                        <p><span >✔</span>Unlimited quotes</p>
                        <p><span >✔</span>Daily average rate: bid, ask, and midpoint</p>
                        <p><span >✔</span>ECB rates</p>
                        <p><span >✔</span>100+ national banks</p>
                        <p><span >✔</span>2 HCC seats</p>
                        <p><span >✔</span>Period averages</p>
                        <p><span >✔</span>Interbank %</p>
                        <p><span >✔</span>Open/Close</p>
                        <p><span >✔</span>Custom reporting period</p>
                    </div>
                </div>

                {/* Third Currency Card */}
                <div className="col-lg-4 col-md-4 mb-4">
                    <div className="card card-custom p-4 mb-3">
                        <h4>Advanced + Crypto</h4>
                        <p><span >✔</span>Unlimited quotes</p>
                        <p><span >✔</span>Daily average rate: bid, ask, and midpoint</p>
                        <p><span >✔</span>ECB rates</p>
                        <p><span style={{ color: "#00d084" }}>✔</span>100+ national banks</p>
                        <p><span >✔</span>2 HCC seats</p>
                        <p><span >✔</span>Period averages</p>
                        <p><span >✔</span>Interbank %</p>
                        <p><span >✔</span>Open/Close</p>
                        <p><span >✔</span>3-5 second spot</p>
                        <p><span style={{ color: "#00d084" }}>✔</span>Custom reporting period</p>
                        <p><span >✔</span>Forward rates</p>
                        <p><span >✔</span>Crypto currencies</p>


                    </div>
                </div>
            </div>

            <button className="btn btn-success mt-3 px-4 py-2 rounded" style={{ width: "400px", height: "55px", marginLeft: "540px" }}>
                Can't Find what you're looking for?
            </button>

            <div className="row">
                <div className="col-md-6">
                    <img src="Api2.jpg" style={{ marginLeft: "155px" }} />
                </div>
                <div className="col-md-4 mt-5 ">
                    <h1 style={{ marginTop: "75px" }}>Tailored solutions to meet your business needs</h1>
                    <p>At OANDA, we understand that each business is unique. So, if you share your specific
                        requirements with us, we'll design a customized plan that aligns with your business goals.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="icon1.jpg" style={{ marginLeft: " 190px" }} />
                    <h4 style={{ marginLeft: " 190px" }}>Comprehensive rate types</h4>
                    <p className="three" >Our exchange rates API offers one of the largest datasets available, tailored for businesses like yours. Access rates for over 200 currencies and precious metals, 38,000+ currency pairs, and daily averages sourced from 100+ central banks to enhance your decision-making.</p>
                </div>
                <div className="col-md-4">
                    <img src="icon2.jpg" style={{ marginLeft: "190px" }} />
                    <h4 style={{ marginLeft: "190px" }}>OANDA FX order book</h4>

                    <p className="three" >The OANDA FX order book feature delivers real-time data points, giving you accurate and timely information. This is essential if your business needs to monitor market conditions.</p>
                </div>

                <div className="col-md-4">
                    <img src="icon3.jpg" style={{ marginLeft: "190px" }} />
                    <h4 style={{ marginLeft: "190px" }}>Real-time rates</h4>
                    <p className="three" >Stay informed up to the second with our real time rates that are directly integrated into your computing environment. OANDA’s rates update every five seconds, which means your business can operate with the most current market data.</p>
                </div>
            </div>
            <div className="quetion text-center my-5">
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="container api-container2 py-5">
                <div className="accordion" id="faqAccordion">
                    {/* Question 1  */}
                    <div className="accordion-item border-0">
                        <div
                            className="d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#answer1"
                            aria-expanded="false"
                            aria-controls="answer1"
                        >
                            <h2 className="question-title">
                                Do you offer a free trial account?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                        <div
                            id="answer1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="answer-text">
                                You can start testing the OANDA API in minutes. Complete the form to receive your free API key to access the OANDA Rates. Your API key is available for 7 days and allows you to access unlimited quotes during the period.
                            </div>
                        </div>
                        <hr />
                    </div>

                    {/* Question 2  */}
                    <div className="accordion-item border-0">
                        <div
                            className="d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#answer2"
                            aria-expanded="false"
                            aria-controls="answer2"
                        >
                            <h2 className="question-title">
                                How can OANDA help me integrate Exchange Rates data into my system and software?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                        <div
                            id="answer2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="answer-text">
                                We have partnered with many of the major ERP systems including Oracle, Microsoft, and SAP, as well as financial, treasury, and accounting systems. Our partners help us integrate OANDA Exchange Rates data into the ERP system and other software. For more information, please contact our FX integration specialists at fxdata@oanda.com. You can find the Exchange Rates API documentation here.
                            </div>
                        </div>
                        <hr />
                    </div>

                    {/* Question 3  */}
                    <div className="accordion-item border-0">
                        <div
                            className="d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse"
                            data-bs-target="#answer3"
                            aria-expanded="false"
                            aria-controls="answer3"
                        >
                            <h2 className="question-title">
                                What is an API key and where can I find it?
                                <br/><br/>
                                </h2>
                                    <div className="plus-icon">+</div>
                                </div>
                                <div
                                    id="answer3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="answer-text">
                                        Our FX specialists are available by phone on +1(800)826-8164 (toll-free) or +1(212)390-8735 (press 1 for exchange rates data feed, then 1 for sales). You can also contact us by email at fxdata@oanda.com.
                                    </div>
                                </div>
                                <hr />
                        </div>
                    

                         {/* Question 4  */}
                        <div className="accordion-item border-0">
                            <div
                                className="d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse"
                                data-bs-target="#answer4"
                                aria-expanded="false"
                                aria-controls="answer4"
                            >
                                <h2 className="question-title">
                                    Can't find what you're looking for?
                                    <br/><br/>
                                    </h2>
                                        <div className="plus-icon">+</div>
                                    </div>
                                    <div
                                        id="answer4"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="answer-text">
                                            See our full list of frequently asked questions or contact us to discuss your Exchange Rates API needs.
                                        </div>
                                    </div>
                                    <hr />
                            </div>

                        </div>
                        </div>

     </>
    )
}

 export default Api