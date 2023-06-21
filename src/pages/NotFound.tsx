import React from "react";
import { Link } from "react-router-dom";

const NotFound = React.createClass({
  render: function () {
    return (
      <main className="main-rows">
        <div className="uc-row-wrapper">
          <div
            className="uc-row     last                        backgroundCover 
                    
                                            "
            data-id={2}
            style={{}}
          >
            <div id="r2" className="row-container  container ">
              <div className="row mainRow " style={{}}>
                <div
                  id="column2"
                  className="column col-sm-12 "
                  datacolumn-id={2}
                  style={{}}
                >
                  <div
                    className="column-container vertical-center"
                    style={{}}
                    aria-label="column container"
                    role="contentinfo"
                  >
                    <div
                      className="module-container   only-mobile   align-center ModuleTitle
                             first                              "
                      style={{ paddingBottom: "3.2825322391559vh" }}
                      aria-label="module container"
                      role="contentinfo"
                      id="m2"
                    >
                      <div className="   module ModuleTitle " datamodule-id={2}>
                        <div className="uc-content">
                          <h1>
                            <span style={{ color: "#ffffff" }}>
                              404 - page not found
                            </span>
                          </h1>
                        </div>{" "}
                      </div>
                    </div>
                    <div
                      className="module-container   only-mobile   align-center ModuleParagraph
                                                         "
                      style={{
                        padding: "0px 10px 0px 10px",
                        paddingBottom: "5.57103064067vh",
                      }}
                      aria-label="module container"
                      role="contentinfo"
                      id="m3"
                    >
                      <div
                        className="   module ModuleParagraph "
                        datamodule-id={3}
                        style={{ display: "block", maxWidth: "540px" }}
                      >
                        <div className="uc-content">
                          <h3>
                            <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                              It seems you are lost? Use this path to get home!
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      className="module-container   only-mobile   align-center ModuleButton
                              last                             "
                      aria-label="module container"
                      role="contentinfo"
                      id="m4"
                    >
                      <div
                        className="   module ModuleButton "
                        datamodule-id={4}
                      >
                        <div className="button">
                          <Link
                            to={"/"}
                            className="btn buttons1622807865431"
                            data-link={1}
                            data-linktype={1}
                            target="_self"
                            role="button"
                            aria-label="GO HOME"
                            tabIndex={0}
                          >
                            <span className="btn-text">GO HOME</span>
                          </Link>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: "n" }} />
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

export default NotFound;
