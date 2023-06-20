import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import CasinoSlots from "components/CasinoSlots";
import GameCategory from "components/GameCategory";
import Header from "components/Header";
import Jackpot from "components/Jackpot";

const divcollapseheadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CasinoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col items-center justify-start pb-[285px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <CasinoSlots className="flex flex-col items-center justify-start w-full" />
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1760px] mt-[25px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-end p-[3px] rounded-tl-lg rounded-tr-lg w-full">
                      <Text
                        className="mt-4 text-2xl md:text-[22px] text-blue_gray-100 text-right sm:text-xl tracking-[0.42px] uppercase"
                        size="txtRobotoBold24Bluegray100"
                      >
                        betconstruct jackpot
                      </Text>
                      <div className="relative w-[71%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[4.19px] items-center justify-center m-auto w-auto">
                          <Text
                            className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 text-right tracking-[0.64px] w-auto"
                            size="txtRobotoBold56"
                          >
                            USD
                          </Text>
                          <div className="flex flex-row items-start justify-evenly pt-0.5 w-3/4 md:w-full">
                            <div className="md:h-[63px] h-[81px] relative w-[14%]">
                              <Text
                                className="absolute bottom-[0] right-[0] md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 text-right tracking-[0.64px]"
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
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                size="txtRobotoBold56"
                              >
                                0
                              </Text>
                            </div>
                            <div className="h-[81px] relative w-[23%]">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-row gap-[29px] items-start justify-between w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                      size="txtRobotoBold56"
                                    >
                                      7
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-[17px] md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 text-right tracking-[0.64px]"
                                    size="txtRobotoBold56"
                                  >
                                    ,
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex flex-col items-center justify-start right-[15%] top-[0]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  4
                                </Text>
                              </div>
                            </div>
                            <div className="flex relative w-1/5">
                              <div className="flex flex-col items-center justify-start my-auto">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  8
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start ml-[-0.01px] my-auto z-[1]">
                                <Text
                                  className="md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 tracking-[0.64px]"
                                  size="txtRobotoBold56"
                                >
                                  7
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[116px] h-[78px] relative w-[15%]">
                              <Text
                                className="absolute bottom-[0] right-[0] md:text-5xl sm:text-[42px] text-[56px] text-orange-A700 text-right tracking-[0.64px]"
                                size="txtRobotoBold56"
                              >
                                .
                              </Text>
                              <Jackpot className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[69%]" />
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-1/5"
                              orientation="horizontal"
                            >
                              <Jackpot className="flex flex-col items-center justify-start w-full" />
                              <Jackpot className="flex flex-col items-center justify-start w-full" />
                            </List>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[9%] h-[3px] inset-x-[0] mx-auto w-[1232px]"
                          src="images/img_list.svg"
                          alt="list"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <SelectBox
                  className="border-gray-900_03 border-solid border-t sm:px-5 px-[35px] py-1.5 rounded-bl-lg rounded-br-lg text-blue_gray-100 text-right text-xs w-full"
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
              <div className="bg-black-900 border-b border-gray-900_03 border-solid flex flex-col items-start justify-start max-w-[1760px] mt-[52px] mx-auto md:px-5 py-[7.5px] rounded w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <div className="bg-black-900 flex flex-col items-center justify-start pl-[17.64px] pr-[17.66px] py-2 rounded-[16px] w-auto">
                      <div className="relative w-[81%]">
                        <Button className="bg-gradient2  flex h-10 items-center justify-center my-auto p-[7px] rounded-[50%] w-10">
                          <Img src="images/img_frame_24x24.png" alt="frame" />
                        </Button>
                        <div className="absolute right-[0] top-[0] w-[35%]">
                          <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                          <Text
                            className="mx-auto relative text-[11px] text-black-900 text-right"
                            size="txtRobotoRegular11Black900"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pl-2 pr-[7.7px] pt-2 w-auto">
                        <Text
                          className="text-blue_gray-100 text-center text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Favorite
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_02 flex flex-col items-center justify-start pl-[11.8px] pr-[11.81px] py-2 rounded-[16px] w-auto">
                      <div className="relative w-[67%]">
                        <Img
                          className="h-10 mt-auto w-10"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <div className="absolute right-[0] top-[0] w-[86%]">
                          <div className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full"></div>
                          <Text
                            className="m-auto relative text-[11px] text-black-900 text-right"
                            size="txtRobotoRegular11Black900"
                          >
                            13077
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pl-2 pr-[7.39px] pt-2 w-auto">
                        <Text
                          className="text-blue_gray-100 text-center text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          All Games
                        </Text>
                      </div>
                      <div className="bg-yellow-900 h-0.5 rounded-[1px] w-[46%]"></div>
                    </div>
                    <div className="bg-black-900 flex flex-col items-center justify-start py-2 rounded-[16px] w-auto">
                      <Img
                        className="h-10 w-10"
                        src="images/img_ticket_red_200_01.svg"
                        alt="ticket"
                      />
                      <div className="flex flex-col items-start justify-start pl-[7px] pr-[8.58px] pt-2 w-auto">
                        <Text
                          className="text-blue_gray-100 text-center text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Special Games
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900 flex flex-col items-center justify-start py-2 rounded-[16px] w-auto">
                      <Img
                        className="h-10 w-10"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <div className="flex flex-col items-start justify-start pl-2 pr-[7.02px] pt-2 w-auto">
                        <Text
                          className="text-blue_gray-100 text-center text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Special Live Games
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900 flex flex-col items-center justify-start py-2 rounded-[16px] w-auto">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-row items-start justify-end md:ml-[0] ml-[46px] w-1/2 md:w-full">
                          <Img
                            className="h-10 w-10"
                            src="images/img_clock_pink_300.svg"
                            alt="clock_One"
                          />
                          <div className="ml-1 relative w-[34%]">
                            <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                            <Text
                              className="mx-auto relative text-[11px] text-black-900 text-right"
                              size="txtRobotoRegular11Black900"
                            >
                              49
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pl-2 pr-[7.81px] pt-2 w-auto">
                          <Text
                            className="text-blue_gray-100 text-center text-xs w-auto"
                            size="txtRobotoRegular12"
                          >
                            SLOTS FOR BONUSES
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[3px] grid sm:grid-cols-1 grid-cols-12 md:grid-cols-6 w-[69%] md:w-full"
                      orientation="horizontal"
                    >
                      {new Array(12).fill({}).map((props, index) => (
                        <React.Fragment key={`GameCategory${index}`}>
                          <GameCategory
                            className="bg-black-900 flex flex-col items-start justify-start sm:ml-[0] pl-[27.03px] pr-[27px] sm:px-5 py-2 rounded-[16px] w-auto"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-10 items-center justify-start p-4 w-full">
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
              <div className="flex flex-col gap-[33px] items-center justify-start max-w-[1760px] mx-auto pb-[15px] pt-1.5 md:px-5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col items-start justify-start pb-[0.02px] rounded-lg w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[199px] md:h-auto object-cover w-full"
                            src="images/img_430d6827312275c.png"
                            alt="430d6827312275c"
                          />
                        </div>
                      </div>
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                        <div className="flex flex-col items-center justify-start rounded-lg w-full">
                          <Img
                            className="h-[199px] md:h-auto object-cover rounded-lg w-full"
                            src="images/img_31db077634c31c2_199x284.png"
                            alt="31db077634c31cTwo"
                          />
                        </div>
                      </div>
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.02px] rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.02px] rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.02px] rounded-lg w-full" />
                      <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                        <div className="h-[199px] relative rounded-lg w-full">
                          <Img
                            className="h-[199px] m-auto object-cover rounded-lg w-full"
                            src="images/img_aacf1c30b318d51_199x284.png"
                            alt="aacf1c30b318dFiftyOne"
                          />
                          <Button className="absolute bg-red-A200 cursor-pointer font-bold min-w-[80px] py-[3px] right-[4%] rounded-[10px] text-[11px] text-center text-white-A700 top-[6%] tracking-[0.10px] uppercase">
                            Exclusive
                          </Button>
                        </div>
                      </div>
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[67%]"
                      orientation="horizontal"
                    >
                      {new Array(4).fill({}).map((props, index) => (
                        <React.Fragment key={`CasinoSlots${index}`}>
                          <CasinoSlots
                            className="flex flex-col items-start justify-start pb-[0.02px] rounded-lg w-auto"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
                <Button className="bg-black-900 border border-gray-800_01 border-solid cursor-pointer min-w-[352px] py-[11px] rounded text-blue_gray-100 text-center text-sm">
                  Load more
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  flex flex-col items-center justify-end p-12 md:px-10 sm:px-5 w-full">
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
                      className="capitalize text-orange-A700 text-sm w-auto"
                      size="txtRobotoRegular14OrangeA700"
                    >
                      Casino
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pr-[10.67px] w-auto">
                    <Text
                      className="capitalize text-sm text-white-A700 w-auto"
                      size="txtRobotoRegular14WhiteA700"
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

export default CasinoPage;
