import React from "react";
import { Link } from "react-router-dom";

function Ourblog() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Section Title */}
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "10px",
                position: "relative",
                display: "inline-block",
              }}
            >
              FX data services
              <span
                style={{
                  content: "''",
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#16a34a",
                  display: "block",
                }}
              ></span>
            </h4>

            <div className="row mt-4">
              {/* Left: Main Article */}
              <div className="col-md-7">
                <div>
                  <img
                    src="our1.png"
                    alt="Main FX Data Image"
                    style={{ borderRadius: "8px", width: "100%", height: "auto" }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      color: "gray",
                      marginTop: "10px",
                    }}
                  >
                    <i className="bi bi-clock"></i> 18 days ago by{" "}
                    <Link
                      to="#"
                      style={{
                        fontWeight: "600",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      OANDA
                    </Link>
                  </p>
                  <h5 style={{ fontWeight: "700" }}>
                    Learn how managing FX data just got easier with OANDA and
                    FXLoader
                  </h5>
                  <p style={{ color: "#666" }}>
                    Tackle FX volatility with real-time data and zero manual
                    input
                  </p>
                </div>
              </div>

              {/* Right: Side Articles */}
              <div className="col-md-5">
                <div className="d-flex mb-4">
                  <img
                    src="our2.png"
                    alt="Article 1"
                    style={{
                      borderRadius: "6px",
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "12px",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", color: "gray", margin: "0" }}>
                      <i className="bi bi-clock"></i> April 17, 2025 by{" "}
                      <Link
                        to="#"
                        style={{
                          fontWeight: "600",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        OANDA
                      </Link>
                    </p>
                    <h6
                      style={{
                        fontWeight: "600",
                        marginTop: "5px",
                        fontSize: "15px",
                      }}
                    >
                      Automating FX currency conversion in Oracle ERP with...
                    </h6>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        margin: "0",
                      }}
                    >
                      Discover how FXLoader and OANDA transformed FX currenc...
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <img
                    src="our3.png"
                    alt="Article 2"
                    style={{
                      borderRadius: "6px",
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "12px",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", color: "gray", margin: "0" }}>
                      <i className="bi bi-clock"></i> December 05, 2024 by{" "}
                      <Link
                        to="#"
                        style={{
                          fontWeight: "600",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        OANDA
                      </Link>
                    </p>
                    <h6
                      style={{
                        fontWeight: "600",
                        marginTop: "5px",
                        fontSize: "15px",
                      }}
                    >
                      3 Reasons FX Data Is Vital to Optimize ERP Performance
                    </h6>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        margin: "0",
                      }}
                    >
                      See how precise FX data enhances ERP efficiency and...
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <img
                    src="our4.png"
                    alt="Article 3"
                    style={{
                      borderRadius: "6px",
                      width: "100px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "12px",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", color: "gray", margin: "0" }}>
                      <i className="bi bi-clock"></i> December 05, 2024 by{" "}
                      <Link
                        to="#"
                        style={{
                          fontWeight: "600",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        OANDA
                      </Link>
                    </p>
                    <h6
                      style={{
                        fontWeight: "600",
                        marginTop: "5px",
                        fontSize: "15px",
                      }}
                    >
                      Maximize Accounting with Reliable Foreign Exchange Data...
                    </h6>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        margin: "0",
                      }}
                    >
                      Discover how FX data optimizes accounting and strategy...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4">
            {/* Share this article */}
            <div
              style={{
                backgroundColor: "#2a1246",
                color: "white",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <h6
                style={{
                  fontWeight: "700",
                  marginBottom: "15px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Share this article
                <span
                  style={{
                    content: "''",
                    position: "absolute",
                    bottom: "-6px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#16a34a",
                    display: "block",
                  }}
                ></span>
              </h6>
              <div style={{ marginTop: "15px" }}>
                <Link
                  to="#"
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    fontSize: "20px",
                    backgroundColor: "#000",
                    color: "white",
                    padding: "12px 15px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    fontSize: "20px",
                    backgroundColor: "#000",
                    color: "white",
                    padding: "12px 15px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "inline-block",
                    fontSize: "20px",
                    backgroundColor: "#000",
                    color: "white",
                    padding: "12px 15px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>

            {/* Content Categories */}
            <div
              style={{
                backgroundColor: "#2a1246",
                color: "white",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h6
                style={{
                  fontWeight: "700",
                  marginBottom: "15px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Content Categories
                <span
                  style={{
                    content: "''",
                    position: "absolute",
                    bottom: "-6px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#16a34a",
                    display: "block",
                  }}
                ></span>
              </h6>
              <div style={{ marginTop: "15px" }}>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: "8px",
                    textDecoration: "none",
                  }}
                >
                  FX Data Services
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    color: "white",
                    marginBottom: "8px",
                    textDecoration: "none",
                  }}
                >
                  Payments Service
                </Link>
                <Link
                  to="#"
                  style={{
                    display: "block",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  News & Views
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="container py-4">
      <div className="row">
        {/* Left Column - FX Payments */}
        <div className="col-lg-7">
          <h4
            style={{
              fontWeight: "700",
              marginBottom: "10px",
              position: "relative",
              display: "inline-block",
            }}
          >
            FX payments
            <span
              style={{
                content: "''",
                position: "absolute",
                bottom: "-6px",
                left: "0",
                width: "100%",
                height: "3px",
                backgroundColor: "#16a34a",
                display: "block",
              }}
            ></span>
          </h4>

          <div style={{ marginTop: "20px" }}>
            <img
              src="our5.png"
              alt="FX Payments"
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "auto",
              }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "gray",
                marginTop: "10px",
              }}
            >
              <i className="bi bi-clock"></i> December 05, 2024 by{" "}
              <Link
                to="#"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                OANDA
              </Link>
            </p>
            <h5 style={{ fontWeight: "700" }}>
              Significant Digits vs Decimal Places: Optimizing FX Accuracy for…
            </h5>
          </div>
        </div>

        {/* Right Column - Most Read Articles */}
        <div className="col-lg-5">
          <div
            style={{
              backgroundColor: "#2a1246",
              color: "white",
              borderRadius: "8px",
              padding: "20px",
              
            }}
          >
            <h6
              style={{
                fontWeight: "700",
                marginBottom: "15px",
                position: "relative",
                display: "inline-block",
              }}
            >
              Most Read Articles
              <span
                style={{
               
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#16a34a",
                  display: "block",
                }}
              ></span>
            </h6>

            {/* Article 1 */}
            <div className="d-flex mb-3">
              <img
                src="our7.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> 18 days ago by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Learn how managing FX data just got easier with...
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="d-flex mb-3">
              <img
                src="our8.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> April 17, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Automating FX currency conversion in Oracle ERP...
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="d-flex">
              <img
                src="our9.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            
            {/* Article 4 */}
            <div className="d-flex">
              <img
                src="our10.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "10px",
                  marginTop:"10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
              {/* Article 5 */}
            <div className="d-flex">
              <img
                src="our11.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginRight: "10px",
                  marginTop:"10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            {/* Article 6 */}
            <div className="d-flex">
              <img
                src="our12.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginTop:"10px",
                  marginRight: "10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            {/* Article 7 */}
            <div className="d-flex">
              <img
                src="our13.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginTop:"10px",
                  marginRight: "10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            {/* Article 8 */}
            <div className="d-flex">
              <img
                src="our14.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  marginTop:"10px",
                  marginRight: "10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            {/* Article 9 */}
            <div className="d-flex">
              <img
                src="our15.png"
                alt="Article"
                style={{
                  borderRadius: "6px",
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",

                  marginRight: "10px",
                  marginTop:"10px"
                }}
              />
              <div>
                <p style={{ fontSize: "13px", color: "#ccc", margin: "0" }}>
                  <i className="bi bi-clock"></i> January 03, 2025 by{" "}
                  <Link
                    to="#"
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    OANDA
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    fontWeight: "600",
                  }}
                >
                  Significant Digits vs Decimal Places in FX...
                </p>
              </div>
            </div>
            {/* Article 4 */}
          </div>
        </div>
      </div>
    </div>
     <div className="container my-4" >
      <h4 style={{ fontWeight: "bold" }}>News & views</h4>
      <div className="row">
        {/* Left main news */}
        <div className="col-md-6" style={{marginTop:"-400px"}}>
          <div className="card border-0">
            <img
              src="our6.png" style={{ borderRadius: "8px" ,height:"300px",width:"500px"}}
              className="card-img-top rounded"
              alt="main news"
            />
            <div className="card-body px-0">
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                <i className="bi bi-clock me-1"></i> January 02, 2025 by{" "}
                <span style={{ fontWeight: "bold" }}>OANDA</span>
              </p>
              <h5 style={{ fontWeight: "bold" }}>
                Step into 2025 with OANDA Corporate FX Services.
              </h5>
              <p style={{ color: "#444" }}>
                As the calendar turns to 2025, OANDA Corporate FX Services is
                thrilled to embark on another year of driving success for our
                valued clients.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>


    </>
  );
}

export default Ourblog;
