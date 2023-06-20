import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import GameCategory from "components/GameCategory";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const divleftsidebaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divstylewrapOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divstylewrapTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divstylewrapThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divpickerbuttoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const teamplayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const leagueOfLegendsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kingOfGloryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const eFootballOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const eBasketballOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divv3SelectseleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EsportsPage: React.FC = () => {
  const [divstylewrapvalue, setDivstylewrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="md:h-[3687px] h-[993px] md:px-5 relative w-full">
              <Img
                className="h-[993px] m-auto object-cover w-full"
                src="images/img_r265background1webp.png"
                alt="r265backgroundOne"
              />
              <div className="absolute bg-gray-900_01 flex flex-col h-max inset-[0] items-center justify-start m-auto px-1 py-2 w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-[0.01px] w-auto">
                  <div className="flex flex-col items-center justify-start px-1 w-[21%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <SelectBox
                        className="font-bold pl-3 pr-[18px] py-3 rounded text-blue_gray-100 text-left text-sm w-full"
                        placeholderClassName="text-blue_gray-100"
                        indicator={
                          <Img
                            className="h-3 w-3"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isSearchable={false}
                        placeholder="Favorites"
                        getOptionLabel={(e) =>
                          (
                            <div className="flex items-center">
                              <Img
                                className="h-3.5 mr-2 pt-1 pb-[5px] bg-gradient2  w-3.5 rounded-[50%] px-1"
                                src="images/img_frame_24x24.png"
                                alt="Vector"
                              />
                              <span>{e.label}</span>
                            </div>
                          ) as unknown as string
                        }
                        name="divleftsideba"
                        isMulti={false}
                        options={divleftsidebaOptionsList}
                      />
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
                      <div className="bg-black-900 flex flex-col items-start justify-start mt-[3px] rounded w-auto sm:w-full">
                        <div className="flex flex-col gap-1 items-start justify-start p-4 rounded w-auto">
                          <div className="flex flex-col items-start justify-start pl-3 md:pr-10 sm:pr-5 pr-[293.33px] py-3 w-auto">
                            <Text
                              className="text-blue_gray-100 text-lg w-auto"
                              size="txtRobotoBold18"
                            >
                              Esport
                            </Text>
                          </div>
                          <List
                            className="flex flex-col gap-1 items-start w-auto"
                            orientation="vertical"
                          >
                            <div className="flex flex-row gap-[173.73px] items-center justify-start my-0 pl-3 pr-[12.01px] py-2 w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start py-1 w-auto">
                                <Img
                                  className="h-8 w-8"
                                  src="images/img_file_32x32.svg"
                                  alt="file"
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-blue_gray-100 w-auto"
                                    size="txtRobotoRegular16"
                                  >
                                    All Games
                                  </Text>
                                </div>
                              </div>
                              <Button className="bg-gray-900_03 cursor-pointer min-w-[47px] py-[5px] rounded-lg text-blue_gray-100 text-center text-sm">
                                254
                              </Button>
                            </div>
                            <div className="bg-gray-900_03 flex flex-row gap-[159.59px] items-center justify-start my-0 pl-3 pr-[12.01px] py-2 rounded-[12px] w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start py-1 w-auto">
                                <Img
                                  className="h-8 w-8"
                                  src="images/img_youtube.svg"
                                  alt="youtube"
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-blue_gray-100 w-auto"
                                    size="txtRobotoRegular16"
                                  >
                                    Live Matches
                                  </Text>
                                </div>
                              </div>
                              <Button className="bg-blue_gray-900_01 cursor-pointer min-w-[39px] py-[5px] rounded-lg text-blue_gray-100 text-center text-sm">
                                16
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[177.73px] items-center justify-start my-0 pl-3 pr-[12.01px] py-2 w-auto">
                              <div className="flex flex-row gap-2 items-center justify-start py-1 w-auto">
                                <Img
                                  className="h-8 w-8"
                                  src="images/img_calendar_gray_50_02.svg"
                                  alt="calendar"
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-base text-blue_gray-100 w-auto"
                                    size="txtRobotoRegular16"
                                  >
                                    PreMatch
                                  </Text>
                                </div>
                              </div>
                              <Button className="bg-gray-900_03 cursor-pointer min-w-[47px] py-[5px] rounded-lg text-blue_gray-100 text-center text-sm">
                                239
                              </Button>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1 pb-[398px] w-auto sm:w-full">
                        <div className="bg-black-900 flex flex-col items-start justify-start rounded w-auto">
                          <div className="bg-black-900 flex flex-col gap-1 items-start justify-start p-2 rounded w-auto sm:w-full">
                            <Input
                              name="divallregions"
                              placeholder="All Regions"
                              className="font-bold p-0 placeholder:text-blue_gray-100 sm:pr-5 text-blue_gray-100 text-left text-sm w-full"
                              wrapClassName="bg-black-900 flex pl-3 pr-[35px] py-3.5 w-full"
                              prefix={
                                <Img
                                  className="h-6 mr-2 my-auto"
                                  src="images/img_dashboard.svg"
                                  alt="dashboard"
                                />
                              }
                            ></Input>
                            <SelectBox
                              className="bg-black-900 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-3 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="World"
                              getOptionLabel={(e) =>
                                (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-6 mr-2 w-6"
                                      src="images/img_dashboard.svg"
                                      alt="dashboard"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                ) as unknown as string
                              }
                              name="divstylewrap_One"
                              isMulti={false}
                              options={divstylewrapOneOptionsList}
                            />
                            <SelectBox
                              className="bg-black-900 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-3 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="Europe"
                              getOptionLabel={(e) =>
                                (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-6 mr-2 w-6"
                                      src="images/img_star_blue_900.svg"
                                      alt="star"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                ) as unknown as string
                              }
                              name="divstylewrap_Two"
                              isMulti={false}
                              options={divstylewrapTwoOptionsList}
                            />
                            <SelectBox
                              className="bg-black-900 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-3 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="North America"
                              getOptionLabel={(e) =>
                                (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-6 mr-2 w-6"
                                      src="images/img_contrast_gray_200_01.svg"
                                      alt="contrast"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                ) as unknown as string
                              }
                              name="divstylewrap_Three"
                              isMulti={false}
                              options={divstylewrapThreeOptionsList}
                            />
                            <SelectBox
                              className="bg-black-900 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-3 w-3"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="Czech Republic"
                              getOptionLabel={(e) =>
                                (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-6 mr-2 w-6"
                                      src="images/img_google_gray_200_01.svg"
                                      alt="google"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                ) as unknown as string
                              }
                              name="language"
                              isMulti={false}
                              options={languageOptionsList}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-1 w-auto md:w-full">
                    <div className="bg-black-900 border-b border-gray-900_03 border-solid flex flex-col items-start justify-start pl-3 md:pr-10 sm:pr-5 pr-[463.66px] py-[7.5px] rounded w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end pr-1 w-full">
                          <div className="bg-gray-900_02 flex flex-col items-center justify-start pl-[8.03px] pr-[8.05px] py-3 rounded-[16px] w-auto">
                            <div className="relative w-[56%]">
                              <Img
                                className="h-8 mt-auto w-8"
                                src="images/img_file_1.svg"
                                alt="file"
                              />
                              <div className="absolute right-[0] top-[0] w-[52%]">
                                <div className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full"></div>
                                <Text
                                  className="m-auto relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  16
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pl-2 pr-[7.92px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                All E-Sports
                              </Text>
                            </div>
                            <div className="bg-yellow-900 h-0.5 rounded-[1px] w-[42%]"></div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-2 ml-1 md:ml-[0] w-[38%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="bg-black-900 flex flex-col items-center justify-start py-3 rounded-[16px] w-auto">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[41px] w-[47%] md:w-full">
                                  <Button className="bg-amber-700 flex h-8 items-center justify-center mt-0.5 rounded-[50%] w-8">
                                    <Img
                                      src="images/img_ticket_white_a700.svg"
                                      alt="ticket"
                                    />
                                  </Button>
                                  <div className="ml-1 relative w-[31%]">
                                    <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                                    <Text
                                      className="mx-auto relative text-[11px] text-black-900"
                                      size="txtRobotoRegular11Black900"
                                    >
                                      2
                                    </Text>
                                  </div>
                                </div>
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
                            <div className="bg-black-900 flex flex-col items-center justify-start py-3 rounded-[16px] w-auto">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-1.5 items-start justify-end md:ml-[0] ml-[42px] w-[47%] md:w-full">
                                  <Button className="bg-orange-600 flex h-8 items-center justify-center mt-0.5 p-[5px] rounded-[50%] w-8">
                                    <Img
                                      className="h-5"
                                      src="images/img_file_white_a700.svg"
                                      alt="file"
                                    />
                                  </Button>
                                  <div className="relative w-[30%]">
                                    <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                                    <Text
                                      className="ml-[5px] relative text-[11px] text-black-900"
                                      size="txtRobotoRegular11Black900"
                                    >
                                      1
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start pl-[7px] pr-[8.48px] pt-2 w-auto">
                                  <Text
                                    className="text-blue_gray-100 text-center text-xs w-auto"
                                    size="txtRobotoRegular12"
                                  >
                                    League of Legends
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="bg-black-900 flex flex-col items-center justify-start ml-1 md:ml-[0] pl-[4.73px] pr-[4.75px] py-3 rounded-[16px] w-auto">
                            <div className="relative w-[51%]">
                              <Button className="bg-light_green-400 flex h-8 items-center justify-center mt-auto p-[5px] rounded-[50%] w-8">
                                <Img src="images/img_group.svg" alt="group" />
                              </Button>
                              <div className="absolute right-[0] top-[0] w-[38%]">
                                <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                                <Text
                                  className="ml-[5px] relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  1
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pl-2 pr-[7.52px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                King of Glory
                              </Text>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-1 grid grid-cols-2 ml-1 md:ml-[0] w-[31%] md:w-full"
                            orientation="horizontal"
                          >
                            <GameCategory className="bg-black-900 flex flex-col items-center justify-start px-[12.33px] py-3 rounded-[16px] w-auto" />
                            <GameCategory className="bg-black-900 flex flex-col items-center justify-start px-[6.17px] py-3 rounded-[16px] w-auto" />
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-[385.94px] w-auto md:w-full">
                      <div className="flex flex-col gap-1 items-start justify-start pb-2 pt-1 px-1 w-auto">
                        <div className="flex flex-col items-start justify-start pb-1 rounded w-auto md:w-full">
                          <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[11px] w-full">
                            <Button className="bg-amber-700 flex h-6 items-center justify-center rounded-[50%] w-6">
                              <Img
                                src="images/img_ticket_white_a700.svg"
                                alt="ticket"
                              />
                            </Button>
                            <Text
                              className="ml-2 md:ml-[0] text-base text-blue_gray-100"
                              size="txtRobotoBold16"
                            >
                              Counter-Strike: GO
                            </Text>
                            <Img
                              className="h-3 md:ml-[0] ml-[888px] w-3"
                              src="images/img_arrowup.svg"
                              alt="arrowup"
                            />
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pt-1 px-1 w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start pb-1 rounded w-auto md:w-full">
                              <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[11px] w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_dashboard.svg"
                                  alt="dashboard"
                                />
                                <Text
                                  className="ml-2 md:ml-[0] text-base text-blue_gray-100"
                                  size="txtRobotoBold16"
                                >
                                  Esports Battle
                                </Text>
                                <Img
                                  className="h-3 md:ml-[0] ml-[915px] w-3"
                                  src="images/img_arrowup.svg"
                                  alt="arrowup_One"
                                />
                              </div>
                              <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
                                <div className="border-b border-blue_gray-900_01 border-solid flex flex-row md:gap-10 gap-[844.58px] items-start justify-start pl-[7px] pr-3 py-[7.5px] w-auto md:w-full">
                                  <div className="flex flex-row gap-2.5 items-center justify-start pl-[5px] pr-[4.36px] w-auto">
                                    <div className="bg-gray-900_02 flex flex-row items-center justify-center p-[3px] rounded w-[46%]">
                                      <div className="bg-red-A400 h-1.5 ml-1 my-[5px] rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="mx-1 text-blue_gray-100 text-xs"
                                        size="txtRobotoRegular12"
                                      >
                                        1st Map
                                      </Text>
                                    </div>
                                    <Text
                                      className="text-blue_gray-100 text-sm w-auto"
                                      size="txtRobotoRegular14"
                                    >
                                      0:0 , ( 8:11 )
                                    </Text>
                                  </div>
                                  <SelectBox
                                    className="bg-blue_gray-900_01 px-2 py-1 rounded text-blue_gray-100 text-right text-xs w-[7%] sm:w-full"
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
                                    placeholder="Match"
                                  />
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-10 gap-[155.65px] items-center justify-start pl-3 pr-[12.02px] py-2 w-auto md:w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                                    <List
                                      className="flex flex-col items-start pr-3 w-auto"
                                      orientation="vertical"
                                    >
                                      <div className="flex flex-row gap-[3.99px] items-center justify-start my-0 pb-2 w-auto">
                                        <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[211px] w-[96%]">
                                          <Img
                                            className="h-[19px] md:h-auto object-cover w-[21%]"
                                            src="images/img_591474webp.png"
                                            alt="591474webp"
                                          />
                                          <Text
                                            className="mt-0.5 text-blue_gray-100 text-xs"
                                            size="txtRobotoRegular12"
                                          >
                                            Rembaza
                                          </Text>
                                        </div>
                                        <Text
                                          className="text-orange-A700 text-sm w-auto"
                                          size="txtRobotoBold14OrangeA700"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[3.99px] items-center justify-start my-0 w-auto">
                                        <div className="flex flex-row gap-[9px] items-start justify-start md:pr-10 sm:pr-5 pr-[197px] w-[96%]">
                                          <Img
                                            className="h-[19px] md:h-auto object-cover w-5"
                                            src="images/img_513444webp.png"
                                            alt="513444webp"
                                          />
                                          <Text
                                            className="mt-0.5 text-blue_gray-100 text-xs"
                                            size="txtRobotoRegular12"
                                          >
                                            Gameinside
                                          </Text>
                                        </div>
                                        <Text
                                          className="text-orange-A700 text-sm w-auto"
                                          size="txtRobotoBold14OrangeA700"
                                        >
                                          0
                                        </Text>
                                      </div>
                                    </List>
                                    <Img
                                      className="h-[50px] w-[63px]"
                                      src="images/img_computer_blue_gray_900_01.svg"
                                      alt="computer"
                                    />
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-0.5 w-1/2 md:w-full">
                                    <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[230px] py-3.5 rounded-md text-blue_gray-100 text-center text-xs">
                                      1.96
                                    </Button>
                                    <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[230px] ml-1 sm:ml-[0] py-3.5 rounded-md text-blue_gray-100 text-center text-xs">
                                      1.74
                                    </Button>
                                    <div className="flex flex-col items-start justify-start ml-0.5 sm:ml-[0] pl-[13.84px] pr-[9.16px] py-4 w-11">
                                      <Text
                                        className="text-blue_gray-100 text-xs w-auto"
                                        size="txtRobotoRegular12"
                                      >
                                        +65
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start rounded w-auto md:w-full">
                              <div className="bg-black-900 flex md:flex-col flex-row gap-2 items-center justify-start p-3 rounded w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_star_blue_900.svg"
                                  alt="star"
                                />
                                <SelectBox
                                  className="md:flex-1 font-bold text-base text-blue_gray-100 text-left w-[97%] md:w-full"
                                  placeholderClassName="text-blue_gray-100"
                                  indicator={
                                    <Img
                                      className="h-3 mr-[0] w-3"
                                      src="images/img_arrowdown.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="group117"
                                  options={teamplayOptionsList}
                                  isSearchable={false}
                                  placeholder="TEAMPLAY"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-1 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-1 flex-col items-start justify-start rounded w-auto md:w-full">
                            <div className="bg-black-900 flex md:flex-col flex-row gap-2 items-center justify-start p-3 rounded w-full">
                              <Button className="bg-orange-600 flex h-6 items-center justify-center p-[3px] rounded-[50%] w-6">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_file_white_a700.svg"
                                  alt="file"
                                />
                              </Button>
                              <SelectBox
                                className="md:flex-1 font-bold text-base text-blue_gray-100 text-left w-[97%] md:w-full"
                                placeholderClassName="text-blue_gray-100"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] w-3"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group119"
                                options={leagueOfLegendsOptionsList}
                                isSearchable={false}
                                placeholder="League of Legends"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start rounded w-auto md:w-full">
                            <div className="bg-black-900 flex md:flex-col flex-row gap-2 items-center justify-start p-3 rounded w-full">
                              <Button className="bg-light_green-400 flex h-6 items-center justify-center p-1 rounded-[50%] w-6">
                                <Img src="images/img_group.svg" alt="group" />
                              </Button>
                              <SelectBox
                                className="md:flex-1 font-bold text-base text-blue_gray-100 text-left w-[97%] md:w-full"
                                placeholderClassName="text-blue_gray-100"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] w-3"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group121"
                                options={kingOfGloryOptionsList}
                                isSearchable={false}
                                placeholder="King of Glory"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start rounded w-auto md:w-full">
                            <div className="bg-black-900 flex md:flex-col flex-row gap-2 items-center justify-start p-3 rounded w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_close_white_a700_24x24.svg"
                                alt="close"
                              />
                              <SelectBox
                                className="md:flex-1 font-bold text-base text-blue_gray-100 text-left w-[97%] md:w-full"
                                placeholderClassName="text-blue_gray-100"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] w-3"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group123"
                                options={eFootballOptionsList}
                                isSearchable={false}
                                placeholder="E-Football"
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start rounded w-auto md:w-full">
                            <div className="bg-black-900 flex md:flex-col flex-row gap-2 items-center justify-start p-3 rounded w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_globe_yellow_900_01.svg"
                                alt="globe"
                              />
                              <SelectBox
                                className="md:flex-1 font-bold text-base text-blue_gray-100 text-left w-[97%] md:w-full"
                                placeholderClassName="text-blue_gray-100"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] w-3"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group125"
                                options={eBasketballOptionsList}
                                isSearchable={false}
                                placeholder="E-Basketball"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-1 w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
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
                                <div className="bg-gray-900_04 flex flex-col items-center justify-center p-14 md:px-10 sm:px-5 w-full">
                                  <Img
                                    className="h-44 mt-[247px] w-44"
                                    src="images/img_svg.svg"
                                    alt="svg"
                                  />
                                  <Text
                                    className="text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900"
                                    size="txtRobotoBold24"
                                  >
                                    No Bets yet
                                  </Text>
                                  <div className="flex flex-col items-start justify-start mb-[267px] mt-1.5 pl-[13.96px] pr-[15.04px] w-auto">
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
                      className="capitalize text-orange-A700 text-sm w-auto"
                      size="txtRobotoRegular14OrangeA700"
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

export default EsportsPage;
