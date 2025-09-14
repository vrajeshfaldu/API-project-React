import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Corporate() {
    return (
        <>
            {/* Section 1 */}
            <div
                className="section corporate-section1"
                style={{ backgroundColor: "#2b1e4e", height: "500px", width: "100%", marginTop: "45px" }}
            >
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ marginTop: "150px", marginLeft: "90px", color: "white" }}>
                            Streamline enterprise <br /> global payments performance
                        </h1>
                        <p style={{ marginTop: "40px", marginLeft: "90px", color: "white" }}>
                            Get secure, fast, cost-efficient FX solutions for the enterprise.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="c1.jpg" style={{ height: "450px" }} alt="Corporate" />
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="container corporate-container1">
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
                            <input type="checkbox" className="form-check-input" id="consent" required />
                            <label className="form-check-label" htmlFor="consent">
                                By submitting this form, I consent that my data will be shared and processed for the purpose of
                                Fairway Currencies Ltd engaging with me regarding my potential client relationship, including initiating
                                and completing the onboarding process. I understand that my data will be handled according to applicable
                                data protection terms and policies of Fairway Currencies.
                            </label>
                        </div>

                        <button type="submit" className="btn btn-submit">Submit</button>
                    </form>
                </div>
            </div>

            {/* Section with image + text */}
            <div className="row">
                <div className="col-md-6">
                    <img src="c2.jpg" style={{ marginTop: "100px", marginLeft: "125px" }} alt="Corporate" />
                </div>
                <div className="col-md-6">
                    <h5 style={{ marginLeft: "175px", marginTop: "150px", fontSize: "30px" }}>
                        OANDA corporate FX payments<br /> enables businesses like yours to:
                    </h5>
                    <p style={{ marginLeft: "190px", marginTop: "25px" }}>Streamline international transactions,</p>
                    <p style={{ marginLeft: "190px" }}>Manage multi-currency accounts,</p>
                    <p style={{ marginLeft: "190px" }}>And help mitigate foreign exchange risk.</p>
                </div>
            </div>

            {/* Features */}
            <div className="container corporate-container2 text-center my-5">
                <div className="row g-4" style={{ marginTop: "85px" }}>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <img src="c3.jpg" alt="Efficiency" />
                        </div>
                        <h5 className="fw-bold" style={{ marginTop: "35px" }}>Efficiency</h5>
                        <p>Enjoy fast, reliable global money transfers that enhance your business operations.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <img src="c4.jpg" alt="Risk" />
                        </div>
                        <h5 className="fw-bold" style={{ marginTop: "35px" }}>Risk Management</h5>
                        <p>Implement effective hedging strategies to protect against currency risk and market volatility.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <img src="c5.jpg" alt="Flexibility" />
                        </div>
                        <h5 className="fw-bold" style={{ marginTop: "35px" }}>Flexibility</h5>
                        <p>Seamlessly manage international invoices, payments, and multicurrency balances.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="feature-icon">
                            <img src="c6.jpg" alt="Security" />
                        </div>
                        <h5 className="fw-bold" style={{ marginTop: "35px" }}>Security</h5>
                        <p>All transactions are secure, and your funds are protected through FCA regulated credit institutions.</p>
                    </div>
                </div>
            </div>

            {/* Purple Section */}
            <div className="purple-section">
                <div className="containe corporate-container3">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="purple-text mb-4">
                                Delivering unrivalled global multicurrency transfer performance with Fairway Currencies
                            </h2>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-check2 text-success me-2"></i>
                                    Partnering with Fairway Currencies allows us to provide you with competitive deliverable FX services.
                                </li>
                                <li>
                                    <i className="bi bi-check2 text-success me-2"></i>
                                    Fairway Currencies is renowned for its reliable and transparent currency exchange services, ensuring
                                    your transactions are handled with the utmost professionalism and security.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src="c7.jpg" className="img-fluid" alt="Fairway" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="section embeddable-section2" style={{ backgroundColor: "#2b1c44", height: "250px", width: "100%" }}>
                <h1 style={{ paddingTop: "45px", textAlign: "center", color: "#00d084" }}>
                    Go effortlessly global with OANDA FX payments
                </h1>
                <p style={{ paddingTop: "35px", textAlign: "center", color: "white" }}>
                    Optimize your global money transfer performance across borders and currencies
                </p>
                <button
                    style={{
                        backgroundColor: "#00b36b",
                        marginLeft: "720px",
                        borderRadius: "10px",
                        height: "45px",
                        width: "125px",
                        marginTop: "15px",
                    }}
                >
                    Get Started
                </button>
            </div>

            {/* FAQ Section */}
            <div className="quetion text-center my-5">
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="container corporate-container4 py-5">
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
                                What benefits do OANDA Corporate FX Payments offer?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                        <div id="answer1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="answer-text">
                                Our service offers efficiency, risk management, flexibility, and security for your international
                                financial transactions.
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
                                How does OANDA help manage forex risks for businesses?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                        <div id="answer2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="answer-text">
                                We use advanced hedging strategies to mitigate the impact of foreign exchange fluctuations on your
                                business.
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
                                Can I hold multi-currency balances with OANDA Corporate FX Payments?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                        <div id="answer3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="answer-text">
                                The OANDA end-to-end FX payments service enables you to manage and hold balances in multiple currencies
                                seamlessly.
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
                                Is OANDA's corporate FX service regulated?
                                <br /><br />
                            </h2>
                            <div className="plus-icon">+</div>
                        </div>
                    </div>
                     {/* Question 5  */}
            <div className="accordion-item border-0" style={{marginTop:"20px"}}>
                <div className="d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
                    data-bs-target="#answer5" aria-expanded="false" aria-controls="answer5">
                    <h2 className="question-title">
                        How do I get started with OANDA Corporate FX Payments?
                        <br/><br/>
                    </h2>
                    <div className="plus-icon">+</div>
                </div>
                <div id="answer5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="answer-text">
                        Contact Us today to discuss how our corporate foreign exchange solutions can benefit your
                        business.
                    </div>
                </div>
                <hr/>
            </div>

                </div>
            </div>
        </>
    )
}

export default Corporate