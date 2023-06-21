import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = React.createClass({
  render: function () {
    return (
      <main className="main-rows">
        <div className="uc-row-wrapper">
          <div
            className="uc-row     last                        backgroundCover 
                    
                                            "
            data-id={7}
            style={{}}
          >
            <div id="r7" className="row-container  container ">
              <div className="row mainRow " style={{}}>
                <div
                  id="column7"
                  className="column col-sm-12 "
                  datacolumn-id={7}
                  style={{}}
                >
                  <div
                    className="column-container vertical-center"
                    style={{}}
                    aria-label="column container"
                    role="contentinfo"
                  >
                    <div
                      className="module-container   only-mobile   align-left ModuleTitle
                             first                              "
                      style={{
                        padding: "0px 40px 0px 40px",
                        "padding-bottom": "2.3446658851114vh",
                      }}
                      aria-label="module container"
                      role="contentinfo"
                      id="m16"
                    >
                      <div
                        className="   module ModuleTitle "
                        datamodule-id={16}
                      >
                        <div className="uc-content">
                          <h1>
                            <span style={{ color: "#ffffff" }}>
                              Terms and Conditions
                            </span>
                          </h1>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      className="module-container   only-mobile   align-left ModuleParagraph
                              last                             "
                      style={{ padding: "0px 40px 0px 40px" }}
                      aria-label="module container"
                      role="contentinfo"
                      id="m17"
                    >
                      <div
                        className="full-width    module ModuleParagraph "
                        datamodule-id={17}
                        style={{ "max-width": "100%" }}
                      >
                        <div className="uc-content">
                          <p>
                            <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                              The terms and conditions outline the rules and
                              regulations for the use of Company Name's Website.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  },
});

export default TermsAndConditions();
