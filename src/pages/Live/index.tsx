import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GameCategory from "components/GameCategory";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const divpickerbuttoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divv3SelectseleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LivePage: React.FC = () => {
  const [divstylewrapvalue, setDivstylewrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
          <div className="flex flex-col gap-3 items-center justify-start pb-[9px] w-full">
            <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="bg-gray-900_01 flex flex-col items-start justify-start px-1 py-2 w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1912px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-start justify-start p-1 rounded-lg w-auto md:w-full">
                  <div className="bg-black-900 flex flex-row items-center justify-start md:px-10 sm:px-5 px-[799px] w-full">
                    <Button className="border-b-[3px] border-orange-A700 border-solid cursor-pointer min-w-[104px] py-[11px] text-blue_gray-100 text-center text-sm tracking-[0.42px]">
                      Event View
                    </Button>
                    <Text
                      className="ml-[30px] text-blue_gray-100 text-center text-sm tracking-[0.42px]"
                      size="txtRobotoRegular14"
                    >
                      Calendar
                    </Text>
                    <Text
                      className="ml-[45px] text-blue_gray-100 text-center text-sm tracking-[0.42px]"
                      size="txtRobotoRegular14"
                    >
                      Results
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-[0.01px] w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start px-1 w-[21%] md:w-full">
                    <div className="flex flex-col items-start justify-start rounded w-auto sm:w-full">
                      <div className="bg-black-900 flex flex-row items-center justify-start p-3 rounded w-full">
                        <Button className="bg-gradient2  flex h-6 items-center justify-center p-1 rounded-[50%] w-6">
                          <Img
                            className="h-3.5"
                            src="images/img_frame_24x24.png"
                            alt="frame"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start ml-2 md:pr-10 sm:pr-5 pr-[247.33px] w-auto">
                          <Text
                            className="text-blue_gray-100 text-sm w-auto"
                            size="txtRobotoBold14"
                          >
                            Favorites
                          </Text>
                        </div>
                        <Img
                          className="h-3 ml-2.5 w-3"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <Input
                      name="divstylewrap"
                      placeholder="Search for game"
                      value={divstylewrapvalue}
                      onChange={(e) => setDivstylewrapvalue(e)}
                      className="leading-[normal] p-0 placeholder:text-gray-800_02 text-gray-800_02 text-left text-sm w-full"
                      wrapClassName="bg-black-900 border border-blue_gray-900_01 border-solid flex mt-1 px-[17px] py-3 rounded w-auto"
                      suffix={
                        divstylewrapvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-3.5 ml-[35px] my-px"
                            onClick={() => setDivstylewrapvalue("")}
                            fillColor="#4d4d4d"
                            height={14}
                            width={14}
                            viewBox="0 0 14 14"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-3.5 ml-[35px] my-px"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                    <div className="md:h-[1205px] sm:h-[1418px] h-[823px] mt-1 pb-1 relative w-[390px] sm:w-full">
                      <div className="bg-gray-900_01 flex flex-col h-full items-center justify-start m-auto pb-1 w-auto">
                        <div className="bg-black-900 flex flex-row gap-[187.16px] items-start justify-start px-1.5 py-2 rounded-tl w-auto sm:w-full">
                          <Text
                            className="capitalize text-base text-blue_gray-100 w-auto"
                            size="txtRobotoRegular16"
                          >
                            Markets
                          </Text>
                          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                            <SelectBox
                              className="bg-blue_gray-900_01 px-2 py-1 rounded text-blue_gray-100 text-left text-xs w-[78%] sm:w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-2 w-2"
                                  src="images/img_arrowdown_blue_gray_100.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="divpickerbutto"
                              options={divpickerbuttoOptionsList}
                              isSearchable={false}
                              placeholder="Match Result"
                            />
                            <Button className="bg-blue_gray-900_01 flex h-6 items-center justify-center p-1 rounded w-6">
                              <Img
                                src="images/img_minimize.svg"
                                alt="minimize"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto pb-[302px] w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start rounded w-auto sm:w-full">
                          <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex flex-row items-center justify-between p-[7px] w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_dashboard.svg"
                                alt="dashboard"
                              />
                              <Text
                                className="text-blue_gray-100 text-xs w-auto"
                                size="txtRobotoBold12Bluegray100"
                              >
                                World, International Friendlies
                              </Text>
                            </div>
                            <Img
                              className="h-3 mr-1.5 w-3"
                              src="images/img_arrowup.svg"
                              alt="arrowup"
                            />
                          </div>
                          <div className="h-28 md:h-[110px] pl-1 relative w-[390px] sm:w-full">
                            <div className="h-28 md:h-[110px] m-auto w-full">
                              <div className="absolute bg-black-900 border-l-4 border-orange-A700 border-solid h-[110px] inset-[0] m-auto w-full"></div>
                              <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-[99%] sm:w-full">
                                <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                  <div className="flex flex-row items-start justify-start ml-1.5 mt-0.5 w-[76%]">
                                    <div className="bg-red-A200_01 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                                    <Text
                                      className="ml-1 text-[11px] text-blue_gray-100"
                                      size="txtRobotoBold11"
                                    >
                                      <>2nd Half 79&#39;</>
                                    </Text>
                                    <Img
                                      className="h-3 ml-52 w-3"
                                      src="images/img_frame_gray_600.svg"
                                      alt="frame_One"
                                    />
                                  </div>
                                  <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                    <Img
                                      className="h-3"
                                      src="images/img_signal.svg"
                                      alt="signal"
                                    />
                                  </Button>
                                  <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                    <Img
                                      className="h-3"
                                      src="images/img_star.svg"
                                      alt="star"
                                    />
                                  </Button>
                                </div>
                                <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                  <Text
                                    className="text-blue_gray-100 text-xs w-auto"
                                    size="txtRobotoRegular12"
                                  >
                                    +24
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 w-[99%] md:w-full">
                              <List
                                className="flex flex-col gap-px items-center w-[98%]"
                                orientation="vertical"
                              >
                                <div className="flex flex-row items-center justify-start my-0 pb-1 w-auto">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[278px] w-[96%]">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6192webp.png"
                                      alt="6192webp"
                                    />
                                    <Text
                                      className="mt-[3px] text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Malaysia
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    8
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start my-0 pb-1 w-auto">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[225px] w-[96%]">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6164webp.png"
                                      alt="6164webp"
                                    />
                                    <Text
                                      className="mt-[3px] text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Papua New Guinea
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    0
                                  </Text>
                                </div>
                              </List>
                              <Text
                                className="border-blue_gray-900_01 border-solid border-t mt-1 pb-[3px] sm:pr-5 pr-[35px] pt-1.5 text-blue_gray-100 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                <>8 : 0, (1:0), (7:0) 79\&#96;</>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-0.5 items-start justify-start rounded w-auto sm:w-full">
                          <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex flex-row items-center justify-between p-[7px] w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_globe_green_800.svg"
                                alt="globe"
                              />
                              <Text
                                className="text-blue_gray-100 text-xs w-auto"
                                size="txtRobotoBold12Bluegray100"
                              >
                                Africa, Africa Cup of Nations
                              </Text>
                            </div>
                            <Img
                              className="h-3 mr-1.5 w-3"
                              src="images/img_arrowup.svg"
                              alt="arrowup_One"
                            />
                          </div>
                          <List
                            className="flex flex-col gap-0.5 items-start w-auto"
                            orientation="vertical"
                          >
                            <div className="md:h-[140px] h-[142px] sm:h-[187px] my-0 relative w-[390px] sm:w-full">
                              <div className="md:h-[140px] h-[141px] m-auto w-full">
                                <div className="absolute bg-black-900 h-[140px] inset-[0] m-auto w-full"></div>
                                <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                  <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                    <div className="flex flex-row items-start justify-start ml-1.5 mt-0.5 w-[77%]">
                                      <div className="bg-red-A200_01 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="ml-1 text-[11px] text-blue_gray-100"
                                        size="txtRobotoBold11"
                                      >
                                        <>2nd Half 71&#39;</>
                                      </Text>
                                      <Img
                                        className="h-3 ml-[212px] w-3"
                                        src="images/img_frame_gray_600.svg"
                                        alt="frame"
                                      />
                                    </div>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_signal.svg"
                                        alt="signal"
                                      />
                                    </Button>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_star.svg"
                                        alt="star"
                                      />
                                    </Button>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      +36
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[289px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6389webp.png"
                                      alt="6389webp"
                                    />
                                    <Text
                                      className="mt-0.5 text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Burundi
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[285px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6180webp.png"
                                      alt="6180webp"
                                    />
                                    <Text
                                      className="mt-0.5 text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Namibia
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    1
                                  </Text>
                                </div>
                                <Img
                                  className="h-[30px] w-[378px]"
                                  src="images/img_divamflexbox.svg"
                                  alt="divamflexbox"
                                />
                                <Text
                                  className="border-blue_gray-900_01 border-solid border-t mt-1 pb-[3px] sm:pr-5 pr-[35px] pt-1.5 text-blue_gray-100 text-xs w-auto"
                                  size="txtRobotoRegular12"
                                >
                                  <>3 : 1, (3:1), (0:0) 71\&#96;</>
                                </Text>
                              </div>
                            </div>
                            <div className="md:h-[140px] h-[142px] sm:h-[187px] my-0 relative w-[390px] sm:w-full">
                              <div className="md:h-[140px] h-[142px] m-auto w-full">
                                <div className="absolute bg-black-900 h-[140px] inset-[0] m-auto w-full"></div>
                                <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                  <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                    <div className="flex flex-row items-start justify-start ml-1.5 mt-0.5 w-[77%]">
                                      <div className="bg-red-A200_01 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="ml-1 text-[11px] text-blue_gray-100"
                                        size="txtRobotoBold11"
                                      >
                                        <>1st Half 39&#39;</>
                                      </Text>
                                      <Img
                                        className="h-3 ml-[215px] w-3"
                                        src="images/img_frame_gray_600.svg"
                                        alt="frame"
                                      />
                                    </div>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_signal.svg"
                                        alt="signal"
                                      />
                                    </Button>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_star.svg"
                                        alt="star"
                                      />
                                    </Button>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      +93
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[286px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6174webp.png"
                                      alt="6174webp"
                                    />
                                    <Text
                                      className="mt-[3px] text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Ethiopia
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    0
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[291px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6179webp.png"
                                      alt="6179webp"
                                    />
                                    <Text
                                      className="mt-0.5 text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Malawi
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    0
                                  </Text>
                                </div>
                                <Img
                                  className="h-[30px] w-[378px]"
                                  src="images/img_divamflexbox.svg"
                                  alt="divamflexbox"
                                />
                                <Text
                                  className="border-blue_gray-900_01 border-solid border-t mt-1 pb-[3px] sm:pr-5 pr-[35px] pt-1.5 text-blue_gray-100 text-xs w-auto"
                                  size="txtRobotoRegular12"
                                >
                                  <>0 : 0, (0:0) 39\&#96;</>
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                        <List
                          className="flex flex-col gap-1 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex sm:flex-1 flex-col gap-0.5 items-start justify-start rounded w-auto sm:w-full">
                            <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex flex-row items-center justify-between p-[7px] w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <Button className="bg-orange-800 flex h-6 items-center justify-center p-0.5 rounded-[50%] w-6">
                                  <Img
                                    src="images/img_globe_white_a700.svg"
                                    alt="globe"
                                  />
                                </Button>
                                <Text
                                  className="text-blue_gray-100 text-xs w-auto"
                                  size="txtRobotoBold12Bluegray100"
                                >
                                  Asia, CAFA Nations Cup
                                </Text>
                              </div>
                              <Img
                                className="h-3 mr-1.5 w-3"
                                src="images/img_arrowup.svg"
                                alt="arrowup"
                              />
                            </div>
                            <div className="md:h-[140px] h-[142px] sm:h-[187px] relative w-[390px] sm:w-full">
                              <div className="md:h-[140px] h-[142px] m-auto w-full">
                                <div className="absolute bg-black-900 h-[140px] inset-[0] m-auto w-full"></div>
                                <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                  <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                    <div className="flex flex-row items-start justify-start ml-1.5 mt-0.5 w-[77%]">
                                      <div className="bg-red-A200_01 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="ml-1 text-[11px] text-blue_gray-100"
                                        size="txtRobotoBold11"
                                      >
                                        <>2nd Half 49&#39;</>
                                      </Text>
                                      <Img
                                        className="h-3 ml-[212px] w-3"
                                        src="images/img_frame_gray_600.svg"
                                        alt="frame"
                                      />
                                    </div>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_signal.svg"
                                        alt="signal"
                                      />
                                    </Button>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center ml-2 p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_star.svg"
                                        alt="star"
                                      />
                                    </Button>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      +50
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[271px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_6191webp.png"
                                      alt="6191webp"
                                    />
                                    <Text
                                      className="mt-[3px] text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Kyrgyzstan
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    0
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-center justify-start md:pr-10 sm:pr-5 pr-[298px] w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_2568webp.png"
                                      alt="2568webp"
                                    />
                                    <Text
                                      className="text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      Oman
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    0
                                  </Text>
                                </div>
                                <Img
                                  className="h-[30px] w-[378px]"
                                  src="images/img_divamflexbox.svg"
                                  alt="divamflexbox"
                                />
                                <Text
                                  className="border-blue_gray-900_01 border-solid border-t mt-1 pb-[3px] sm:pr-5 pr-[35px] pt-1.5 text-blue_gray-100 text-xs w-auto"
                                  size="txtRobotoRegular12"
                                >
                                  <>0 : 0, (0:0), (0:0) 49\&#96;</>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col gap-0.5 items-start justify-start pb-28 rounded w-auto sm:w-full">
                            <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex flex-row items-center justify-between p-[7px] w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_contrast.svg"
                                  alt="contrast"
                                />
                                <Text
                                  className="text-blue_gray-100 text-xs w-auto"
                                  size="txtRobotoBold12Bluegray100"
                                >
                                  Estonia, U19 League
                                </Text>
                              </div>
                              <Img
                                className="h-3 mr-1.5 w-3"
                                src="images/img_arrowup.svg"
                                alt="arrowup"
                              />
                            </div>
                            <div className="sm:h-[147px] h-[69px] md:h-[75px] relative w-[390px] sm:w-full">
                              <div className="md:h-[67px] h-[69px] m-auto w-full">
                                <div className="absolute bg-black-900 h-[67px] inset-[0] m-auto w-full"></div>
                                <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                  <div className="absolute border-b border-gray-900_03 border-solid flex flex-row gap-2 h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                    <div className="flex flex-row items-start justify-start ml-1.5 mt-0.5 w-[84%]">
                                      <div className="bg-red-A200_01 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="ml-1 text-[11px] text-blue_gray-100"
                                        size="txtRobotoBold11"
                                      >
                                        <>1st Half 38&#39;</>
                                      </Text>
                                      <Img
                                        className="h-3 ml-[243px] w-3"
                                        src="images/img_frame_gray_600.svg"
                                        alt="frame"
                                      />
                                    </div>
                                    <Button className="bg-gray-900_03 flex h-5 items-center justify-center p-1 rounded w-5">
                                      <Img
                                        className="h-3"
                                        src="images/img_star.svg"
                                        alt="star"
                                      />
                                    </Button>
                                  </div>
                                  <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      +44
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[33px] pt-1 px-2 w-auto">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-56 w-[96%] sm:w-full">
                                    <Img
                                      className="h-5 md:h-auto object-cover w-5"
                                      src="images/img_426587webp.png"
                                      alt="426587webp"
                                    />
                                    <Text
                                      className="mt-0.5 text-blue_gray-100 text-xs"
                                      size="txtRobotoRegular12"
                                    >
                                      FC Helios Tartu U19
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 flex h-4 items-center justify-center rounded-sm text-blue_gray-100 text-center text-xs w-4"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start pb-1 w-auto sm:w-full">
                                  <div className="flex flex-row gap-2 items-center justify-start md:pr-10 sm:pr-5 pr-[178.33px] w-auto">
                                    <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start rounded-[7px] w-[12%]">
                                      <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start pt-[3px] px-[3px] rounded-[7px] w-full">
                                        <Text
                                          className="text-[11px] text-blue_gray-100"
                                          size="txtRobotoRegular11"
                                        >
                                          ID
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="text-blue_gray-100 text-xs w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      Ida-Virumaa FC Alliance U19
                                    </Text>
                                  </div>
                                  <Text
                                    className="bg-blue_gray-900_01 justify-center px-1 rounded-sm text-blue_gray-100 text-xs w-auto"
                                    size="txtRobotoBold12Bluegray100"
                                  >
                                    5
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <div className="bg-black-900 border-b border-gray-900_03 border-solid flex flex-col items-start justify-start pl-3 pr-1 py-[7.5px] rounded w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="bg-gray-900_02 flex flex-col items-center justify-start pl-[17.39px] pr-[17.41px] py-3 rounded-[16px] w-auto">
                            <div className="relative w-[73%]">
                              <Img
                                className="h-8 mt-auto w-8"
                                src="images/img_globe_blue_gray_50.svg"
                                alt="globe_One"
                              />
                              <div className="absolute right-[0] top-[0] w-[38%]">
                                <div className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full"></div>
                                <Text
                                  className="m-auto relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  8
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pl-[7px] pr-[8.2px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                Football
                              </Text>
                            </div>
                            <div className="bg-yellow-900 h-0.5 rounded-[1px] w-[55%]"></div>
                          </div>
                          <div className="bg-black-900 flex flex-col items-center justify-start pl-[11.23px] pr-[11.25px] py-3 rounded-[16px] w-auto">
                            <div className="relative w-[61%]">
                              <div className="bg-yellow-900_01 flex flex-col h-8 items-center justify-start mt-auto rounded-[50%] w-8">
                                <Img
                                  className="h-[31px] w-[31px]"
                                  src="images/img_cut.svg"
                                  alt="cut"
                                />
                              </div>
                              <div className="absolute right-[0] top-[0] w-[38%]">
                                <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                                <Text
                                  className="mx-auto relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  5
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pl-[7px] pr-[8.52px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                Basketball
                              </Text>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-1 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 w-[81%] md:w-full"
                            orientation="horizontal"
                          >
                            {new Array(9).fill({}).map((props, index) => (
                              <React.Fragment key={`GameCategory${index}`}>
                                <GameCategory
                                  className="bg-black-900 flex flex-col items-center justify-start sm:ml-[0] sm:px-5 px-[21.36px] py-3 rounded-[16px] w-auto"
                                  {...props}
                                />
                              </React.Fragment>
                            ))}
                          </List>
                          <div className="bg-black-900 flex flex-col items-start justify-start pb-3 pt-11 rounded-md w-auto">
                            <div className="flex flex-col items-start justify-start pl-2 pr-[7.19px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                Counter-Strike: GO
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2 w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start px-1 w-auto">
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <div
                            className="bg-black-900_7f bg-cover bg-no-repeat flex flex-col gap-1.5 h-32 items-center justify-start p-[7px] rounded w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_divstylecard.png')",
                            }}
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                              <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[777.53px] w-auto md:w-full">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_dashboard.svg"
                                  alt="dashboard_One"
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-[13px] text-white-A700 w-auto"
                                    size="txtRobotoRegular13"
                                  >
                                    World - International Friendlies
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="bg-red-A200_01 justify-center px-[7px] rounded text-white-A700 text-xs w-auto"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>2nd Half 79&#39;</>
                              </Text>
                              <Img
                                className="h-3 ml-2.5 md:ml-[0] md:mt-0 mt-1 w-3"
                                src="images/img_signal.svg"
                                alt="signal_One"
                              />
                            </div>
                            <div className="border-gray-500 border-solid border-t flex flex-row md:gap-10 items-start justify-between pt-1 w-full">
                              <List
                                className="flex flex-col gap-1 items-start pb-1 w-auto"
                                orientation="vertical"
                              >
                                <div className="flex flex-row gap-2.5 items-center justify-between my-0 w-full">
                                  <Img
                                    className="h-6 md:h-auto object-cover w-6"
                                    src="images/img_6192webp_24x24.png"
                                    alt="6192webp"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[53px] w-auto">
                                    <Text
                                      className="text-white-A700 text-xs w-auto"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      Malaysia
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-2.5 items-center justify-between my-0 w-full">
                                  <Img
                                    className="h-6 md:h-auto object-cover w-6"
                                    src="images/img_6164webp_24x24.png"
                                    alt="6164webp"
                                  />
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtRobotoRegular12WhiteA700"
                                    >
                                      Papua New Guinea
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <div className="flex flex-row items-start justify-center w-[14%]">
                                <List
                                  className="sm:flex-col flex-row gap-[0.5px] grid grid-cols-[repeat(3,_1fr_1px)_1fr] py-0.5 w-[70%]"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-3 w-3"
                                      src="images/img_user.svg"
                                      alt="user"
                                    />
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[5px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      7
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-0.5 text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      2
                                    </Text>
                                  </div>
                                  <Line className="self-center h-7 bg-gray-500 w-px" />
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-3 w-3"
                                      src="images/img_computer.svg"
                                      alt="computer"
                                    />
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[5px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-0.5 text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      2
                                    </Text>
                                  </div>
                                  <Line className="self-center h-7 bg-gray-500 w-px" />
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-3 w-3"
                                      src="images/img_contrast_white_a700.svg"
                                      alt="contrast"
                                    />
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[5px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      1
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[3px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      0
                                    </Text>
                                  </div>
                                  <Line className="self-center h-7 bg-gray-500 w-px" />
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                                    <Img
                                      className="h-3 w-3"
                                      src="images/img_contrast_white_a700_12x12.svg"
                                      alt="contrast"
                                    />
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[5px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      7
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[3px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      0
                                    </Text>
                                  </div>
                                </List>
                                <Line className="bg-gray-500 h-7 mb-2 mt-[19px] w-px" />
                                <div className="flex flex-col items-center justify-start ml-[7px] mt-[3px] w-1/4">
                                  <Text
                                    className="text-[10px] text-blue_gray-100 text-center"
                                    size="txtRobotoRegular10"
                                  >
                                    Score
                                  </Text>
                                  <div className="flex flex-col items-center justify-start mt-1">
                                    <Text
                                      className="text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      8
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-center text-white-A700 text-xs"
                                      size="txtRobotoBold12WhiteA700"
                                    >
                                      0
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-gray-500 border-solid border-t flex flex-row md:gap-10 items-start justify-between pt-[7px] w-full">
                              <div className="flex flex-col items-start justify-start mt-1 w-auto">
                                <Text
                                  className="text-white-A700 text-xs w-auto"
                                  size="txtRobotoRegular12WhiteA700"
                                >
                                  <>
                                    8 : 0, (1:0), (7:0) 79\&#96;    Possible
                                    Format Change 
                                  </>
                                </Text>
                              </div>
                              <Button
                                className="bg-gray-600_90 cursor-pointer flex items-center justify-center min-w-[105px] px-[11px] rounded"
                                leftIcon={
                                  <Img
                                    className="h-5 mr-[7px]"
                                    src="images/img_settings.svg"
                                    alt="settings"
                                  />
                                }
                              >
                                <div className="text-black-900 text-left text-sm">
                                  Timeline
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-gray-900_01 flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start pb-[55px] w-auto">
                              <div className="bg-black-900 flex sm:flex-col flex-row md:gap-10 items-start justify-between md:pr-10 sm:pr-5 pr-[749.72px] rounded-tl rounded-tr w-auto md:w-full">
                                <div className="flex flex-row gap-1 items-start justify-start pl-2 md:pr-10 sm:pr-5 pr-[49px] py-2.5 w-auto">
                                  <div className="bg-gray-900_02 flex flex-col items-start justify-start px-3 py-2 rounded-lg w-auto">
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_star_yellow_900.svg"
                                      alt="star_One"
                                    />
                                  </div>
                                  <Button className="bg-yellow-900 cursor-pointer min-w-[39px] py-2 rounded-lg text-center text-white-A700 text-xs tracking-[0.48px]">
                                    All
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[60px] py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Match
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[85px] py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Handicaps
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[59px] py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Totals
                                  </Button>
                                </div>
                                <div className="bg-black-900 flex flex-col items-start justify-start px-2 py-2.5 w-auto">
                                  <Button className="bg-gray-900_02 flex h-8 items-center justify-center p-1.5 rounded-lg w-8">
                                    <Img
                                      src="images/img_upload.svg"
                                      alt="upload"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[915.58px] py-1 w-auto md:w-full">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_star.svg"
                                          alt="star_Two"
                                        />
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                            size="txtRobotoBold12Bluegray100"
                                          >
                                            Total Goals
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start pr-1 py-1 w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start pl-1 pr-[7.75px] w-auto">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_link.svg"
                                            alt="link"
                                          />
                                          <Text
                                            className="text-gray-600 text-xs w-auto"
                                            size="txtRobotoBold12Gray600"
                                          >
                                            1
                                          </Text>
                                        </div>
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_vector.svg"
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Two"
                                      />
                                    </div>
                                    <Img
                                      className="h-[120px]"
                                      src="images/img_divstylebodyscs6lgwx6.svg"
                                      alt="divstylebodyscs"
                                    />
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[863.58px] py-1 w-auto md:w-full">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_star.svg"
                                          alt="star_Three"
                                        />
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                            size="txtRobotoBold12Bluegray100"
                                          >
                                            Malaysia Total Goals
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start pr-1 py-1 w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start pl-1 pr-[7.75px] w-auto">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_link.svg"
                                            alt="link_One"
                                          />
                                          <Text
                                            className="text-gray-600 text-xs w-auto"
                                            size="txtRobotoBold12Gray600"
                                          >
                                            1
                                          </Text>
                                        </div>
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_vector.svg"
                                          alt="vector_Two"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Three"
                                      />
                                    </div>
                                    <Img
                                      className="h-[120px]"
                                      src="images/img_divstylebodyscs6lgwx6.svg"
                                      alt="divstylebodyscs_One"
                                    />
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[891.58px] py-1 w-auto md:w-full">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_star.svg"
                                          alt="star_Four"
                                        />
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                            size="txtRobotoBold12Bluegray100"
                                          >
                                            Goals Handicap
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start pr-1 py-1 w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start pl-1 pr-[7.75px] w-auto">
                                          <Img
                                            className="h-4 w-4"
                                            src="images/img_link.svg"
                                            alt="link_Two"
                                          />
                                          <Text
                                            className="text-gray-600 text-xs w-auto"
                                            size="txtRobotoBold12Gray600"
                                          >
                                            1
                                          </Text>
                                        </div>
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_vector.svg"
                                          alt="vector_Three"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Four"
                                      />
                                    </div>
                                    <div className="h-36 relative w-full">
                                      <div className="bg-black-900 flex flex-col h-full items-center justify-end m-auto py-2 w-full">
                                        <div className="bg-black-900 h-9 mt-5 w-full"></div>
                                        <div className="bg-black-900 h-9 w-full"></div>
                                        <div className="bg-black-900 h-9 w-full"></div>
                                      </div>
                                      <div className="absolute h-6 md:h-[23px] inset-x-[0] mx-auto top-[3%] w-full">
                                        <div className="bg-black-900 flex flex-col h-full items-start justify-start m-auto w-full">
                                          <div className="flex flex-col items-start justify-start pl-2 md:pr-10 sm:pr-5 pr-[494.67px] py-1 w-auto sm:w-full">
                                            <Text
                                              className="text-orange-A700 text-xs tracking-[0.42px] w-auto"
                                              size="txtRobotoRegular12OrangeA700"
                                            >
                                              Malaysia
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto pl-0.5 md:pr-10 sm:pr-5 pr-[443.67px] py-1 right-[0] w-auto">
                                          <Text
                                            className="text-orange-A700 text-xs tracking-[0.42px] w-auto"
                                            size="txtRobotoRegular12OrangeA700"
                                          >
                                            Papua New Guinea
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[880.58px] py-1 w-auto md:w-full">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_star.svg"
                                          alt="star_Five"
                                        />
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                            size="txtRobotoBold12Bluegray100"
                                          >
                                            Goals Asian Handicap
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex flex-row gap-1 items-center justify-start pl-1 pr-[7.75px] w-auto">
                                        <Img
                                          className="h-4 w-4"
                                          src="images/img_link.svg"
                                          alt="link_Three"
                                        />
                                        <Text
                                          className="text-gray-600 text-xs w-auto"
                                          size="txtRobotoBold12Gray600"
                                        >
                                          1
                                        </Text>
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Five"
                                      />
                                    </div>
                                    <div className="md:h-[74px] h-[75px] relative w-full">
                                      <div className="bg-black-900 flex flex-col h-full items-center justify-end m-auto py-[11px] w-full">
                                        <div className="bg-black-900 h-9 mt-4 w-full"></div>
                                      </div>
                                      <div className="absolute h-6 md:h-[23px] inset-x-[0] mx-auto top-[5%] w-full">
                                        <div className="bg-black-900 flex flex-col h-full items-start justify-start m-auto w-full">
                                          <div className="flex flex-col items-start justify-start pl-2 md:pr-10 sm:pr-5 pr-[494.67px] py-1 w-auto sm:w-full">
                                            <Text
                                              className="text-orange-A700 text-xs tracking-[0.42px] w-auto"
                                              size="txtRobotoRegular12OrangeA700"
                                            >
                                              Malaysia
                                            </Text>
                                          </div>
                                        </div>
                                        <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto pl-0.5 md:pr-10 sm:pr-5 pr-[443.67px] py-1 right-[0] w-auto">
                                          <Text
                                            className="text-orange-A700 text-xs tracking-[0.42px] w-auto"
                                            size="txtRobotoRegular12OrangeA700"
                                          >
                                            Papua New Guinea
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bg-black-900 bottom-[0] h-[11px] inset-x-[0] mx-auto w-full"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start px-1 w-[21%] md:w-full">
                    <div className="bg-black-900 flex flex-col items-start justify-start pt-1 rounded shadow-bs1 w-full">
                      <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start ml-1 md:ml-[0] p-[3px] rounded w-[9%] md:w-full">
                        <Button className="bg-gray-900_02 border border-gray-800_01 border-solid flex h-[26px] items-center justify-center p-[5px] rotate-[-90deg] rounded-[5px] w-[26px]">
                          <Img
                            src="images/img_vector_blue_gray_100.svg"
                            alt="vector_Four"
                          />
                        </Button>
                      </div>
                      <div className="bg-black-900 h-[214px] mt-1 w-full"></div>
                      <div className="flex flex-col items-start justify-start rounded w-auto sm:w-full">
                        <div className="bg-black-900 flex flex-row gap-[5.99px] items-center justify-start pl-2 pr-[14.01px] py-[8.5px] rounded w-auto">
                          <div className="flex flex-row items-start justify-start px-[9px] w-[96%]">
                            <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[70px] w-[49%]">
                              <div className="flex flex-col items-start justify-start pr-[0.47px] w-auto">
                                <Text
                                  className="text-blue_gray-100 text-right text-xs tracking-[0.10px] w-auto"
                                  size="txtRobotoBold12Bluegray100"
                                >
                                  Malaysia
                                </Text>
                              </div>
                              <Img
                                className="h-5 md:h-auto ml-1 object-cover w-5"
                                src="images/img_6192webp_24x24.png"
                                alt="6192webp"
                              />
                              <Text
                                className="border-b-2 border-blue_gray-100_03 border-solid ml-2 py-0.5 text-orange-A700 text-sm tracking-[0.30px]"
                                size="txtRobotoBold14OrangeA700"
                              >
                                8
                              </Text>
                            </div>
                            <Text
                              className="ml-1 mt-1 text-orange-A700 text-xs"
                              size="txtRobotoBold12"
                            >
                              :
                            </Text>
                            <div className="flex flex-row items-center justify-center ml-0.5 pr-[17px] w-[49%]">
                              <div className="h-[22px] relative w-[6%]">
                                <div className="absolute border-b-2 border-indigo-A200 border-solid h-[22px] inset-[0] justify-center m-auto w-full"></div>
                                <Text
                                  className="absolute inset-x-[0] mx-auto text-orange-A700 text-sm top-[0] tracking-[0.30px] w-max"
                                  size="txtRobotoBold14OrangeA700"
                                >
                                  0
                                </Text>
                              </div>
                              <Img
                                className="h-5 md:h-auto ml-[7px] object-cover w-5"
                                src="images/img_6164webp_24x24.png"
                                alt="6164webp"
                              />
                              <div className="flex flex-col items-start justify-start ml-1 w-auto">
                                <Text
                                  className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                  size="txtRobotoBold12Bluegray100"
                                >
                                  Papua New Guinea
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-3 w-3"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-1 w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                          <div className="bg-black-900 flex flex-col items-start justify-start w-auto sm:w-full">
                            <div className="bg-black-900 flex flex-row gap-[3.58px] items-center justify-start pl-[160.87px] pr-[161.88px] md:px-10 sm:px-5 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-sm w-auto"
                                size="txtRobotoBold14"
                              >
                                Betslip
                              </Text>
                              <Text
                                className="bg-orange-A700 flex h-5 items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-5"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                0
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col gap-px items-start justify-start w-auto">
                              <div className="bg-black-900 flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[200.32px] pr-[12.01px] py-2 shadow-bs1 w-auto sm:w-full">
                                <div className="flex flex-row gap-3 items-start justify-start pl-3 w-auto">
                                  <div className="flex flex-col items-center justify-start w-[55%] sm:w-full">
                                    <SelectBox
                                      className="bg-black-900 border border-blue_gray-900_01 border-solid pl-2 pr-[11px] py-[3px] rounded text-blue_gray-100 text-left text-sm tracking-[0.42px] w-full"
                                      placeholderClassName="text-blue_gray-100"
                                      indicator={
                                        <Img
                                          className="h-3 w-3"
                                          src="images/img_arrowdown_gray_500_01.svg"
                                          alt="arrow_down"
                                        />
                                      }
                                      isMulti={false}
                                      name="divv3selectsele"
                                      options={divv3SelectseleOptionsList}
                                      isSearchable={false}
                                      placeholder="Single"
                                    />
                                  </div>
                                  <Img
                                    className="h-6 w-16"
                                    src="images/img_divamflexbox_gray_900_03.svg"
                                    alt="divamflexbox"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                                <div className="bg-gray-900_04 flex flex-col items-center justify-end p-0.5 w-full">
                                  <Img
                                    className="h-44 mt-[277px] w-44"
                                    src="images/img_svg.svg"
                                    alt="svg"
                                  />
                                  <Text
                                    className="text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900"
                                    size="txtRobotoBold24"
                                  >
                                    No Bets yet
                                  </Text>
                                  <div className="flex flex-col items-start justify-start mt-1.5 pl-[13.96px] pr-[15.04px] w-auto">
                                    <Text
                                      className="leading-[21.00px] text-blue_gray-100 text-center text-sm"
                                      size="txtRobotoRegular14"
                                    >
                                      <>
                                        There are no bets placed yet. Make your
                                        <br />
                                        bets to see them here.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1559px] mx-auto w-full">
                <Img
                  className="h-[37px] md:h-auto object-cover w-full"
                  src="images/img_364partnerspng_37x1559.png"
                  alt="364partnerspng"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end sm:pl-5 pl-[30px] py-[30px] w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-3.5 md:px-5 w-auto">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[59.17px] w-auto">
                    <Text
                      className="capitalize text-orange-A700 text-sm w-auto"
                      size="txtRobotoRegular14OrangeA700"
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

export default LivePage;
