import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import GameCategory from "components/GameCategory";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const buttonOptionsList = [
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
const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const divstylewrapThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
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

const PrematchPage: React.FC = () => {
  const [divstylewrapvalue, setDivstylewrapvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start pb-[9px] w-full">
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
                    <div className="md:h-[1016px] h-[823px] mt-1 relative w-[390px] sm:w-full">
                      <div className="bg-black-900 flex flex-col h-full items-center justify-start m-auto w-auto">
                        <div className="bg-black-900 border-blue_gray-900_01 border-solid border-t flex flex-col items-start justify-start py-[4.5px] w-auto sm:w-full">
                          <div className="flex flex-row gap-[184.33px] items-center justify-start px-3 w-auto">
                            <Text
                              className="capitalize text-blue_gray-100 text-xl w-auto"
                              size="txtRobotoBold20"
                            >
                              Prematch
                            </Text>
                            <SelectBox
                              className="bg-black-900 border border-blue_gray-900_01 border-solid pl-3 pr-[9px] py-3 rounded text-blue_gray-100 text-center text-sm w-[26%] sm:w-full"
                              placeholderClassName="text-blue_gray-100"
                              indicator={
                                <Img
                                  className="h-2.5 mr-[0] w-2.5"
                                  src="images/img_arrowdown.svg"
                                  alt="arrow_down"
                                />
                              }
                              isSearchable={false}
                              placeholder="All"
                              getOptionLabel={(e) =>
                                (
                                  <div className="flex items-center">
                                    <Img
                                      className="h-3.5 mr-[15px] w-3.5"
                                      src="images/img_calendar_gray_600.svg"
                                      alt="calendar"
                                    />
                                    <span>{e.label}</span>
                                  </div>
                                ) as unknown as string
                              }
                              name="button"
                              isMulti={false}
                              options={buttonOptionsList}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
                        <div className="bg-black-900 flex flex-col gap-1 items-start justify-start pb-[232px] pt-2 px-2 w-auto">
                          <div className="bg-gray-900_03 flex flex-col items-start justify-start pb-2 px-2 rounded w-auto sm:w-full">
                            <div className="flex flex-row items-end justify-start p-1 w-full">
                              <Img
                                className="h-6 mb-[11px] mt-2 w-6"
                                src="images/img_star_blue_900.svg"
                                alt="star"
                              />
                              <Text
                                className="ml-2 my-[13px] text-blue_gray-100 text-sm"
                                size="txtRobotoBold14"
                              >
                                Europe
                              </Text>
                              <Img
                                className="h-3 ml-64 my-4 w-3"
                                src="images/img_arrowup.svg"
                                alt="arrowup"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <List
                                className="flex flex-col gap-px items-center w-full"
                                orientation="vertical"
                              >
                                <div className="bg-black-900 border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 rounded w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[68.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoBold12Bluegray100"
                                    >
                                      UEFA European Championship Qualification
                                    </Text>
                                  </div>
                                </div>
                                <div className="border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[117.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      U21 UEFA European Championship
                                    </Text>
                                  </div>
                                </div>
                                <div className="border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[46.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      U21 UEFA European Championship
                                      Qualification
                                    </Text>
                                  </div>
                                </div>
                                <div className="border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[218.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      UEFA Super Cup
                                    </Text>
                                  </div>
                                </div>
                                <div className="border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[119.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      UEFA Champions League. Outright
                                    </Text>
                                  </div>
                                </div>
                                <div className="border-blue_gray-900_01 border-solid border-t flex flex-row gap-1 items-start justify-start my-0 px-4 py-2 w-auto">
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_star.svg"
                                    alt="star"
                                  />
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[67.33px] w-auto">
                                    <Text
                                      className="text-blue_gray-100 text-xs tracking-[0.10px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      U21 UEFA European Championship. Outright
                                    </Text>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
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
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="England"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6 rounded-[50%]"
                                    src="images/img_plus.svg"
                                    alt="plus"
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
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Italy"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_contrast_gray_200_01_24x24.svg"
                                    alt="contrast"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country"
                            isMulti={false}
                            options={countryOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Germany"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_frame_red_a700.svg"
                                    alt="Frame"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country_One"
                            isMulti={false}
                            options={countryOneOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="France"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_contrast_24x24.svg"
                                    alt="contrast"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country_Two"
                            isMulti={false}
                            options={countryTwoOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Brazil"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_google_light_green_700.svg"
                                    alt="google"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country_Three"
                            isMulti={false}
                            options={countryThreeOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Australia"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_download_blue_900.svg"
                                    alt="download"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country_Four"
                            isMulti={false}
                            options={countryFourOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Netherlands"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_contrast_1.svg"
                                    alt="contrast"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="country_Five"
                            isMulti={false}
                            options={countryFiveOptionsList}
                          />
                          <SelectBox
                            className="bg-gray-900_04 font-bold pb-[15px] pl-3 pr-[18px] pt-3 rounded text-blue_gray-100 text-left text-sm w-full"
                            placeholderClassName="text-blue_gray-100"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="Africa"
                            getOptionLabel={(e) =>
                              (
                                <div className="flex items-center">
                                  <Img
                                    className="h-6 mr-2 w-6"
                                    src="images/img_globe_green_800.svg"
                                    alt="globe"
                                  />
                                  <span>{e.label}</span>
                                </div>
                              ) as unknown as string
                            }
                            name="divstylewrap_Three"
                            isMulti={false}
                            options={divstylewrapThreeOptionsList}
                          />
                          <div className="bg-gray-900_04 h-px rounded-[1px] w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <div className="bg-black-900 border-b border-gray-900_03 border-solid flex flex-col items-start justify-start pl-3 pr-1 py-[7.5px] rounded w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="bg-black-900 flex flex-col items-center justify-start pl-[7.9px] pr-[7.91px] py-3 rounded-[16px] w-auto">
                            <Img
                              className="h-8 w-8"
                              src="images/img_trophy.svg"
                              alt="trophy"
                            />
                            <div className="flex flex-col items-start justify-start pl-2 pr-[7.19px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                Top League
                              </Text>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-col items-center justify-start pl-[22.84px] pr-[22.85px] sm:px-5 py-3 rounded-[16px] w-auto">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-8 items-center justify-end p-1.5 w-8"
                              style={{
                                backgroundImage:
                                  "url('images/img_spanv3icon.png')",
                              }}
                            >
                              <Text
                                className="mt-1 text-base text-center text-gray-900_03"
                                size="txtRobotoRegular16Gray90003"
                              >
                                20
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pl-2 pr-[7.31px] pt-2 w-auto">
                              <Text
                                className="text-blue_gray-100 text-center text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                Today
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-900_02 flex flex-col items-center justify-start pl-[17.39px] pr-[17.41px] py-3 rounded-[16px] w-auto">
                            <div className="relative w-[73%]">
                              <Img
                                className="h-8 mt-auto w-8"
                                src="images/img_globe_blue_gray_50_32x32.svg"
                                alt="globe"
                              />
                              <div className="absolute right-[0] top-[0] w-[66%]">
                                <div className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full"></div>
                                <Text
                                  className="m-auto relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  535
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
                              <div className="absolute right-[0] top-[0] w-[52%]">
                                <div className="absolute bg-white-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                                <Text
                                  className="mx-auto relative text-[11px] text-black-900"
                                  size="txtRobotoRegular11Black900"
                                >
                                  50
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
                            className="md:flex-1 sm:flex-col flex-row gap-1 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 w-[65%] md:w-full"
                            orientation="horizontal"
                          >
                            {new Array(7).fill({}).map((props, index) => (
                              <React.Fragment key={`GameCategory${index}`}>
                                <GameCategory
                                  className="bg-black-900 flex flex-col items-center justify-start sm:ml-[0] sm:px-5 px-[21.36px] py-3 rounded-[16px] w-auto"
                                  {...props}
                                />
                              </React.Fragment>
                            ))}
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[-0.01px] items-start justify-start pr-[0.02px] pt-2 w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start px-1 w-[34%] md:w-full">
                        <div className="md:h-[1282px] h-[815px] pb-1 relative w-[363px]">
                          <div className="bg-gray-900_01 flex flex-col h-full items-center justify-start m-auto pb-1 w-auto">
                            <div className="bg-black-900 flex flex-row gap-[160.59px] items-start justify-start pl-1.5 pr-[6.01px] py-2 rounded-tl w-auto">
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
                          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-1 w-auto">
                            <div className="flex flex-col gap-0.5 items-start justify-start rounded w-auto">
                              <div className="bg-gray-900_04 border-b border-blue_gray-900_01 border-solid flex flex-row items-center justify-between p-2 w-full">
                                <Text
                                  className="my-1 text-blue_gray-100 text-xs"
                                  size="txtRobotoBold12Bluegray100"
                                >
                                  Tue 20 Jun 2023
                                </Text>
                                <Img
                                  className="h-3 mr-1.5 w-3"
                                  src="images/img_arrowup.svg"
                                  alt="arrowup_One"
                                />
                              </div>
                              <div className="flex flex-col gap-0.5 items-start justify-start pb-[452px] w-auto">
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="md:h-[111px] h-[113px] pl-1 relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 border-l-4 border-orange-A700 border-solid h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-[99%]">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[215.72px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +637
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-center justify-start md:pr-10 sm:pr-5 pr-[277px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_779webp.png"
                                          alt="779webp"
                                        />
                                        <Text
                                          className="text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Austria
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[273px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_247webp.png"
                                          alt="247webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Sweden
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start pl-0.5 pr-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[111px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          2.02
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[111px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          3.57
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[111px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          3.85
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[111px] h-[113px] relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[219.72px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +607
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[280px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_796webp.png"
                                          alt="796webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Iceland
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[274px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_809webp.png"
                                          alt="809webp"
                                        />
                                        <Text
                                          className="mt-[3px] text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Portugal
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start px-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          10.00
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          5.30
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          1.33
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[111px] h-[113px] relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[219.72px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +648
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[278px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_246webp.png"
                                          alt="246webp"
                                        />
                                        <Text
                                          className="mt-[3px] text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Norway
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[282px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_786webp.png"
                                          alt="786webp"
                                        />
                                        <Text
                                          className="mt-[3px] text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Cyprus
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start px-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          1.11
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          10.00
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          29.00
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[111px] h-[113px] relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[219.72px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +636
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[272px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_814webp.png"
                                          alt="814webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Scotland
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[278px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_793webp.png"
                                          alt="793webp"
                                        />
                                        <Text
                                          className="mt-[3px] text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Georgia
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start px-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          1.54
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          4.10
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          7.10
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[111px] h-[113px] relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[219.73px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +595
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[273px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_805webp.png"
                                          alt="805webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Moldova
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[282px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_2294webp.png"
                                          alt="2294webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Poland
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start px-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          11.00
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          5.00
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          1.35
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-[111px] h-[113px] relative w-[363px]">
                                    <div className="md:h-[111px] h-[113px] m-auto w-full">
                                      <div className="absolute bg-black-900 h-[111px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                        <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                          <div className="flex flex-row gap-[219.73px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                            <Text
                                              className="text-[11px] text-blue_gray-100 w-auto"
                                              size="txtRobotoBold11"
                                            >
                                              18:45
                                            </Text>
                                            <Img
                                              className="h-3 w-3"
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
                                            +573
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col gap-1 inset-x-[0] items-center justify-start mx-auto px-1.5 py-1 w-auto">
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[248px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_790webp.png"
                                          alt="790webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Faroe Islands
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[279px] w-[99%] md:w-full">
                                        <Img
                                          className="h-5 md:h-auto object-cover w-5"
                                          src="images/img_777webp.png"
                                          alt="777webp"
                                        />
                                        <Text
                                          className="mt-0.5 text-blue_gray-100 text-xs"
                                          size="txtRobotoRegular12"
                                        >
                                          Albania
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-1 items-start justify-start px-[2.01px] w-auto">
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          6.50
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          3.61
                                        </Button>
                                        <Button className="border border-gray-800_01 border-solid cursor-pointer min-w-[113px] py-[7px] rounded-md text-blue_gray-100 text-center text-xs">
                                          1.65
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                                <div className="md:h-[111px] h-[53px] pb-[62px] relative w-[363px]">
                                  <div className="absolute flex md:h-[111px] h-[51px] inset-[0] justify-end m-auto w-full">
                                    <div className="bg-black-900 h-[111px] mt-auto mx-auto w-full"></div>
                                    <div className="absolute bottom-[4%] flex flex-row gap-2 inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[279px] w-[96%]">
                                      <Img
                                        className="h-5 md:h-auto object-cover w-5"
                                        src="images/img_789webp.png"
                                        alt="789webp"
                                      />
                                      <Text
                                        className="text-blue_gray-100 text-xs"
                                        size="txtRobotoRegular12"
                                      >
                                        Estonia
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute h-7 md:h-[31px] inset-x-[0] mx-auto top-[0] w-full">
                                    <div className="absolute border-b border-gray-900_03 border-solid flex flex-row h-max inset-[0] items-start justify-center m-auto p-0.5 w-full">
                                      <div className="flex flex-row gap-[219.72px] items-center justify-start ml-1.5 mt-[3px] w-auto">
                                        <Text
                                          className="text-[11px] text-blue_gray-100 w-auto"
                                          size="txtRobotoBold11"
                                        >
                                          18:45
                                        </Text>
                                        <Img
                                          className="h-3 w-3"
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
                                          alt="star_One"
                                        />
                                      </Button>
                                    </div>
                                    <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-1 py-2 right-[2%] w-auto">
                                      <Text
                                        className="text-blue_gray-100 text-xs w-auto"
                                        size="txtRobotoRegular12"
                                      >
                                        +606
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start px-1 w-auto md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <div className="bg-black-900 h-[120px] relative rounded w-full">
                            <Img
                              className="h-[120px] m-auto object-cover rounded w-full"
                              src="images/img_soccerwebp.png"
                              alt="soccerwebp"
                            />
                            <div className="absolute bg-black-900_7f flex flex-col h-full inset-[0] items-center justify-center m-auto py-2.5 rounded w-full">
                              <div className="flex mt-1 pl-[112.66px] pr-[112.69px] md:px-10 sm:px-5 relative w-[735px] md:w-full">
                                <div className="md:h-[93px] h-[95px] my-auto w-[69%] sm:w-full">
                                  <div className="absolute flex flex-col gap-[13px] h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[39%]">
                                    <Img
                                      className="h-16 md:h-auto object-cover w-16"
                                      src="images/img_779webp_64x64.png"
                                      alt="779webp"
                                    />
                                    <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[69px] w-full">
                                      <Text
                                        className="text-base text-center text-white-A700"
                                        size="txtRobotoBold16WhiteA700"
                                      >
                                        Austria
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col items-center justify-start md:px-10 sm:px-5 px-[50px] right-[0] top-[0]">
                                    <Text
                                      className="text-center text-sm text-white-A700"
                                      size="txtRobotoRegular14WhiteA700"
                                    >
                                      UEFA European Championship Qualification
                                    </Text>
                                    <Text
                                      className="mt-[7px] text-base text-center text-white-A700"
                                      size="txtRobotoBold16WhiteA700"
                                    >
                                      Tue 20 Jun
                                    </Text>
                                    <Text
                                      className="mt-[9px] text-center text-sm text-white-A700"
                                      size="txtRobotoRegular14WhiteA700"
                                    >
                                      18:45
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[13px] items-center justify-start ml-[-59.33px] my-auto w-[27%] z-[1]">
                                  <Img
                                    className="h-16 md:h-auto object-cover w-16"
                                    src="images/img_247webp_64x64.png"
                                    alt="247webp"
                                  />
                                  <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[67px] w-full">
                                    <Text
                                      className="text-base text-center text-white-A700"
                                      size="txtRobotoBold16WhiteA700"
                                    >
                                      Sweden
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-900_01 flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start pb-[55px] w-auto">
                              <div className="bg-black-900 flex flex-col items-start justify-start rounded-tl rounded-tr w-auto md:w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end pl-2 rounded-tl rounded-tr w-full">
                                  <div className="bg-gray-900_02 flex flex-col items-start justify-start md:mt-0 my-2.5 px-3 py-2 rounded-lg w-auto">
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_star_yellow_900.svg"
                                      alt="star_Two"
                                    />
                                  </div>
                                  <Button className="bg-yellow-900 cursor-pointer min-w-[39px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-center text-white-A700 text-xs tracking-[0.48px]">
                                    All
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[60px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Match
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[85px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Handicaps
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[59px] md:ml-[0] ml-[3px] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Totals
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[63px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Halves
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[69px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Corners
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[57px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Cards
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[72px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Offsides
                                  </Button>
                                  <Button className="bg-gray-900_02 cursor-pointer min-w-[55px] ml-1 md:ml-[0] md:mt-0 my-2.5 py-2 rounded-lg text-blue_gray-100 text-center text-xs tracking-[0.48px]">
                                    Fouls
                                  </Button>
                                  <div className="ml-1 md:ml-[0] relative w-[12%] md:w-full">
                                    <div className="bg-gray-900_02 flex flex-col items-center justify-end my-auto pl-3 pr-[11.5px] py-2.5 rounded-lg w-auto">
                                      <Text
                                        className="text-blue_gray-100 text-xs tracking-[0.48px] w-auto"
                                        size="txtRobotoRegular12"
                                      >
                                        Players
                                      </Text>
                                    </div>
                                    <Text
                                      className="bg-gray-900_02 justify-center ml-auto my-auto pl-3 py-2 rounded-[7px] text-blue_gray-100 text-xs tracking-[0.48px] w-auto"
                                      size="txtRobotoRegular12"
                                    >
                                      Shots on Target
                                    </Text>
                                    <div className="absolute bg-black-900 flex flex-col h-full inset-y-[0] items-center justify-start my-auto px-2 py-2.5 right-[0] w-auto">
                                      <Button className="bg-gray-900_02 flex h-8 items-center justify-center p-1.5 rounded-lg w-8">
                                        <Img
                                          src="images/img_upload.svg"
                                          alt="upload"
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[532.8px] py-1 w-auto md:w-full">
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
                                            Match Result
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
                                          alt="vector"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Two"
                                      />
                                    </div>
                                    <div className="bg-black-900 flex flex-col items-start justify-start pb-2 pt-1 w-auto md:w-full">
                                      <List
                                        className="bg-black-900 sm:flex-col flex-row gap-1 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start pl-2 pr-[7.98px] pt-1 w-auto"
                                        orientation="horizontal"
                                      >
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[156.82px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Austria
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            2.02
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[166.81px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Draw
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            3.57
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[152.8px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Sweden
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            3.85
                                          </Text>
                                        </div>
                                      </List>
                                    </div>
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[522.8px] py-1 w-auto md:w-full">
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
                                            Double Chance
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
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Three"
                                      />
                                    </div>
                                    <div className="bg-black-900 flex flex-col items-start justify-start pb-2 pt-1 w-auto md:w-full">
                                      <List
                                        className="bg-black-900 sm:flex-col flex-row gap-1 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start pl-2 pr-[7.98px] pt-1 w-auto"
                                        orientation="horizontal"
                                      >
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[179.82px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs"
                                            size="txtRobotoLight12"
                                          >
                                            1X
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.27
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[180.81px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs"
                                            size="txtRobotoLight12"
                                          >
                                            12
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.31
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-row gap-[179.8px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-auto">
                                          <Text
                                            className="text-blue_gray-100 text-xs"
                                            size="txtRobotoLight12"
                                          >
                                            X2
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.81
                                          </Text>
                                        </div>
                                      </List>
                                    </div>
                                    <div className="bg-gray-900_04 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 p-2 w-full">
                                      <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-start pl-1 md:pr-10 sm:pr-5 pr-[543.8px] py-1 w-auto md:w-full">
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
                                            Total Goals
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
                                          alt="vector_Two"
                                        />
                                      </div>
                                      <Img
                                        className="h-3 ml-1.5 md:ml-[0] w-3"
                                        src="images/img_arrowup.svg"
                                        alt="arrowup_Four"
                                      />
                                    </div>
                                    <div className="bg-black-900 flex flex-col items-start justify-start pb-2 pt-1 w-auto md:w-full">
                                      <div className="gap-1 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[258.66px] items-center justify-start pl-[9px] pr-[8.12px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (0.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.052
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (0.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            9.75
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[273.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (1)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.07
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[266.39px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (1)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            8.30
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[264.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (1.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.29
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (1.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            3.45
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[273.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (2)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.45
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[266.39px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (2)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            2.63
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[264.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (2.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.93
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.39px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (2.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.88
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[273.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (3)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            2.57
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[266.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (3)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.47
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[264.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (3.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            3.25
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (3.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.31
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[273.41px] items-center justify-start pl-[9px] pr-[9.37px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (4)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            5.50
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[266.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (4)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.14
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[264.39px] items-center justify-start pl-[9px] pr-[9.39px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (4.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            6.50
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (4.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.11
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[267.66px] items-center justify-start pl-[9px] pr-[8.12px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            11.50
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[260.65px] items-center justify-start pl-[9px] pr-[8.13px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.037
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[258.66px] items-center justify-start pl-[9px] pr-[8.12px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Over (5.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            12.50
                                          </Text>
                                        </div>
                                        <div className="border border-gray-800_01 border-solid flex flex-1 flex-row gap-[256.4px] items-center justify-start pl-[9px] pr-[9.38px] py-[9px] rounded-md w-full">
                                          <Text
                                            className="text-blue_gray-100 text-xs w-auto"
                                            size="txtRobotoLight12"
                                          >
                                            Under (5.5)
                                          </Text>
                                          <Text
                                            className="text-blue_gray-100 text-center text-xs w-auto"
                                            size="txtRobotoRegular12"
                                          >
                                            1.03
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <Line className="bg-gray-900_04 h-[3px] mt-0.5 w-full" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                                    className="h-44 mt-[223px] w-44"
                                    src="images/img_svg.svg"
                                    alt="svg"
                                  />
                                  <Text
                                    className="text-2xl md:text-[22px] text-center sm:text-xl text-yellow-900"
                                    size="txtRobotoBold24"
                                  >
                                    No Bets yet
                                  </Text>
                                  <div className="flex flex-col items-start justify-start mb-[243px] mt-1.5 pl-[13.96px] pr-[15.04px] w-auto">
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
                      className="capitalize text-orange-A700 text-sm w-auto"
                      size="txtRobotoRegular14OrangeA700"
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

export default PrematchPage;
