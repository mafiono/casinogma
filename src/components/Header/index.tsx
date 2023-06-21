import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className="header-rows " style={{ "margin-bottom": "0vh" }}>
        <div className="header-row-wrapper">
          <div className="uc-row-wrapper">
            <div
              className="uc-row                          header-row  
              
                                      "
              data-id={45}
              style={{
                background:
                  "linear-gradient(180deg, rgb(26, 26, 26) 0%,rgb(26, 26, 26) 98%,rgb(54, 54, 54) 100%)",
              }}
            >
              <div id="r45" className="row-container ">
                <div className="row headerRow " style={{}}>
                  <div
                    id="column151"
                    className="column col-xs-2 "
                    datacolumn-id={151}
                    style={{ padding: "23px 0px" }}
                  >
                    <div
                      className="column-container "
                      style={{}}
                      aria-label="column container"
                      role="contentinfo"
                    >
                      <div
                        className="module-container   only-mobile   align-left ModuleLogo
                       first   last                             "
                        style={{ padding: "0px 60px 0px 30px" }}
                        aria-label="module container"
                        role="contentinfo"
                        id="m248"
                      >
                        <div
                          className="full-width    module ModuleLogo "
                          datamodule-id={248}
                          style={{ "max-width": "100%" }}
                        >
                          <Link to={"/"}>
                            <img
                              width="-1px"
                              height="100%"
                              data-logo-element
                              src="https://static.springbuilder.site/fs/userFiles-v2/betboard/images/logo.svg?v=1646675503"
                              alt="Darkbet-18747192"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="column56"
                    className="column col-xs-7 "
                    datacolumn-id={56}
                    style={{ padding: "23px 0px" }}
                  >
                    <div
                      className="column-container "
                      style={{}}
                      aria-label="column container"
                      role="contentinfo"
                    >
                      <div
                        className="module-container   only-mobile   align-center ModuleNavigation
                       first   last                             "
                        style={{ padding: "0px 40px 0px 40px" }}
                        aria-label="module container"
                        role="contentinfo"
                        id="m94"
                      >
                        <div
                          className="   module ModuleNavigation "
                          datamodule-id={94}
                          style={{ width: "auto" }}
                        >
                          <input
                            type="hidden"
                            className="standard-navigation"
                          />
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n        \t\t#navigation-94 > .standard-view > .navigation > .page > .page-children {\n        background: #f1f1f1;\n    }\n    #navigation-94 > .standard-view > .navigation > .page > .page-children > .page > ul {\n        background: #f1f1f1;\n    }\n            \n        #navigation-94 .navigation > li.has-childes.page > ul a {\n        padding: 0 15px;\n    }\n\n        \n                        #navigation-94 .navigation > li.has-childes.page > ul.page-children:after {\n                height: 10px;\n            }\n            #navigation-94 ul.open-to-top::after {\n                position: absolute;\n                bottom: -10px;\n            }\n            \t#navigation-94 .page a {\n        color: #FFFFFF;\n        font-size: 14px;\n        font-weight: 400;\n        letter-spacing: 0px;\n        text-transform: uppercase;\n    }\n\n    #navigation-94 .page a .sb-dropdown-arrow-down svg {\n        fill: #FFFFFF;\n    }\n\n            #navigation-94 > nav > ul > li.page:not(:last-child) {\n                        margin-right: 20px;\n            }\n    #navigation-94 > nav > ul > li:first-child:nth-last-child(1) {\n            }\n    #navigation-94 li.page > a:hover {\n        color: #959595 !important;\n    }\n    #navigation-94 li.page.active > a {\n        color: rgb(255, 96, 0);\n    }\n    #navigation-94 li.page.active > a:hover {\n        color: #959595 !important;\n    }\n    #navigation-94 li.page.active > a {\n        color: rgb(255, 96, 0);\n    }\n\n    #navigation-94 li.page.active > a:hover {\n        color: #959595 !important;\n    }\n    #navigation-94 li.page > ul.page-children li.page a {\n        color: #353535;\n    }\n    #navigation-94 li.page > ul.page-children li.page a .sb-dropdown-arrow-down svg {\n        fill: #353535;\n    }\n    #navigation-94 li.page > ul.page-children > li.page a:hover,\n    #navigation-94 li.page > ul.page-children > li.page > ul.page-children > li.page a:hover {\n        color: #959595     !important;\n    }\n    #navigation-94 li.page > ul.page-children > li.page.active > a,\n    #navigation-94 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a {\n        color: #353535;\n    }\n\n    #navigation-94 li.page > ul.page-children > li.page.active > a:hover,\n    #navigation-94 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a:hover {\n        color: #959595     !important;\n    }\n    #navigation-94 .subMenu__show:before,\n    #navigation-94 .subMenu__horizontal-arrow-left:before,\n    #navigation-94 .subMenu__horizontal-arrow-right:before,\n    #navigation-94 li.page > ul.page-children > li.has-childes > .page-children.pagesArrows > li:first-child:before {\n        color: #f1f1f1;\n    }\n\n            #navigation-94 li.page > ul.page-children > li.page > a {\n                          color: #353535;\n                                 font-size: 12px;\n        }\n\n    \n        #navigation-94 li.page > ul.page-children > li.page > a {\n        font-weight: 400;\n    }\n\n            #navigation-94 li.page ul.page-children .page {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n\n    #navigation-94 li.page ul.page-children .page:last-child {\n        padding-bottom: 10px;\n    }\n\n    #navigation-94 li.has-childes.page > a > .sb-dropdown-arrow-down svg {\n        width: 8px;\n        height: 8px;\n        line-height: 10px;\n    }\n\n    #navigation-94 li.has-childes.page > .page-children.pagesArrows > .has-childes > a > .sb-dropdown-arrow-down svg {\n        width: 7px;\n        height: 7px;\n        line-height: 12px;\n    }\n\n    #navigation-94 li.has-childes.page > .page-children li > a,\n    #navigation-94 li.has-childes.page > .page-children li {\n        text-align: center;\n    }\n\n             ",
                            }}
                          />
                          <div
                            id="navigation-94"
                            className="navigation-inner
                  horizontal standard
       "
                            data-stretch-labels
                          >
                            <div
                              className="off-canvas-button icon"
                              aria-label="off canvas button"
                              role="button"
                              data-selector="off-canvas-94"
                              data-attribute="right"
                              style={{
                                width: "25px",
                                height: "25px",
                                color: "#000000",
                                fill: "#000000",
                              }}
                              tabIndex={0}
                            >
                              <svg
                                viewBox="0 0 100.00000762939453 75.000244140625"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                role="none"
                              >
                                <g transform="scale(1.2716659928598795)">
                                  <g>
                                    <g>
                                      <path
                                        clipRule="evenodd"
                                        d="M81.602,44.102h-66.84c-3.256,0-5.898,2.64-5.898,5.898    s2.642,5.898,5.898,5.898h66.84c3.256,0,5.898-2.64,5.898-5.898S84.858,44.102,81.602,44.102z M81.602,67.693h-66.84    c-3.256,0-5.898,2.64-5.898,5.898c0,3.258,2.642,5.898,5.898,5.898h66.84c3.256,0,5.898-2.64,5.898-5.898    C87.5,70.333,84.858,67.693,81.602,67.693z M14.763,32.307h66.84c3.256,0,5.898-2.64,5.898-5.898c0-3.258-2.642-5.898-5.898-5.898    h-66.84c-3.256,0-5.898,2.64-5.898,5.898C8.865,29.667,11.507,32.307,14.763,32.307z"
                                        transform="translate(-8.864001274108887,-20.511001586914062)"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <nav className="standard-view ">
                              <ul
                                className="navigation"
                                style={{ "font-family": "Roboto" }}
                                itemScope
                                itemType="https://www.schema.org/SiteNavigationElement"
                              >
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/Live"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Live
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/Prematch"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Prematch
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/Esports"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Esports
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/Casino/"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Casino
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/LiveCasino/"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Live Casino
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/Tournaments/"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Tournaments
                                  </Link>
                                </li>
                                <li
                                  className="page subMenu__item show center
                                                          "
                                  data-anchor
                                  itemProp="name"
                                >
                                  <Link
                                    to={"/VirtualSports/"}
                                    className="nav-item center "
                                    itemProp="url"
                                    data-page-type="pageBlank"
                                    data-link
                                    tabIndex={0}
                                  >
                                    Virtual Sports
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="column152"
                    className="column col-xs-2 "
                    datacolumn-id={152}
                    style={{ padding: "23px 0px" }}
                  >
                    <div
                      className="column-container "
                      style={{}}
                      aria-label="column container"
                      role="contentinfo"
                    >
                      <div
                        className="module-container   only-mobile   align-right ModuleWidgets
                       first   last                             "
                        style={{ padding: "0px 10px 0px 0px" }}
                        aria-label="module container"
                        role="contentinfo"
                        id="m233"
                      >
                        <div
                          className="   module ModuleWidgets "
                          datamodule-id={233}
                        >
                          <div
                            data-widget="Accounts"
                            data-configs='{"fit":"cover","accountLayout":"popup","moduleId":"233","type":"live","category":"sport","limit":5,"casinoGamesLimit":16}'
                            data-loaded="true"
                          >
                            <div className="AuthSection__ButtonsWrapper-sc-vd59as-0 eeByGn">
                              <button
                                type="button"
                                className="v3-btn v3-btn-text v3-login-btn"
                              >
                                <span>Sign In</span>
                              </button>
                              <button
                                type="button"
                                className="v3-btn v3-btn-primary v3-register-btn"
                              >
                                <span>Sign Up</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="column341"
                    className="column col-xs-1 "
                    datacolumn-id={341}
                    style={{ padding: "23px 0px" }}
                  >
                    <div
                      className="column-container vertical-center"
                      style={{}}
                      aria-label="column container"
                      role="contentinfo"
                    >
                      <div
                        className="module-container   only-mobile   align-center ModuleLanguageSwitcher
                       first   last                             "
                        aria-label="module container"
                        role="contentinfo"
                        id="m557"
                      >
                        <div
                          className="   module ModuleLanguageSwitcher "
                          datamodule-id={557}
                        >
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                '\n    #lang-switcher-557.languages ul {\n        border-radius: 4px 4px 4px 4px;\n        border-width: 1px 1px 1px 1px;\n    }\n    #lang-switcher-557.languages ul li {\n         background: rgb(26, 26, 26);\n     }\n\n    #lang-switcher-557.languages ul li a {\n         border: solid rgba(255, 255, 255, 0.5);\n         border-width: 1px 1px 1px 1px;\n         font-size: 13px;\n         color: rgba(255, 255, 255, 0.5);\n         min-height: 36px;\n         padding: 0 13px 0 13px;\n     }\n\n    #lang-switcher-557.languages .lng-ic-down {\n         color: rgba(255, 255, 255, 0.5);\n     }\n\n    #lang-switcher-557.languages .name {\n         font-family: Open Sans;\n         font-size: 13px;\n         font-weight: 400;\n         letter-spacing: 0;\n         color: rgba(255, 255, 255, 0.5);\n     }\n\n    #lang-switcher-557.languages ul li:first-child a,\n    #lang-switcher-557.languages ul li:last-child a {\n        border-radius: 4px 4px 4px 4px;\n    }\n\n            #lang-switcher-557.languages ul li:first-child a {\n            border-bottom-left-radius: 0;\n            border-bottom-right-radius: 0;\n        }\n\n        #lang-switcher-557.languages ul li:last-child a {\n            border-top-left-radius: 0;\n            border-top-right-radius: 0;\n        }\n    \n    #lang-switcher-557.languages .main-language  {\n         min-width: 60px;\n         min-height: 36px;\n         padding: 0 13px 0 13px;\n         border: solid rgba(255, 255, 255, 0.5);\n         border-width: 1px 1px 1px 1px;\n         border-radius: 4px 4px 4px 4px;\n         background: rgb(26, 26, 26);\n     }\n\n    #lang-switcher-557.languages ul li:hover {\n         background: rgb(255, 96, 0);\n     }\n\n    #lang-switcher-557.languages ul li:hover .lang-item-link span,\n\t#lang-switcher-557.languages ul li:hover .name,\n\t#lang-switcher-557.languages ul li:hover .name .capitalize {\n         color: rgba(255, 255, 255, 0.5);\n     }\n\n            .ModuleLanguageSwitcher[datamodule-id="557"] .sb-dropdown-arrow-down.lng-ic-down svg {\n            width: 11px;\n            height: 11px;\n        }\n    \n    .ModuleLanguageSwitcher[datamodule-id="557"] .flag {\n        height: 16px;\n        width: 24px;\n    }\n\n    .ModuleLanguageSwitcher[datamodule-id="557"] .sb-dropdown-arrow-down, .custom-arrow-dropdown {\n        margin-left: 10px;\n    }\n\n    html[dir=rtl] .ModuleLanguageSwitcher[datamodule-id="557"] .sb-dropdown-arrow-down,\n    html[dir=rtl] .ModuleLanguageSwitcher[datamodule-id="557"] .custom-arrow-dropdown {\n        margin-right: 10px;\n        margin-left: 0;\n    }\n',
                            }}
                          />
                          <div
                            id="lang-switcher-557"
                            className="languages open-on-hover subMenu__item"
                          >
                            <div
                              className="main-language"
                              tabIndex={0}
                              role="button"
                              aria-label="language switcher"
                            >
                              <span className="flag">
                                <img
                                  className="cover-image"
                                  loading="lazy"
                                  src="https://static.springbuilder.site/assets/images/flags64/en-us.svg?v=1687256965"
                                />
                              </span>
                              <span
                                className="sb-dropdown-arrow-down lng-ic-down"
                                role="none"
                              >
                                <svg
                                  width={32}
                                  height={32}
                                  viewBox="0 0 32 32"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M31.0257 11.8354L18.9787 24.1647C17.3787 25.8589 14.6493 25.8589 13.0493 24.1647L0.90817 11.8354C-0.974163 9.95303 0.343503 6.5647 2.97884 6.5647H29.0495C31.6848 6.5647 33.0025 9.85886 31.026 11.8354H31.0257Z" />
                                </svg>
                              </span>
                            </div>
                            <ul className="native-scroll-box subMenu__hide"></ul>
                          </div>
                          <div className="disable-switcher" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
