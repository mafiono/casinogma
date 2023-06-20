import React from "react";

import { Button, Img, SelectBox, Text } from "components";
import CasinoSlots from "components/CasinoSlots";
import Header from "components/Header";
import Jackpot from "components/Jackpot";

const divcollapseheadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LivecasinoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[38px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col items-center justify-start pb-[285px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <CasinoSlots className="flex flex-col items-center justify-start w-full" />
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1780px] mt-[37px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-end p-[3px] rounded-tl-lg rounded-tr-lg w-full">
                      <Text
                        className="mt-4 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.42px] uppercase"
                        size="txtRobotoBold24Bluegray100"
                      >
                        betconstruct jackpot
                      </Text>
                      <div className="relative w-[71%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[3.19px] items-center justify-center m-auto w-auto">
                          <Text
                            className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px] w-auto"
                            size="txtRobotoBold56"
                          >
                            USD
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[94.02px] items-start justify-start pb-[2.1px] pl-[32.12px] md:pr-10 pr-[62.65px] pt-[4.2px] sm:px-5 w-auto">
                            <div className="relative w-[33%] sm:w-full">
                              <Text
                                className="mt-auto mx-auto md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px] w-auto"
                                size="txtRobotoBold56"
                              >
                                ,
                              </Text>
                              <div className="absolute flex flex-col items-start justify-start left-[0] top-[0]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  1
                                </Text>
                              </div>
                              <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                            <div className="relative w-[28%] sm:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  4
                                </Text>
                              </div>
                            </div>
                            <div className="relative w-[33%] sm:w-full">
                              <div className="my-auto w-[58%]">
                                <Text
                                  className="mt-auto md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px] w-auto"
                                  size="txtRobotoBold56"
                                >
                                  ,
                                </Text>
                                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                                  <Text
                                    className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                    size="txtRobotoBold56"
                                  >
                                    9
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex flex-col items-center justify-start right-[0] top-[0]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  4
                                </Text>
                              </div>
                            </div>
                            <Jackpot className="flex flex-col items-center justify-start w-[14%] sm:w-full" />
                            <div className="relative w-[21%] sm:w-full">
                              <Text
                                className="mt-auto md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px] w-auto"
                                size="txtRobotoBold56"
                              >
                                .
                              </Text>
                              <Jackpot className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[69%]" />
                            </div>
                            <Jackpot className="flex flex-col items-center justify-start w-[14%] sm:w-full" />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[9%] h-[3px] inset-x-[0] mx-auto w-[1246px]"
                          src="images/img_list.svg"
                          alt="list"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <SelectBox
                  className="border-gray-900_03 border-solid border-t sm:px-5 px-[35px] py-1.5 rounded-bl-lg rounded-br-lg text-blue_gray-100 text-left text-xs w-full"
                  placeholderClassName="text-blue_gray-100"
                  indicator={
                    <Img
                      className="h-2 w-2"
                      src="images/img_arrowdown_orange_a700.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="divcollapsehead"
                  options={divcollapseheadOptionsList}
                  isSearchable={false}
                  placeholder="See Details"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-10 items-center justify-start mt-10 p-4 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[63px] md:px-5 w-[21%] md:w-full">
                  <div className="bg-black-900 border border-blue_gray-900_01 border-solid flex flex-row items-start justify-between pl-1 md:pr-10 sm:pr-5 pr-[286.84px] py-1.5 rounded w-auto sm:w-full">
                    <Button className="bg-gray-900_03 border border-blue_gray-900_01 border-solid cursor-pointer min-w-[99px] py-[5px] rounded text-blue_gray-100 text-center text-sm">
                      All Providers
                    </Button>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_gray_500_01.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="bg-black-900 border border-blue_gray-900_01 border-solid flex sm:flex-1 flex-row gap-[21.61px] items-center justify-start md:px-5 px-[17px] py-[9px] rounded w-auto sm:w-full">
                  <div className="bg-black-900 flex flex-col items-start justify-start py-[3px] rounded w-auto">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[217.39px] w-auto">
                      <Text
                        className="text-gray-800_02 text-sm w-auto"
                        size="txtRobotoRegular14Gray80002"
                      >
                        Search for game
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[32.99px] items-center justify-start max-w-[1760px] mx-auto pb-[15.01px] pt-1.5 md:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                      {new Array(16).fill({}).map((props, index) => (
                        <React.Fragment key={`CasinoSlots${index}`}>
                          <CasinoSlots
                            className="flex flex-1 flex-col items-start justify-start pb-[0.02px] rounded-lg w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="bg-black-900 border border-gray-800_01 border-solid cursor-pointer min-w-[352px] py-[11px] rounded text-blue_gray-100 text-center text-sm">
                  Load more
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1559px] mx-auto w-full">
                <Img
                  className="h-[37px] md:h-auto object-cover w-full"
                  src="images/img_364partnerspng.png"
                  alt="364partnerspng"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end sm:pl-5 pl-[30px] py-[30px] w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-3.5 md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[59.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Live
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[24.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Prematch
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[37.17px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Esports
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="capitalize text-sm text-white-A700"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Virtual Sports
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[204px] md:mt-0 mt-3.5 md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[38.67px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Casino
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[10.67px] w-auto">
                    <Text
                      className="capitalize text-orange-A700 text-sm w-auto"
                      size="txtRobotoRegular14OrangeA700"
                    >
                      Live Casino
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="capitalize text-sm text-white-A700"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      Tournaments
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[237px] md:mt-0 mt-[13px] md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[78.5px] w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
                    >
                      About Us
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtRobotoRegular14WhiteA700">
                        Terms and Conditions
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[49.5px] w-auto">
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[67.5px] w-auto">
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtRobotoRegular14WhiteA700">Contact Us</Text>
                    </a>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[823px] p-1 md:px-5 w-[17%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-200 text-right"
                    size="txtRobotoBold50"
                  >
                    18+
                  </Text>
                  <Text
                    className="mr-[25px] mt-1.5 text-base text-gray-200 text-right"
                    size="txtRobotoRegular16Gray200"
                  >
                    © 2022 Betboard
                  </Text>
                  <Text
                    className="mt-7 text-base text-gray-200 text-right"
                    size="txtRobotoBold16Gray200"
                  >
                    Follow us
                  </Text>
                  <Img
                    className="h-8 mb-[9px] mt-[15px] w-[116px]"
                    src="images/img_footermodule.svg"
                    alt="footermodule_Three"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivecasinoPage;
