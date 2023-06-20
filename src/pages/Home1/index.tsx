import React from "react";

import { Button, Img, List, Text } from "components";
import CasinoSlots from "components/CasinoSlots";
import Header from "components/Header";
import HomeFooter from "components/HomeFooter";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[5809px] mx-auto relative w-full">
        <div className="h-[1080px] mx-auto md:px-5 w-full">
          <Img
            className="h-[1080px] m-auto object-cover w-full"
            src="images/img_r267backlivejpg.png"
            alt="r267backlivejpg"
          />
          <div className="absolute h-[1080px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[1080px] m-auto object-cover w-full"
              src="images/img_r268backlivejpg.png"
              alt="r268backlivejpg"
            />
            <div className="absolute h-[1080px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[1080px] m-auto object-cover w-full"
                src="images/img_r274backcasinojpg.png"
                alt="r274backcasinoj"
              />
              <Img
                className="absolute h-[1080px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_r279promobackjpg.png"
                alt="r279promobackjp"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gradient1  flex gap-2.5 items-center justify-center md:px-5 w-full" />
            <div className="flex flex-col items-start justify-start pb-[1054px] w-full">
              <div className="font-roboto md:h-[3026px] h-[826px] md:px-5 relative w-full">
                <Img
                  className="h-[826px] m-auto object-cover w-full"
                  src="images/img_r266back1jpg.png"
                  alt="r266back1jpg"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-36 w-1/5 md:w-full">
                    <Img
                      className="h-[605px] md:h-auto object-cover w-full"
                      src="images/img_00409688525betboardpng.png"
                      alt="00409688525betb"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[70px] md:mt-0 my-[11px] w-[24%] md:w-full">
                    <div className="h-[763px] relative w-full">
                      <Img
                        className="h-[763px] m-auto object-cover w-full"
                        src="images/img_526casinoplayjpg.png"
                        alt="526casinoplayjp"
                      />
                      <div className="absolute bg-black-900_3d flex flex-col h-full inset-[0] items-center justify-start m-auto pb-[37.78px] w-auto">
                        <div className="flex flex-col gap-[-0.15px] items-start justify-start pl-[30px] md:pr-10 pr-[332px] pt-[655.68px] sm:px-5 w-auto">
                          <Text
                            className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-white-A700_7f w-auto"
                            size="txtRobotoBold2133"
                          >
                            01
                          </Text>
                          <Text
                            className="sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                            size="txtRobotoBold2843"
                          >
                            Casino
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[30px] md:mt-0 my-[11px] w-1/2 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[763px] relative w-full">
                        <Img
                          className="h-[763px] m-auto object-cover w-full"
                          src="images/img_527sphomejpg.png"
                          alt="527sphomejpg"
                        />
                        <div className="absolute bg-black-900_3d flex flex-col h-full inset-[0] items-center justify-start m-auto pb-[37.78px] w-auto">
                          <div className="flex flex-col items-start justify-start pl-[30px] md:pr-10 pr-[335px] pt-[655.68px] sm:px-5 w-full">
                            <Text
                              className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-white-A700_66 w-auto"
                              size="txtRobotoBold2133WhiteA70066"
                            >
                              02
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[763px] relative w-full">
                        <Img
                          className="h-[763px] m-auto object-cover w-full"
                          src="images/img_528horseracejpg.png"
                          alt="528horseracejpg"
                        />
                        <div className="absolute bg-black-900_3d flex flex-col h-full inset-[0] items-center justify-start m-auto pb-[37.78px] w-auto">
                          <div className="flex flex-col gap-[-0.15px] items-start justify-start pl-[30px] md:pr-10 pr-[242px] pt-[655.68px] sm:px-5 w-auto">
                            <Text
                              className="sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-white-A700_66"
                              size="txtRobotoBold2133WhiteA70066"
                            >
                              03
                            </Text>
                            <Text
                              className="sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                              size="txtRobotoBold2843"
                            >
                              Virtual Sports
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="font-montserrat md:h-[1888px] sm:h-[3213px] h-[947px] md:px-5 relative w-full">
                <Img
                  className="h-[947px] m-auto object-cover w-full"
                  src="images/img_r247back2jpg.png"
                  alt="r247back2jpg"
                />
                <div className="absolute bottom-[0] flex flex-col gap-[26.71px] inset-x-[0] items-center justify-end mx-auto px-2.5 w-auto">
                  <Text
                    className="md:text-5xl text-8xl text-center text-white-A700 w-auto"
                    size="txtMontserratBold96"
                  >
                    LIVE EVENTS
                  </Text>
                  <div className="flex flex-col font-roboto items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-row md:gap-10 gap-[1423.52px] items-center justify-start pl-2 pr-[13.46px] py-2 rounded shadow-bs w-auto md:w-full">
                      <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                        <div className="bg-red-A400 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="text-base text-blue_gray-100 text-right w-auto"
                          size="txtRobotoBold16"
                        >
                          Live Events
                        </Text>
                      </div>
                      <a
                        href="javascript:"
                        className="text-center text-orange-A700 text-xs w-auto"
                      >
                        <Text size="txtRobotoBold12">See All</Text>
                      </a>
                    </div>
                    <div className="bg-black-900 flex flex-col items-start justify-start mt-1 px-1 py-2 rounded shadow-bs w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[936px] w-full">
                        <Button
                          className="bg-yellow-900 cursor-pointer flex items-center justify-center min-w-[84px] p-2 rounded-lg"
                          leftIcon={
                            <Img
                              className="h-6 mr-[3px]"
                              src="images/img_globe.svg"
                              alt="globe"
                            />
                          }
                        >
                          <div className="text-[11px] text-right text-white-A700 tracking-[0.10px]">
                            Football
                          </div>
                        </Button>
                        <div className="bg-yellow-900_01 flex flex-col h-6 items-center justify-start ml-2.5 md:ml-[0] md:mt-0 my-2 rounded-[50%] w-6">
                          <Img
                            className="h-[23px] w-[23px]"
                            src="images/img_cut.svg"
                            alt="cut"
                          />
                        </div>
                        <Img
                          className="h-6 md:h-auto md:ml-[0] ml-[23px] object-cover w-6"
                          src="images/img_frame_lime_500.png"
                          alt="frame"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_cut_red_300.svg"
                          alt="cut_One"
                        />
                        <Img
                          className="h-6 md:h-auto md:ml-[0] ml-[23px] object-cover w-6"
                          src="images/img_frame_red_500.png"
                          alt="frame_One"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_frame.svg"
                          alt="frame_Two"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_airplane_blue_gray_800.svg"
                          alt="airplane_One"
                        />
                        <Button className="bg-amber-700 flex h-6 items-center justify-center md:ml-[0] ml-[23px] md:mt-0 my-2 rounded-[50%] w-6">
                          <Img
                            src="images/img_ticket_white_a700.svg"
                            alt="ticket_One"
                          />
                        </Button>
                        <Button className="bg-light_green-400 flex h-6 items-center justify-center md:ml-[0] ml-[23px] md:mt-0 my-2 p-1 rounded-[50%] w-6">
                          <Img src="images/img_group.svg" alt="group" />
                        </Button>
                        <Img
                          className="h-6 md:ml-[0] ml-[23px] w-6"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-1 items-start pt-2 w-auto"
                      orientation="vertical"
                    >
                      <div className="bg-black-900 flex flex-col items-center justify-center my-0 p-[7px] rounded shadow-bs w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 gap-[1224.53px] items-start justify-start mt-[5px] w-auto md:w-full">
                          <Text
                            className="text-blue_gray-100 text-right text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            Africa Cup of Nations
                          </Text>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-gray-900_02 flex flex-row items-center justify-start p-1 rounded w-[44%]">
                              <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="ml-1 text-blue_gray-100 text-right text-xs"
                                size="txtRobotoRegular12"
                              >
                                <>2nd Half 70&#39;</>
                              </Text>
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[38px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              3 : 1
                            </Button>
                            <div className="bg-gray-900_03 flex flex-col items-start justify-start px-2 py-1 rounded w-auto">
                              <Img
                                className="h-3 w-3"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[36px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              +37
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[5px] pt-2 w-full">
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[546.12px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Burundi
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                1.03
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto">
                            <div className="flex flex-row gap-[165.41px] items-start justify-start pr-[0.14px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Draw
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                13.00
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start pl-[13px] pr-[12.99px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[535.02px] items-start justify-start w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Namibia
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[6%]">
                                <Img
                                  className="h-[5px] w-[5px]"
                                  src="images/img_frame_cyan_500.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  86.00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex flex-col items-center justify-center my-0 p-[7px] rounded shadow-bs w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 gap-[1227.8px] items-start justify-start mt-[5px] w-auto md:w-full">
                          <Text
                            className="text-blue_gray-100 text-right text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            Africa Cup of Nations
                          </Text>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-gray-900_02 flex flex-row items-center justify-start p-1 rounded w-[43%]">
                              <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="ml-1 text-blue_gray-100 text-right text-xs"
                                size="txtRobotoRegular12"
                              >
                                <>1st Half 38&#39;</>
                              </Text>
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[38px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              0 : 0
                            </Button>
                            <div className="bg-gray-900_03 flex flex-col items-start justify-start px-2 py-1 rounded w-auto">
                              <Img
                                className="h-3 w-3"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[36px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              +96
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[5px] pt-2 w-full">
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[543.53px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Ethiopia
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                4.35
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto">
                            <div className="flex flex-row gap-[173.27px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Draw
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.45
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[549.25px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Malawi
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.35
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex flex-col items-center justify-center my-0 p-[7px] rounded shadow-bs w-full">
                        <div className="flex flex-row md:gap-10 gap-[1244.52px] items-start justify-start mt-[5px] w-auto md:w-full">
                          <Text
                            className="text-blue_gray-100 text-right text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            CAFA Nations Cup
                          </Text>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <div className="bg-gray-900_02 flex flex-row items-center justify-start p-1 rounded w-[44%]">
                              <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="ml-1 text-blue_gray-100 text-right text-xs"
                                size="txtRobotoRegular12"
                              >
                                <>2nd Half 48&#39;</>
                              </Text>
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[38px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              0 : 0
                            </Button>
                            <div className="bg-gray-900_03 flex flex-col items-start justify-start px-2 py-1 rounded w-auto">
                              <Img
                                className="h-3 w-3"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[36px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              +87
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[5px] pt-2 w-full">
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[525.73px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Kyrgyzstan
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                5.50
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto">
                            <div className="flex flex-row gap-[173.27px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Draw
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.23
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[556.78px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Oman
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex flex-col items-center justify-center my-0 p-[7px] rounded shadow-bs w-full">
                        <div className="flex flex-row md:gap-10 gap-[1320.81px] items-start justify-start mt-[5px] w-auto md:w-full">
                          <Text
                            className="text-blue_gray-100 text-right text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            U19 League
                          </Text>
                          <div className="flex flex-row gap-1 items-start justify-start w-auto">
                            <div className="bg-gray-900_02 flex flex-row items-center justify-start p-1 rounded w-[51%]">
                              <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="ml-1 text-blue_gray-100 text-right text-xs"
                                size="txtRobotoRegular12"
                              >
                                <>1st Half 34&#39;</>
                              </Text>
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[38px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              0 : 0
                            </Button>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[36px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              +41
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[5px] pt-2 w-full">
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[473.55px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  FC Helios Voru U19
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                4.05
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto">
                            <div className="flex flex-row gap-[173.27px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Draw
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                3.90
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[461.55px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  JK Nomme Kalju U19
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                1.77
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black-900 flex flex-col items-center justify-center my-0 p-[7px] rounded shadow-bs w-full">
                        <div className="flex flex-row md:gap-10 gap-[1320.81px] items-start justify-start mt-[5px] w-auto md:w-full">
                          <Text
                            className="text-blue_gray-100 text-right text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            3rd Division
                          </Text>
                          <div className="flex flex-row gap-1 items-start justify-start w-auto">
                            <div className="bg-gray-900_02 flex flex-row items-center justify-start p-1 rounded w-[51%]">
                              <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="ml-1 text-blue_gray-100 text-right text-xs"
                                size="txtRobotoRegular12"
                              >
                                <>1st Half 33&#39;</>
                              </Text>
                            </div>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[38px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              0 : 0
                            </Button>
                            <Button className="bg-gray-900_03 cursor-pointer min-w-[36px] py-1 rounded text-blue_gray-100 text-center text-xs">
                              +42
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[5px] pt-2 w-full">
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[501.33px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  FShM Moscow
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.90
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto">
                            <div className="flex flex-row gap-[173.27px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  Draw
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                3.50
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 border border-gray-800_01 border-solid flex md:flex-1 flex-col items-start justify-start px-[13px] py-[11px] rounded-md w-auto md:w-full">
                            <div className="flex flex-row sm:gap-10 gap-[550.81px] items-start justify-start pr-[0.28px] w-auto">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-blue_gray-100 text-right text-sm"
                                  size="txtRobotoRegular14"
                                >
                                  FC Zov
                                </Text>
                              </div>
                              <Text
                                className="text-blue_gray-100 text-right text-sm w-auto"
                                size="txtRobotoRegular14"
                              >
                                2.30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[455px] mt-[197px] md:text-5xl text-8xl text-white-A700"
                size="txtMontserratBold96"
              >
                LIVE SPORT
              </Text>
              <List
                className="sm:flex-col flex-row font-roboto gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[57px] w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_7f flex sm:flex-1 flex-col items-start justify-start md:px-5 w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="pb-[29.81px] pl-8 md:pr-10 pr-[311px] pt-[528.19px] sm:px-5 relative w-[480px] sm:w-full">
                      <Img
                        className="absolute h-[598px] inset-[0] justify-center m-auto object-cover w-[480px]"
                        src="images/img_537livesport11webp.png"
                        alt="537livesport11w"
                      />
                      <Text
                        className="mt-auto relative sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                        size="txtRobotoRegular2843"
                      >
                        BASEBALL
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-black-900_3d flex sm:flex-1 flex-col items-start justify-start pb-[1.25px] md:px-5 w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="pb-[29.81px] pl-8 md:pr-10 pr-[338px] pt-[526.94px] sm:px-5 relative w-[480px] sm:w-full">
                      <Img
                        className="absolute h-[596px] inset-[0] justify-center m-auto object-cover w-[480px]"
                        src="images/img_531livesport12.png"
                        alt="531livesportTwelve"
                      />
                      <Text
                        className="mt-auto relative sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                        size="txtRobotoRegular2843"
                      >
                        HOCKEY
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-start justify-start md:px-5 w-auto sm:w-full">
                  <div className="pb-[29.81px] pl-8 md:pr-10 pr-[276px] pt-[526.94px] sm:px-5 relative w-[480px] sm:w-full">
                    <Img
                      className="absolute h-[596px] inset-[0] justify-center m-auto object-cover w-[480px]"
                      src="images/img_535livesport13webp.png"
                      alt="535livesport13w"
                    />
                    <Text
                      className="mt-auto relative sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                      size="txtRobotoRegular2843"
                    >
                      BASKETBALL
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-start justify-start md:px-5 w-auto sm:w-full">
                  <div className="pb-[29.81px] pl-8 md:pr-10 pr-[349px] pt-[528.19px] sm:px-5 relative w-[480px] sm:w-full">
                    <Img
                      className="absolute h-[598px] inset-[0] justify-center m-auto object-cover w-[480px]"
                      src="images/img_536tennis1webp.png"
                      alt="536tennis1webp"
                    />
                    <Text
                      className="mt-auto relative sm:text-[24.43px] md:text-[26.43px] text-[28.43px] text-white-A700 w-auto"
                      size="txtRobotoRegular2843"
                    >
                      TENNIS
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-montserrat gap-[26.7px] items-center justify-start max-w-[1599px] mt-[201px] mx-auto pb-[571.35px] md:px-5 w-full">
                <Text
                  className="md:text-5xl text-8xl text-center text-white-A700 w-auto"
                  size="txtMontserratBold96"
                >
                  POPULAR GAMES
                </Text>
                <div className="flex flex-col font-roboto items-start justify-start pb-[18px] pt-1.5 px-1.5 w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-2 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.01px] rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                        <div className="h-[180px] relative rounded-lg w-full">
                          <Img
                            className="h-[180px] m-auto object-cover rounded-lg w-full"
                            src="images/img_aacf1c30b318d51.png"
                            alt="aacf1c30b318dFiftyOne"
                          />
                          <Button className="absolute bg-red-A200 cursor-pointer font-bold min-w-[80px] py-[3px] right-[4%] rounded-[10px] text-[11px] text-center text-white-A700 top-[7%] tracking-[0.10px] uppercase">
                            Exclusive
                          </Button>
                        </div>
                      </div>
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.01px] rounded-lg w-full" />
                      <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
                        <div className="h-[180px] relative rounded-lg w-full">
                          <Img
                            className="h-[180px] m-auto object-cover rounded-lg w-full"
                            src="images/img_3c3a76db155e949.png"
                            alt="3c3a76db155e949"
                          />
                          <Button className="absolute bg-red-A200 cursor-pointer font-bold min-w-[80px] py-[3px] right-[4%] rounded-[10px] text-[11px] text-center text-white-A700 top-[7%] tracking-[0.10px] uppercase">
                            Exclusive
                          </Button>
                        </div>
                      </div>
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start pb-[0.01px] rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                      <CasinoSlots className="flex flex-1 flex-col items-start justify-start rounded-lg w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HomeFooter className="flex flex-col items-center justify-start w-full" />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
